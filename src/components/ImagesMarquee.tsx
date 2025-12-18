import image1 from "../assets/image.png";

const ImagesMarquee = () => {
  const marqueeImages = [
    { src: image1, alt: "Image 1" },
    { src: image1, alt: "Image 2" },
    { src: image1, alt: "Image 3" },
    { src: image1, alt: "Image 4" },
  ];

  return (
    <div className="overflow-hidden py-12 bg-gray-50">
      <div className="relative">
        <div className="flex animate-marquee hover:pause whitespace-nowrap">
          {/* First set of images */}
          {marqueeImages.map((image, idx) => (
            <div
              key={`original-${idx}`}
             className={`inline-block mx-4 flex-shrink-0 transition-transform ${idx % 2 == 0 ? "hover:rotate-5" : "hover:-rotate-5"} `}
              style={{
                transform: `rotate(${idx % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {marqueeImages.map((image, idx) => (
            <div
              key={`duplicate-${idx}`}
              className={`inline-block mx-4 flex-shrink-0 transition-transform ${idx % 2 == 0 ? "hover:rotate-5" : "hover:-rotate-5"} `}
              style={{
                transform: `rotate(${idx % 2 === 0 ? "-5deg" : "5deg"})`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-64 w-auto object-cover rounded-lg shadow-lg"
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
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ImagesMarquee;
