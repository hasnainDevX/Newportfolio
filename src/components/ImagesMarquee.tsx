import image1 from "../assets/portfolio1.webp";
import image2 from "../assets/portfolio2.webp";
import metasite from "../assets/metasite1.png";

const marqueeImages = [
  { src: image1, alt: "Project 1" },
  { src: image2, alt: "Project 2" },
  { src: metasite, alt: "MetaSite" },
];

const ImagesMarquee = () => {
  return (
    <div className="overflow-hidden py-16 bg-gray-50">
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: "marquee 18s linear infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "paused")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.animationPlayState = "running")}
      >
        {[...marqueeImages, ...marqueeImages].map((image, idx) => (
          <div
            key={idx}
            className="inline-block mx-6 flex-shrink-0"
            style={{
              // NO rotation during scroll — this is what caused the blur
              // Rotation only applied on hover via CSS (static, no animation conflict)
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform =
                idx % 2 === 0 ? "rotate(3deg) scale(1.03)" : "rotate(-3deg) scale(1.03)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg) scale(1)";
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-48 md:h-72 w-auto rounded-xl object-cover"
              style={{
                // Ensures image is rendered at its own compositing layer — crisp
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
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

        @media (max-width: 768px) {
          .overflow-hidden > div {
            animation-duration: 10s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImagesMarquee;