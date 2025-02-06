import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import CarouselImages from "./hero/CarouselImages";
import LogoTransition from "./hero/LogoTransition";
import HeroContent from "./hero/HeroContent";

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [showTransition, setShowTransition] = useState(false);
  
  const images = [
    '/lovable-uploads/e17b8df5-e717-4e29-a6d9-cbb6d89a77e0.png',
    '/lovable-uploads/81e091bc-5a39-4955-b8f8-124199baa568.png',
    '/lovable-uploads/73f8f2df-cd3b-497d-807b-cbfd57485628.png',
    '/lovable-uploads/eef4684d-63d7-4e81-bec0-99e947ff6ca7.png',
    '/lovable-uploads/4aa0b4be-4169-4838-88da-60896f23365c.png',
    '/lovable-uploads/1dae90f4-7938-4ca3-a49a-3c913aaadfa1.png'
  ];

  useEffect(() => {
    if (!api) return;

    const timer = setInterval(() => {
      const currentIndex = api.selectedScrollSnap();
      const lastSlideIndex = images.length - 1;
      
      if (currentIndex === lastSlideIndex) {
        setShowTransition(true);
        setTimeout(() => {
          api.scrollTo(0);
          setTimeout(() => {
            setShowTransition(false);
          }, 500);
        }, 100);
      } else {
        api.scrollNext();
      }
    }, 7000);

    return () => clearInterval(timer);
  }, [api, images.length]);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white pt-16">
      <Carousel className="w-full h-full absolute inset-0" setApi={setApi} opts={{ loop: true }}>
        <CarouselImages images={images} />
      </Carousel>
      
      <LogoTransition show={showTransition} />
      
      <div className="absolute inset-0 bg-black opacity-50" />
      
      <HeroContent show={!showTransition} />
    </div>
  );
};

export default Hero;