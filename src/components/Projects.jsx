import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "FreshClips",
    description:
      "A Digital Platform Enhancing Client Interaction and Modernizing the Hairstyling Industry",
    image: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369743/Freshclips_Tarp_izuzei.png",
    role: "Designed & Developed",
    technologies: [
      { name: "Flutter", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg" },
      { name: "Firebase", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg" },
      { name: "Figma", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg" },
    ],
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "TaRIDES",
    description:
      "A Community-based Mobile Application Designed for Cyclists and Hobbyists",
    image: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369417/tarides_tcwn1q.png",
    role: "Designed & Developed some features",
    technologies: [
      { name: "Flutter", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg" },
      { name: "Firebase", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg" },
      { name: "Figma", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg" },
    ],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Mobile DTR",
    description:
      "From clock-in to clock-out, our All-in-One Employee DTR keeps your business running smoothly – anytime, anywhere.",
    image: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369418/mobile_dtr_fjwpfv.png",
    role: "Designed",
    technologies: [
      { name: "Figma", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg" },
      { name: "Flutter", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg" },
    ],
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "HoneyPot (Design Concepts)",
    description:
      "The main purpose is to establish the general visual direction. The designs incorporate your current product photos and color palette for consistency",
    image: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369420/design_concept_jh438z.png",
    role: "Developed some features and designed",
    technologies: [{ name: "Figma", icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg" }],
    link: "#",
    github: "#",
  },
  // {
  //   id: 5,
  //   title: "Weather Dashboard",
  //   description: "A beautiful weather dashboard with location-based forecasts.",
  //   image: sampleImage,
  //   role: "Developed some features and designed",
  //   technologies: [
  //     { name: "React", icon: react },
  //     { name: "JavaScript", icon: javascript },
  //     { name: "CSS", icon: css },
  //   ],
  //   link: "#",
  //   github: "#",
  // },
];

const ProjectsSection = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className="group relative bg-dark/10 backdrop-blur-xl rounded-lg overflow-hidden border border-[var(--color-highlight)]/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(239,214,172,0.4)] hover:border-[var(--color-highlight)]/70 p-4 sm:p-6 h-64"
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            {/* Card Number */}
            <span className="font-family-header absolute top-3 left-3 sm:top-4 sm:left-4 text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--color-textmain)] select-none pointer-events-none z-20">
              {String(idx + 1).padStart(2, "0")}
            </span>

            {/* Project Image Background - Always visible */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/80 to-transparent overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-100 object-cover rounded-sm transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
              {/* Gradient Overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            </div>

            {/* Content - Always visible */}
            <div className="relative z-10 h-full flex flex-col justify-end">
              <div className="space-y-1">
                <h3 className="font-family-subheader text-lg sm:text-xl font-bold text-[var(--color-highlight)] py-0 transition-colors duration-300 text-shadow">
                  {project.title}
                </h3>
                <p className="font-family-subheader text-[10px] sm:text-xs text-[var(--color-textmain)] py-0 leading-relaxed transition-colors duration-300 text-shadow line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies at the bottom with icon and text */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIdx) => (
                    <div key={techIdx} className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center bg-black/50 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className="w-4 h-4"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section
      id="projects"
      ref={ref}
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

      <div className="col-span-12 lg:col-start-2 lg:col-span-12 xl:col-start-3 xl:col-span-8 relative z-20">
        {/* Desktop header */}
        <div className="flex items-start mb-8">
          <h1
            className={`font-family-accent text-6xl sm:text-6xl md:text-8xl mb-4 text-[var(--color-highlight)] transition-all duration-700 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            PROJECTS
          </h1>
        </div>

        {/* Projects Section */}
        <div
          className={`transition-all duration-700 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <ProjectsSection />
        </div>
      </div>
    </section>
  );
};

export default Projects;
