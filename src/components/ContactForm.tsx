import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Submitted",
      description: "We'll get back to you within 24 hours!",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      notes: "",
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Your Free Quote Today!</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>
          <div>
            <select
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            >
              <option value="" disabled>Select Service Needed</option>
              <option value="roof-installation">Roof Installation</option>
              <option value="roof-repair">Roof Repair</option>
              <option value="roof-replacement">Roof Replacement</option>
              <option value="storm-damage-repair">Storm Damage Repair</option>
              <option value="renovations">Renovations</option>
              <option value="referral-bonus">Learn About Our Referral Bonus</option>
            </select>
          </div>
          <div>
            <textarea
              placeholder="Additional Notes (optional)"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Submit Request
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;