import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    text: "The snow and ice storm brought us tree damage to our roof, so I called OnPoint to come help us through the process. They made the dealings with our insurance carrier more manageable and helped us every step of the way. We decided to replace the entire roof, and their work was top notch.",
    author: "Andrew Ivey",
  },
  {
    text: "Three thumbs up. I couldn't be happier with OnPoint or the new roof, above and beyond. The new roof is even better than the original, and they had it done in a day! Professional, respectful, courteous, and they left the property in better shape than when they arrived.",
    author: "George Gavaghan",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Are Saying</h2>
        <div className="max-w-4xl mx-auto relative">
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="text-center px-8">
              <Quote className="w-12 h-12 mx-auto mb-6 text-secondary" />
              <p className="text-lg md:text-xl mb-6">{testimonials[currentIndex].text}</p>
              <p className="font-semibold">- {testimonials[currentIndex].author}</p>
            </div>
            <button
              onClick={next}
              className="p-2 hover:bg-gray-700 rounded-full transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;