import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');

  const handleSubscribe = () => {
    if (email && firstName) {
      console.log('Subscribed:', { firstName, email });
      alert('Thank you for subscribing!');
      setEmail('');
      setFirstName('');
    }
  };

  return (
    <footer className="md:bg-yellowish text-[#2a2a2a]">
      {/* Main Footer Content */}
        {/* Tagline */}
        {/* <div className="text-center mx-auto px-8 pt-20 pb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight mx-auto" style={{ fontFamily: "'Podium Soft', sans-serif", fontWeight: 700, letterSpacing: '0.02em' }}>
            Custom Coded Websites for Visionary Brands Ready to Flourish
          </h2>
        </div> */}
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Home</a></li>
              <li><a href="/our-story" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Our Story</a></li>
              <li><a href="/bespoke-web-development" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Bespoke Development</a></li>
              <li><a href="/shopify-site-design" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Custom Coded Sites</a></li>
              <li><a href="/portfolio" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Portfolio</a></li>
              <li><a href="/blog" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Blog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Pricing Guide 2025</a></li>
              <li><a href="#" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">Website Audit Checklist</a></li>
              <li><a href="#" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200 text-sm">SEO Essentials</a></li>
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Follow</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="aspect-square bg-[#95b0dd] transition-colors duration-300 cursor-pointer"
                />
              ))}
            </div>
            {/* <div className="flex gap-4">
              <a href="#" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="text-[#2a2a2a] hover:text-[#95b0dd] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
              </a>
            </div> */}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Newsletter</h3>
            <p className="text-xs leading-relaxed mb-5 text-[#2a2a2a]/80">
              Thoughts, inspiration and digital joy delivered to your inbox.
            </p>
            
            <div className="space-y-2">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-[#2a2a2a] placeholder-[#2a2a2a]/40 focus:outline-none focus:ring-1 focus:ring-[#95b0dd] text-xs"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 bg-white text-[#2a2a2a] placeholder-[#2a2a2a]/40 focus:outline-none focus:ring-1 focus:ring-[#95b0dd] text-xs"
              />
              <button
                onClick={handleSubscribe}
                className="w-full px-4 py-2.5 bg-[#2a2a2a] text-[#f5f2eb] font-medium  transition-all duration-300 text-xs uppercase tracking-wider"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]/10">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-[#2a2a2a]/60">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a href="/terms" className="hover:text-[#95b0dd] transition-colors duration-200">Terms & Conditions</a>
              <a href="/privacy" className="hover:text-[#95b0dd] transition-colors duration-200">Privacy Policy</a>
            </div>
            <p>© {new Date().getFullYear()} Hasnain Webworks</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;