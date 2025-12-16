import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    quote: "We've attracted two multi-million-dollar clients thus far, and one of them has successfully converted. The comprehensive overhaul of our website has been incredibly effective.",
    name: "Michael",
    company: "Mica Living"
  },
  {
    quote: "I would reinvest 10x over, I'm in love with my new WordPress website and branding!",
    name: "Ayla",
    company: "Esme Copywriting Studio"
  },
  {
    quote: "The final result exceeded all our expectations, and we couldn't be happier. Working with Belle Creative has been an outstanding investment.",
    name: "Amy",
    company: "Amy Jennifer Jewellery"
  },
  {
    quote: "I feel like Izzy just gets me. She takes the time to truly understand my vision, my brand, and where I want to go – even when I can't fully articulate it myself.",
    name: "Calla",
    company: "Facemuse London"
  },
  {
    quote: "Belle Creative have been amazing to work with. Izzy understood the vision, helped me with refining my branding, and really brought my vision to reality.",
    name: "Crystal",
    company: "Plan To Focus"
  }
];

const TestimonialsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    
    if (!section || !cardsContainer) return;

    const cards = cardsContainer.querySelectorAll('.testimonial-card');

    // Pin the section and animate cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=400%',
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      }
    });

    // Animate each card - they enter from bottom and exit from top
    cards.forEach((card, index) => {
      const delay = index * 0.15;
      
      tl.fromTo(card,
        {
          y: 1000,
          scale: 0.85
        },
        {
          y: -1000,
          scale: 1,
          duration: 1,
          ease: 'none',
        },
        delay
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
    >
      {/* Fixed Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-rose-200/30 rounded-full blur-2xl" />
      </div>

      {/* Title */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-10">
        <h2 className="text-5xl md:text-6xl font-serif italic text-gray-800 mb-4">
          Our favourite quotes
        </h2>
        <p className="text-xl text-gray-600">from clients</p>
      </div>

      {/* Cards Container */}
      <div 
        ref={cardsContainerRef}
        className="absolute inset-0 flex flex-col items-center justify-center gap-0 px-4"
      >
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-card absolute w-full max-w-2xl ${
              index % 2 === 0 ? 'left-8 md:left-20' : 'right-8 md:right-20'
            }`}
            style={{ top: '50%' }}
          >
            <div className="relative">
              {/* Organic shaped background */}
              <div 
                className="absolute inset-0 bg-white rounded-[40px] shadow-2xl"
                style={{
                  clipPath: index % 3 === 0 
                    ? 'polygon(2% 8%, 8% 2%, 92% 3%, 97% 9%, 98% 92%, 94% 97%, 7% 98%, 3% 93%)'
                    : index % 3 === 1
                    ? 'polygon(3% 6%, 6% 3%, 94% 2%, 98% 7%, 97% 94%, 93% 98%, 6% 97%, 2% 92%)'
                    : 'polygon(4% 7%, 7% 3%, 93% 4%, 97% 8%, 98% 93%, 95% 97%, 8% 98%, 3% 94%)'
                }}
              />
              
              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="mb-6">
                  <svg 
                    className="w-10 h-10 text-purple-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6 font-light">
                  {testimonial.quote}
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-1 h-10 bg-gradient-to-b from-purple-400 to-rose-400 rounded-full" />
                  <div>
                    <p className="font-semibold text-gray-900 text-base uppercase tracking-wide">
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