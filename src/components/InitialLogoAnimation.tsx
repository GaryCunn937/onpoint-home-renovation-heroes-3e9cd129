import { useEffect, useState } from "react";

const InitialLogoAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-[3000ms] animate-fade-out">
      <img
        src="/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png"
        alt="ONPOINT Logo"
        className="w-1/2 max-w-lg animate-scale-in"
      />
    </div>
  );
};

export default InitialLogoAnimation;