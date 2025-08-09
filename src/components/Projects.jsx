import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import HybridProjectModal from "./HybridProjectModal";

const projects = [
  {
    id: 1,
    name: "FreshClips",
    description:
      "A Digital Platform Enhancing Client Interaction and Modernizing the Hairstyling Industry",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754671068/freshclips_cover_zlwsqx.svg",
    myRole: "Product Designer | Developer",
    keyFeatures: [
      "Seamless Appointment Scheduling: Book instantly with real-time availability and never wait in a line again.",
      "Unified Barber Platform: Discover and book with both traditional barbershops and talented independent stylists in one app.",
      "In-App Messaging: Communicate directly with your barber for service details, special requests, and appointment confirmations.",
      "Location-Based Search: Find the best barbers and shops near you with a geolocation-powered search feature.",
      "Verified Stylist Portfolios: View a barber's past work and personal style through a visual gallery, helping you book with confidence.",
    ],
    techStack: ["Flutter", "Firebase", "Figma"],
    technologies: [
      {
        name: "Flutter",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg",
      },
      {
        name: "Firebase",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg",
      },
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg",
      },
    ],
    liveDemoUrl: "#",
    githubRepoUrl: "#",

    problem:
      "Clients and barbers are currently disconnected by an inefficient and fragmented booking ecosystem. Clients struggle to find and book appointments with trustworthy, quality barbers, leading to wasted time waiting in lines and uncertainty about service quality. Traditional methods are inconvenient and offer little transparency into a barber's specialized skills or hygiene standards. Freelance barbers and hairstylists, on the other hand, lack a centralized platform to manage their schedules, showcase their work, and grow their clientele beyond their personal networks. This creates a significant gap where both parties are looking for a better solution.",
  },
  {
    id: 2,
    name: "TaRIDES",
    description:
      "A Community-based Mobile Application Designed for Cyclists and Hobbyists",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754670960/tarides_cover_oxdcax.svg",
    myRole: "Product Designer | Developer",
    keyFeatures: [
      "GPS-based route tracking and sharing system",
      "Community features for cyclist groups and events",
      "Performance analytics and ride statistics",
      "Social networking features for cycling enthusiasts",
    ],
    techStack: ["Flutter", "Firebase", "Figma"],
    technologies: [
      {
        name: "Flutter",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg",
      },
      {
        name: "Firebase",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369667/firebase_fmdmuf.svg",
      },
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg",
      },
    ],
    liveDemoUrl: "#",
    githubRepoUrl: "#",
  },
  {
    id: 3,
    name: "Mobile DTR",
    description:
      "From clock-in to clock-out, our All-in-One Employee DTR keeps your business running smoothly – anytime, anywhere.",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754670916/mobile_dtr_cover_olg97r.svg",
    myRole: "Designed",
    keyFeatures: [
      "Biometric and QR code-based attendance system",
      "Real-time attendance tracking and reporting",
      "Geolocation-based check-in/check-out verification",
      "Administrative dashboard for HR management",
    ],
    techStack: ["Figma", "Flutter"],
    technologies: [
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg",
      },
      {
        name: "Flutter",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369666/flutter_qkynvr.svg",
      },
    ],
    liveDemoUrl: "#",
    githubRepoUrl: "#",
  },
  {
    id: 4,
    name: "Design Concepts",
    description:
      "The main purpose is to establish the general visual direction. The designs incorporate your current product photos and color palette for consistency",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369420/design_concept_jh438z.png",
    myRole: "Developed some features and designed",
    keyFeatures: [
      "Brand identity and visual design system",
      "UI/UX design for web and mobile platforms",
      "Design documentation and style guides",
      "Prototype development and user testing",
    ],
    techStack: ["Figma"],
    technologies: [
      {
        name: "Figma",
        icon: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369665/figma_rzpupt.svg",
      },
    ],
    liveDemoUrl: "#",
    githubRepoUrl: "#",
  },
];

const ProjectsSection = ({ shouldStartAnimation }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);

  // Staggered animation effect for projects - only run once
  useEffect(() => {
    if (shouldStartAnimation && !animationCompleted) {
      // Show first project immediately
      setVisibleProjects([0]);

      // Show each project with a staggered delay
      const timers = [];

      for (let i = 1; i < projects.length; i++) {
        const timer = setTimeout(() => {
          setVisibleProjects((prev) => [...prev, i]);
        }, i * 300); // 300ms stagger between each project

        timers.push(timer);
      }

      // Mark animation as completed
      const finalTimer = setTimeout(() => {
        setAnimationCompleted(true);
      }, projects.length * 300 + 100);

      timers.push(finalTimer);

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    } else if (animationCompleted && visibleProjects.length < projects.length) {
      // If animation was completed but some projects aren't visible (e.g. after a component remount),
      // make all projects visible immediately
      setVisibleProjects(projects.map((_, i) => i));
    }
  }, [shouldStartAnimation, animationCompleted]);

  // Handle card click
  const handleCardClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  // Handle escape key
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape" && isModalOpen) {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          onClick={() => handleCardClick(project)}
          className={`group bg-dark/10 backdrop-blur-lg overflow-hidden transition-all duration-700 hover:scale-105 hover: h-auto cursor-pointer ${
            visibleProjects.includes(idx)
              ? "animate-fade-in-up"
              : "opacity-0 translate-y-10"
          }`}
          style={{
            animationDuration: "1000ms",
            flex: "1 1 458px",
            minWidth: "300px",
            maxWidth: "600px",
          }}
        >
          {/* Project Image at the top */}
          <div className="w-full h-56 sm:h-72 overflow-hidden mb-2 relative">
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-md transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          <div className="relative z-10 flex flex-col items-start">
            <h3 className="font-family-subheader font-semibold text-lg sm:text-2xl text-[var(--color-highlight)] transition-colors duration-300 text-shadow">
              {project.name}
            </h3>

            <div className="font-family-subheader text-[var(--color-textmain)]/40 flex flex-wrap gap-2 mb-2">
              {project.myRole}
            </div>
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <HybridProjectModal
          project={{
            ...selectedProject,
            heroImage: selectedProject.image,
            problem: selectedProject.problem,
            researchImage:
              "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754743719/user_persona_plsg85.svg",
            wireframeImage:
              "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754743719/user_persona_plsg85.svg",
            finalDesignImage: selectedProject.image,
            keyFeatures: selectedProject.keyFeatures,
          }}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const [titleAnimationComplete, setTitleAnimationComplete] = useState(false);

  // Track when title animation completes
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setTitleAnimationComplete(true);
      }, 700); // Title animation takes 700ms

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative grid grid-cols-12 gap-6 py-24 bg-[var(--color-dark)] transition-all duration-1000 overflow-hidden film-grain grain-effect px-4 sm:px-2 md:px-0"
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
        <ProjectsSection shouldStartAnimation={titleAnimationComplete} />
      </div>
    </section>
  );
};

export default Projects;
