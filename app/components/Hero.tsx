"use client"
import { useEffect, useRef } from "react";
import Link from "next/link";
import Navbar from "./Navbar";
import gsap from "gsap";

const Hero = () => {
  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0.85 },
      { opacity: 0.5, duration: 1.8 }
    )
    .fromTo(
      labelRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=1"
    )
    .fromTo(
      headingRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1 },
      "-=0.5"
    )
    .fromTo(
      buttonRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.4"
    );

    // Cursor spotlight
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlightRef.current) return;
      gsap.to(spotlightRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1677100091678-1e96b3de3a38?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundColor: "#F9F6F1",
        backgroundAttachment: "fixed",
      }}
    >
      <div ref={overlayRef} className="absolute inset-0 bg-black/85" />

      {/* Cursor spotlight */}
      <div
        ref={spotlightRef}
        className="pointer-events-none absolute z-20"
        style={{
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)",
          top: 0,
          left: 0,
        }}
      />

      <header className="relative z-50">
        <Navbar />
      </header>

      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-5 sm:px-6 md:px-8 lg:px-6 py-24 sm:py-32 md:py-40 lg:py-52 xl:py-64 max-w-6xl mx-auto min-h-screen">

        <div
          ref={labelRef}
          className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-7 md:mb-8 opacity-0"
        >
          Website Design and Development
        </div>

        <h1
          ref={headingRef}
          className="text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-8xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0 opacity-0"
          style={{ fontFamily: "Libre Caslon Text, serif" }}
        >
          Designing & building impactful websites for businesses that are ready
          to shine
        </h1>

        <div ref={buttonRef} className="opacity-0">
          <Link href="/enquiry">
            <button className="px-16 py-3 bg-soft-beige text-charcoal border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 hover:border-yellowish cursor-pointer">
              Let's Talk
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Hero;