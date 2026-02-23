const AboutMe = () => {
  return (
    <section className="bg-[#F5E6A3] min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT: Stacked overlapping images */}
        <div className="relative h-[520px] sm:h-[600px] lg:h-[700px]">
          <div className="absolute top-0 left-4 sm:left-10 w-[260px] sm:w-[320px] lg:w-[380px] shadow-2xl z-20 -rotate-6">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f6a5ac31c4b325b1b4ee2fd/bf63e608-d43c-4243-bee5-e17e0f5d06c8/Alice+benham+workshop+coming+soon+page.jpg?format=500w"
              alt="Project"
              className="w-full h-auto object-cover block"
            />
          </div>

          <div className="absolute top-[140px] sm:top-[160px] left-[100px] sm:left-[140px] lg:left-[160px] w-[260px] sm:w-[310px] lg:w-[360px] shadow-2xl z-30 rotate-3">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f6a5ac31c4b325b1b4ee2fd/6fe0811a-5ba0-4264-ae52-1a0c32d02b59/Pretty+Little+Marketer+Squarespace+homepage.jpg?format=500w"
              alt="Project"
              className="w-full h-auto object-cover block"
            />
          </div>

          <div className="absolute top-[300px] sm:top-[340px] left-0 w-[240px] sm:w-[290px] lg:w-[340px] shadow-2xl z-10 -rotate-[4deg]">
            <img
              src="https://images.squarespace-cdn.com/content/v1/5f6a5ac31c4b325b1b4ee2fd/bf63e608-d43c-4243-bee5-e17e0f5d06c8/Alice+benham+workshop+coming+soon+page.jpg?format=500w"
              alt="Project"
              className="w-full h-auto object-cover block"
            />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div className="flex flex-col gap-7">
          <h2 className="font-libre-caslon italic text-[2.4rem] sm:text-5xl lg:text-6xl text-[#1a1a1a] leading-[1.1] tracking-tight">
            Hi, I'm Hasnain.
          </h2>

          <div className="w-10 h-px bg-[#1a1a1a] opacity-40" />

          <div className="flex flex-col gap-4">
            <p className="font-sans text-base sm:text-lg text-[#1a1a1a] leading-relaxed">
              Web development found me in 2022 — and it stuck. What started as
              curiosity quickly became building real things for real businesses,
              and I never looked back.
            </p>

            <p className="font-sans text-xs sm:text-base text-[#1a1a1a] leading-relaxed">
              I'm not your average freelancer. Studying software engineering
              means I understand how the web actually works — I build what no
              drag-and-drop builder can. Clean, custom, engineered to perform.
            </p>

            <p className="font-sans text-xs sm:text-base text-[#1a1a1a] leading-relaxed">
              Over two years of freelancing, I've delivered projects for clients
              across the globe — working mostly with virtual assistants and
              coaches in the UK, building sites that don't just look good. They
              work.
            </p>
          </div>

          <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300 my-4 max-w-xs">
            See My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
