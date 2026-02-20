import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote:
      "We've attracted two multi-million-dollar clients thus far, and one of them has successfully converted. The comprehensive overhaul of our website has been incredibly effective.",
    name: "Michael",
    company: "Mica Living",
  },
  {
    quote:
      "I would reinvest 10x over, I'm in love with my new WordPress website and branding!",
    name: "Ayla",
    company: "Esme Copywriting Studio",
  },
  {
    quote:
      "The final result exceeded all our expectations, and we couldn't be happier. Working with Belle Creative has been an outstanding investment.",
    name: "Amy",
    company: "Amy Jennifer Jewellery",
  },
  {
    quote:
      "I feel like Izzy just gets me. She takes the time to truly understand my vision, my brand, and where I want to go – even when I can't fully articulate it myself.",
    name: "Calla",
    company: "Facemuse London",
  },
];

const TestimonialsSection = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    const cardsContainer = cardsContainerRef.current;

    if (!header || !cardsContainer) return;

    // Pin the header while cards scroll through
    ScrollTrigger.create({
      trigger: cardsContainer,
      start: "top center",
      end: "bottom center",
      pin: header,
      pinSpacing: false,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative py-20">
      {/* Title - Will be pinned */}
      <div ref={headerRef} className="text-center mb-32">
        <h2 className="text-5xl md:text-6xl lg:text-7xl mb-4" style={{ fontFamily: "Libre Caslon Text, serif" }}>
          My favourite <span className="">quotes</span>
        </h2>
        <p className="text-xl text-gray-600">from clients</p>
      </div>

      {/* Cards Container - Scrolls normally */}
      <div
        ref={cardsContainerRef}
        className="flex flex-col items-center gap-8 px-4"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`w-full md:max-w-lg max-w-md ${
              index % 2 === 0 ? "md:self-start md:ml-20" : "md:self-end md:mr-20"
            }`}
          >
            <div className="relative">
              {/* Organic shaped background */}
              <div
                className="absolute inset-0 bg-white text-black rounded-[40px] shadow-2xl"
                style={{
                  clipPath:
                    "polygon(3% 8%, 8% 2%, 92% 2%, 97% 8%, 97% 92%, 92% 97%, 8% 97%, 3% 92%)",
                }}
              />

              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-gold opacity-70"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-lg md:text-xl leading-relaxed mb-6 font-light">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-gradient-to-b from-soft-beige to-yellowish rounded-full" />
                  <div>
                    <p className="font-semibold text-charcoal text-base uppercase tracking-wide">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-600 text-sm uppercase tracking-wider">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;