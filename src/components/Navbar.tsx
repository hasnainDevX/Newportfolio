import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const leftNavItems = [
    { name: "PACKAGES", path: "/packages" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "PORTFOLIO", path: "/portfolio" },
  ];
  const rightNavItems = [{ name: "NEWS LETTER", path: "/news-letter" }];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:grid fixed top-8 left-1/2 -translate-x-1/2 z-50 bg-white/95 backdrop-blur-lg px-8 py-4 rounded-full shadow-md grid-cols-[1fr_auto_1fr] gap-8 items-center">
        {/* Left Items */}
        <div className="flex gap-8 justify-end items-center mr-4">
          {leftNavItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={idx}
                to={item.path}
                className={`text-sm font-medium tracking-wider transition whitespace-nowrap
                  ${isActive ? "opacity-50 cursor-not-allowed pointer-events-none" : "hover:text-gray-600"}
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Center Logo - Always Centered */}
        <Link
          to="/"
          className="text-2xl tracking-wide text-center whitespace-nowrap px-8 font-serif hover:opacity-80 transition"
        >
          Hasnain Webworks
        </Link>

        {/* Right Items */}
        <div className="flex gap-8 items-center">
          {rightNavItems.map((item, idx) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={idx}
                to={item.path}
                className={`text-sm font-medium tracking-wider transition whitespace-nowrap
                  ${isActive ? "opacity-50 cursor-not-allowed pointer-events-none" : "text-gray-800 hover:text-gray-600"}
                `}
              >
                {item.name}
              </Link>
            );
          })}

          {/* CTA Button */}
          <Link to="/enquiry">
            <button
              className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide text-white transition-all hover:opacity-90 whitespace-nowrap cursor-pointer"
              style={{ backgroundColor: "#95B0DD" }}
            >
              ENQUIRY FORM
            </button>
          </Link>

          {/* Instagram Icon */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full flex items-center justify-center cursor-pointer hover:opacity-70 transition flex-shrink-0"
            style={{ backgroundColor: "#95B0DD" }}
          >
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed top-4 left-4 right-4 z-50 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-full shadow-md">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-lg font-serif tracking-wide hover:opacity-80 transition"
          >
            Hasnain Webworks
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200 flex flex-col gap-4">
            {[...leftNavItems, ...rightNavItems].map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={idx}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium tracking-wider transition
                    ${isActive ? "opacity-50 cursor-not-allowed pointer-events-none" : "text-gray-800"}
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
            <Link
              to="/enquiry"
              className="text-sm font-medium tracking-wider text-gray-800 hover:opacity-80 transition"
            >
              <button
                className="w-full px-6 py-2.5 rounded-full text-sm font-medium tracking-wide text-white"
                style={{ backgroundColor: "#95B0DD" }}
              >
                ENQUIRY FORM
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
