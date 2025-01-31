import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import InitialLogoAnimation from "@/components/InitialLogoAnimation";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <InitialLogoAnimation />
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <LeadForm />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;