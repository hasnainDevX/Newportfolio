import Navbar from "../Navbar";

const PortfolioHero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative "
      style={{
        backgroundImage:
          "url('https://belle-creative.co.uk/wp-content/uploads/2025/07/portfolio-images-02-copy.png')",
        backgroundColor: "#9CA086",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Optional overlay to darken image slightly */}
      <div className="absolute inset-0 bg-black/50"></div>

      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Content  */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-5 sm:px-6 md:px-8 lg:px-6 py-24 sm:py-32 md:py-40 lg:py-52 xl:py-64 max-w-6xl mx-auto min-h-screen">
        {/* Small Label */}
        <div className="text-[11px] sm:text-xs md:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-6 sm:mb-7 md:mb-8 opacity-90">
          Website Design and Development Packages
        </div>

        {/* Main Heading */}
        <h1
          className="text-[44px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0"
          style={{ fontFamily: "Libre Caslon Text, serif" }}
        >
         Your BRAND STORY is highly personal. That's why my process always starts with brand STRATEGY.
        </h1>

        {/* CTA Button */}
        <button
          className="mt-10 px-12 py-4  text-sm md:text-base font-medium tracking-wide transition-all shadow-lg shadow-gray-800 hover:opacity-90 cursor-pointer"
          style={{
            backgroundColor: "#95B0DD",
            fontFamily: "Lato, sans-serif",
            letterSpacing: "0.05em",
          }}
        >
          LET'S CHAT
        </button>
      </div>
    </div>
  );
};

export default PortfolioHero;
