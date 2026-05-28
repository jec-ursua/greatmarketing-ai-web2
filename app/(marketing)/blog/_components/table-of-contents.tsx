"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronRight } from "lucide-react";
import type { TocHeading } from "@/lib/blog";

type TocGroup = {
  parent: TocHeading;
  children: TocHeading[];
};

/**
 * Group flat headings into a tree where each H2 owns the H3+ headings
 * that follow it until the next H2. Headings shallower than H2 or that
 * appear before the first H2 are dropped (defensive — shouldn't happen
 * with our MDX style guide).
 */
function groupHeadings(headings: TocHeading[]): TocGroup[] {
  const groups: TocGroup[] = [];
  for (const h of headings) {
    if (h.level === 2) {
      groups.push({ parent: h, children: [] });
    } else if (h.level > 2 && groups.length > 0) {
      groups[groups.length - 1].children.push(h);
    }
  }
  return groups;
}

export function TableOfContents({ headings }: { headings: TocHeading[] }) {
  const [activeId, setActiveId] = useState<string>("");
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const groups = useMemo(() => groupHeadings(headings), [headings]);

  // Track which heading is currently in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -75% 0px", threshold: 0 }
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  // Auto-expand the parent of the active child heading so the reader
  // always sees where they are in the document.
  useEffect(() => {
    if (!activeId) return;
    const parentGroup = groups.find((g) =>
      g.children.some((c) => c.id === activeId)
    );
    if (parentGroup) {
      setExpanded((prev) => {
        if (prev.has(parentGroup.parent.id)) return prev;
        const next = new Set(prev);
        next.add(parentGroup.parent.id);
        return next;
      });
    }
  }, [activeId, groups]);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  if (groups.length === 0) return null;

  return (
    <nav>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
        On this page
      </p>
      <ul className="space-y-1 border-l border-neutral-200">
        {groups.map(({ parent, children }) => {
          const isExpanded = expanded.has(parent.id);
          const hasChildren = children.length > 0;
          const parentIsActive = activeId === parent.id;

          return (
            <li key={parent.id}>
              <div className="flex items-stretch">
                <a
                  href={`#${parent.id}`}
                  className={`block flex-1 border-l-2 py-0.5 pl-3 text-sm transition ${
                    parentIsActive
                      ? "border-brand-gold text-brand-gold-dark"
                      : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                  }`}
                >
                  {parent.text}
                </a>
                {hasChildren && (
                  <button
                    type="button"
                    onClick={() => toggle(parent.id)}
                    aria-label={
                      isExpanded
                        ? `Collapse ${parent.text} subsections`
                        : `Expand ${parent.text} subsections`
                    }
                    aria-expanded={isExpanded}
                    className="flex h-6 w-6 shrink-0 items-center justify-center self-center rounded text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-700"
                  >
                    <ChevronRight
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                    />
                  </button>
                )}
              </div>

              {hasChildren && isExpanded && (
                <ul className="mt-0.5 space-y-0.5">
                  {children.map((c) => {
                    const childActive = activeId === c.id;
                    // Indent by depth: H3 = pl-7, H4 = pl-10, H5+ = pl-12
                    const indentClass =
                      c.level === 3
                        ? "pl-7"
                        : c.level === 4
                        ? "pl-10"
                        : "pl-12";
                    return (
                      <li key={c.id}>
                        <a
                          href={`#${c.id}`}
                          className={`block border-l-2 py-0.5 ${indentClass} text-sm transition ${
                            childActive
                              ? "border-brand-gold text-brand-gold-dark"
                              : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                          }`}
                        >
                          {c.text}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
