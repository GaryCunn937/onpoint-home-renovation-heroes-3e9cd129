import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ isOpen, toggleMenu }: MobileMenuProps) => {
  return (
    <>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white hover:text-secondary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
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
    </>
  );
};

export default MobileMenu;