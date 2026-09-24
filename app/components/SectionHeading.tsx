import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  align?: "center" | "start";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isDark = tone === "dark";

  return (
    <div
      className={`flex w-full flex-col gap-4 ${isCenter ? "max-w-heading items-center text-center" : "items-start"}`}
    >
      <p
        className={`text-eyebrow uppercase ${isDark ? "text-accent-soft" : "text-accent"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-h2 text-balance ${isDark ? "text-cream" : "text-text"}`}
      >
        {title}
      </h2>
      {children && (
        <p className={`text-body ${isDark ? "text-mist" : "text-muted"}`}>
          {children}
        </p>
      )}
    </div>
  );
}
