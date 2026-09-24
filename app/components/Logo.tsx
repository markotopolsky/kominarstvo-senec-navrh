import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  /** "light" = white logo for dark backgrounds, "dark" = for light backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

export function Logo({ tone = "light", className = "h-11 w-auto" }: LogoProps) {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src={tone === "light" ? "/logo.svg" : "/logo-dark.svg"}
        alt="Kominárstvo Senec"
        width={2060}
        height={575}
        unoptimized
        className={className}
      />
    </Link>
  );
}
