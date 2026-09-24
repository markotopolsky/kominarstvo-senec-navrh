import { ButtonLink } from "../ButtonLink";
import { PlusIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

// Odpovede podľa § 20 vyhlášky č. 401/2007 (brief.md, sekcia 5).
const questions = [
  {
    question: "Ako často čistiť komín pri spotrebičoch nad 50 kW?",
    answer:
      "Raz za dva mesiace, ak sú do komína pripojené spotrebiče na tuhé alebo kvapalné palivá. Raz za šesť mesiacov, ak sú pripojené spotrebiče na plynné palivá.",
  },
  {
    question: "Ako často kontrolovať komín so spotrebičom na plyn typu C?",
    answer:
      "Komín, na ktorý je pripojený spotrebič na plynné palivo typu C, sa musí počas prevádzky kontrolovať a čistiť najmenej raz za rok.",
  },
  {
    question: "Čo ak komín nebol od posledného čistenia v prevádzke?",
    answer:
      "Až do opätovného uvedenia do prevádzky sa nemusí kontrolovať a čistiť. Pred uvedením spotrebiča do prevádzky sa však musí vykonať jeho kontrola a čistenie.",
  },
  {
    question: "Ako často pri občasne užívanej stavbe?",
    answer:
      "Komín v občasne užívaných stavbách sa musí čistiť a kontrolovať najmenej raz za dva roky.",
  },
  {
    question: "Čo so sadzami a kondenzátom?",
    answer:
      "Sadze a kondenzát nahromadené v zbernej časti komínového prieduchu sa musia vyberať pri každom čistení komína.",
  },
];

export function Faq() {
  return (
    <section
      id="otazky"
      className="flex scroll-mt-20 justify-center bg-page px-gutter py-section"
    >
      <div className="flex w-full max-w-content items-start gap-12">
        <div className="flex flex-1 flex-col items-start gap-4">
          <SectionHeading
            align="start"
            eyebrow="Časté otázky"
            title="Lehoty, ktoré určuje vyhláška"
          >
            Celé znenie § 20 nájdete na stránke o vyhláške č. 401/2007.
          </SectionHeading>
          <ButtonLink href="/vyhlaska-c-401-2007" variant="outline-light">
            Znenie vyhlášky
          </ButtonLink>
        </div>

        <div className="flex flex-2 flex-col">
          {questions.map((item, index) => (
            <details
              key={item.question}
              name="faq"
              open={index === 0}
              className="group border-line-dark py-6 not-first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-center gap-6 [&::-webkit-details-marker]:hidden">
                <span className="flex-1 text-lead text-text">{item.question}</span>
                <PlusIcon className="size-5 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45" />
              </summary>
              <p className="pt-4 text-small text-balance text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
