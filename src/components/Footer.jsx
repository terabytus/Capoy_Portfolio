import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Footer = () => {
  const [footerRef, footerVisible] = useScrollAnimation(0.1);

  return (
    <footer
      ref={footerRef}
      className="grid grid-cols-12 gap-6 w-full bg-[var(--color-primary)] text-[var(--color-textmain)] py-3"
    >
      <div
        className={`col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 transition-all duration-700 ${
          footerVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left - Copyright */}
          <div className="flex-1">
            <span
              className={`font-family-subheader text-xs transition-all duration-700 ${
                footerVisible
                  ? "animate-fade-in-up"
                  : "opacity-0 translate-y-10"
              }`}
            >
              &copy; {new Date().getFullYear()} Christian Capoy. All rights
              reserved.
            </span>
          </div>

          {/* Center - Social Media */}
          <div
            className={`flex items-center space-x-6 flex-1 justify-center transition-all duration-700 ${
              footerVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://github.com/megabytess"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-gray-800 transition-all duration-300 group"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754370387/github_flat_bkr2un.svg"
                alt="GitHub"
                className="w-6 h-6 group-hover:hidden transition-all duration-300"
              />
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369669/github_ygtyqf.svg"
                alt="GitHub"
                className="w-6 h-6 hidden group-hover:block transition-all duration-300"
              />
            </a>
            <a
              href="https://www.instagram.com/chrstanry__/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369416/instagram_nicfo2.svg"
                alt="Instagram"
                className="w-5 h-5 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-rey-capoy-091944231/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369416/linkedin_hicxwv.svg"
                alt="LinkedIn"
                className="w-5 h-5 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          </div>

          {/* Right - Tech Stack */}
          <div className="flex-1 text-right">
            <div className="space-y-1">
              <p
                className={`font-family-subheader text-xs transition-all duration-700 ${
                  footerVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-10"
                }`}
              >
                Built with React and Tailwind CSS
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {/* Social Media - Top */}
          <div
            className={`flex items-center justify-center space-x-8 transition-all duration-700 ${
              footerVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <a
              href="https://github.com/megabytess"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-textmain/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-gray-800 transition-all duration-300 group"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754370387/github_flat_bkr2un.svg"
                alt="GitHub"
                className="w-6 h-6 group-hover:hidden transition-all duration-300"
              />
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369669/github_ygtyqf.svg"
                alt="GitHub"
                className="w-6 h-6 hidden group-hover:block transition-all duration-300"
              />
            </a>
            <a
              href="https://instagram.com/your.instagram.username"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-textmain/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-gradient-to-tr hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369416/instagram_nicfo2.svg"
                alt="Instagram"
                className="w-6 h-6 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/christian-rey-capoy-091944231/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-textmain/10 rounded-full flex items-center justify-center hover:scale-110 hover:bg-blue-600 transition-all duration-300"
            >
              <img
                src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369416/linkedin_hicxwv.svg"
                alt="LinkedIn"
                className="w-6 h-6 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </a>
          </div>

          {/* Tech Stack - Middle */}
          <div
            className={`text-center space-y-2 px-4 transition-all duration-700 ${
              footerVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-family-subheader text-sm">
              Built with React and Tailwind CSS
            </p>
          </div>

          {/* Copyright - Bottom */}
          <div
            className={`text-center px-4 transition-all duration-700 ${
              footerVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <span className="font-family-subheader text-sm">
              &copy; {new Date().getFullYear()} Christian Capoy. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
