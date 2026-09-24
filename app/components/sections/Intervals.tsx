import { PhotoPlaceholder } from "../PhotoPlaceholder";
import { SectionHeading } from "../SectionHeading";

// § 20 ods. 2 písm. a) vyhlášky č. 401/2007, spotrebiče do 50 kW.
const intervals = [
  {
    title: "Tuhé a kvapalné palivá",
    text: "Raz za štyri mesiace, ak sú do komína pripojené spotrebiče na tuhé palivá alebo spotrebiče na kvapalné palivá.",
    photo: "kotol na tuhé palivo",
  },
  {
    title: "Plynné palivá, komín bez vložky",
    text: "Raz za šesť mesiacov, ak sú do komína pripojené spotrebiče na plynné palivá a ide o komín bez vložky.",
    photo: "komín bez vložky",
  },
  {
    title: "Plynné palivá, komín s vložkou",
    text: "Raz za dvanásť mesiacov, ak sú do komína pripojené spotrebiče na plynné palivá a ide o komín s vložkou.",
    photo: "komínová vložka",
  },
];

export function Intervals() {
  return (
    <section
      id="lehoty"
      className="flex scroll-mt-20 flex-col items-center gap-14 bg-page px-gutter py-section"
    >
      <SectionHeading
        eyebrow="Vyhláška č. 401/2007"
        title="Ako často treba komín čistiť a kontrolovať"
      >
        Lehoty podľa § 20 pre spotrebiče s celkovým tepelným výkonom do 50 kW.
      </SectionHeading>

      <ol className="flex w-full max-w-content flex-col gap-12">
        {intervals.map((item, index) => (
          <li key={item.title} className="flex w-full items-start gap-4">
            <p className="w-[51px] shrink-0 text-h3 text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="flex-1 text-h3 text-text">{item.title}</h3>
            <PhotoPlaceholder label={item.photo} className="h-[150px] flex-1" />
            <p className="flex-1 text-small text-muted">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
