import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

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
          <div className="flex items-center">
            <img
              src="/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png"
              alt="ONPOINT Logo"
              className="h-12"
              loading="lazy"
            />
          </div>

          {!isMobile && (
            <div className={`text-white font-bold italic transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-0'
            }`}>
              What's the point if you're not ONPOINT!
            </div>
          )}

          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-secondary">
              Services
            </a>
            <a href="#testimonials" className="text-white hover:text-secondary">
              Testimonials
            </a>
            <a href="#quote-form" className="text-white hover:text-secondary">
              Contact
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-secondary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary">
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a
                href="#testimonials"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={toggleMenu}
              >
                Testimonials
              </a>
              <a
                href="#quote-form"
                className="block px-3 py-2 text-white hover:text-secondary"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;