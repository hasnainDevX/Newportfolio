const ExperienceSection = () => {
  return (
    <div className="min-h-screen w-full px-6 md:px-16 lg:px-24 py-16 flex items-center">
      <div className="bg-soft-blue/30 w-full max-w-6xl mx-auto p-12 md:p-16 lg:p-20 rounded-3xl relative overflow-hidden">
        {/* Decorative Keyboard Illustration */}
        <div className="absolute top-8 right-8 opacity-20">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="10" y="20" width="180" height="60" rx="8" />
            <line x1="30" y1="35" x2="170" y2="35" />
            <line x1="30" y1="50" x2="170" y2="50" />
            <line x1="30" y1="65" x2="170" y2="65" />
            <circle cx="180" cy="30" r="8" />
            <circle cx="180" cy="50" r="8" />
            <circle cx="180" cy="70" r="8" />
          </svg>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-5xl  font-black uppercase tracking-tight text-charcoal" style={{ fontFamily: "Libre Caslon Text, serif" }}>
            Industries I've Worked With
          </h2>
          
          <p className="text-xl md:text-2xl lg:text-2xl font-light leading-relaxed text-[#2a2a2a] max-w-4xl" style={{ fontFamily: "Georgia, serif" }}>
            Fashion designers / social media managers / beauty brands / wedding stationary / coaches / loneliness communities / candle makers / therapists / yoga studios / pet care & so much more
          </p>

          <button className="mt-8 inline-flex items-center gap-2 text-lg font-medium text-[#1a1a1a] hover:gap-4 transition-all duration-300 group">
            See my portfolio
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;