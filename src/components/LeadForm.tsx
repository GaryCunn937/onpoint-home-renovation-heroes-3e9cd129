import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@radix-ui/react-select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const LeadForm = () => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxxaWDGtcc8T7Bopv9DC6H0NKLhMwDvULTSV-gvtiC23-BrHIanjDMYMkGVDTDT3eyS/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your request has been submitted. We'll contact you soon!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to submit form. Please try again later.",
      });
    }
  };

  return (
    <section id="quote-form" className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Get Your Free Quote Today!</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            name="fullName"
            placeholder="Full Name"
            required
            className="w-full"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full"
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className="w-full"
          />
          <select
            name="service"
            required
            className="w-full h-10 px-3 rounded-md border border-input bg-background"
          >
            <option value="" disabled selected>Select Service Needed</option>
            <option value="roof-installation">Roof Installation</option>
            <option value="roof-repair">Roof Repair</option>
            <option value="roof-replacement">Roof Replacement</option>
            <option value="storm-damage-repair">Storm Damage Repair</option>
            <option value="renovations">Renovations</option>
            <option value="referral-bonus">Learn About Our Referral Bonus</option>
          </select>
          <Textarea
            name="notes"
            placeholder="Additional Notes (optional)"
            className="w-full"
            rows={4}
          />
          <Button type="submit" variant="solid" size="lg" className="w-full">
            Submit Request
          </Button>
        </form>
      </div>
    </section>
  );
};

export default LeadForm;