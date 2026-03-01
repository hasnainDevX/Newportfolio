import { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = () => {
    if (!email || !firstName) return;

    setStatus('loading');

    emailjs
      .send(
        'your_service_id',           // ← replace with your EmailJS service ID
        'your_newsletter_template_id', // ← replace with your newsletter template ID
        {
          from_name: firstName,
          from_email: email,
        },
        'your_public_key'            // ← replace with your EmailJS public key
      )
      .then(() => {
        setStatus('success');
        setEmail('');
        setFirstName('');
      })
      .catch(() => {
        setStatus('error');
      });
  };

  return (
    <footer className="md:bg-yellowish text-[#2a2a2a] rounded-t-4xl">
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Home</Link></li>
              <li><Link to="/about" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">About</Link></li>
              <li><Link to="/packages" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Packages</Link></li>
              <li><Link to="/portfolio" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Portfolios</Link></li>
              <li><Link to="/enquiry" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Enquiry</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Resources</h3>
            <ul className="space-y-3">
              <li><Link to="#" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Pricing Guide 2025</Link></li>
              <li><Link to="#" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">Website Audit Checklist</Link></li>
              <li><Link to="#" className="text-[#2a2a2a] hover:text-gold transition-colors duration-200 text-sm">SEO Essentials</Link></li>
            </ul>
          </div>

          {/* Follow */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Follow</h3>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="aspect-square bg-gold transition-colors duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h3 className="text-base font-semibold mb-6 uppercase tracking-widest" style={{ fontFamily: 'system-ui, sans-serif' }}>Newsletter</h3>
            <p className="text-xs leading-relaxed mb-5 text-[#2a2a2a]/80">
              Thoughts, inspiration and digital joy delivered to your inbox.
            </p>

            {status === 'success' ? (
              <p className="text-xs text-green-700">You're in — talk soon.</p>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white text-[#2a2a2a] placeholder-[#2a2a2a]/40 focus:outline-none focus:ring-1 focus:ring-gold text-xs"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white text-[#2a2a2a] placeholder-[#2a2a2a]/40 focus:outline-none focus:ring-1 focus:ring-gold text-xs"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={status === 'loading'}
                  className="w-full px-4 py-2.5 bg-[#2a2a2a] text-[#f5f2eb] font-medium transition-all duration-300 text-xs uppercase tracking-wider disabled:opacity-50"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                </button>
                {status === 'error' && (
                  <p className="text-xs text-red-500">Something went wrong. Please try again.</p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#2a2a2a]/10">
        <div className="max-w-6xl mx-auto px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs space-y-4 md:space-y-0 text-[#2a2a2a]/60">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <Link to="/terms" className="hover:text-gold transition-colors duration-200">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-gold transition-colors duration-200">Privacy Policy</Link>
            </div>
            <p>© {new Date().getFullYear()} Hasnain Webworks</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;