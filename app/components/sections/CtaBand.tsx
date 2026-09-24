import Image from "next/image";
import ctaImage from "@/public/images/cta-ohen-v-kachliach.jpg";
import { mainPhone, telHref } from "../../lib/site";
import { ButtonLink } from "../ButtonLink";

export function CtaBand() {
  return (
    <section className="relative flex h-screen flex-col items-center justify-center overflow-clip bg-ink">
      <Image
        src={ctaImage}
        alt=""
        fill
        placeholder="blur"
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-1 bg-linear-to-b from-ink/58 to-ink/74"
      />

      <div className="relative z-2 flex w-full max-w-[720px] flex-col items-center gap-6 px-gutter py-section text-center">
        <h2 className="text-h2 text-balance text-cream">
          Sadze v komíne môžu spôsobiť požiar
        </h2>
        <p className="max-w-[560px] text-lead text-sand">
          Podľa odborníkov stúpa riziko požiaru už keď je na vnútornej stene
          komína trojmilimetrový nános sadzí. Preto je potrebné komíny čistiť,
          aby k tomuto vyhoreniu nedochádzalo.
        </p>
        <div className="flex items-center gap-4">
          <ButtonLink href="/kontakt">Objednať kontrolu komína</ButtonLink>
          <ButtonLink href={telHref(mainPhone)} variant="outline-dark">
            Zavolať {mainPhone}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
