import StatCard from "@/components/StatCard";
import BottomCta from "@/components/BottomCta";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Navigation from "@/components/Navigation";
import Pricing from "@/components/Pricing";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Reveal from "@/components/Reveal";
import Services from "@/components/Services";
import { faqs } from "@/lib/faq-data";

const faqPageLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.a,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageLd) }}
      />
      <main id="main-content" className="m-0 w-full min-w-0 p-0">
        <Navigation />
        <Hero />
        <Reveal>
          <section className="stats-strip" aria-label="Kennzahlen">
            <div className="stats-strip__grid">
              {[
                {
                  num: "9+",
                  sub: "Projekte gebaut",
                  tag: "// 001",
                  desc: "Von MVP bis SaaS — jedes Projekt live shipped",
                  fill: 90,
                },
                {
                  num: "1W",
                  sub: "MVP-Lieferzeit",
                  tag: "// 002",
                  desc: "3–5× schneller als klassische Agenturen",
                  fill: 100,
                },
                {
                  num: "100%",
                  sub: "DSGVO-konform",
                  tag: "// 003",
                  desc: "Server in Deutschland, AVV mit allen KI-Diensten",
                  fill: 100,
                },
              ].map((stat, i) => (
                <StatCard key={i} stat={stat} index={i} />
              ))}
            </div>
          </section>
        </Reveal>
        <Reveal delay={0}>
          <Manifesto />
        </Reveal>
        <Reveal delay={0.05}>
          <Services />
        </Reveal>
        <Reveal delay={0.1}>
          <Process />
        </Reveal>
        <Projects />
        <Reveal delay={0.05}>
          <Pricing />
        </Reveal>
        <Reveal delay={0.1}>
          <FAQ />
        </Reveal>
        <Reveal delay={0}>
          <BottomCta />
        </Reveal>
        <Contact />
        <Footer />
      </main>
    </>
  );
}
