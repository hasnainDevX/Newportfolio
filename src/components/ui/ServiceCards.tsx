import { useEffect, useRef, useState } from "react";

interface CardData {
  id: number | string;
  image: string;
  alt?: string;
  title: string;
  timeline: string;
  wif: string;
  description: string;
}

const StickyCard002 = ({ cards }: { cards: CardData[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;
      
      const scrollProgress = (scrollTop - containerTop) / (containerHeight - windowHeight);
      const cardIndex = Math.min(
        Math.floor(scrollProgress * cards.length),
        cards.length - 1
      );
      
      if (cardIndex >= 0 && cardIndex < cards.length) {
        setCurrentIndex(cardIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [cards.length]);

  return (
    <div ref={containerRef} className="relative w-full " style={{ height: `${cards.length * 100}vh` }}>
      <div className="sticky top-0 h-screen w-full flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-8">
        <div className="relative h-[92vh] sm:h-[90vh] w-full max-w-7xl overflow-hidden rounded-xl sm:rounded-2xl shadow-2xl">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`absolute inset-0 transition-opacity duration-500  ${
                i === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              {/* Mobile: Stacked Layout */}
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-2/5 h-[35%] sm:h-[40%] md:h-full relative overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.alt || card.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content Section */}
                <div 
                  className="w-full md:w-3/5 h-[65%] sm:h-[60%] md:h-full p-6 sm:p-8 md:p-10 lg:p-14 xl:p-16 flex flex-col justify-center"
                  style={{ 
                    backgroundColor: '#F9F6F1',
                    fontFamily: 'Lato, sans-serif'
                  }}
                >
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8 max-w-2xl">
                    {/* Title */}
                    <h2 
                      className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-[#95B0DD]"
                      style={{ fontFamily: 'Libre Caslon Text, serif' }}
                    >
                      {card.title}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-800 leading-relaxed text-[15px] sm:text-base md:text-lg lg:text-xl font-light">
                      {card.description}
                    </p>

                    {/* WIF Section */}
                    <div 
                      className="rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 border"
                      style={{ 
                        backgroundColor: 'rgba(149, 176, 221, 0.08)',
                        borderColor: '#95B0DD'
                      }}
                    >
                      <h3 
                        className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.12em] sm:tracking-[0.15em] mb-2 sm:mb-3"
                        style={{ color: '#95B0DD' }}
                      >
                        Who Is This For?
                      </h3>
                      <p className="text-gray-700 text-[13px] sm:text-sm md:text-base leading-relaxed">
                        {card.wif}
                      </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-3 md:pt-4">
                      <button 
                        className="font-medium py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-white tracking-wide cursor-pointer text-[13px] sm:text-sm md:text-base w-full sm:w-auto"
                        style={{ 
                          backgroundColor: '#95B0DD',
                          fontFamily: 'Lato, sans-serif'
                        }}
                      >
                        VIEW PRICING
                      </button>
                      <button 
                        className="font-medium py-3 sm:py-3.5 md:py-4 px-6 sm:px-7 md:px-8 rounded-full transition-all duration-300 border-2 hover:shadow-md transform hover:scale-[1.02] tracking-wide cursor-pointer text-[13px] sm:text-sm md:text-base w-full sm:w-auto"
                        style={{ 
                          borderColor: '#95B0DD',
                          color: '#95B0DD',
                          fontFamily: 'Lato, sans-serif'
                        }}
                      >
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Scroll Indicator (Mobile Only) */}
      {/* <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-2">
        {cards.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentIndex 
                ? 'w-8 bg-[#95B0DD]' 
                : 'w-2 bg-[#95B0DD]/30'
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

// Example usage component
const Skiper17 = () => {
  const defaultCards = [
    {
      id: 1,
      image: "https://belle-creative.co.uk/wp-content/uploads/2025/09/homepage-services-grid-2.png",
      title: "The Foundation Website",
      timeline: "1-2 weeks",
      wif: "Perfect for small businesses and individuals who want a simple yet professional online presence.",
      description:
        "Your digital front door that actually works - a website that loads instantly, looks professional, and turns visitors into customers without the headaches of DIY builders.",
    },
    {
      id: 2,
      image: "https://hasnainwebworks.vercel.app/service3.png",
      title: "The Signature Site",
      timeline: "3-5 weeks",
      wif: "For growing businesses ready to stand out from competitors with a website that commands attention and builds trust.",
      description:
        "Elevate your online presence with a website that commands attention and builds trust - the kind that makes potential customers think 'this business knows what they're doing.'",
    },
    {
      id: 3,
      image: "https://belle-creative.co.uk/wp-content/uploads/2025/09/homepage-services-grid-3.png",
      title: "The Complete Vision",
      timeline: "5-10 weeks",
      wif: "For established businesses, brands, and e-commerce stores ready to automate workflows, scale operations, and deliver premium customer experiences.",
      description:
        "The complete digital solution that handles complex business processes automatically - your website becomes a powerful business tool, not just a brochure.",
    },
  ];

  return (
    <div className="w-full bg-[#F9F6F1]">
      <StickyCard002 cards={defaultCards} />
    </div>
  );
};

export { Skiper17, StickyCard002 };