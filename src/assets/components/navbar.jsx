import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle window resize to close mobile menu on large screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 font-inter transition-all backdrop-blur-md ${
        isScrolled ? "bg-white/80" : "bg-white/30"
      }`}
    >
      <div className="mx-auto px-8 lg:px-6 py-5">
        <div className="flex justify-between items-center">
          {/* Left Section: Logo, Name, and Tagline */}
          <div className="flex items-center">
            <img className="h-8 w-auto" src={Logo} alt="NextStep Logo" />
            <div className="ml-1">
              <span className="text-lg font-bold">NextStep</span>
              <span className="ml-2 text-sm text-black/70 hidden lg:inline">
                The{" "}
                <span className="bg-yellow-300 text-black inline-block px-1 transform -rotate-1 font-bold">
                  refreshingly simple
                </span>{" "}
                process management tool
              </span>
            </div>
          </div>

          {/* Right Section: Menu Items and CTA */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <Link
              to="/how-it-works"
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-black/70 hover:text-black"
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-black/70 hover:text-black"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-2 py-1 text-sm font-medium text-black/70 hover:text-black"
            >
              About
            </Link>
            <div className="border-t border-gray-200 w-px h-6 "></div>
            <Link
              to="/login"
              className="inline-flex items-center px-2 py-2 text-sm font-medium rounded-xl text-black/70 hover:text-black bg-white hover:bg-black/5"
            >
              Log In
            </Link>
            <Link
              to="/get-started"
              className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-xl text-white bg-black"
            >
              Get Started for Free
            </Link>
          </div>

          {/* Mobile Right Section */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black cursor-pointer focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="lg:hidden bg-white/80 backdrop-blur-md"
          id="mobile-menu"
        >
          <div className="pt-2 pb-3 px-8 space-y-1">
            <Link
              to="/how-it-works"
              className="block py-1 text-base font-medium text-black/80 hover:text-black"
            >
              How it Works
            </Link>
            <Link
              to="/pricing"
              className="block py-1 text-base font-medium text-black/80 hover:text-black"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="block py-1 text-base font-medium text-black/80 hover:text-black"
            >
              About
            </Link>
            <div className="border-t border-gray-200 my-3"></div>
            <Link
              to="/login"
              className="block px-4 py-1 text-base font-medium text-black/80 hover:text-black bg-white hover:bg-black/5 rounded-lg"
            >
              Log In
            </Link>
            <Link
              to="/get-started"
              className="block px-4 py-1 text-base font-medium text-white bg-black rounded-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
