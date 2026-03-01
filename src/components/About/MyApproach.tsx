"use client";

import { useEffect, useRef, useState } from "react";

interface Approach {
  number: string;
  description: string;
}

const approaches: Approach[] = [
  { number: "01.", description: "Starting with the right questions — example sites, brand assets, and a clear vision before a single line of code is written" },
  { number: "02.", description: "A site that feels like the next version of your brand, not a template someone else already has" },
  { number: "03.", description: "Section-by-section feedback throughout the build, so nothing gets to the end and surprises you" },
  { number: "04.", description: "Unlimited revisions during development — we get it right, not just done" },
  { number: "05.", description: "Custom-coded from scratch, so it loads fast, scales cleanly, and doesn't need replacing in two years" },
];

// Mobile accordion cell
const MobileCell = ({ item, idx, visible }: { item: Approach; idx: number; visible: boolean }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="sm:hidden flex flex-col transition-all duration-700"
      style={{
        borderRight: "1px solid #d6c9b8",
        borderBottom: "1px solid #d6c9b8",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${(idx + 1) * 90}ms`,
      }}
    >
      {/* Header row — always visible, tap to toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-8 py-6 text-left bg-white cursor-pointer"
      >
        <span
          className="font-light leading-none"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.4rem", color: "#b5973a" }}
        >
          {item.number}
        </span>

        {/* Animated +/× icon */}
        <span
          className="w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300"
          style={{
            borderColor: "#d6c9b8",
            color: "#b5973a",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* Expandable description */}
      <div
        className="overflow-hidden bg-white transition-all duration-500 ease-in-out"
        style={{ maxHeight: open ? "200px" : "0px" }}
      >
        <p
          className="px-8 pb-7 leading-relaxed"
          style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "1.05rem", color: "#3a2a2a" }}
        >
          {item.description}
        </p>
      </div>
    </div>
  );
};

const MyApproach = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full">

      {/* ── MOBILE: label + accordion list ── */}
      <div className="sm:hidden" style={{ borderTop: "1px solid #d6c9b8", borderLeft: "1px solid #d6c9b8" }}>
        {/* Label cell */}
        <div
          className="flex flex-col items-center justify-center gap-5 px-8 py-10 text-center transition-all duration-700 bg-yellowish/80"
          style={{
            borderRight: "1px solid #d6c9b8",
            borderBottom: "1px solid #d6c9b8",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
          }}
        >
          <h2
            className="font-normal leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "2.6rem", color: "#2e1414" }}
          >
            Our Approach
          </h2>
        </div>

        {/* Accordion steps */}
        {approaches.map((item, idx) => (
          <MobileCell key={idx} item={item} idx={idx} visible={visible} />
        ))}
      </div>

      {/* ── DESKTOP (sm+): original unchanged grid ── */}
      <div
        className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3"
        style={{ borderTop: "1px solid #d6c9b8", borderLeft: "1px solid #d6c9b8" }}
      >
        {/* Label cell */}
        <div
          className="flex flex-col items-center justify-center gap-5 p-10 text-center transition-all duration-700 bg-yellowish "
          style={{
            borderRight: "1px solid #d6c9b8",
            borderBottom: "1px solid #d6c9b8",
            minHeight: 380,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0ms",
          }}
        >
          <h2
            className="font-normal leading-tight tracking-tight"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#2e1414" }}
          >
            Our Approach
          </h2>
        </div>

        {/* Step cells */}
        {approaches.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between p-10 transition-all duration-700 bg-white"
            style={{
              borderRight: "1px solid #d6c9b8",
              borderBottom: "1px solid #d6c9b8",
              minHeight: 380,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: `${(idx + 1) * 90}ms`,
            }}
          >
            <span
              className="font-light leading-none"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#b5973a" }}
            >
              {item.number}
            </span>
            <p
              className="mt-6 leading-relaxed"
              style={{ fontFamily: "'EB Garamond', Georgia, serif", fontSize: "clamp(0.95rem, 1.4vw, 1.05rem)", color: "#3a2a2a" }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default MyApproach;