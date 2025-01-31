const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <p>© 2025 ONPOINT Roofing and Renovations. All Rights Reserved.</p>
        <p className="space-x-2">
          Contact us at Jacob Clayton{" "}
          <a href="tel:+16783259304" className="text-secondary hover:underline">
            (678) 325-9304
          </a>
          {" "}or David Ridgeway{" "}
          <a href="tel:+17703177174" className="text-secondary hover:underline">
            (770) 317-7174
          </a>
          .
        </p>
        <p className="space-x-4">
          <a href="#" className="text-secondary hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="#" className="text-secondary hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;