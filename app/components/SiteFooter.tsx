import type { ReactNode } from "react";
import Link from "next/link";
import { company, navLinks, people, telHref } from "../lib/site";
import { Logo } from "./Logo";

const serviceLinks = [
  "Kontroly a čistenie",
  "Komínová kamera",
  "Analyzátor spalín",
  "Doklady ku kolaudácii",
];

const linkClass = "whitespace-nowrap text-small text-muted transition-colors hover:text-text";

export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-12 bg-page px-gutter pt-[72px] pb-8">
      <div className="flex w-full max-w-content items-start justify-between">
        <div className="flex max-w-[320px] flex-1 flex-col items-start gap-4">
          <Logo tone="dark" />
          <p className="text-small text-muted">
            Ročné kontroly a čistenia komínov a dymovodov na tuhé a plynné
            palivo. Všetci traja sme členmi KKS – Komory kominárov Slovenska.
          </p>
        </div>

        <FooterColumn title="Služby">
          {serviceLinks.map((label) => (
            <Link key={label} href="/#sluzby" className={linkClass}>
              {label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Stránky">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Kontakt">
          {people.slice(0, 2).map((person) => (
            <a key={person.phone} href={telHref(person.phone)} className={linkClass}>
              {person.phone}
            </a>
          ))}
          <a href={`mailto:${company.email}`} className={linkClass}>
            {company.email}
          </a>
          <p className={linkClass}>
            {company.street}, {company.city}
          </p>
        </FooterColumn>
      </div>

      <div className="flex w-full max-w-content items-center justify-between border-t border-line-dark pt-6">
        <p className="text-small text-muted">
          Copyright © {new Date().getFullYear()}, {company.name}
        </p>
        <p className="text-small text-muted">IČO: {company.ico}</p>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex flex-col items-start gap-3.5">
      <p className="text-small text-ink-soft">{title}</p>
      {children}
    </div>
  );
}
