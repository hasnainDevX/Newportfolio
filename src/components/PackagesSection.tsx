import Package11Image from "../assets/vasite3.jpeg";
import Package2Image from "../assets/vasite4.jpeg";
import Package1Image from "../assets/maceysmethod3.png";
import Package3Image from "../assets/ecomsite1.jpeg";

// ✓ checkmark + bold key phrase + optional lighter trailing text
const Deliverable = ({
  bold,
  normal = "",
}: {
  bold: string;
  normal?: string;
}) => (
  <div className="flex items-start gap-3 mb-4">
    <span
      className="mt-[3px] shrink-0 text-sm leading-none"
      style={{ fontFamily: "serif", color: "#b5924c" }}
    >
      ✓
    </span>
    <p className="text-sm leading-relaxed text-[#2a2a2a]">
      <span className="font-semibold">{bold}</span>
      {normal && (
        <span className="font-normal text-[#2a2a2a]/60"> {normal}</span>
      )}
    </p>
  </div>
);

// Large serif price + small-caps turnaround — inspired by belle-creative
const PriceBlock = ({
  price,
  turnaround,
  note,
}: {
  price: string;
  turnaround: string;
  note?: string;
}) => (
  <div className="mt-8 mb-8 border-t border-[#2a2a2a]/10 pt-8">
    <p
      className="text-4xl text-[#2a2a2a] mb-1"
      style={{ fontFamily: "Playfair Display, serif" }}
    >
      {price}
    </p>
    <p className="text-xs tracking-[0.22em] uppercase text-[#2a2a2a]/60">
      {turnaround}
    </p>
    {note && <p className="text-xs text-[#2a2a2a]/40 italic mt-1">{note}</p>}
  </div>
);

