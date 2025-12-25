
const TextMarquee = ({ data, speed = 20 }: { data: string[], speed?: number }) => {
  return (
    <div>
        <div className="overflow-hidden whitespace-nowrap bg-[#F0F0F0] py-4" style={{ fontFamily: "'Podium Soft', sans-serif", fontWeight: 300, letterSpacing: '0.03em' }}>
            <div className="animate-textmarquee inline-block text-4xl md:text-5xl lg:text-6xl font-black text-[#2A2A2A] uppercase">
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