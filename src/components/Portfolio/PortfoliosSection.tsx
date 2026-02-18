// import portfolio2 from "../../assets/image1.png";
import portfolio3 from "../../assets/image2.png";
import portfolio1 from "../../assets/project1.png";
import portfolio from "../../assets/portfolio1.webp";
import portfolio2 from "../../assets/portfolio2.webp";

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
    title: "LUXURY BEAUTY STUDIO",
    category: "BRAND + WEBSITE DESIGN",
    image: portfolio,
    desc: "A high-end beauty studio specializing in skincare and makeup services, offering a luxurious experience for clients seeking top-tier beauty treatments.",
    year: "2024",
  },
  {
    id: 2,
    title: "ARTISAN COFFEE COLLECTIVE",
    category: "BRAND IDENTITY + PACKAGING",
    image: portfolio2,
    desc: "A boutique coffee brand focused on ethically sourced beans and artisanal roasting techniques, creating a unique sensory experience for coffee enthusiasts.",
    year: "2024",
  },
  {
    id: 3,
    title: "MODERN WELLNESS RETREAT",
    category: "BRAND + DIGITAL EXPERIENCE",
    image: portfolio3,
    desc: "A contemporary wellness retreat offering holistic health services, combining modern design with nature-inspired elements to create a serene and rejuvenating environment.",
    year: "2023",
  },
  {
    id: 4,
    title: "EDITORIAL FASHION HOUSE",
    category: "BRAND STRATEGY + WEBSITE",
    image: portfolio1,
    desc: "A cutting-edge fashion brand that merges editorial aesthetics with high fashion, creating a bold and innovative identity that resonates with trendsetters and fashion enthusiasts.",
    year: "2023",
  },
];

const PortfoliosSection = () => {
  return (
    <div className="w-full bg-[#FFFCF9]">
      {/* Header */}
      <div className="px-6 py-24 md:py-32 text-center bg-charcoal text-white">
        <p
          className="text-sm md:text-base tracking-[0.3em] uppercase mb-12 font-light"
          style={{ fontFamily: "sans-serif" }}
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

      {/* Portfolio Grid */}
      <div className="w-full">
        {portfolioData.map((item, idx) => (
          <div
            className="portfolio-part w-full flex flex-col md:flex-row items-center justify-between"
            key={idx}
          >
            <div className="textpart flex-1 flex justify-center items-start flex-col w-full h-full py-12">
              <div className="text flex flex-col w-full h-full px-6 md:px-24 space-y-8">
                <h2 className="text-5xl font-playfair mb-4">{item.title}</h2>
                <p className="text-sm text-gray-400 mb-2">{item.category}</p>
                <p className="text-slate-800 ">{item.desc}</p>
                {/* Open Portfolio Button */}
                <button className="px-12 py-3 border-2 border-black text-sm tracking-widest uppercase hover:bg-black hover:text-white transition-colors duration-300 w-fit">
                  Check Live Site
                </button>
              </div>
            </div>
            <div
              className={`imgpart w-full flex-1 ${idx % 2 === 0 ? "order-first md:order-last" : "order-last md:order-first"} w-full h-auto`}
            >
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>

      {/* Footer Divider */}
      {/* <div className="border-t border-white/10 text-center">
        <p
          className="text-xs tracking-[0.3em] uppercase font-light"
          style={{ fontFamily: "sans-serif" }}
        >
          MORE COMING SOON
        </p>
      </div> */}
    </div>
  );
};

export default PortfoliosSection;
