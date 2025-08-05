import { useScrollAnimation } from "../hooks/useScrollAnimation";


const About = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation(0.1);
  const [descRef, descVisible] = useScrollAnimation(0.1);
  const [toolkitRef, toolkitVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative grid grid-cols-12 gap-6 py-24 bg-[var(--color-dark)] transition-all duration-1000 overflow-hidden film-grain grain-effect px-4 sm:px-6 md:px-8"
    >
      {/* Floating Japanese elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shuriken (throwing stars) */}
        <div className="absolute top-1/6 right-1/5 opacity-15">
          <div className="relative w-5 h-5">
            <div className="absolute inset-0 bg-white rotate-45 clip-star"></div>
            <div className="absolute inset-0 bg-white -rotate-45 clip-star"></div>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/6 opacity-12">
          <div className="relative w-4 h-4">
            <div className="absolute inset-0 bg-gray-300 rotate-45 clip-star"></div>
            <div className="absolute inset-0 bg-gray-300 -rotate-45 clip-star"></div>
          </div>
        </div>

        {/* Cherry blossom petals */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-white/30 rounded-full animate-float"></div>
        <div
          className="absolute top-3/4 right-1/3 w-2 h-2 bg-gray-300/25 rounded-full animate-float"
          style={{ animationDelay: "1.8s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/3 w-4 h-4 bg-white/20 rounded-full animate-float"
          style={{ animationDelay: "3.2s" }}
        ></div>
        <div
          className="absolute top-1/8 right-1/4 w-2 h-2 bg-gray-300/30 rounded-full animate-float"
          style={{ animationDelay: "4.5s" }}
        ></div>

        {/* Traditional Japanese diamonds */}
        <div className="absolute top-1/3 right-1/6 w-3 h-3 bg-white/20 rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-1/5 left-1/5 w-2 h-2 bg-gray-300/25 rotate-45 animate-pulse"
          style={{ animationDelay: "2.2s" }}
        ></div>
        <div
          className="absolute top-2/3 right-2/5 w-4 h-4 bg-white/15 rotate-45 animate-pulse"
          style={{ animationDelay: "3.8s" }}
        ></div>

        {/* Japanese paper cranes */}
        <div className="absolute top-1/5 left-1/8 opacity-12">
          <div className="relative w-5 h-5 transform rotate-24">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-[10px] border-r-[10px] border-b-[8px] border-l-transparent border-r-transparent border-b-white/25"></div>
            <div className="absolute top-2 left-1 w-0 h-0 border-l-[8px] border-r-[8px] border-t-[6px] border-l-transparent border-r-transparent border-t-gray-300/20"></div>
          </div>
        </div>

        {/* Bamboo leaves */}
        <div className="absolute top-3/5 left-1/7 opacity-18">
          <div
            className="w-1 h-8 bg-gradient-to-b from-white/25 to-transparent rounded-full transform rotate-15 animate-float"
            style={{ animationDelay: "5.5s" }}
          ></div>
        </div>

        <div className="absolute bottom-1/3 right-1/8 opacity-15">
          <div
            className="w-1 h-6 bg-gradient-to-b from-gray-300/20 to-transparent rounded-full transform -rotate-30 animate-float"
            style={{ animationDelay: "6.2s" }}
          ></div>
        </div>

        {/* Traditional dots pattern */}
        <div
          className="absolute top-1/12 right-1/3 w-1 h-1 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "1.2s" }}
        ></div>
        <div
          className="absolute bottom-1/8 left-2/5 w-1 h-1 bg-gray-300/25 rounded-full animate-pulse"
          style={{ animationDelay: "4.1s" }}
        ></div>
        <div
          className="absolute top-4/5 right-1/5 w-1 h-1 bg-white/20 rounded-full animate-pulse"
          style={{ animationDelay: "2.8s" }}
        ></div>
      </div>

      {/* Japanese fog/mist effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-radial from-white/8 to-transparent rounded-full animate-pulse"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-radial from-gray-300/6 to-transparent rounded-full animate-pulse"
          style={{ animationDuration: "7s", animationDelay: "2.5s" }}
        ></div>
      </div>

      {/* Visual Grid Overlay for Debugging Layout Consistency */}
      {/* <div className="absolute inset-0 pointer-events-none z-0 opacity-50">
        <div className="grid grid-cols-12 gap-6 h-full">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              key={i}
              className="bg-red-500/20 border border-red-500/40 h-full flex items-center justify-center"
            >
              <span className="text-red-600 font-mono text-xs transform rotate-90">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
      </div> */}

      <div className="col-span-12 lg:col-start-2 lg:col-span-12 xl:col-start-3 xl:col-span-8 relative z-10">
        {/* Content Section with Text and Image */}
        <div className="grid grid-cols-12 gap-6 items-start">
          {/* Text Content - Left side (6 columns) */}
          <div className="col-span-12 lg:col-span-12">
            <div className="lg:flex items-start mb-8">
              <h1
                className={`font-family-accent text-8xl md:text-8xl mb-4 text-[var(--color-highlight)] transition-all duration-700
                  ${
                    aboutVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-10"
                  }
                `}
              >
                ABOUT
                <br />
                ME
              </h1>
            </div>
            <h4
              ref={descRef}
              className={`font-family-subheader font-light text-lg text-[var(--color-textmain)] mb-6 leading-relaxed transition-all duration-700
                ${
                  descVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              I'm <br />
              <span className="font-family-accent text-[var(--color-highlight)] text-2xl md:text-4xl">
                Christian Capoy
              </span>
              <br />
              <br />
              I'm a Junior Frontend Developer with a passion for building clean,
              performant, and user-centric web interfaces. My background in
              UI/UX Design allows me to approach development with a strong
              emphasis on user experience, translating concepts into functional
              and visually appealing digital products across both web and mobile
              platforms. I thrive on solving complex UI challenges and bringing
              creative designs to life with precise code.
            </h4>
            <br /> <br />
            {/* My Core Toolkit Section */}
            <div
              ref={toolkitRef}
              className={`mb-6 transition-all duration-700
                ${
                  toolkitVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-10"
                }
              `}
            >
              <h3 className="font-family-header font-semibold text-4xl text-[var(--color-textmain)] mb-4">
                My Core Toolkit
              </h3>
              <div className="flex flex-col lg:flex-row gap-20">
                <div className="flex-1 ">
                  {/* Frontend Development Section */}
                  <div className="mb-6">
                    <h4 className="font-family-subheader font-semibold text-xl text-[var(--color-highlight)] mb-4">
                      Frontend Development
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369673/javascript_jbbbkj.svg"
                            alt="JavaScript"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          JavaScript
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369673/html_xb3maz.svg"
                            alt="HTML5"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          HTML
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369664/css_annega.svg"
                            alt="CSS3"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          CSS
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369677/react_ctpwcs.svg"
                            alt="React"
                            className="w-7 h-7 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          React
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369678/tailwind_lshwvr.svg"
                            alt="Tailwind CSS"
                            className="w-7 h-7 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Tailwind CSS
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369663/bootstrap_dcel4h.svg"
                            alt="Bootstrap"
                            className="w-7 h-7 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Bootstrap
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369662/angular_lfldqj.svg"
                            alt="Angular"
                            className="w-7 h-7 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Angular
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* UI/UX Design Section */}
                  <div className="mb-6">
                    <h4 className="font-family-subheader font-semibold text-xl text-[var(--color-highlight)] mb-4">
                      UI/UX Design
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg"
                            alt="Figma"
                            className="w-7 h-7 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Figma
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <svg
                            className="w-6 h-6 text-[var(--color-textmain)] transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 14H9v-2h2v2zm0-4H9V9h2v4zm6 4h-2v-2h2v2zm0-4h-2V9h2v4zm0-6H7V5h10v2z" />
                            <circle cx="12" cy="12" r="2" opacity="0.7" />
                            <path d="M8 8h8v1H8z" opacity="0.5" />
                          </svg>
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Prototyping
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <svg
                            className="w-6 h-6 text-[var(--color-textmain)] transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <rect
                              x="3"
                              y="3"
                              width="18"
                              height="18"
                              rx="2"
                              ry="2"
                              strokeWidth="1.5"
                            />
                            <line
                              x1="7"
                              y1="7"
                              x2="17"
                              y2="7"
                              strokeWidth="1"
                            />
                            <line
                              x1="7"
                              y1="11"
                              x2="17"
                              y2="11"
                              strokeWidth="1"
                            />
                            <line
                              x1="7"
                              y1="15"
                              x2="14"
                              y2="15"
                              strokeWidth="1"
                            />
                            <rect
                              x="16"
                              y="14"
                              width="2"
                              height="2"
                              strokeWidth="1"
                            />
                          </svg>
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Wireframing
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <svg
                            className="w-6 h-6 text-[var(--color-textmain)] transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <circle cx="12" cy="8" r="3" opacity="0.8" />
                            <path
                              d="M12 2c3.31 0 6 2.69 6 6 0 4.5-6 11-6 11s-6-6.5-6-11c0-3.31 2.69-6 6-6z"
                              opacity="0.6"
                            />
                            <rect
                              x="8"
                              y="16"
                              width="8"
                              height="6"
                              rx="2"
                              fill="currentColor"
                              opacity="0.9"
                            />
                            <circle cx="8" cy="19" r="1" fill="white" />
                            <circle cx="12" cy="19" r="1" fill="white" />
                            <circle cx="16" cy="19" r="1" fill="white" />
                          </svg>
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          UI Principles
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile Development Section */}
                  <div className="mb-6">
                    <h4 className="font-family-subheader font-semibold text-xl text-[var(--color-highlight)] mb-4">
                      Mobile Development
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg"
                            alt="Flutter"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Flutter
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tools & Collaboration Section */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h4 className="font-family-subheader font-semibold text-xl text-[var(--color-highlight)] mb-4">
                      Tools & Collaboration
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369659/vscode_greyhe.svg"
                            alt="VS Code"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          VS Code
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369668/git_j27zw2.svg"
                            alt="Git"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Git
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369669/github_ygtyqf.svg"
                            alt="GitHub"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          GitHub
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369672/gitlab_ipe5lf.svg"
                            alt="GitLab"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          GitLab
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg"
                            alt="Firebase"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Firebase
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Other Familiarities Section */}
                  <div className="mb-6">
                    <h4 className="font-family-subheader font-semibold text-xl text-[var(--color-highlight)] mb-4">
                      Other Familiarities
                    </h4>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369675/python_qjtm6v.svg"
                            alt="Python"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Python
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369674/mysql_em5bo3.svg"
                            alt="MySQL"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          MySQL
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369662/ad_photoshop_n1ody9.svg"
                            alt="Photoshop"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Photoshop
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369661/ad_lightroom_dh0aqd.svg"
                            alt="Lightroom"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Lightroom
                        </span>
                      </div>

                      <div className="group flex flex-col items-center">
                        <div className="w-12 h-12 bg-[var(--color-textmain)]/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-[var(--color-textmain)]/20 transition-all duration-300 group-hover:bg-[var(--color-textmain)]/20 group-hover:scale-105">
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369660/ad_illustrator_yvtcni.svg"
                            alt="Adobe Illustrator"
                            className="w-6 h-6 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-xs text-[var(--color-textmain)] mt-1 font-family-subheader">
                          Illustrator
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
