import { Skiper17 } from "./ui/ServiceCards";

const Services = () => {
  // Dynamic height calculation: 3 cards × 150vh per card + 50vh for heading
  const numberOfCards = 3;
  const heightPerCard = 100; // vh per card
  const headingSpace = 10; // vh for heading section
  const totalHeight = numberOfCards * heightPerCard + headingSpace;

  return (
    <div 
      className="w-full bg-[#F9F6F1]"
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Heading Section */}
      <div className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12 px-5 sm:px-6 md:px-16 ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center text-[#2A2A2A] leading-tight tracking-tight">
          Web Design and Development{" "}
          <span className="text-[#95B0DD]">Services</span>
        </h1>
      </div>

      {/* Sticky Cards */}
      <Skiper17 />
    </div>
  );
};

export default Services;