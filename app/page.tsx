import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import PricingSection from "@/components/PricingSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import DemoModal from "@/components/DemoModal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <TrustSection />
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
      <DemoModal />
    </>
  );
}
