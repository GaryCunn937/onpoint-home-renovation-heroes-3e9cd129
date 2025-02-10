import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import AutoPlay from "embla-carousel-autoplay";

const faqData = [
  {
    question: "How long does a roof replacement take?",
    answer: "Most projects are completed in the same day, depending on the size and complexity."
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes, OnPoint is fully licensed and insured for your peace of mind."
  },
  {
    question: "Do you offer warranties?",
    answer: "Yes! We offer manufacturer warranties on materials and a workmanship guarantee."
  },
  {
    question: "Can I finance my roofing project?",
    answer: "Absolutely! We have flexible financing plans to make your roofing project affordable."
  },
  {
    question: "How do I know if my roof needs to be replaced or repaired?",
    answer: "Our expert team will conduct a free inspection to assess damage and recommend the best course of action."
  },
  {
    question: "What roofing materials do you offer?",
    answer: "We provide asphalt shingles, metal roofing, tile roofing, and more all from top manufacturers."
  },
  {
    question: "How can I maintain my roof after installation?",
    answer: "Regular inspections, cleaning debris from gutters, and addressing minor repairs promptly can extend the life of your roof."
  },
  {
    question: "Does homeowner's insurance cover roof repairs or replacements?",
    answer: "It depends on your policy. We can assist you in navigating the insurance claims process."
  },
  {
    question: "What areas do you service?",
    answer: "We proudly serve residential and commercial customers throughout Georgia."
  },
  {
    question: "Do you handle emergency roofing repairs?",
    answer: "Yes, we offer emergency roofing services to address urgent leaks and storm damage."
  },
  {
    question: "How do I schedule a free inspection?",
    answer: "Call us or scan the QR code"
  }
];

const FAQ = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            plugins={[
              AutoPlay({
                delay: 5000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {faqData.map((faq, index) => (
                <CarouselItem key={index}>
                  <div className="bg-white rounded-lg shadow-lg p-8 mx-4 h-full">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <span className="text-secondary">❓</span>
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 flex items-center gap-2">
                      <span className="text-green-500">✔</span>
                      {faq.answer}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {faqData.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-secondary" : "bg-gray-300"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
