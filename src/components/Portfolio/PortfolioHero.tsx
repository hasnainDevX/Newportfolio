import Navbar from "../Navbar";

const PortfolioHero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage:
          "url('https://belle-creative.co.uk/wp-content/uploads/2025/07/portfolio-images-02-copy.png')",
        backgroundColor: "#9CA086",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Warm overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(30,20,10,0.55)" }}
      />

      <header className="relative z-50">
        <Navbar />
      </header>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 sm:px-10 md:px-16 min-h-screen max-w-5xl mx-auto py-6 md:py-12">
        {/* Heading */}
        <div>
          <h1 className="font-normal leading-[1.12] font-libre-caslon text-3xl sm:text-4xl md:text-6xl max-w-5xl text-white uppercase md:mt-24">
            Your brand story is highly personal{" "}
            <em style={{ color: "#e8dfd5", fontStyle: "italic" }}>
              That's why my process always starts with brand strategy.
            </em>
          </h1>
        </div>
        {/* Gold divider */}
        <div
          className="w-10 h-px mb-10"
          style={{ backgroundColor: "#b5973a" }}
        />

        {/* CTA — light border so it reads on dark bg */}
        <button
          className="px-16 py-3 rounded-xl text-sm tracking-widest uppercase font-sans transition-all duration-300"
          style={{
            backgroundColor: "transparent",
            border: "1px solid #e8dfd5",
            color: "#faf8f4",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#e8dfd5";
            (e.currentTarget as HTMLButtonElement).style.color = "#2a2a2a";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.color = "#faf8f4";
          }}
        >
          Let's Chat
        </button>
      </div>
    </div>
  );
};

export default PortfolioHero;
