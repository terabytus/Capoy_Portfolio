import { useEffect } from "react";
import "../HybridProjectModal.css";

const HybridProjectModal = ({ project, onClose }) => {
  // Handle escape key press
  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [onClose]);

  // Handle overlay click
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    // Hide navbar when modal opens
    const navbar = document.querySelector("nav");
    if (navbar) {
      navbar.style.display = "none";
    }

    return () => {
      document.body.style.overflow = "unset";
      // Show navbar when modal closes
      if (navbar) {
        navbar.style.display = "";
      }
    };
  }, []);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[50] flex items-center justify-center px-2 sm:px-4 md:px-8 bg-[var(--color-dark)] backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      {/* Modal Card */}
      <div className="relative bg-[var(--color-primary)] rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl w-full max-w-7xl max-h-[98vh] sm:max-h-[95vh] overflow-y-auto overflow-x-hidden modal-content transform transition-all duration-500 animate-slideInUp">
        <button
          onClick={onClose}
          className="fixed top-2 right-2 sm:top-4 sm:right-4 z-50 w-8 h-8 sm:w-10 sm:h-10 border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] bg-transparent rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--color-highlight)]/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] cursor-pointer shadow-lg"
        >
          <svg
            className="w-4 h-4 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 1. Header & Hero */}
        <header className="mb-6 sm:mb-8 md:mb-12 text-center px-4 sm:px-6 md:px-2">
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h1 className="font-family-header text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-accent)] mb-2 sm:mb-3 leading-tight">
              {project.name}
            </h1>
            <p className="font-family-subheader text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-textmain)] font-base mb-4 sm:mb-6 md:mb-8">
              {project.description}
            </p>
            <p className="font-family-subheader text-sm sm:text-base md:text-lg lg:text-xl text-[var(--color-highlight)] font-semibold mb-4 sm:mb-6 md:mb-8">
              {project.myRole}
            </p>
          </div>

          <div className="aspect-video w-full mx-auto overflow-hidden bg-gray-100 shadow-md rounded-lg">
            <img
              src={project.heroImage}
              alt={`${project.name} final design`}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content Container */}

        {/* 2. Project Overview */}
        <section className="max-w-5xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 md:px-8">
          <h2 className="font-family-header text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-accent)] mb-4 sm:mb-6 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
            <div className="mb-4 sm:mb-6">
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                PROBLEM
              </h3>
              {project.problem
                .split(".")
                .filter((sentence) => sentence.trim().length > 0)
                .map((sentence, idx) => (
                  <p
                    key={idx}
                    className="font-family-subheader text-[var(--color-textmain)] font-light leading-relaxed mb-2 text-sm sm:text-base"
                  >
                    {sentence.trim()}.
                  </p>
                ))}
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3">
                SOLUTION
              </h3>
              <div className="font-family-subheader text-[var(--color-textmain)] font-light leading-relaxed text-sm sm:text-base">
                {Array.isArray(project.solution) ? (
                  project.solution.map((text, idx) => (
                    <p key={idx} className={idx > 0 ? "mt-3 sm:mt-4" : ""}>
                      {text}
                    </p>
                  ))
                ) : (
                  <p>{project.solution}</p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Design Process */}
        <section className="my-8 sm:my-12 md:my-16 px-4 sm:px-6 md:px-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 pb-1 text-left lg:ml-4 xl:ml-4">
            Design Journey
          </h2>
          <div className="grid grid-cols-12 gap-1 sm:gap-2 md:gap-3">
            {/* Research - Top Full Width */}
            <div className="col-span-12 bg-[var(--color-primary)]/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
              <div className="flex flex-col lg:flex-row gap-3 sm:gap-4">
                <div className="w-full lg:w-2/3 bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-md h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96">
                  <img
                    src={project.researchImage}
                    alt="User research and persona"
                    className="w-full h-110 object-cover"
                  />
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <h3 className="font-family-subheader text-[var(--color-highlight)] text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
                    User Research & Personas
                  </h3>
                  <p className="font-family-subheader text-[var(--color-textmain)] font-light text-sm sm:text-base">
                    Identifying user needs and building detailed personas to
                    guide the design process. Through in-depth interviews and
                    market analysis, I identified key pain points and user
                    motivations that informed all subsequent design decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Wireframes - Bottom Left */}
            <div className="col-span-12 md:col-span-6 bg-[var(--color-primary)]/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
              <div className="flex flex-col h-full">
                <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-md mb-2 sm:mb-3 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-96">
                  <img
                    src={project.wireframeImage}
                    alt="Low-fidelity wireframes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-family-subheader text-[var(--color-highlight)] text-sm sm:text-base md:text-lg font-semibold mb-2">
                  Low-Fidelity Wireframes
                </h3>
                <p className="font-family-subheader text-[var(--color-textmain)] text-xs sm:text-sm mb-3 sm:mb-4">
                  Creating the structural blueprint and testing core user flows
                  before visual design. These wireframes allowed for rapid
                  iteration and user testing before investing in high-fidelity
                  designs.
                </p>
              </div>
            </div>

            {/* Final Design - Bottom Right */}
            <div className="col-span-12 md:col-span-6 bg-[var(--color-primary)]/40 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 md:p-4">
              <div className="bg-gray-100 rounded-lg sm:rounded-xl overflow-hidden shadow-md mb-2 sm:mb-3 h-40 sm:h-48 md:h-56 lg:h-64 xl:h-96">
                <img
                  src={project.finalDesignImage}
                  alt="High-fidelity UI design"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-sm sm:text-base md:text-lg font-semibold mb-2">
                High-Fidelity UI Design
              </h3>
              <p className="font-family-subheader text-[var(--color-textmain)] text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8">
                Polishing the visual design with brand elements, typography, and
                interactions. The final UI design focused on accessibility,
                visual hierarchy, and creating an intuitive experience for all
                users.
              </p>
              {/* Buttons aligned to the right side of the image */}
              <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-3 md:gap-4">
                {project.liveDemoUrl && (
                  <a
                    href={project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 font-medium bg-[var(--color-accent)] hover:bg-[var(--color-accent)] text-[var(--color-textmain)] rounded-full transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] focus:ring-offset-2 text-xs sm:text-sm md:text-base"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubRepoUrl && (
                  <a
                    href={project.githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] bg-transparent font-medium rounded-full transition-all duration-200 hover:bg-[var(--color-accent)] hover:text-[var(--color-textmain)] hover:border-[var(--color-accent)] hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] focus:ring-offset-2 text-xs sm:text-sm md:text-base"
                  >
                    Github Repository
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Key Features & Tech Stack */}
        <section className="max-w-5xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 md:px-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 pb-2">
            Key Features & Technologies
          </h2>

          {/* Features */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h3 className="font-family-subheader text-[var(--color-highlight)] text-base sm:text-lg md:text-xl font-semibold mb-3">
              MAIN FEATURES
            </h3>
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 sm:gap-x-6 md:gap-x-8 gap-y-3 sm:gap-y-4">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-highlight)] mt-1 mr-2 sm:mr-3">
                    <svg
                      className="w-full h-full text-[var(--color-highlight)]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span
                    className="font-family-subheader text-[var(--color-textmain)] text-xs sm:text-sm md:text-base"
                    dangerouslySetInnerHTML={{
                      __html: feature.replace(
                        /\*\*(.*?)\*\*/g,
                        "<strong>$1</strong>"
                      ),
                    }}
                  ></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="font-family-subheader text-base sm:text-lg md:text-xl font-semibold text-[var(--color-highlight)] mb-4 sm:mb-6">
              TECH-STACK
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
              {project.technologies.map((tech, techIdx) => (
                <div
                  key={techIdx}
                  className="flex flex-col items-center gap-1 sm:gap-2"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center bg-[var(--color-highlight)]/20 backdrop-blur-sm border border-white/20 hover:bg-[var(--color-highlight)]/20 transition-all duration-300 scale-100 hover:scale-110">
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
                    />
                  </div>
                  <span className="font-family-subheader text-xs sm:text-sm font-sm text-[var(--color-textmain)] text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Challenges & Learning Outcomes */}
        <section className="max-w-5xl mx-auto my-8 sm:my-12 md:my-16 px-4 sm:px-6 md:px-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 pb-2">
            Challenges & Learning Outcomes
          </h2>
          <div className="bg-transparent border-l-2 sm:border-l-3 border-[var(--color-highlight)] pl-4 sm:pl-6 md:pl-8 lg:pl-12 pr-2 sm:pr-4 md:pr-8 lg:pr-12">
            {project.challenges &&
              project.challenges.map((item, idx) => (
                <div key={idx} className="mb-6 sm:mb-8 md:mb-10">
                  <h3 className="font-family-subheader text-[var(--color-highlight)] text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 md:mb-4">
                    {item.title}
                  </h3>
                  <p className="font-family-subheader text-[var(--color-textmain)] text-xs sm:text-sm mb-2 sm:mb-3 md:mb-4">
                    <strong>The Challenge:</strong> {item.challenge}
                  </p>
                  <p className="font-family-subheader text-[var(--color-textmain)] text-xs sm:text-sm mb-4 sm:mb-6 md:mb-8">
                    <strong>The Solution:</strong> {item.solution}
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HybridProjectModal;
