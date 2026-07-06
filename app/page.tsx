import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Values from "@/components/Values";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import CaseStudy from "@/components/CaseStudy";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal>
          <Values />
        </Reveal>
        <Reveal>
          <Stats />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <Process />
        </Reveal>
        <Reveal>
          <TechStack />
        </Reveal>
        <Reveal>
          <CaseStudy />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
