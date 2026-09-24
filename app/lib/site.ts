// Shared site data. Source of truth: brief.md.

export const navLinks = [
  { href: "/", label: "Úvod" },
  { href: "/vyhlaska-c-401-2007", label: "Vyhláška č. 401/2007" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/gdpr", label: "GDPR" },
];

export const people = [
  {
    name: "Ladislav Kálmán",
    initials: "LK",
    role: "Cechmajster bratislavského kraja, revízny technik komínov",
    phone: "0905 643 724",
  },
  {
    name: "Peter Barányi",
    initials: "PB",
    role: "Revízny technik komínov",
    phone: "0903 822 100",
  },
  {
    name: "Táňa Kálmánová",
    initials: "TK",
    role: "Kominárka",
    phone: "0905 961 527",
  },
];

export const company = {
  name: "Kominárstvo Senec s.r.o.",
  street: "Kapitána Jána Nálepku 851/3",
  city: "925 22 Veľké Úľany",
  ico: "52 366 022",
  email: "kominarstvosenec@gmail.com",
};

export const mainPhone = people[0].phone;

export function telHref(phone: string) {
  return `tel:+421${phone.replace(/\s/g, "").replace(/^0/, "")}`;
}
