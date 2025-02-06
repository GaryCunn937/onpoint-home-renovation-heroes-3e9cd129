interface LogoTransitionProps {
  show: boolean;
}

const LogoTransition = ({ show }: LogoTransitionProps) => {
  if (!show) return null;

  return (
    <div 
      className="absolute inset-0 bg-white transition-opacity duration-500 flex items-center justify-center z-20"
      style={{ opacity: '0.8' }}
    >
      <img
        src="/lovable-uploads/83f8781b-0a31-4ed6-b2e5-85817d8df5f6.png"
        alt="ONPOINT Logo"
        className="h-48 transition-opacity duration-500"
      />
    </div>
  );
};

export default LogoTransition;