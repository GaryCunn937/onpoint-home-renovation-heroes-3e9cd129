import { useState, useEffect } from "react";

const testimonials = [
  {
    text: "The snow and ice storm brought us tree damage to our roof, so I called OnPoint to come help us through the process. They made the dealings with our insurance carrier more manageable and helped us every step of the way. We decided to replace the entire roof, and their work was top notch. I highly recommend these guys. We are going to call them back for some other renovation work in the future. You should call them, too.",
    author: "Andrew Ivey"
  },
  {
    text: "Three thumbs up. I couldn't be happier with OnPoint or the new roof, above and beyond. The new roof is even better than the original, and they had it done in a day! Professional, respectful, courteous, and they left the property in better shape than when they arrived.",
    author: "George Gavaghan"
  },
  {
    text: "After going through Hurricane Helene and having many other companies say they would help us but no one following through, I found Onpoint Roofing! They came out, were straightforward about the process, even offered us different colors which is something I wasn't expecting. He said he could get it done quickly as we were expecting a baby at the time and he did just that. He came the same week, his team got to work bright and early and finished faster than anticipated. They were so respectful of my property, moved things around but left it wayyyy cleaner than they found it. Cleaned up all of the nails and their belongings. I couldn't recommend them more!",
    author: "Kiana Martes"
  },
  {
    text: "We highly recommend OnPoint roofing. We just bought a home and found out it needed a new roof. After getting quotes from several roofing companies, we were the most impressed by OnPoint. They had by far the best communication, knowledge, and price. CJ knew exactly what we would need, and he patiently answered the many questions we had. We are so happy with our new roof, and we will be going to OnPoint with any future roofing needs!",
    author: "Sarah Sandeford"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 12000); // Changed from 8000 to 12000

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-accent relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img
          src="/lovable-uploads/ce06691d-49dd-4dba-a2cc-cb9508faa7c7.png"
          alt="ONPOINT Logo Backdrop"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Are Saying</h2>
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === activeIndex
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full absolute"
              }`}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4 italic">{testimonial.text}</p>
                <p className="font-semibold text-primary">{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;