import React, { useState } from 'react';

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
    <footer className="bg-gradient-to-b from-soft-blue to-charcoal/90 text-white">
      {/* Top Banner */}
      <div className="bg-charcoal text-center py-3 text-sm font-mono tracking-wider">
        DOWNLOAD OUR 2026 OFFERINGS & PRICING GUIDE
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Tagline */}
        <div className="text-center mb-16">
          <h2 className="text-xl md:text-2xl font-light leading-relaxed max-w-3xl mx-auto font-latore">
            CUSTOM CODED WEBSITES FOR VISIONARY BRANDS READY TO FLOURISH.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-serif mb-6 border-b border-white/30 pb-3">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-amber-300 transition-colors">Home</a></li>
              <li><a href="/our-story" className="hover:text-amber-300 transition-colors">Our Story</a></li>
              <li><a href="/bespoke-web-development" className="hover:text-amber-300 transition-colors">Bespoke Web Development</a></li>
              <li><a href="/shopify-site-design" className="hover:text-amber-300 transition-colors">CUSTOM CODED DEVELOPMENT</a></li>
              <li><a href="/one-page-websites" className="hover:text-amber-300 transition-colors">One Page Websites</a></li>
              <li><a href="/website-design-cheshire" className="hover:text-amber-300 transition-colors">Website Design Next.js</a></li>
              <li><a href="/website-audits" className="hover:text-amber-300 transition-colors">Website Audits</a></li>
              <li><a href="/portfolio" className="hover:text-amber-300 transition-colors">Portfolio</a></li>
              <li><a href="/blog" className="hover:text-amber-300 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Follow Along - Instagram Grid */}
          <div>
            <h3 className="text-2xl font-serif mb-6 border-b border-white/30 pb-3">Follow Along</h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <div 
                  key={item}
                  className="aspect-square bg-gradient-to-br from-amber-200 to-rose-300 rounded hover:scale-105 transition-transform cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <div className="mb-6">
              <p className="text-sm leading-relaxed mb-6">
                A collection of thoughts, must-knows, inspiration sparks and digital joy: straight to your inbox.
              </p>
            </div>
            
            <div className="space-y-3">
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-full bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                onClick={handleSubscribe}
                className="w-full px-4 py-3 rounded-full bg-rose-300 text-gray-800 font-medium hover:bg-rose-400 transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Free Resources */}
        <div className="mt-16">
          <h3 className="text-2xl font-serif mb-6 border-b border-white/30 pb-3">Free Resources</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-amber-300 transition-colors">Services & Pricing Guide 2025</a></li>
            <li><a href="#" className="hover:text-amber-300 transition-colors">DIY Website Audit Checklist</a></li>
            <li><a href="#" className="hover:text-amber-300 transition-colors">Essential SEO Guide For New Websites</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
            <div className="flex gap-6">
              <a href="/terms" className="hover:text-amber-300 transition-colors">Terms & Conditions of Use</a>
              <a href="/privacy" className="hover:text-amber-300 transition-colors">Privacy Policy</a>
            </div>
            <p>© Copyright Hasnain Webworks {new Date().getFullYear()}</p>
          </div>
          <div className="text-center md:text-right mt-4 space-y-1">
            <p className="text-xs uppercase tracking-wider">I'M A WEBSITE DESIGNER IN PAKISTAN, BUT SERVE CLIENTS WORLDWIDE</p>
            <p className="text-xs">Our current time: {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'Asia/Karachi' })} PKT</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;