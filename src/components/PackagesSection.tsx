import Package11Image from "../assets/vasite3.jpeg"
import Package1Image from "../assets/vasite2.jpeg"
import Package2Image from "../assets/maceysmethod3.png"
import Package3Image from "../assets/allingoodhans1.png"

const PackagesSection = () => {
  return (
    <div className="w-full min-h-screen ">
      <hr className="border-t border-gray-500" />
      <div className="package1 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-0 py-16">
        {/* Left Decorative Part */}
        <div className="leftdecor hidden lg:flex flex-[0_0_15%] lg:py-16 py-8">
            <img className="w-full h-full object-cover" src={Package11Image} alt="Package 1 Decorative Image" />
        </div>

        {/* Center Image Part */}
        <div className="centerimage flex-[0_0_35%] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            <img
              src={Package1Image}
              alt="The Foundation Site"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Text Part */}
        <div className="textpart flex-[0_0_50%] p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            {/* Number */}
            <p className="text-sm font-light mb-4 tracking-wider">01</p>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Foundation Site
            </h2>

            {/* Description */}
            <p className="text-base leading-relaxed mb-8 text-gray-800">
              Stop second-guessing every design choice. Start showing up with
              consistency and confidence. A complete brand identity that brings
              clarity to your positioning and sophistication to every
              touchpoint.
            </p>

            {/* Timeline and Investment */}
            <div className="mb-8">
              <p className="text-sm mb-2">
                <span className="font-semibold">Timeline:</span> 1 to 2 weeks
              </p>
              <p className="text-sm">
                <span className="font-semibold">Investment:</span> $1600
              </p>
            </div>

            <div className="w-full h-px mb-8"></div>

            {/* Deliverables Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-10">
              <div>
                <p className="text-xs tracking-widest uppercase mb-4">
                  Brand Questionnaire
                </p>
                <p className="text-xs tracking-widest uppercase mb-4">
                  Strategy Session
                </p>
                <p className="text-xs tracking-widest uppercase">
                  Custom Color Palette
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase mb-4">
                  Refined Font Curation
                </p>
                <p className="text-xs tracking-widest uppercase mb-4">
                  Timeless Logo Suite
                </p>
                <p className="text-xs tracking-widest uppercase">
                  Brand Guidelines
                </p>
              </div>
            </div>

            {/* Apply Button */}
            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-500" />
      {/* Package 2 - Web Design */}
      <div className="package2 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-0 py-16">
        {/* Left Text Part */}
        <div className="leftpart flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            {/* Number */}
            <p className="text-sm font-light mb-4 tracking-wider">02</p>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Web Design
            </h2>

            {/* Description */}
            <p
              className="text-base leading-relaxed text-gray-800"
              style={{ textAlign: "justify" }}
            >
              Your elevated online presence. Fast. We begin with a premium
              Northfolk template, or blend several. Then customize it to feel
              unmistakably you. Strategic. Refined. Timeless. Ready to attract
              the clients you've been waiting for. Start sharing your website
              with confidence.
            </p>
          </div>
        </div>

        {/* Center Image Part */}
        <div className="centerpart flex-1 flex items-center justify-center ">
          <div className="w-full max-w-md">
            <img
              src={Package2Image}
              alt="Web Design Mockup"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Details Part */}
        <div className="rightpart flex-1 p-8 lg:p-16 flex flex-col justify-center ">
          <div className="max-w-md">
            {/* Timeline and Investment */}
            <div className="mb-8">
              <p className="text-sm mb-2">
                <span className="font-semibold">Timeline:</span> 1 to 3 weeks
              </p>
              <p className="text-sm">
                <span className="font-semibold">Investment:</span> Starting at
                $3400
              </p>
            </div>

            <div className="w-full h-px mb-8"></div>

            {/* Deliverables List */}
            <div className="space-y-4 mb-10">
              <p className="text-xs tracking-widest uppercase">
                Strategy Questionnaire
              </p>
              <p className="text-xs tracking-widest uppercase">Copy Template</p>
              <p className="text-xs tracking-widest uppercase">
                Mobile Optimized Design
              </p>
              <p className="text-xs tracking-widest uppercase">
                Basic SEO Optimization
              </p>
              <p className="text-xs tracking-widest uppercase">
                Marketing Integration
              </p>
              <p className="text-xs tracking-widest uppercase">
                Website Training
              </p>
              <p className="text-xs tracking-widest uppercase">
                Post Launch Support
              </p>
            </div>

             {/* Apply Button */}
            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>
      <hr className="border-t border-gray-500" />
      {/* Package 3 - VIP Design Day */}
      <div className="package3 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-0 py-16">
        {/* Left Image Part */}
        <div className="leftimage flex-1 p-8 lg:p-16 flex items-center justify-center ">
          <div className="w-full max-w-md">
            <img
              src={Package3Image}
              alt="VIP Design Day"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Center Content Part */}
        <div className="centercontent flex-1 p-8 lg:p-16 flex flex-col justify-center ">
          <div className="max-w-lg">
            {/* Number */}
            <p className="text-sm font-light mb-4 tracking-wider">03</p>

            {/* Heading */}
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              VIP Design Day
            </h2>

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-8 text-gray-800"
              style={{ textAlign: "justify" }}
            >
              Have a mile-long design to-do list that keeps getting pushed to
              the bottom of your priorities? Book a VIP Design Day and I'll
              knock out all those lingering projects in one focused, intensive
              session—so you can finally check them off and move forward.
            </p>

            <div className="w-full h-px  mb-8"></div>

            {/* Why VIP Day Section */}
            <h3 className="text-xs tracking-widest uppercase mb-6">
              Why a VIP Day is the answer
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p
                  className="text-base italic font-serif"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  I really just dont have time to do this one thing
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p
                  className="text-base italic font-serif"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  I'm not ready for a completely custom project
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p
                  className="text-base italic font-serif"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  I can't wait 3 months
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" />
                  </svg>
                </div>
                <p
                  className="text-base italic font-serif"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  I want a knockout design with a "wow factor" NOW
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar Part */}
        <div className="rightsidebar flex-1 p-8 lg:p-16 flex flex-col justify-center lg:border-l border-gray-300">
          <div className="max-w-md">
            {/* Timeline and Investment */}
            <div className="mb-8">
              <p className="text-sm mb-2">
                <span className="font-semibold">Timeline:</span> 2 days total
              </p>
              <p className="text-sm">
                <span className="font-semibold">Investment:</span> $1200
              </p>
            </div>

            {/* What we can help with */}
            <h3
              className="text-lg font-serif mb-6"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              What we can help with:
            </h3>

            <div className="space-y-3 mb-10">
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  Sales Page Design
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">1 Web Page</p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  Website Edits
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  Instagram Templates
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  Presentation Design
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  Business Cards
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-xs">•</span>
                <p className="text-xs tracking-widest uppercase">
                  And Much More!
                </p>
              </div>
            </div>

             {/* Apply Button */}
            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
