
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png" 
              alt="ONPOINT Logo" 
              className="h-12 mb-4 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <p className="text-gray-300">What's the point if you're not ONPOINT!</p>
            <a 
              href="https://drive.google.com/drive/folders/1YDgQ2TloHa_On2_h0TvTpFo413gklcdM?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-secondary hover:text-white font-semibold transition-colors"
            >
              Download Resources
            </a>
          </div>
          <div className="animate-fade-in [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a href="tel:+16783259304" className="flex items-center hover:text-secondary transition-colors">
                <Phone className="w-5 h-5 mr-2" />
                Jacob Clayton: (678) 325-9304
              </a>
              <div className="space-y-1">
                <a href="tel:+17703177174" className="flex items-center hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 mr-2" />
                  David Ridgeway: (770) 317-7174
                </a>
                <a 
                  href="http://www.onpointroofing.net" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="ml-7 text-sm hover:text-secondary transition-colors"
                >
                  www.onpointroofing.net
                </a>
              </div>
            </div>
          </div>
          <div className="animate-fade-in [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-secondary transition-colors">Services</a></li>
              <li><a href="#testimonials" className="hover:text-secondary transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="hover:text-secondary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="animate-fade-in [animation-delay:600ms]">
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <div className="flex justify-center items-center gap-4 -ml-4">
              <img
                src="/lovable-uploads/bdc415d5-dca6-4977-af42-e4d53c905925.png"
                alt="BBB Accredited Business"
                className="h-16 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <img
                src="/lovable-uploads/e71ed4ee-36f4-4287-a71e-3eeeae09dc1f.png"
                alt="GAF Certified Residential Roofing Contractor"
                className="h-16 hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300 animate-fade-in [animation-delay:800ms]">
          <p>© 2025 ONPOINT Roofing and Renovations. All Rights Reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            {" | "}
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
