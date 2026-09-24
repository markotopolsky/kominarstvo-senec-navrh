import Link from "next/link";
import type { ComponentProps } from "react";
import { ArrowRightIcon } from "./icons";

type Variant = "primary" | "outline-dark" | "outline-light";

// Framer draws outlines as an overlay, so outlined buttons keep their size.
const variants: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-strong",
  "outline-dark":
    "bg-transparent text-white shadow-[inset_0_0_0_1.5px_var(--color-outline-on-dark)] hover:bg-white/8",
  "outline-light":
    "bg-transparent text-text shadow-[inset_0_0_0_1.5px_var(--color-outline-on-light)] hover:bg-text/5",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  icon?: boolean;
};

export function ButtonLink({
  variant = "primary",
  icon = true,
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-button px-[18px] py-3 text-button transition-colors duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRightIcon className="size-4" />}
    </Link>
  );
}
