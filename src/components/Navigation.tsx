import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white py-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png" alt="ONPOINT Logo" className="h-12" />
        </div>
        
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="hover:text-secondary transition-colors">Services</a>
          <a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-gray-700 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a href="#services" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Services</a>
            <a href="#testimonials" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Testimonials</a>
            <a href="#contact" className="hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;