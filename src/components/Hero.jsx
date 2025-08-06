import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="hero"
      ref={ref}
      className={`relative grid grid-cols-12 gap-6 min-h-screen bg-[var(--color-primary)] transition-all duration-1000 overflow-hidden px-4 sm:px-2 md:px-0 ${
        isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Floating Japanese elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Shuriken (throwing stars) with rotation */}
        <div
          className="absolute top-1/6 left-1/5 opacity-60 animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 bg-[var(--color-accent)] rotate-45 clip-star"></div>
            <div className="absolute inset-0 bg-[var(--color-accent)] -rotate-45 clip-star"></div>
          </div>
        </div>
        {/* Additional Shuriken with counter-rotation */}
        <div
          className="absolute top-3/4 right-1/6 opacity-50 animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        >
          <div className="relative w-4 h-4">
            <div className="absolute inset-0 bg-[var(--color-highlight)] rotate-45 clip-star"></div>
            <div className="absolute inset-0 bg-[var(--color-highlight)] -rotate-45 clip-star"></div>
          </div>
        </div>
        {/* Floating Kanji-inspired shapes */}
        <div
          className="absolute top-1/8 left-1/3 opacity-40 animate-float"
          style={{ animationDelay: "0s", animationDuration: "6s" }}
        >
          <div className="relative w-8 h-8 text-[var(--color-highlight)]">
            <div className="absolute top-1 left-2 w-4 h-1 bg-current"></div>
            <div className="absolute top-3 left-1 w-6 h-1 bg-current"></div>
            <div className="absolute top-5 left-3 w-2 h-1 bg-current"></div>
            <div className="absolute top-2 left-4 w-1 h-4 bg-current"></div>
          </div>
        </div>
        {/* Sakura petals with wind animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/6 left-1/4 w-2 h-2 bg-[var(--color-highlight)]/20 rounded-full animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/4 left-3/4 w-3 h-3 bg-[var(--color-accent)]/15 rounded-full animate-bounce"
            style={{ animationDelay: "4s", animationDuration: "5s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/6 w-2 h-2 bg-[var(--color-highlight)]/25 rounded-full animate-bounce"
            style={{ animationDelay: "6s", animationDuration: "3s" }}
          ></div>
        </div>
        {/* Cherry blossom petals - enhanced */}
        <div className="absolute top-1/3 right-1/5 w-3 h-3 bg-[var(--color-highlight)]/20 rounded-full animate-float"></div>
        <div
          className="absolute top-2/3 left-1/3 w-2 h-2 bg-[var(--color-highlight)]/15 rounded-full animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-4 h-4 bg-[var(--color-accent)]/10 rounded-full animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/5 left-2/3 w-2 h-2 bg-[var(--color-highlight)]/25 rounded-full animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-1/5 right-2/5 w-3 h-3 bg-[var(--color-accent)]/15 rounded-full animate-float"
          style={{ animationDelay: "2.5s" }}
        ></div>
        {/* Animated Japanese lantern glow effect */}
        <div className="absolute top-1/5 right-1/4 opacity-60">
          <div className="relative w-6 h-8">
            <div className="absolute top-0 left-1 w-4 h-1 bg-[var(--color-highlight)]/80 rounded-full animate-glow-pulse"></div>
            <div
              className="absolute top-1 left-0 w-6 h-6 bg-gradient-to-b from-[var(--color-accent)]/60 to-[var(--color-highlight)]/40 rounded-lg animate-glow-pulse"
              style={{ animationDuration: "3s" }}
            ></div>
            <div
              className="absolute bottom-0 left-2 w-2 h-1 bg-[var(--color-accent)]/70 rounded-full animate-glow-pulse"
              style={{ animationDelay: "1s", animationDuration: "2s" }}
            ></div>
          </div>
        </div>
        {/* Floating origami crane silhouettes */}
        <div className="absolute top-2/5 left-1/8 opacity-50">
          <div
            className="relative w-6 h-4 transform animate-float"
            style={{ animationDelay: "3s", animationDuration: "8s" }}
          >
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[8px] border-l-transparent border-r-transparent border-b-[var(--color-highlight)]/60"></div>
            <div className="absolute top-2 left-2 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[6px] border-l-transparent border-r-transparent border-t-[var(--color-accent)]/50"></div>
          </div>
        </div>
        {/* Zen circle (Enso) with breathing animation */}
        <div className="absolute bottom-1/3 left-2/3 opacity-40">
          <div className="relative w-12 h-12">
            <div
              className="absolute inset-0 border-2 border-[var(--color-highlight)]/60 rounded-full animate-glow-pulse"
              style={{ animationDuration: "6s" }}
            ></div>
            <div
              className="absolute inset-1 border border-[var(--color-accent)]/50 rounded-full animate-glow-pulse"
              style={{ animationDelay: "3s", animationDuration: "6s" }}
            ></div>
          </div>
        </div>
        {/* Traditional Japanese diamonds/geometric shapes */}
        <div className="absolute top-1/4 left-3/4 w-3 h-3 bg-accent/15 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-highlight/20 rotate-45 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-2/5 left-1/6 w-4 h-4 bg-accent/10 rotate-45 animate-pulse"
          style={{ animationDelay: "3.5s" }}
        ></div>
        {/* Japanese paper cranes (simplified geometric) */}
        <div className="absolute top-1/8 right-1/3 opacity-15">
          <div className="relative w-5 h-5 transform rotate-12">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-highlight/20"></div>
            <div className="absolute top-2 left-1 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[6px] border-l-transparent border-r-transparent border-t-accent/15"></div>
          </div>
        </div>
        {/* Animated traditional Japanese waves */}
        <div className="absolute bottom-1/4 left-1/8 opacity-50">
          <div className="relative w-16 h-4">
            <div
              className="absolute bottom-0 left-0 w-4 h-2 bg-accent/60 rounded-t-full animate-pulse"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute bottom-0 left-3 w-4 h-3 bg-accent/50 rounded-t-full animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-0 left-6 w-4 h-2 bg-accent/60 rounded-t-full animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-0 left-9 w-4 h-1 bg-accent/70 rounded-t-full animate-pulse"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>
        {/* Sakura petals with wind animation */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/6 left-1/4 w-3 h-3 bg-highlight/60 rounded-full animate-sakura-fall"
            style={{ animationDelay: "2s", animationDuration: "8s" }}
          ></div>
          <div
            className="absolute top-1/4 left-3/4 w-4 h-4 bg-accent/50 rounded-full animate-sakura-fall"
            style={{ animationDelay: "4s", animationDuration: "10s" }}
          ></div>
          <div
            className="absolute top-3/4 left-1/6 w-3 h-3 bg-highlight/70 rounded-full animate-sakura-fall"
            style={{ animationDelay: "6s", animationDuration: "7s" }}
          ></div>
        </div>
        {/* Torii gate elements (abstract) */}
        <div className="absolute top-1/3 left-1/8 opacity-10">
          <div className="relative w-8 h-6">
            <div className="absolute top-0 left-0 w-8 h-1 bg-accent/20"></div>
            <div className="absolute top-2 left-0 w-8 h-1 bg-accent/15"></div>
            <div className="absolute top-1 left-1 w-1 h-4 bg-accent/18"></div>
            <div className="absolute top-1 right-1 w-1 h-4 bg-accent/18"></div>
          </div>
        </div>
        {/* Floating Japanese coins (circular patterns) */}
        <div className="absolute top-3/5 right-1/8 opacity-12">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 w-6 h-6 border-2 border-highlight/15 rounded-full"></div>
            <div className="absolute top-2 left-2 w-2 h-2 border border-accent/20 rounded-full"></div>
          </div>
        </div>
        {/* Bamboo leaves (elongated shapes) */}
        <div className="absolute top-2/5 right-2/3 opacity-15">
          <div
            className="w-1 h-8 bg-gradient-to-b from-highlight/20 to-transparent rounded-full transform rotate-12 animate-float"
            style={{ animationDelay: "5s" }}
          ></div>
        </div>
        <div className="absolute bottom-2/5 left-3/5 opacity-12">
          <div
            className="w-1 h-6 bg-gradient-to-b from-accent/15 to-transparent rounded-full transform -rotate-45 animate-float"
            style={{ animationDelay: "6s" }}
          ></div>
        </div>
        {/* Traditional dots pattern */}
        <div
          className="absolute top-1/7 left-1/2 w-1 h-1 bg-highlight/25 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/6 right-1/5 w-1 h-1 bg-accent/20 rounded-full animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
        <div
          className="absolute top-4/5 left-1/5 w-1 h-1 bg-highlight/15 rounded-full animate-pulse"
          style={{ animationDelay: "2.5s" }}
        ></div>
      </div>

      <div className="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8 z-20 relative flex flex-col justify-center min-h-screen items-start text-start sm:items-start sm:text-left">
        <h1 className="font-family-header text-1xl sm:text-3xl md:text-2xl mb-2 text-[var(--color-highlight)]">
          Hi, I'm
        </h1>
        <h1 className="font-family-accent text-7xl sm:text-7xl md:text-9xl mb-4 text-[var(--color-accent)]">
          CHRISTIAN
        </h1>
        <h2 className="font-family-subheader font-bold text-xl sm:text-3xl md:text-3xl mb-6 text-[var(--color-highlight)]">
          Frontend Developer & UI/UX Designer
        </h2>

        <div className="mb-8">
          <div className="flex flex-wrap justify-start sm:justify-start items-start space-x-0 sm:space-x-6 gap-4 sm:gap-0">
            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369677/react_ctpwcs.svg"
                  alt="React"
                  className="w-8 h-8 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                React
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369678/tailwind_lshwvr.svg"
                  alt="Tailwind CSS"
                  className="w-8 h-8 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                Tailwind
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg"
                  alt="Flutter"
                  className="w-6 h-6 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                Flutter
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369673/javascript_jbbbkj.svg"
                  alt="JavaScript"
                  className="w-6 h-6 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                JavaScript
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg"
                  alt="Firebase"
                  className="w-8 h-8 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                Firebase
              </span>
            </div>

            <div className="group flex flex-col items-center">
              <div className="w-14 h-14 bg-[var(--color-highlight)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-highlight)]/20 transition-all duration-300 group-hover:bg-[var(--color-highlight)]/20 group-hover:scale-105">
                <img
                  src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg"
                  alt="Figma"
                  className="w-8 h-8 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-[var(--color-highlight)]/70 mt-2 font-family-subheader">
                Figma
              </span>
            </div>
          </div>
        </div>

        <a
          href="#projects"
          className="w-fit px-4 py-2 bg-transparent text-[var(--color-highlight)] font-family-subheader rounded-full border-2 border-[var(--color-highlight)] text-sm transition-all duration-300 hover:scale-105 hover:bg-[var(--color-accent)] hover:text-[var(--color-textmain)] hover:border-transparent hover:shadow-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
};

export default Hero;
