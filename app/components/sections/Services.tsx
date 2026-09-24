import Image, { type StaticImageData } from "next/image";
import { Fragment, type ComponentType, type SVGProps } from "react";
import analyzerPhoto from "@/public/images/sluzba-analyzator.jpg";
import cameraPhoto from "@/public/images/sluzba-kamera.jpg";
import cleaningPhoto from "@/public/images/sluzba-cistenie.jpg";
import testingPhoto from "@/public/images/sluzba-preskusanie.jpg";
import {
  CameraIcon,
  CheckCircleIcon,
  ChimneyIcon,
  DocumentIcon,
  GaugeIcon,
} from "../icons";
import { SectionHeading } from "../SectionHeading";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  points: string[];
  photo: { src: StaticImageData; alt: string };
};

const services: Service[] = [
  {
    icon: ChimneyIcon,
    title: "Ročné kontroly a čistenie",
    description:
      "Vykonávame ročné kontroly a čistenia komínov a dymovodov na tuhé a plynné palivo podľa vyhlášky č. 401/2007.",
    points: ["Komíny a dymovody", "Tuhé aj plynné palivo", "Lehoty podľa vyhlášky č. 401/2007"],
    photo: { src: cleaningPhoto, alt: "Tehlový komín na streche z pálenej krytiny" },
  },
  {
    icon: CameraIcon,
    title: "Prehliadka komínovou kamerou",
    description:
      "Vykonávame odborné prehliadky 20 metrovou komínovou kamerou.",
    points: ["Komínová kamera 20 m", "Odborná prehliadka komína"],
    photo: { src: cameraPhoto, alt: "Rebrík opretý o strechu vedie ku komínu" },
  },
  {
    icon: GaugeIcon,
    title: "Kontrola únikov spalín",
    description: "Úniky spalín kontrolujeme analyzátorom spalín.",
    points: ["Analyzátor spalín", "Kontrola únikov"],
    photo: { src: analyzerPhoto, alt: "Kotolňa s potrubím, ventilmi a manometrami" },
  },
  {
    icon: DocumentIcon,
    title: "Preskúšanie komínov",
    description:
      "Preskúšanie komínov a dymovodov – doklady potrebné ku kolaudácii.",
    points: ["Komíny a dymovody", "Doklady ku kolaudácii"],
    photo: { src: testingPhoto, alt: "Pokrývači kladú strešnú krytinu na novostavbe" },
  },
];

export function Services() {
  return (
    <section
      id="sluzby"
      className="flex scroll-mt-20 flex-col items-center gap-14 bg-cream px-gutter py-section"
    >
      <SectionHeading eyebrow="Služby" title="Kontroly a čistenie komínov a dymovodov">
        Čistenie a kontroly vykonávame modernými nástrojmi a prístrojmi.
      </SectionHeading>

      <div className="flex w-full max-w-content flex-col items-center gap-12">
        {services.map((service, index) => (
          <Fragment key={service.title}>
            {index > 0 && <div className="h-px w-full bg-line-dark" />}
            <ServiceRow service={service} reversed={index % 2 === 1} />
          </Fragment>
        ))}
      </div>
    </section>
  );
}

function ServiceRow({ service, reversed }: { service: Service; reversed: boolean }) {
  const { icon: ServiceIcon } = service;

  return (
    <article className="grid w-full grid-cols-2 gap-10">
      <div
        className={`flex h-full flex-col justify-between gap-6 ${reversed ? "order-1" : ""}`}
      >
        <div className="flex flex-col gap-3">
          <ServiceIcon className="size-8 text-accent" />
          <h3 className="text-h3 text-text">{service.title}</h3>
          <p className="max-w-[800px] text-body text-balance text-muted">
            {service.description}
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {service.points.map((point) => (
            <li key={point} className="flex items-center gap-2.5">
              <CheckCircleIcon className="size-5 shrink-0 text-accent" />
              <span className="text-body text-text">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-[350px] w-full overflow-hidden rounded-button">
        <Image
          src={service.photo.src}
          alt={service.photo.alt}
          fill
          placeholder="blur"
          sizes="(min-width: 1280px) 580px, 50vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}
