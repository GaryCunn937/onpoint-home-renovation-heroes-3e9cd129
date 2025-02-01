const DesktopNav = () => {
  return (
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
  );
};

export default DesktopNav;