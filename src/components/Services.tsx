import { Shield, Wrench, Home, Cloud, Paintbrush, Gift } from "lucide-react";

const services = [
  {
    title: "Roof Installation",
    description: "From shingles to metal roofs, we install durable, weather-resistant solutions tailored to your home.",
    icon: Home,
  },
  {
    title: "Roof Repair",
    description: "Fix leaks, damaged shingles, and structural issues quickly and affordably.",
    icon: Wrench,
  },
  {
    title: "Roof Replacement",
    description: "Upgrade your old roof with modern, energy-efficient materials.",
    icon: Shield,
  },
  {
    title: "Storm Damage Repair",
    description: "We specialize in repairing storm damage and work directly with your insurance company to streamline the claims process.",
    icon: Cloud,
  },
  {
    title: "Renovations",
    description: "Transform your home with our interior and exterior renovation services.",
    icon: Paintbrush,
  },
  {
    title: "Referral Bonus Program",
    description: "Refer a friend or family member, and earn rewards! We appreciate your trust and want to share the benefits with you.",
    icon: Gift,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Expert Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;