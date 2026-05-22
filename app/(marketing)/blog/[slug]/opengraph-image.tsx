import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const alt = "Great Marketing AI Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  // Read frontmatter directly to avoid edge runtime fs limitations.
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  let post: { title: string; description: string } | null = null;
  if (fs.existsSync(filePath)) {
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    post = { title: data.title, description: data.description };
  }

  const title = post?.title ?? "Great Marketing AI Blog";
  const description = post?.description ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          background:
            "linear-gradient(135deg, #FAF5EB 0%, #ffffff 50%, #FAF5EB 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          position: "relative",
        }}
      >
        {/* Top accent bar in brand gold */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #C9A961, #B8965A, #C9A961)",
            display: "flex",
          }}
        />

        {/* Soft gold radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-180px",
            left: "50%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201, 169, 97, 0.18) 0%, transparent 70%)",
            transform: "translateX(-50%)",
            display: "flex",
          }}
        />

        {/* Brand badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #C9A961, #B8965A)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              color: "#111827",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            GM
          </div>
          <span
            style={{
              fontSize: "18px",
              color: "#525252",
              fontWeight: 600,
            }}
          >
            Great Marketing AI Blog
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "52px",
            fontWeight: 800,
            color: "#171717",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
            maxWidth: "1000px",
            display: "flex",
          }}
        >
          {title.length > 90 ? `${title.slice(0, 87)}...` : title}
        </div>

        {/* Description */}
        {description && (
          <div
            style={{
              fontSize: "22px",
              color: "#525252",
              lineHeight: 1.5,
              maxWidth: "900px",
              marginTop: "22px",
              display: "flex",
            }}
          >
            {description.length > 140 ? `${description.slice(0, 137)}...` : description}
          </div>
        )}

        {/* Domain footer */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            left: "80px",
            fontSize: "18px",
            color: "#737373",
            display: "flex",
          }}
        >
          greatmarketing.ai/blog
        </div>
      </div>
    ),
    { ...size },
  );
}
