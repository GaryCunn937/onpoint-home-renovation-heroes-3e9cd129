import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  
  const images = [
    '/lovable-uploads/e17b8df5-e717-4e29-a6d9-cbb6d89a77e0.png',
    '/lovable-uploads/81e091bc-5a39-4955-b8f8-124199baa568.png',
    '/lovable-uploads/73f8f2df-cd3b-497d-807b-cbfd57485628.png',
    '/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png',
    '/lovable-uploads/eef4684d-63d7-4e81-bec0-99e947ff6ca7.png',
    '/lovable-uploads/4aa0b4be-4169-4838-88da-60896f23365c.png',
    '/lovable-uploads/1dae90f4-7938-4ca3-a49a-3c913aaadfa1.png'
  ];

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      api.scrollNext();
      
      // Check if we're at the last slide
      const lastSlideIndex = images.length - 1;
      if (api.selectedScrollSnap() === lastSlideIndex) {
        // Reset to first slide after a brief delay
        setTimeout(() => {
          api.scrollTo(0);
        }, 100);
      }
    }, 7000);

    return () => clearInterval(timer);
  }, [api, images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white pt-16">
      <Carousel className="w-full h-full absolute inset-0" setApi={setApi} opts={{ loop: true }}>
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="min-w-0">
              <div 
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-0 bg-black opacity-50" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          Your Trusted Georgia Roofing & Renovation Experts
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-fade-in">
          At ONPOINT Roofing and Renovations, we deliver quality craftsmanship, affordable pricing, and exceptional customer service.
        </p>
        <div className="flex justify-center gap-8 mb-8 flex-wrap animate-fade-in">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Licensed and Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span>Residential/Commercial</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            <span>Satisfaction Guarantee</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;