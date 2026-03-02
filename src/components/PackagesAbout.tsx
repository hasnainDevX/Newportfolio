import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import leftImage from "../assets/ecomsite1.jpeg";
import rightImage from "../assets/image2.png";
const PackagesAbout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:py-20">
      {/* Main Content: Three columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left image */}
        <div className="md:block hidden w-[12%] relative overflow-hidden">
          <img
            src={leftImage}
            alt="Left Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center text */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-[4.5rem] py-16 text-center bg-white space-y-12">
          <img src={logo} alt="Enquiry About" className="w-20 h-20" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0 font-playfair md:capitalize uppercase tracking-wide text-charcoal">
            Your website should be working for you — not just sitting there
            looking pretty
          </h1>

          <div className="max-w-3xl space-y-5 text-gray-800 md:text-base text-sm leading-relaxed font-sans">
            <p>
              Most small business websites have the same problem — they were
              built quickly, on a budget, or on a builder that was never
              designed to grow with you. They look fine. But fine doesn't
              convert. Fine doesn't load in under two seconds. Fine doesn't make
              someone trust you enough to buy.
            </p>
            <p>
              Every package here is custom-coded from scratch — no templates, no
              drag-and-drop shortcuts, no bloated plugins slowing things down.
              Just clean, intentional code built around what your business
              actually needs, and designed to give the kind of first impression
              that makes people stay.
            </p>
            <p>
              Whether you're launching for the first time or ready to replace
              something that's been holding you back — there's a package built
              for where you are right now, and where you're going next.
            </p>
          </div>
          <Link to="/packages">
            <button className="px-16 py-3 bg-soft-beige cursor-pointer border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
              Explore Packages
            </button>
          </Link>
        </div>

        {/* Right image */}
        <div className="w-[12%] relative overflow-hidden md:block hidden">
          <img
            src={rightImage}
            alt="Right Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesAbout;
