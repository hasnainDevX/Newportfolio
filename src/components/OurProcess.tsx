import React from 'react';

const OurProcess = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
          "url('https://belle-creative.co.uk/wp-content/uploads/2025/07/creative-wordpress-website-01-1-scaled.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Main Content */}
            <div className="text-white space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">
                Your brand story is <em className="italic">highly personal.</em>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl font-serif leading-relaxed">
                That's why my process always starts with STRATEGY. By grounding the design in your brand's core values, your brand identity and website will not only look like you but feel like you, bringing your unique story to life throughout the design. As a result, resonate deeply with your aligned audience.
              </p>
            </div>

            {/* Right Column - Process Steps */}
            <div className="text-white space-y-12 lg:space-y-16">
              {/* Clarify */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic">
                  Clarify
                </h2>
                <p className="text-base leading-relaxed">
                  Through a detailed strategy guide and a 1:1 session, we'll lay the groundwork of your brand, get clear on your vision, and establish aligned objectives for moving forward.
                </p>
              </div>

              {/* Construct */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic">
                  Construct
                </h2>
                <p className="text-base leading-relaxed">
                  This is where your project takes shape. We'll develop your aesthetic that naturally feels like you and reflects who you are while resonating with your dream client.
                </p>
              </div>

              {/* Complete */}
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic">
                  Complete
                </h2>
                <p className="text-base leading-relaxed">
                  We'll launch your beautiful project and you'll receive continued support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProcess;