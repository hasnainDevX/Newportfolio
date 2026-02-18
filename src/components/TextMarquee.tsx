const TextMarquee = ({
  data,
  speed = 20,
  bgColor = "#2A2A2A",
  textColor = "#ffffff",
  hoverColor = "#7EB8D4",
  textSize = "1.875rem",
  height = "auto",
}: {
  data: string[];
  speed?: number;
  bgColor?: string;
  textColor?: string;
  hoverColor?: string;
  textSize?: string;
  height?: string;
}) => {
  const marqueeId = `marquee-${Math.random().toString(36).slice(2, 7)}`;

  return (
    <div>
      <div
        className="overflow-hidden whitespace-nowrap"
        style={{ backgroundColor: bgColor, fontFamily: "Libre Caslon Text, serif", height }}
      >
        <div
          id={marqueeId}
          className="inline-block font-black uppercase"
          style={{
            fontSize: textSize,
            color: textColor,
            paddingTop: height === "auto" ? "1.5rem" : undefined,
            paddingBottom: height === "auto" ? "1.5rem" : undefined,
            display: "inline-flex",
            alignItems: "center",
            height: height !== "auto" ? height : undefined,
          }}
        >
          {data.map((text, idx) => (
            <span
              key={idx}
              className="mx-8 transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = hoverColor)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textColor)}
            >
              {text}
            </span>
          ))}
          {data.map((text, idx) => (
            <span
              key={`repeat-${idx}`}
              className="mx-8 transition-colors duration-300"
              style={{ color: textColor }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = hoverColor)}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = textColor)}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes textmarquee-${marqueeId} {
          0%   { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        #${marqueeId} {
          animation: textmarquee-${marqueeId} ${speed}s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TextMarquee;