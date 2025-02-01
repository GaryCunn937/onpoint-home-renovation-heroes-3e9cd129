import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InitialLogoAnimation from "@/components/InitialLogoAnimation";
import FloatingCTA from "@/components/FloatingCTA";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

// Lazy load larger components
const Services = lazy(() => import("@/components/Services"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const LeadForm = lazy(() => import("@/components/LeadForm"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <InitialLogoAnimation />
      <Navigation />
      <Hero />
      <Suspense fallback={<LoadingSpinner />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Testimonials />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <LeadForm />
      </Suspense>
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;