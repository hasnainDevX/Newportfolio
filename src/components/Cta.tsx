import React from 'react';

const Cta = () => {
  return (
    <div className="relative bg-[#2a2a2a] min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto text-center text-white">
        {/* Top Tagline */}
        <p 
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-12 font-light"
          style={{ fontFamily: 'sans-serif' }}
        >
          ARE YOU READY TO REFINE YOUR BRAND?
        </p>
        
        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-16 font-light tracking-wide"
          style={{ fontFamily: '"Libre Caslon Text", serif' }}
        >
          BOOK YOUR PROJECT
        </h1>
        
        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
          {/* Book Discovery Call */}
          <a 
            href="/contact"
            className="group relative inline-block"
          >
            <span 
              className="text-base md:text-lg tracking-[0.15em] uppercase font-light transition-opacity duration-300 group-hover:opacity-70"
              style={{ fontFamily: 'sans-serif' }}
            >
              BOOK YOUR DISCOVERY CALL
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </a>
          
          {/* Apply to Work Together */}
          <a 
            href="/contact"
            className="group relative inline-block"
          >
            <span 
              className="text-base md:text-lg tracking-[0.15em] uppercase font-light transition-opacity duration-300 group-hover:opacity-70"
              style={{ fontFamily: 'sans-serif' }}
            >
              APPLY TO WORK TOGETHER
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover:scale-x-110"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cta;