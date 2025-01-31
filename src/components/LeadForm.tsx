import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      
      // Convert FormData to a plain object
      const formObject: { [key: string]: string } = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });

      await fetch(
        "https://script.google.com/macros/s/AKfycbxxaWDGtcc8T7Bopv9DC6H0NKLhMwDvULTSV-gvtiC23-BrHIanjDMYMkGVDTDT3eyS/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams(formObject).toString(),
        }
      );

      // Since we're using no-cors, we won't get a proper response status
      // We'll assume success if the request doesn't throw an error
      toast({
        title: "Success!",
        description: "Your quote request has been submitted. We'll be in touch soon!",
      });
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="quote-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Get Your Free Quote Today!</h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <div>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
            />
          </div>
          <div>
            <select
              name="service"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
            >
              <option value="" disabled selected>Select Service Needed</option>
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
              name="notes"
              placeholder="Additional Notes (optional)"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-secondary hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;