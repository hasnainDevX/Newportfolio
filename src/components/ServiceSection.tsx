import { Skiper17 } from "./ui/ServiceCards";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const Services = () => {
  // Dynamic height calculation: 3 cards × 150vh per card + 50vh for heading
  const numberOfCards = 3;
  const heightPerCard = 100; // vh per card
  const headingSpace = 10; // vh for heading section
  const totalHeight = numberOfCards * heightPerCard + headingSpace;

  const labelRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: labelRef.current,
        start: "top 85%",
        once: true,
      },
      defaults: { ease: "power3.out" },
    });

    tl.fromTo(labelRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(headingRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9 }, "-=0.3")
      .fromTo(paraRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.4");
  }, []);

  return (
    <div 
      className="w-full "
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Heading Section */}
      <div className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 px-5 sm:px-6 md:px-16 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-[#2A2A2A] " style={{ fontFamily: "Libre Caslon Text, serif" }}>
          Web Design and Development{" "}
          <span className="text-charcoal">Services</span>
        </h1>
      </div>

      {/* Sticky Cards */}
      <Skiper17 />
    </div>
  );
};

export default Services;