import Navbar from "../Navbar";
import { useState, useEffect } from "react";

const AboutHero = () => {
  const [currentIdx, setcurrentIdx] = useState(0);

  const images = [
    "https://belle-creative.co.uk/wp-content/uploads/2025/07/creative-wordpress-website-01-1-scaled.webp",
    "https://images.squarespace-cdn.com/content/v1/5f6a5ac31c4b325b1b4ee2fd/5cede1b2-6284-43c2-a58d-6db7c4d98f55/finding-design-brand-photography-1+laptop+mockup.jpg?format=1500w",
    "https://belle-creative.co.uk/wp-content/uploads/2025/06/website-designers-for-small-businesses-homenew-07-scaled.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIdx((prevIdx) => (prevIdx + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="bg-cover bg-center bg-no-repeat relative bg-[#FFFCF9]">
      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Content  */}
      <div className="relative z-10 flex flex-col text-center text- px-5 sm:px-6 md:px-8 lg:px-6 py-24 sm:py-32 md:py-40 lg:py-52 max-w-4xl mx-auto min-h-screen">
        {/* Small Label */}
        <div className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-7 md:mb-8 opacity-90">
          About Us
        </div>

        {/* Main Heading */}
        <div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0 font-libre-caslon! md:capitalize uppercase tracking-wide"
          >
            Strategic website design for creative founders who want their brand
            to be seen, felt, and remembered
          </h1>
        </div>

        {/* slideshow  */}
        <div className="flex items-center justify-center mt-10 max-w-3xl mx-auto relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentIdx ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Portfolio ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Sub content and Cta  */}
        <div className="container max-w-xl mx-auto py-10 space-y-6">
          <h3 className="md:text-lg font-medium mt-8 text-gray-700 font-playfair uppercase tracking-wide">
            We help creative founders build websites that are not just
            functional, but also memorable.
          </h3>
          <h4 className="font-sans text-gray-600 leading-relaxed">
            Together, we’ll turn the once overwhelming and uncertain experience
            of creating your website into a collaborative, clarity-filled
            process that gives you a site designed to grow with you—one that
            feels like home and keeps paying off for years to come.
          </h4>
          {/* Button */}
          <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutHero;
