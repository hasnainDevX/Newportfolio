import image1 from "../assets/dashboard1.jpeg";
import image5 from "../assets/maceysmethod2.png";
import image2 from "../assets/telecomsite2.png";
import image3 from "../assets/fruitysite1.jpeg";
import image7 from "../assets/nnsite1.jpeg";
import image4 from "../assets/getmeachai1.png";
import image6 from "../assets/vasite4.jpeg";

const marqueeImages = [
  { src: image1, alt: "Project 1" },
  { src: image2, alt: "Project 2" },
  { src: image3, alt: "MetaSite 1" },
  { src: image4, alt: "MetaSite 2" },
  { src: image5, alt: "Restaurant Site 1" },
  { src: image6, alt: "Restaurant Site 2" },
  { src: image7, alt: "Fruity Site 1" },
];

// Duplicate for seamless loop: scroll -50% lands exactly where it started
const loopedImages = [...marqueeImages, ...marqueeImages];

const ImagesMarquee = () => {
  return (
    <div className="overflow-hidden py-16 bg-gray-50">
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",         // keep all images in one row
          width: "max-content",       // ← key fix: don't collapse the row
          animation: "marquee 48s linear infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")
        }
      >
        {loopedImages.map((image, idx) => (
          <div
            key={idx}
            style={{
              flexShrink: 0,
              margin: "0 24px",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              // modulo keeps alternating tilt regardless of which copy you're hovering
              (e.currentTarget as HTMLDivElement).style.transform =
                idx % 2 === 0
                  ? "rotate(3deg) scale(1.03)"
                  : "rotate(-3deg) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                "rotate(0deg) scale(1)";
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                height: "300px",        // h-48
                width: "300px",         // w-72
                borderRadius: "12px",
                objectFit: "cover",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
                display: "block",
              }}
              loading="eager"
              decoding="sync"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        /* On mobile, speed it up */
        @media (max-width: 768px) {
          .overflow-hidden > div {
            animation-duration: 14s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImagesMarquee;