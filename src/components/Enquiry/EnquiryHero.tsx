import AnnouncementBar from "../AnnouncementBar";
import Navbar from "../Navbar";
import enquiryHero from "../../assets/enquiryhero.avif"

const EnquiryHero = () => {
  return (
    <div className="w-full">
      <AnnouncementBar />
      <Navbar />

      <div className="relative w-full overflow-hidden" style={{ height: "80vh" }}>
        <img
          src={enquiryHero}
          alt="Enquiry hero"
          className="w-full h-full object-cover object-top"
          style={{ transform: "translateZ(0)" }}
        />

        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              width: "max-content",  
              animation: "heromarquee 59s linear infinite",
            }}
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

      <style>{`
        @keyframes heromarquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default EnquiryHero;