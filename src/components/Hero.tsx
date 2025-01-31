const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-gray-800 text-white pt-16">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your Trusted Partner for Durable Roofs and Stunning Renovations
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          At ONPOINT Roofing and Renovations, we deliver quality craftsmanship, affordable pricing, and exceptional customer service.
        </p>
        <p className="text-2xl font-bold italic mb-8 animate-fade-in">
          What's the point if you're not ONPOINT!
        </p>
        <a
          href="#contact"
          className="bg-secondary hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block animate-fade-in"
        >
          Get Your Free Quote
        </a>
      </div>
    </div>
  );
};

export default Hero;