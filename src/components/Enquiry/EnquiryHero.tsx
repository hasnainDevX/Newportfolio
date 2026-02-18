import AnnouncementBar from "../AnnouncementBar";
import Navbar from "../Navbar";

const EnquiryHero = () => {
  return (
    <div className="w-full">

      <AnnouncementBar/>

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero image ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
        <img
          src="https://images.unsplash.com/photo-1517145801359-8f756887bb20?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Enquiry hero"
          className="w-full h-full object-cover object-top"
          style={{ transform: "translateZ(0)" }}
        />

        {/* ── Scrolling text overlay at bottom ── */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div
            className="flex whitespace-nowrap"
            style={{ animation: "heromarquee 18s linear infinite" }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <span
                key={i}
                className="shrink-0 text-soft-beige text-6xl md:text-8xl lg:text-9xl font-normal leading-none mx-8"
                style={{ fontFamily: '"Libre Caslon Text", serif' }}
              >
                Work with Hasnain Webworks &nbsp;~&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryHero;