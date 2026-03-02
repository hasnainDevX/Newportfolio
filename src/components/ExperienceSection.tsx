import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const industries = [
  "Virtual Assistants",
  "E-commerce Stores",
  "Coaches & Consultants",
  'Cleaning Services',
  "Fitness & Wellness",
  "Internet Service Providers",
  "Real Estate",  
  "Social Media Managers",
  "Restaurants & Cafes",
  "Creative Agencies",
  "Personal Brands",
  "E Books & Courses",
  "Crowdfunding Platforms",
];

const ExperienceSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-slate-50 px-6 md:px-16 lg:px-24 py-24 md:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ── Two-col layout on desktop, stacked on mobile ── */}
        <div className="flex flex-col lg:flex-row lg:items-center gap-16 lg:gap-24">
          {/* Left — sticky heading column */}
          <div className="lg:w-2/5 lg:sticky lg:top-32">
            {/* Eyebrow */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "0ms",
              }}
            >
              <p className="text-xs tracking-[0.4em] uppercase text-[#b5973a] font-sans mb-6">
                Experience
              </p>
            </div>

            {/* Heading */}
            <div
              className="transition-all duration-700"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transitionDelay: "100ms",
              }}
            >
              <h2
                className="font-normal leading-[1.1] text-[#1a1a1a] font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Industries I've Worked With
              </h2>
            </div>

            {/* Thin rule */}
            <div
              className="transition-all duration-700 mt-8"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left",
                transitionDelay: "200ms",
                height: "1px",
                width: "48px",
                backgroundColor: "#d6c9b8",
              }}
            />

            {/* Subtitle */}
            <div
              className="transition-all duration-700 mt-6"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "300ms",
              }}
            >
              <p className="text-charcoal font-sans leading-relaxed max-w-xs">
                From solopreneurs to established studios — if you have a vision,
                we know how to bring it to life online.
              </p>
            </div>

            {/* CTA */}
            <div
              className="transition-all duration-700 mt-10"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: "400ms",
              }}
            >
              <Link to="/portfolio">
                <button className="px-16 py-3 bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 cursor-pointer">
                  See Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Right — tag cloud with staggered reveal */}
          <div className="lg:w-3/5">
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, idx) => (
                <div
                  key={idx}
                  className="transition-all duration-600 group"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${300 + idx * 60}ms`,
                    transitionDuration: "600ms",
                  }}
                >
                  <span
                    className="inline-flex items-center gap-2 px-5 py-3 border font-sans text-sm cursor-default select-none
                      transition-all duration-300
                      hover:border-[#1a1a1a] hover:bg-gold hover:text-white!"
                    style={{
                      borderColor: "#d6c9b8",
                      color: "#3a2a2a",
                      borderRadius: "100px",
                    }}
                  >
                    {/* Small diamond accent */}
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 group-hover:bg-white hover:text-white hover:bg-white bg-gold"
                    />
                    {industry}
                  </span>
                </div>
              ))}

              {/* "& more" pill */}
              <div
                className="transition-all duration-600"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: `${300 + industries.length * 60}ms`,
                  transitionDuration: "600ms",
                }}
              >
                <span
                  className="inline-flex items-center px-5 py-3 font-sans text-sm italic"
                  style={{ color: "#b5973a", borderRadius: "100px" }}
                >
                  & so much more
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
