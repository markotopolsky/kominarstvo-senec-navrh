import Image from "next/image";
import heroImage from "@/public/images/hero-kominar-pri-praci.jpg";
import { mainPhone, people, telHref } from "../lib/site";
import { ButtonLink } from "./ButtonLink";
import { BadgeIcon, CameraIcon, DocumentIcon } from "./icons";

const trustItems = [
  { icon: BadgeIcon, label: "Členovia Komory kominárov Slovenska" },
  { icon: CameraIcon, label: "Komínová kamera 20 m" },
  { icon: DocumentIcon, label: "Doklady ku kolaudácii" },
];

export function Hero() {
  return (
    <section className="relative flex h-screen flex-col items-start justify-center overflow-clip bg-ink">
      <Image
        src={heroImage}
        alt="Kominár pri čistení komína na streche"
        fill
        preload
        placeholder="blur"
        sizes="100vw"
        className="z-0 object-cover object-top"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-linear-to-b from-ink/20 via-ink/65 via-65% to-ink/86"
      />

      <div className="relative z-2 flex w-full max-w-hero animate-appear flex-col items-start gap-6 px-gutter pt-[180px] pb-[120px]">
        <p className="text-eyebrow uppercase text-cream">
          Kontroly a čistenie komínov a dymovodov
        </p>

        <h1 className="text-display text-cream">Kominárstvo Senec</h1>

        <p className="max-w-[620px] text-lead text-sand">
          Vykonávame ročné kontroly a čistenia komínov a dymovodov na tuhé a
          plynné palivo podľa vyhlášky č. 401/2007.
        </p>

        <div className="flex items-start gap-4 pt-6">
          <ButtonLink href="/kontakt">Objednať kontrolu komína</ButtonLink>
          <div className="flex flex-col items-center gap-1">
            <ButtonLink href={telHref(mainPhone)} variant="outline-dark">
              Zavolať {mainPhone}
            </ButtonLink>
            <p className="text-small text-cream">
              {people[0].name}, cechmajster
            </p>
          </div>
        </div>

        <ul className="flex items-center gap-7 pt-3">
          {trustItems.map(({ icon: ItemIcon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <ItemIcon className="size-4 shrink-0 text-accent-soft" />
              <span className="whitespace-nowrap text-small text-mist">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
