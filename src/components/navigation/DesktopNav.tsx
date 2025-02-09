
const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <a href="#services" className="text-white hover:text-secondary">
        Services
      </a>
      <a href="#testimonials" className="text-white hover:text-secondary">
        Testimonials
      </a>
      <a href="#faq" className="text-white hover:text-secondary">
        FAQ
      </a>
      <a href="#quote-form" className="text-white hover:text-secondary">
        Contact
      </a>
      <a 
        href="https://drive.google.com/drive/folders/1YDgQ2TloHa_On2_h0TvTpFo413gklcdM?usp=sharing" 
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-white font-semibold transition-colors"
      >
        Download Resources
      </a>
    </div>
  );
};

export default DesktopNav;
