import { useEffect, useRef, useState } from "react";
import portfolio1 from "../../assets/allingoodhans1.png";
import portfolio2 from "../../assets/maceysmethod2.png";
import portfolio3 from "../../assets/telecomsite1.jpeg";
import portfolio4 from "../../assets/noblesite1.jpeg";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  desc?: string;
  year: string;
}

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "All In Good Hans",
    category: "BRAND + WEBSITE DESIGN",
    image: portfolio1,
    desc: "A strategic website build for a UK-based Virtual Assistant supporting overwhelmed entrepreneurs with inbox management, systems, and client coordination. The design reflects the brand’s calm, organised approach — positioning her as the dependable “behind-the-scenes” partner who brings structure to business chaos.",
    year: "2025",
  },
  {
    id: 2,
    title: "Macey's Method",
    category: "WEBSITE DESIGN + DEVELOPMENT",
    image: portfolio2,
    desc: "A refined, service-led website for a Virtual Assistant business focused on operational support and streamlined workflows. The structure prioritises clarity, service breakdown, and trust-building — helping potential clients quickly understand the value of outsourcing their admin.",
    year: "2025",
  },
  {
    id: 3,
    title: "Go Quality Networks",
    category: "BRAND + WEBSITE DEVELOPMENT",
    image: portfolio3,
    desc: "A Houston-based telecom website built to present high-speed internet and connectivity solutions with clarity and authority. The platform is structured to simplify provider comparison, communicate coverage and reliability, and guide users toward confident service decisions.",
    year: "2023",
  },
  {
    id: 4,
    title: "Noble Cleaning Solutions",
    category: "BRAND STRATEGY + WEBSITE DESIGN + DEVELOPMENT",
    image: portfolio4,
    desc: "A functional service website developed for a Vancouver-based cleaning business. The platform streamlines the booking process while clearly presenting residential and commercial services in a structured, easy-to-navigate layout.",
    year: "2023",
  },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const PortfoliosSection = () => {
  return (
    <div className="w-full bg-[#FAFAF8]">

      {/* Header */}
      <div className="px-6 py-24 md:py-32 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-6 text-charcoal"
          style={{ fontFamily: "sans-serif" }}
        >
          EXPLORE MY RECENT WORK
        </p>
        <h1
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-wide"
          style={{ fontFamily: '"Libre Caslon Text", serif' }}
        >
          RECENT PROJECTS
        </h1>
      </div>

      {/* Portfolio Rows */}
      <div className="w-full divide-y divide-[#E8E4DF] border-t border-[#E8E4DF]">
        {portfolioData.map((item, idx) => (
          <div
            key={idx}
            className="w-full flex flex-col md:flex-row items-stretch min-h-[520px]"
          >
            {/* ── Text Part ── */}
            <div className="flex-1 flex items-center bg-[#FAFAF8] py-16 md:py-0">
              <FadeIn delay={100}>
                <div className="px-8 md:px-16 lg:px-24 space-y-7 max-w-xl">

                  {/* Category + Year badge */}
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[11px] tracking-[0.3em] uppercase text-[#999] font-medium"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item.category}
                    </span>
                    <span
                      className="text-[10px] tracking-widest px-2.5 py-1 border border-[#D5CFC8] text-[#888] rounded-full"
                      style={{ fontFamily: "sans-serif" }}
                    >
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.05] tracking-tight text-[#1A1A1A] font-normal uppercase"
                    style={{ fontFamily: '"Libre Caslon Text", serif' }}
                  >
                    {item.title}
                  </h2>

                  {/* Thin rule */}
                  <div className="w-10 h-px bg-[#C8BFB4]" />

                  {/* Description */}
                  <p
                    className="text-sm md:text-base leading-relaxed text-[#6B6560] max-w-sm font-sans"
                    style={{ fontFamily: "sans-serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>

                  {/* Button */}
                  <button className="px-16 py-3 bg-soft-beige border-charcoal border rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: "sans-serif" }}
                  >
                    Check Live Site
                  </button>

                </div>
              </FadeIn>
            </div>

            {/* ── Image Part ── */}
            <div
              className={`flex-1 w-full overflow-hidden ${
                idx % 2 !== 0 ? "md:order-first" : ""
              }`}
              style={{ minHeight: 380 }}
            >
              <FadeIn delay={200}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: 380, display: "block" }}
                />
              </FadeIn>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};

export default PortfoliosSection;