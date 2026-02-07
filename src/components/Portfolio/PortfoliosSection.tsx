import { useState } from 'react';
import portfolio1 from "../../assets/project1.png";

interface Portfolio {
  id: number;
  title: string;
  category: string;
  image: string;
  year: string;
}

const portfolioData: Portfolio[] = [
  {
    id: 1,
    title: "LUXURY BEAUTY STUDIO",
    category: "BRAND + WEBSITE DESIGN",
    image: portfolio1,
    year: "2024"
  },
  {
    id: 2,
    title: "ARTISAN COFFEE COLLECTIVE",
    category: "BRAND IDENTITY + PACKAGING",
    image: portfolio1,
    year: "2024"
  },
  {
    id: 3,
    title: "MODERN WELLNESS RETREAT",
    category: "BRAND + DIGITAL EXPERIENCE",
    image: portfolio1,
    year: "2023"
  },
  {
    id: 4,
    title: "EDITORIAL FASHION HOUSE",
    category: "BRAND STRATEGY + WEBSITE",
    image: portfolio1,
    year: "2023"
  }
];

const PortfoliosSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#1a1a1a]">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center text-white">
        <p 
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-12 font-light"
          style={{ fontFamily: 'sans-serif' }}
        >
          EXPLORE MY RECENT WORK
        </p>
        
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8 font-light tracking-wide"
          style={{ fontFamily: '"Libre Caslon Text", serif' }}
        >
          SELECTED PROJECTS
        </h1>
      </div>

      {/* Portfolio Items - Full Screen Splits */}
      {portfolioData.map((project, index) => (
        <div 
          key={project.id}
          className="group cursor-pointer"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className={`grid grid-cols-1 md:grid-cols-2 min-h-screen`}>
            
            {/* Image Side */}
            <div className={`relative h-[60vh] md:h-screen overflow-hidden ${
              index % 2 === 0 ? 'md:order-1 bg-[#E9E5DD]' : 'md:order-2'
            }`}>
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-[1000ms] ease-out"
                style={{
                  transform: hoveredId === project.id ? 'scale(1.08)' : 'scale(1)',
                  filter: hoveredId === project.id ? 'brightness(1.1)' : 'brightness(0.95)'
                }}
              />
              <div 
                className="absolute inset-0 bg-black transition-opacity duration-700"
                style={{ opacity: hoveredId === project.id ? 0 : 0.2 }}
              ></div>
            </div>

            {/* Text Side */}
            <div className={`flex items-center justify-center px-8 md:px-16 lg:px-24 py-20 md:py-32 bg-[#BFB23B] h-full ${
              index % 2 === 0 ? 'md:order-2' : 'md:order-1'
            }`}>
              <div className="max-w-lg text-white">
                <p 
                  className="text-xs tracking-[0.25em] uppercase mb-8 font-light text-white/60"
                  style={{ fontFamily: 'sans-serif' }}
                >
                  {project.category}
                </p>
                
                <h2 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-12 font-light tracking-wide leading-tight"
                  style={{ fontFamily: '"Libre Caslon Text", serif' }}
                >
                  {project.title}
                </h2>

                <div className="flex items-center gap-8 text-white/70 mb-12">
                  <span className="text-sm font-light">{project.year}</span>
                </div>

                <a 
                  href="#"
                  className="group/link relative inline-block"
                >
                  <span 
                    className="text-base tracking-[0.2em] uppercase font-light transition-opacity duration-300 group-hover/link:opacity-70"
                    style={{ fontFamily: 'sans-serif' }}
                  >
                    VIEW PROJECT
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 group-hover/link:scale-x-110"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Footer Divider */}
      <div className="border-t border-white/10 py-16 text-center">
        <p 
          className="text-xs tracking-[0.3em] uppercase font-light text-white/50"
          style={{ fontFamily: 'sans-serif' }}
        >
          MORE COMING SOON
        </p>
      </div>
    </div>
  );
};

export default PortfoliosSection;