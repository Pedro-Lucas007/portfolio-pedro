import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import BenefitsBar from "@/components/landing/BenefitsBar";
import Services from "@/components/landing/Services";
import Projects from "@/components/landing/Projects";
import AboutCTA from "@/components/landing/AboutCTA";
import Footer from "@/components/landing/Footer";
import useReveal from "@/hooks/useReveal";

export default function Landing() {
  const ref = useReveal();
  return (
    <div ref={ref} data-testid="landing-root">
      <Header />
      <main>
        <Hero />
        <BenefitsBar />
        <Services />
        <Projects />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
