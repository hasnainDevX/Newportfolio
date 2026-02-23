import logo from "../assets/logo.png";
const PackagesAbout = () => {
  return (
    <div className="w-full min-h-screen flex flex-col md:py-20">
      {/* Main Content: Three columns */}
      <div className="flex flex-1 overflow-hidden">
        {/* Left image */}
        <div className="md:block hidden w-[12%] relative overflow-hidden">
          <img
            src="https://www.belle-creative.co.uk/cdn/shop/files/Shopify_eCommerce_Webites_1.jpg?v=1767095179"
            alt="Shopify eCommerce Websites"
            className="w-full h-full object-cover"
          />
        </div>
  
        {/* Center text */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-[4.5rem] py-16 text-center bg-white space-y-12">
           <img src={logo} alt="Enquiry About" className="w-20 h-20" />
        
          <h1 className="text-3xl sm:text-4xl md:text-5xl leading-[1.15] sm:leading-[1.12] md:leading-[1.1] mb-6 sm:mb-7 md:mb-8 px-2 sm:px-0 font-playfair md:capitalize uppercase tracking-wide text-charcoal ">
            Skip the chaos of DIY design and launch with a Custom coded site
            that performs as good as it looks
          </h1>

          <div className="max-w-3xl space-y-5 text-gray-800 md:text-base text-sm leading-relaxed font-sans">
            <p>
              Growth isn't just about looking better. It's about performing
              better. It's about guiding your customers from click to checkout
              with ease, trust and intention. It's about building a Shopify
              experience that doesn't just match your product quality, it
              amplifies it.
            </p>
            <p>
              At Belle Creative, we marry conversion psychology, elevated
              merchandising and bespoke design to craft Shopify experiences that
              feel as polished as a flagship boutique.
            </p>
            <p>
              If you're ready to stop forcing your brand into a box it was never
              meant to fit into, we'll custom build something that unlocks the
              next level of your business.
            </p>
          </div>

          <button className="px-16 py-3 bg-soft-beige cursor-pointer border-charcoal border-1 rounded-xl hover:bg-charcoal text-sm tracking-widest uppercase hover:text-white transition-colors duration-300">
            Explore Packages
          </button>
        </div>

        {/* Right image */}
        <div className="w-[12%] relative overflow-hidden md:block hidden">
          <img
            src="https://www.belle-creative.co.uk/cdn/shop/files/shopify-site-design-25.webp?v=1767104004"
            alt="Shopify site design"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PackagesAbout;
