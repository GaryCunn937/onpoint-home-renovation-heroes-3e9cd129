import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Logo from "./navigation/Logo";
import DesktopNav from "./navigation/DesktopNav";
import MobileMenu from "./navigation/MobileMenu";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Logo />

          {!isMobile && (
            <div className={`text-white font-bold italic transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}>
              What's the point if you're not ONPOINT!
            </div>
          )}

          <DesktopNav />
          <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;