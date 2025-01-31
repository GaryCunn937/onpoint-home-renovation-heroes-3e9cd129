import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";
import InitialLogoAnimation from "@/components/InitialLogoAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <InitialLogoAnimation />
      <Navigation />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
      <LeadForm />
      <Footer />
    </div>
  );
};

export default Index;