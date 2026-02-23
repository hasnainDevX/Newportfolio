import Navbar from "../components/Navbar";

const PackagesHero = () => {
  return (
    <div className="min-h-screen flex flex-col relative border-b border-gray-300">
      <header className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

      {/* Split layout */}
      <div className="flex flex-col md:flex-row min-h-screen">
        {/* LEFT — portrait image */}
        <div className="relative w-full md:w-1/2 min-h-[55vh] md:min-h-screen overflow-hidden">
          {/* Replace src with your actual image */}
          <img
            src="https://www.belle-creative.co.uk/cdn/shop/files/Wren_MacBook_Mockup_2.jpg?v=1767099449"
            alt="Designer portrait"
            className="absolute inset-0 w-full h-full object-cover object-top"
          />
          {/* subtle vignette at bottom edge so image blends nicely */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#ede8e2]/40 to-transparent pointer-events-none" />
        </div>

        {/* RIGHT — content */}
        <div
          className="w-full md:w-1/2 flex flex-col justify-center px-10 sm:px-14 md:px-16 lg:px-20 py-24 md:py-32"
        >
          {/* Eyebrow label */}
          <p
            className="text-xs tracking-[0.22em] uppercase font-sans font-semibold mb-7"
            style={{ color: "#b5973a" }}
          >
            Brand Strategy &amp; Web Design
          </p>

          {/* Main heading */}
          <h1
            className="font-libre-caslon font-normal leading-[1.1] text-4xl sm:text-5xl lg:text-[3.4rem] mb-8"
            style={{ color: "#2a2a2a" }}
          >
            Your brand story is <br className="hidden lg:block" />
            highly personal.{" "}
            <em
              className="block mt-2"
              style={{ color: "#b5973a", fontStyle: "italic" }}
            >
              That's why my process always starts with brand strategy.
            </em>
          </h1>

          {/* Gold divider */}
          <div
            className="w-10 h-px mb-10"
            style={{ backgroundColor: "#b5973a" }}
          />

          <button className="px-16 py-3 bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
            View Packages
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackagesHero;
