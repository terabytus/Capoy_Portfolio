import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Trigger navbar animation on mount with a slight delay for better effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`hidden md:flex fixed top-4 left-1/2 transform -translate-x-1/2 backdrop-blur-md text-[var(--color-highlight)] px-2 py-1 rounded-full shadow-2xl z-50 transition-all duration-1000 border border-[var(--color-highlight)]/5 ${
          isVisible ? "animate-fade-in-down" : "opacity-0 translate-y-10"
        }`}
      >
        <ul className="flex gap-2 font-family-subheader text-xs items-center">
          <li>
            <a
              href="#hero"
              className={`transition-colors cursor-pointer px-3 py-2 rounded-full block ${
                activeSection === "hero"
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                  : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              }`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`transition-colors cursor-pointer px-3 py-2 rounded-full block ${
                activeSection === "about"
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                  : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              }`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={`transition-colors cursor-pointer px-3 py-2 rounded-full block ${
                activeSection === "projects"
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                  : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              }`}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`transition-colors cursor-pointer px-3 py-2 rounded-full block ${
                activeSection === "contact"
                  ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                  : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
              }`}
            >
              Contact
            </a>
          </li>

          {/* Divider */}
          <li className="w-px h-5 bg-[var(--color-highlight)]/20"></li>

          {/* Download Resume Button */}
          <li>
            <a
              href="/Capoy, Christian_Resume.pdf"
              download="Capoy, Christian_Resume.pdf"
              className="relative inline-flex items-center px-3 py-2 overflow-hidden text-xs font-medium text-[var(--color-highlight)]  border-[var(--color-highlight)] rounded-full group transition-colors duration-200 hover:text-[var(--color-textmain)] hover:border-[var(--color-accent)]"
            >
              <span className="absolute left-0 block w-full h-0 transition-all bg-[var(--color-accent)] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease z-0"></span>
              <span className="absolute right-0 flex items-center justify-start w-6 h-6 duration-100 transform translate-x-full group-hover:translate-x-0 ease z-10 transition-colors"></span>
              <span className="relative z-10 transition-colors duration-200 group-hover:font-medium">
                Download Resume
              </span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-4 left-4 right-4 backdrop-blur-md text-[var(--color-highlight)] px-4 py-3 rounded-xl shadow-2xl z-50 transition-all duration-1000 border border-[var(--color-highlight)]/10 ${
          isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex justify-center items-center relative h-full">
          {/* Logo/Brand - Centered */}
          <div className="font-family-accent text-[var(--color-highlight)] text-sm flex items-center">
            Capoy Portfolio
          </div>

          {/* Hamburger Menu Button - Positioned to the right */}
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg hover:bg-[var(--color-highlight)]/10 transition-colors ml-auto flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-5 h-5 flex flex-col justify-center items-center">
              <span
                className={`block w-4 h-0.5 bg-[var(--color-highlight)] transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-0.5"
                    : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-[var(--color-highlight)] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block w-4 h-0.5 bg-[var(--color-highlight)] transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-0.5"
                    : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div
          className={`transition-all duration-300 overflow-hidden rounded-lg backdrop-blur-md  ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-1 font-family-subheader text-sm p-3">
            <li>
              <a
                href="#hero"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  activeSection === "hero"
                    ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                    : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  activeSection === "about"
                    ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                    : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  activeSection === "projects"
                    ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                    : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                }`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className={`block px-3 py-2 rounded-md transition-colors ${
                  activeSection === "contact"
                    ? "text-[var(--color-accent)] bg-[var(--color-accent)]/20"
                    : "hover:text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10"
                }`}
              >
                Contact
              </a>
            </li>
            <li className="pt-2 border-t border-[var(--color-highlight)]/20">
              <a
                href="/Capoy, Christian_Resume.pdf"
                download="Capoy, Christian_Resume.pdf"
                onClick={closeMobileMenu}
                className="block w-full text-center px-3 py-2 bg-[var(--color-accent)] text-white font-bold rounded-md hover:bg-[var(--color-accent)]/80 transition-colors text-sm"
              >
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
