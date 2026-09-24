import { BadgeIcon, DocumentIcon, FlameIcon, ShieldIcon } from "../icons";

const items = [
  { icon: BadgeIcon, label: "Členovia KKS" },
  { icon: ShieldIcon, label: "Cechmajster bratislavského kraja" },
  { icon: FlameIcon, label: "Tuhé aj plynné palivo" },
  { icon: DocumentIcon, label: "Podľa vyhlášky č. 401/2007" },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Prečo Kominárstvo Senec"
      className="flex items-center justify-evenly bg-sand px-gutter py-7"
    >
      {items.map(({ icon: ItemIcon, label }) => (
        <div key={label} className="flex items-center gap-2.5">
          <ItemIcon className="size-5 shrink-0 text-accent" />
          <p className="whitespace-nowrap text-small text-text">{label}</p>
        </div>
      ))}
    </section>
  );
}
