"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { mainPhone, navLinks, people, telHref } from "../lib/site";
import { ButtonLink } from "./ButtonLink";
import { PhoneIcon } from "./icons";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-10 transition-colors duration-300 ${scrolled ? "bg-ink/90 backdrop-blur-md" : "bg-transparent"}`}
    >
      <nav className="flex items-center gap-12 px-gutter py-[18px]">
        <div className="flex flex-1 items-center justify-between">
          <Logo />
        </div>

        <ul className="flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="whitespace-nowrap text-small text-cream underline-offset-4 decoration-page hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end gap-0.5">
            <a
              href={telHref(mainPhone)}
              className="flex items-center gap-2.5 whitespace-nowrap text-small text-cream underline-offset-4 decoration-page hover:underline"
            >
              {mainPhone}
              <PhoneIcon className="size-4 text-accent-soft" />
            </a>
            <p className="whitespace-nowrap text-xs text-mist">
              {people[0].name}
            </p>
          </div>
          <ButtonLink href="/kontakt" variant="outline-dark">
            Kontaktujte nás
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
