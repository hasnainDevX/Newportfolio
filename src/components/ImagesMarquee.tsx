import image1 from "../assets/image.png";
import metasite from "../assets/metasite1.png";

const ImagesMarquee = () => {
  const marqueeImages = [
    { src: image1, alt: "Image 1" },
    { src: image1, alt: "Image 2" },
    { src: metasite, alt: "MetaSite 1" },
    { src: metasite, alt: "MetaSite 2" },
  ];

  return (
    <div className="overflow-hidden py-12 bg-gray-50">
      <div className="relative">
        <div className="flex animate-marquee hover:pause whitespace-nowrap">
          {/* First set of images */}
          {marqueeImages.map((image, idx) => (
            <div
              key={`original-${idx}`}
              className={`inline-block mx-4 flex-shrink-0 transition-transform ${
                idx % 2 == 0 ? "hover:rotate-5" : "hover:-rotate-5"
              } `}
              style={{
                transform: `rotate(${idx % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-32 md:h-64 w-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeImages.map((image, idx) => (
            <div
              key={`duplicate-${idx}`}
              className={`inline-block mx-4 flex-shrink-0 transition-transform ${
                idx % 2 == 0 ? "hover:rotate-5" : "hover:-rotate-5"
              } `}
              style={{
                transform: `rotate(${idx % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-32 md:h-64 w-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
          @media (max-width: 768px) {
            .animate-marquee {
              animation: marquee 5s linear infinite;
            }
          }
      `}</style>
    </div>
  );
};

export default ImagesMarquee;
