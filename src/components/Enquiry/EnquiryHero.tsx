import Navbar from "../Navbar";

const EnquiryHero = () => {
  return (
    <div
      className="max-h-[80vh] bg-cover bg-center bg-no-repeat relative "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517145801359-8f756887bb20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center center",
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
          ENQUIRY FORM
        </div>

        {/* Main Heading */}
        <h1
          className="text-lg sm:text-4xl md:text-5xl lg:text-6xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0"
          style={{ fontFamily: "Libre Caslon Text, serif" }}
        >
          Designing & building impactful websites for businesses that are ready
          to shine
        </h1>
      </div>
    </div>
  );
};

export default EnquiryHero;
