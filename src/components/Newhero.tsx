import React, { useState, useEffect } from 'react';

const NewHero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Image carousel data
  const images = [
    {
      url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
      alt: "Minimalist workspace with circular mirror and brush"
    },
    {
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      alt: "Modern interior design"
    },
    {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80",
      alt: "Elegant home decor"
    },
    {
      url: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
      alt: "Luxury product styling"
    }
  ];

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-[#f5f3f0] font-['Libre_Caslon_Text',_serif]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-1">
              <h1 
                className="text-2xl sm:text-3xl lg:text-4xl tracking-[0.3em] font-light text-gray-800"
                style={{ fontFamily: "Libre Caslon Text, serif" }}
              >
                SALTY STUDIO
              </h1>
            </div>

            {/* Desktop Navigation - Hidden on mobile */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12 flex-1 justify-end">
              <a 
                href="#home" 
                className="text-sm xl:text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              >
                HOME
              </a>
              <a 
                href="#about" 
                className="text-sm xl:text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              >
                ABOUT
              </a>
              <a 
                href="#services" 
                className="text-sm xl:text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              >
                SERVICES
              </a>
              <a 
                href="#portfolio" 
                className="text-sm xl:text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              >
                PORTFOLIO
              </a>
              <a 
                href="#contact" 
                className="text-sm xl:text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              >
                CONTACT
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden flex flex-col space-y-1.5 p-2 bg-gray-800 rounded"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="flex flex-col space-y-4 px-6 py-6 bg-white border-t border-gray-200">
            <a 
              href="#home" 
              className="text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a 
              href="#about" 
              className="text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a 
              href="#services" 
              className="text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              SERVICES
            </a>
            <a 
              href="#portfolio" 
              className="text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              PORTFOLIO
            </a>
            <a 
              href="#contact" 
              className="text-base font-light text-gray-700 hover:text-gray-900 tracking-wide transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)]">
            
            {/* Left Side - Image with woman */}
            <div className="relative h-[50vh] sm:h-[60vh] lg:h-auto bg-gradient-to-br from-[#b8c5c5] to-[#8a9999] overflow-hidden">
              <div className="absolute inset-0 flex items-end justify-center lg:justify-start">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                  alt="Woman in black"
                  className="h-[85%] sm:h-[90%] lg:h-[95%] w-auto object-cover object-top lg:ml-8 xl:ml-16"
                  style={{ 
                    maskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%)',
                    WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%)'
                  }}
                />
              </div>
              
              {/* Geometric accent */}
              <div className="absolute top-[15%] sm:top-[20%] right-[10%] sm:right-[15%] w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56">
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-full"></div>
                <div className="absolute top-4 left-4 right-4 bottom-4 border border-white/40 rounded-full"></div>
              </div>
            </div>

            {/* Right Side - Text and Image Carousel */}
            <div className="bg-[#f5f3f0] flex flex-col">
              
              {/* Text Content */}
              <div className="flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 lg:py-0">
                <div className="max-w-xl">
                  <h2 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-light leading-tight text-gray-800 mb-6 sm:mb-8"
                    style={{ fontFamily: "Libre Caslon Text, serif" }}
                  >
                    Your brand should tell a story.
                    <br />
                    <span className="italic">Yours.</span>
                  </h2>
                  <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-light leading-relaxed max-w-md">
                    We craft authentic brand experiences that resonate with your audience and tell your unique story.
                  </p>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative h-[40vh] sm:h-[45vh] lg:h-[45%] xl:h-[50%] overflow-hidden">
                <div className="absolute inset-0">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    </div>
                  ))}
                </div>

                {/* Carousel Indicators */}
                <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`transition-all duration-300 ${
                        index === currentImageIndex 
                          ? 'w-8 sm:w-10 h-1 sm:h-1.5 bg-white' 
                          : 'w-1 sm:w-1.5 h-1 sm:h-1.5 bg-white/50 hover:bg-white/75'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Optional: Navigation Arrows */}
                <button
                  onClick={() => setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1)}
                  className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white text-xl sm:text-2xl z-10"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1)}
                  className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 flex items-center justify-center text-white text-xl sm:text-2xl z-10"
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewHero;