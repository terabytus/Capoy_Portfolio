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
      className="fixed inset-0 z-[50] flex items-center justify-center px-8 bg-[var(--color-dark)] backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      onClick={handleOverlayClick}
    >
      {/* Modal Card */}
      <div className="relative bg-[var(--color-primary)] rounded-2xl shadow-2xl max-w-7xl w-full max-h-[95vh] overflow-y-auto overflow-x-hidden modal-content transform transition-all duration-500 animate-slideInUp">
        <button
          onClick={onClose}
          className="fixed top-4 right-4 z-50 w-10 h-10 border-2 border-[var(--color-highlight)] text-[var(--color-highlight)] bg-transparent rounded-full flex items-center justify-center transition-all duration-200 hover:bg-[var(--color-highlight)]/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[var(--color-highlight)] cursor-pointer shadow-lg"
        >
          <svg
            className="w-6 h-6"
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
        <header className="mb-12 text-center">
          <div className="mt-8">
            <h1 className="font-family-header text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-3 leading-tight">
              {project.name}
            </h1>
            <p className="font-family-subheader text-xl text-[var(--color-textmain)] font-base mb-8">
              {project.description}
            </p>
            <p className="font-family-subheader text-xl text-[var(--color-highlight)] font-semibold mb-8">
              {project.myRole}
            </p>
          </div>

          <div className="aspect-video w-full overflow-hidden bg-gray-100 shadow-md">
            <img
              src={project.heroImage}
              alt={`${project.name} final design`}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        {/* Content Container */}

        {/* 2. Project Overview */}
        <section className="max-w-5xl mx-auto my-16 mx-8">
          <h2 className="font-family-header text-3xl font-bold text-[var(--color-accent)] mb-6 pb-2">
            Project Overview
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="mb-6">
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-3">
                PROBLEM
              </h3>
              {project.problem
                .split(".")
                .filter((sentence) => sentence.trim().length > 0)
                .map((sentence, idx) => (
                  <p
                    key={idx}
                    className="font-family-subheader text-[var(--color-textmain)] font-light leading-relaxed mb-2"
                  >
                    {sentence.trim()}.
                  </p>
                ))}
            </div>
            <div className="mt-10">
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-3">
                SOLUTION
              </h3>
              <div className="font-family-subheader text-[var(--color-textmain)] font-light leading-relaxed">
                <p>
                  FreshClips is a digital platform that acts as a central hub
                  for modernizing the hairstyling industry. It eliminates the
                  pain points of traditional booking methods by focusing on
                  convenience, quality, and trust.
                </p>
                <p className="mt-4">
                  <strong>For Clients:</strong> The app provides a single
                  destination to easily find, vet, and book appointments with
                  confidence.
                </p>
                <p className="mt-4">
                  <strong>For Stylists:</strong> The platform offers tools to
                  manage their bookings, showcase their work, and connect with
                  clients seamlessly.
                </p>
                <p className="mt-4">
                  This solution empowers both clients and stylists by
                  streamlining the booking process, enhancing transparency, and
                  fostering stronger professional relationships. By leveraging
                  modern technology, FreshClips bridges the gap between user
                  needs and business goals, delivering a seamless experience for
                  everyone involved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Design Process */}
        <section className="my-16 mx-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-3xl font-bold mb-8 pb-2">
            The Design Journey
          </h2>
          <div className="grid grid-cols-12 gap-6">
            {/* Research - Top Full Width */}
            <div className="col-span-12 bg-[var(--color-primary)]/40 backdrop-blur-sm p-2 rounded-xl border border-[var(--color-highlight)]/20 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full lg:w-2/3 bg-gray-100 rounded-lg overflow-hidden shadow-md h-72 sm:h-80 md:h-80">
                  {" "}
                  <img
                    src={project.researchImage}
                    alt="User research and persona"
                    className="w-full h-110 object-cover"
                  />
                </div>
                <div className="md:w-2/5 lg:w-1/3 flex flex-col justify-center">
                  <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-4">
                    User Research & Personas
                  </h3>
                  <p className="font-family-subheader text-[var(--color-textmain)] font-light mr-5">
                    Identifying user needs and building detailed personas to
                    guide the design process. Through in-depth interviews and
                    market analysis, I identified key pain points and user
                    motivations that informed all subsequent design decisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Wireframes - Bottom Left */}
            <div className="col-span-12 md:col-span-6 bg-[var(--color-primary)]/40 backdrop-blur-sm p-2 rounded-xl border border-[var(--color-highlight)]/20 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4 h-56 sm:h-64 md:h-80">
                  <img
                    src={project.wireframeImage}
                    alt="Low-fidelity wireframes"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-family-subheader text-[var(--color-highlight)] text-lg font-semibold mb-2 mx-4">
                  Low-Fidelity Wireframes
                </h3>
                <p className="font-family-subheader text-[var(--color-textmain)] text-sm mx-4 mb-4">
                  Creating the structural blueprint and testing core user flows
                  before visual design. These wireframes allowed for rapid
                  iteration and user testing before investing in high-fidelity
                  designs.
                </p>
              </div>
            </div>

            {/* Final Design - Bottom Right */}
            <div className="col-span-12 md:col-span-6 bg-[var(--color-primary)]/40 backdrop-blur-sm p-2 rounded-xl border border-[var(--color-highlight)]/20 shadow-lg">
              <div className="flex flex-col h-full">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md mb-4 h-56 sm:h-64 md:h-80">
                  <img
                    src={project.finalDesignImage}
                    alt="High-fidelity UI design"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-family-subheader text-[var(--color-highlight)] text-lg font-semibold mx-4 mb-2">
                  High-Fidelity UI Design
                </h3>
                <p className="font-family-subheader text-[var(--color-textmain)] text-sm mx-4 mb-4">
                  Polishing the visual design with brand elements, typography,
                  and interactions. The final UI design focused on
                  accessibility, visual hierarchy, and creating an intuitive
                  experience for all users.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Key Features & Tech Stack */}
        <section className="my-16 mx-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-3xl font-bold mb-8 pb-2">
            Key Features & Technologies
          </h2>

          {/* Features */}
          <div className="mb-12">
            <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-3">
              FEATURES
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              {project.keyFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-[var(--color-highlight)] mt-1 mr-3">
                    <svg
                      className="w-5 h-5text-[var(--color-highlight)]"
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
                    className="font-family-subheader text-[var(--color-textmain)] text-base"
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
            <h3 className="font-family-subheader text-xl font-semibold text-[var(--color-highlight)] mb-6">
              TECH-STACK
            </h3>
            <div className="flex flex-wrap gap-3">
              <div className="flex flex-wrap gap-4 mt-1">
                {project.technologies.map((tech, techIdx) => (
                  <div
                    key={techIdx}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-highlight)]/20 backdrop-blur-sm border border-white/20 hover:bg-[var(--color-highlight)]/20 transition-all duration-300 scale-100 hover:scale-110">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-6 h-6"
                      />
                    </div>
                    <span className="font-family-subheader mt-1 text-sm font-sm text-[var(--color-textmain)] text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Challenges & Learning Outcomes */}
        <section className="my-16 mx-8">
          <h2 className="font-family-header text-[var(--color-accent)] text-3xl font-bold  mb-6 pb-2">
            Challenges & Learning Outcomes
          </h2>
          <div className="bg-transparent border-l-3 border-[var(--color-highlight)] pr-12 pl-12 mx-10">
            <div>
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-4">
                Balancing the Dual-User Experience
              </h3>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-4">
                <strong>The Challenge:</strong> The needs of a client, who
                primarily focuses on Browse and booking, are very different from
                those of a barber, who must manage a schedule and update a
                portfolio.
              </p>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-8">
                <strong>The Solution:</strong> I tackled this with a clear,
                component-based architecture and a context-sensitive UI. By
                separating user flows and using reusable components, I ensured a
                clean and focused experience for each user without cluttering
                the interface.
              </p>
            </div>
            <div>
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-4">
                Real-time Data & State Management
              </h3>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-4">
                <strong>The Challenge:</strong> Managing real-time data for
                features like appointment scheduling and in-app messaging. The
                calendar needed to update instantly for both the client and the
                barber to prevent double-bookings, and messages had to be
                delivered without delay.
              </p>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-8">
                <strong>The Solution:</strong> I leveraged Firebase's real-time
                database and integrated it with Flutter's state management. This
                ensured that all data was consistent and instantly updated
                across the platform, providing a seamless and reliable user
                experience.
              </p>
            </div>
            <div>
              <h3 className="font-family-subheader text-[var(--color-highlight)] text-xl font-semibold mb-4">
                Translating Design into a Scalable Component System
              </h3>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-4">
                <strong>The Challenge:</strong> Converting the high-fidelity
                designs from Figma into a robust and scalable frontend. The
                design had many custom components and interactions, which needed
                to be built efficiently while maintaining a single, performant
                codebase for Android.
              </p>
              <p className="font-family-subheader text-[var(--color-textmain)] text-sm mb-8">
                <strong>The Solution:</strong> I built a comprehensive component
                library using Flutter. By creating a reusable design system
                directly from my Figma files, I was able to rapidly develop
                features and ensure pixel-perfect visual consistency across the
                entire application.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Call to Action */}
        <section className="my-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            {/* Live Demo Button */}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                View Live Demo
              </a>
            )}

            {/* GitHub Repo Button */}
            {project.githubRepoUrl && (
              <a
                href={project.githubRepoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 hover:border-gray-400 text-gray-900 hover:text-gray-800 font-semibold rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                    clipRule="evenodd"
                  />
                </svg>
                View Code on GitHub
              </a>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HybridProjectModal;
