const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <img src="/lovable-uploads/d0638335-fe28-42a2-9909-f47807b96bb4.png" alt="ONPOINT Logo" className="w-32" />
            <p className="text-sm">What's the point if you're not ONPOINT!</p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p>
                <a href="tel:+16783259304" className="hover:text-secondary">
                  Jacob Clayton: (678) 325-9304
                </a>
              </p>
              <p>
                <a href="tel:+17703177174" className="hover:text-secondary">
                  David Ridgeway: (770) 317-7174
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-secondary">Services</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-secondary">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-secondary">Contact</a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Certifications</h3>
            <div className="flex space-x-4">
              <img src="/lovable-uploads/ce06691d-49dd-4dba-a2cc-cb9508faa7c7.png" alt="BBB Certification" className="w-16 h-16" />
              <img src="/lovable-uploads/bdc415d5-dca6-4977-af42-e4d53c905925.png" alt="GAF Certification" className="w-16 h-16" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p className="mb-2">© 2025 ONPOINT Roofing and Renovations. All Rights Reserved.</p>
          <p>
            <a href="#privacy" className="hover:text-secondary">Privacy Policy</a>
            {" | "}
            <a href="#terms" className="hover:text-secondary">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;