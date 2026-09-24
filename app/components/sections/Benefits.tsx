import Image from "next/image";
import benefitsPhoto from "@/public/images/obyvacka-s-kachlami.jpg";
import { ButtonLink } from "../ButtonLink";
import { CheckCircleIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

const benefits = [
  "Všetci traja sme členmi KKS – Komory kominárov Slovenska.",
  "Ladislav Kálmán je cechmajster bratislavského kraja.",
  "V tíme máme dvoch revíznych technikov komínov.",
  "Čistenie a kontroly vykonávame modernými nástrojmi a prístrojmi.",
  "Odborné prehliadky robíme 20 metrovou komínovou kamerou.",
  "Pri preskúšaní komínov vystavíme doklady ku kolaudácii.",
];

const stats = [
  { value: "3", label: "kominári v tíme" },
  { value: "20 m", label: "komínová kamera" },
];

export function Benefits() {
  return (
    <section
      id="preco-my"
      className="flex scroll-mt-20 items-center justify-center bg-ink px-gutter py-section"
    >
      <div className="flex w-full max-w-content items-start justify-center gap-12">
        <div className="flex w-[520px] flex-col items-start gap-7">
          <SectionHeading
            align="start"
            tone="dark"
            eyebrow="Prečo Kominárstvo Senec"
            title="Traja kominári, členovia Komory kominárov Slovenska"
          />

          <ul className="flex w-full flex-col gap-[18px]">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3.5">
                <CheckCircleIcon className="size-[22px] shrink-0 text-accent-soft" />
                <p className="flex-1 text-body text-mist">{benefit}</p>
              </li>
            ))}
          </ul>

          <ButtonLink href="/kontakt">Kontaktujte nás</ButtonLink>
        </div>

        <div className="relative w-[480px]">
          <div className="relative h-[560px] overflow-hidden rounded-button">
            <Image
              src={benefitsPhoto}
              alt="Útulná obývačka s rozkúrenými kachľami"
              fill
              placeholder="blur"
              sizes="480px"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-button shadow-[inset_0_0_0_1px_var(--color-line-light)]" />
          </div>

          <div className="absolute -bottom-8 -left-8 z-3 flex items-center gap-5 rounded-button bg-page px-6 py-5 shadow-[0_16px_32px_#00000059]">
            {stats.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-5">
                {index > 0 && <div className="h-10 w-px bg-line-dark" />}
                <div className="flex flex-col gap-0.5">
                  <p className="whitespace-nowrap text-h3 text-text">{stat.value}</p>
                  <p className="whitespace-nowrap text-small text-muted">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
