import Image from "next/image";
import { AUTHOR } from "@/lib/blog";

const AUTHOR_AVATARS: Record<string, string> = {
  [AUTHOR.name]: AUTHOR.photo,
};

export function AuthorCard({ name, role }: { name: string; role?: string }) {
  const avatar = AUTHOR_AVATARS[name];
  return (
    <div className="flex items-center gap-3">
      {avatar ? (
        <Image
          src={avatar}
          alt={name}
          width={36}
          height={36}
          className="h-9 w-9 rounded-full object-cover"
        />
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gold text-sm font-semibold text-neutral-900">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
      )}
      <div>
        <p className="text-sm font-bold text-neutral-900">{name}</p>
        {role && <p className="text-xs text-neutral-500">{role}</p>}
      </div>
    </div>
  );
}