const PackagesSection = () => {
  return (
    <div className="w-full min-h-screen">
      <hr className="border-t border-gray-500" />

      {/* ── 01 The Foundation Site ── */}
      <div className="package1 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-0 py-16">
        <div className="leftdecor hidden lg:flex flex-[0_0_15%] lg:py-16 py-8">
          <img
            className="w-full h-full object-cover"
            src={Package11Image}
            alt=""
          />
        </div>

        <div className="centerimage flex-[0_0_35%] flex items-center justify-center p-8 lg:p-16">
          <div className="w-full max-w-md">
            <img
              src={Package1Image}
              alt="The Foundation Site"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="textpart flex-[0_0_50%] p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-xl">
            <p className="text-sm font-light mb-4 tracking-wider">01</p>
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Foundation Site
            </h2>
            <p className="text-base leading-relaxed mb-8 text-gray-800">
              Stop second-guessing every design choice. Start showing up with
              consistency and confidence. Your digital front door that actually
              works — a website that loads instantly, looks professional, and
              turns visitors into customers without the headaches of DIY
              builders.
            </p>

            <p className="text-xs tracking-[0.22em] uppercase text-[#2a2a2a]/40 mb-5">
              What's included
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mb-6">
              <div>
                <Deliverable
                  bold="Custom-coded Website"
                  normal="built from scratch"
                />
                <Deliverable
                  bold="Fast loading speeds"
                  normal="and performance tuning"
                />
                <Deliverable
                  bold="Contact forms"
                  normal="and essential integrations"
                />
              </div>
              <div>
                <Deliverable
                  bold="SEO, analytics and copywriting"
                  normal="for a strong launch"
                />
                <Deliverable
                  bold="Free hosting setup"
                  normal="& domain guidance"
                />
                <Deliverable bold="30 days" normal="of post-launch support" />
              </div>
            </div>

            <PriceBlock price="£200–£400" turnaround="1–2 weeks turnaround" />

            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Book The Foundation Site
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-500" />

      {/* ── 02 The Signature Site ── */}
      <div className="package2 flex flex-col lg:flex-row w-full h-auto gap-8 lg:gap-0 py-16">
        <div className="leftpart flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            <p className="text-sm font-light mb-4 tracking-wider">02</p>
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Signature Site
            </h2>
            <p
              className="text-base leading-relaxed text-gray-800"
              style={{ textAlign: "justify" }}
            >
              Elevate your online presence with a website that commands
              attention and builds trust — the kind that makes potential
              customers think 'this business knows what they're doing'.
            </p>
          </div>
        </div>

        <div className="centerpart flex-1 flex items-center justify-center">
          <div className="w-full max-w-md">
            <img
              src={Package2Image}
              alt="The Signature Site"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="rightpart flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.22em] uppercase text-[#2a2a2a]/40 mb-5">
              What's included
            </p>

            <Deliverable
              bold="Multi-page custom-coded website"
              normal="with advanced features"
            />
            <Deliverable
              bold="Optimised for speed and SEO"
              normal="Core Web Vitals compliant"
            />
            <Deliverable
              bold="Professional copywriting"
              normal="consultation session"
            />
            <Deliverable
              bold="Advanced SEO implementation"
              normal="with schema markup"
            />
            <Deliverable
              bold="Custom animations"
              normal="and interactive elements"
            />
            <Deliverable
              bold="Analytics setup"
              normal="and conversion tracking"
            />
            <Deliverable
              bold="Email marketing integration"
              normal="and lead capture forms"
            />
            <Deliverable
              bold="60 days"
              normal="of post-launch support and updates"
            />
            <Deliverable
              bold="Self-managed content system"
              normal="— no developer needed"
            />

            <PriceBlock
              price="£500–£1000"
              turnaround="3–4 weeks turnaround"
              note="2-month payment plans available"
            />

            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Book The Signature Site
            </button>
          </div>
        </div>
      </div>

      <hr className="border-t border-gray-500" />

      {/* ── 03 The Complete Vision ── */}
      <div className="package3 flex flex-col lg:flex-row w-full h-auto gap-0 py-16">
        <div className="leftimage flex-1 p-8 lg:p-16 flex items-center justify-center">
          <div className="w-full max-w-md">
            <img
              src={Package3Image}
              alt="The Complete Vision"
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="centercontent flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-lg">
            <p className="text-sm font-light mb-4 tracking-wider">03</p>
            <h2
              className="text-5xl lg:text-6xl font-serif mb-6 leading-tight"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              The Complete Vision
            </h2>
            <p
              className="text-base leading-relaxed mb-8 text-gray-800"
              style={{ textAlign: "justify" }}
            >
              For businesses ready to stop playing small online. Every line of
              code written with intention, every detail designed to turn a
              first-time visitor into a repeat customer. This is the last
              website you'll ever need to build.
            </p>

            {/* <div className="w-full h-px mb-8" /> */}

            <h3 className="text-xs tracking-widest uppercase mb-6">
              Built to scale with you
            </h3>

            <div className="space-y-4 ">
              {[
                "Capture and nurture leads automatically",
                "Scale your business without working more hours",
                "Premium presence that justifies higher prices",
                `Turns visitors into customers through smart workflows`,
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
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
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rightsidebar flex-1 p-8 lg:p-16 flex flex-col justify-center lg:border-l border-gray-300">
          <div className="max-w-md">
            <p className="text-xs tracking-[0.22em] uppercase text-[#2a2a2a]/40 mb-5">
              What's included
            </p>

            <Deliverable
              bold="Everything in The Signature Site,"
              normal="plus:"
            />
            <Deliverable
              bold="Fully custom web application"
              normal="with advanced functionality"
            />
            <Deliverable
              bold="99+ PageSpeed scores"
              normal="performance-optimised code"
            />
            <Deliverable bold="Custom CMS" normal="or e-commerce integration" />
            <Deliverable
              bold="Custom admin panel"
              normal="for easy content and image updates"
            />
            <Deliverable
              bold="Multi-platform compatibility"
              normal="and PWA features"
            />
            <Deliverable
              bold="Ongoing maintenance"
              normal="and security updates included"
            />
            <Deliverable
              bold="90 days priority support"
              normal="with unlimited revisions"
            />

            <PriceBlock
              price="£1,500+"
              turnaround="6–8 weeks turnaround"
              note="3-month payment plans available"
            />

            <button className="px-16 py-3 cursor-pointer bg-soft-beige border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Book The Complete Vision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesSection;
