interface HeroContentProps {
  show: boolean;
}

const HeroContent = ({ show }: HeroContentProps) => {
  if (!show) return null;

  return (
    <div className="container mx-auto px-4 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
        Your Trusted Georgia Roofing & Renovation Experts
      </h1>
      <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
        At ONPOINT Roofing and Renovations, we deliver quality craftsmanship, affordable pricing, and exceptional customer service.
      </p>
      <div className="flex justify-center gap-8 mb-8 flex-wrap animate-fade-in">
        <FeatureItem icon={<CheckmarkIcon />} text="Licensed and Insured" />
        <FeatureItem icon={<BuildingIcon />} text="Residential/Commercial" />
        <FeatureItem icon={<ShieldIcon />} text="Satisfaction Guarantee" />
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <div className="flex items-center gap-2">
    {icon}
    <span>{text}</span>
  </div>
);

const CheckmarkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const BuildingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export default HeroContent;