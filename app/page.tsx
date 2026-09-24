import { Hero } from "./components/Hero";
import { Benefits } from "./components/sections/Benefits";
import { CtaBand } from "./components/sections/CtaBand";
import { Faq } from "./components/sections/Faq";
import { Intervals } from "./components/sections/Intervals";
import { Services } from "./components/sections/Services";
import { Stats } from "./components/sections/Stats";
import { Team } from "./components/sections/Team";
import { TrustStrip } from "./components/sections/TrustStrip";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <Hero />
        <TrustStrip />
        <Services />
        <Benefits />
        <Intervals />
        <Stats />
        <Team />
        <Faq />
        <CtaBand />
      </main>
      <SiteFooter />
    </>
  );
}
