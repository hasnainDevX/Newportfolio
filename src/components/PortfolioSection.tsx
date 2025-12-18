import { useEffect, useState } from "react";

const PortfolioSection = () => {
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
    <div className="py-20 px-4">
      <div className="headings my-16 md:my-28 lg:my-32 space-y-6 px-4 md:px-12">
        <h1 className="text-[#2A2A2A] text-5xl font-light md:text-2xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-latore md:leading-snug text-center px-4 md:px-0 max-w-4xl mx-auto">
          Project <span className="text-[#95B0DD]">Spotlight</span>
        </h1>
        <h4 className="text-xl px-4 md:px-16 text-center text-[#2A2A2A] max-w-7xl mx-auto">
          Maybe you’ve outgrown the site that once felt perfect. Maybe your
          brand’s next chapter is bigger than the online space it currently sits
          in. Or perhaps you’re tired of choosing between beauty or performance,
          knowing you deserve both.
        </h4>
      </div>
      <div className="card border border-dashed border-charcoal/40 max-w-5xl mx-auto shadow-2xl flex flex-col md:flex-row overflow-hidden rounded-xl bg-white">
        <div className="left-content w-full md:flex-[55%] p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 space-y-5 sm:space-y-6 md:space-y-7 flex flex-col justify-center">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl lg:text-[42px] xl:text-5xl font-light text-charcoal leading-tight tracking-tight font-latore">
            Captivating and Converting{" "}
            <span className="text-soft-blue">Portfolio</span>
          </h2>
          <p className="font-light text-[15px] sm:text-base md:text-[17px] lg:text-lg leading-relaxed sm:leading-relaxed md:leading-loose font-lato text-charcoal/75 max-w-xl">
            West & Co. Travel set out to bring a fresh sense of luxury to
            travel—elevated, effortless, and full of charm. Inspired by Santa
            Barbara's coastal ease, we crafted a brand that blends casual
            sophistication with playful wanderlust
          </p>
          <div className="pt-2 sm:pt-3">
            <button
              className="font-medium py-3.5 px-9 sm:py-4 sm:px-11 md:py-4 md:px-12 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] text-white tracking-wide cursor-pointer text-[14px] sm:text-[15px] md:text-base"
              style={{
                backgroundColor: "#95B0DD",
                fontFamily: "Lato, sans-serif",
              }}
            >
              VIEW PORTFOLIO
            </button>
          </div>
        </div>
        <div className="rightimg w-full h-72 sm:h-80 md:h-auto md:flex-[45%] relative overflow-hidden">
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
      </div>
    </div>
  );
};

export default PortfolioSection;
