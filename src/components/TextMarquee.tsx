
const TextMarquee = ({ data, speed = 20 }: { data: string[], speed?: number }) => {
  return (
    <div>
        <div className="overflow-hidden whitespace-nowrap bg-charcoal" style={{ fontFamily: "Libre Caslon Text, serif" }}>
            <div className="animate-textmarquee inline-block text-3xl font-black bg-[#2A2A2A] uppercase text-white py-6">
                {data.map((text, idx)=> (
                    <span key={idx} className="mx-8 hover:text-soft-blue">{text}</span>
                ))}
                {data.map((text, idx)=> (
                    <span key={`repeat-${idx}`} className="mx-8 hover:text-soft-blue">{text}</span>
                ))}
            </div>
        </div>
        <style>
            {`
            @keyframes textmarquee {
              0% {
                transform: translateX(0%);
                }
                100% {
                transform: translateX(-50%);
                }
            }
            .animate-textmarquee {
              animation: textmarquee ${speed}s linear infinite;
            }
            `}
        </style>
    </div>
  )
}

export default TextMarquee
