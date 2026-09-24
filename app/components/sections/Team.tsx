import type { ReactNode } from "react";
import { company, people, telHref } from "../../lib/site";
import { MailIcon, PhoneIcon } from "../icons";
import { SectionHeading } from "../SectionHeading";

export function Team() {
  return (
    <section
      id="tim"
      className="flex scroll-mt-20 flex-col items-center gap-14 bg-page px-gutter py-section"
    >
      <SectionHeading eyebrow="Tím" title="Vaši kominári">
        V prípade záujmu nás neváhajte kontaktovať.
      </SectionHeading>

      <div className="grid w-full max-w-content grid-cols-2 gap-6">
        {people.map((person) => (
          <Card
            key={person.name}
            contact={
              <a
                href={telHref(person.phone)}
                className="flex items-center gap-2 text-body text-text hover:text-accent"
              >
                <PhoneIcon className="size-4 text-accent" />
                {person.phone}
              </a>
            }
            text={person.role}
            initials={person.initials}
            name={person.name}
            caption="Člen KKS"
          />
        ))}

        <Card
          contact={
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-2 text-body text-text hover:text-accent"
            >
              <MailIcon className="size-4 text-accent" />
              {company.email}
            </a>
          }
          text={`${company.street}, ${company.city}`}
          initials="KS"
          name={company.name}
          caption={`IČO: ${company.ico}`}
        />
      </div>
    </section>
  );
}

type CardProps = {
  contact: ReactNode;
  text: string;
  initials: string;
  name: string;
  caption: string;
};

function Card({ contact, text, initials, name, caption }: CardProps) {
  return (
    <article className="flex min-h-[250px] w-full flex-col items-start gap-5 rounded-button p-8 shadow-[inset_0_0_0_1px_var(--color-accent)]">
      {contact}
      <p className="flex-1 self-stretch text-body text-text">{text}</p>
      <div className="flex items-center gap-3 pt-2">
        <span className="flex size-12 items-center justify-center rounded-full bg-accent text-small text-white">
          {initials}
        </span>
        <div className="flex flex-col gap-0.5">
          <p className="whitespace-nowrap text-small text-text">{name}</p>
          <p className="whitespace-nowrap text-small text-muted">{caption}</p>
        </div>
      </div>
    </article>
  );
}
