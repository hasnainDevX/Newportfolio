import AnnouncementBar from "../AnnouncementBar";
import Navbar from "../Navbar";
import image from "../../assets/portfolio2.webp";

const EnquiryHero = () => {
  return (
    <div className="w-full">

      <AnnouncementBar/>

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero image ── */}
      <div className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
        <img
          src={image}
          alt="Enquiry hero"
          className="w-full h-full object-cover object-center"
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
                Captivating and Converting Portfolio &nbsp;~&nbsp;
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiryHero;