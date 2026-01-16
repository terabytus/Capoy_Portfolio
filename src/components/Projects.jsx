import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import HybridProjectModal from "./HybridProjectModal";

const projects = [
  {
    id: 1,
    type: "hybrid",
    name: "FreshClips",
    description:
      "A Digital Platform Enhancing Client Interaction and Modernizing the Hairstyling Industry",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754671068/freshclips_cover_zlwsqx.svg",
    myRole: "End-to-End Development | UI/UX Design",
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
    researchImage: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1768483399/freshclips_user_persona_knsptq.png",
    wireframeImage: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1768567762/freshclips_wireframe_hjnnqg.png",
    researchImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    wireframeImageSize: "h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64", // Uniform size for bento-style layout

    problem:
      "Clients and barbers are currently disconnected by an inefficient and fragmented booking ecosystem. Clients struggle to find and book appointments with trustworthy, quality barbers, leading to wasted time waiting in lines and uncertainty about service quality. Traditional methods are inconvenient and offer little transparency into a barber's specialized skills or hygiene standards. Freelance barbers and hairstylists, on the other hand, lack a centralized platform to manage their schedules, showcase their work, and grow their clientele beyond their personal networks. This creates a significant gap where both parties are looking for a better solution.",
    solution: [
      "FreshClips is a digital platform that acts as a central hub for modernizing the hairstyling industry. It eliminates the pain points of traditional booking methods by focusing on convenience, quality, and trust.",
      "For Clients: The app provides a single destination to easily find, vet, and book appointments with confidence.",
      "For Stylists: The platform offers tools to manage their bookings, showcase their work, and connect with clients seamlessly.",
      "This solution empowers both clients and stylists by streamlining the booking process, enhancing transparency, and fostering stronger professional relationships. By leveraging modern technology, FreshClips bridges the gap between user needs and business goals, delivering a seamless experience for everyone involved.",
    ],
    challenges: [
      {
        title: "Balancing the Dual-User Experience",
        challenge:
          "The needs of a client, who primarily focuses on Browse and booking, are very different from those of a barber, who must manage a schedule and update a portfolio.",
        solution:
          "I tackled this with a clear, component-based architecture and a context-sensitive UI. By separating user flows and using reusable components, I ensured a clean and focused experience for each user without cluttering the interface.",
      },
      {
        title: "Real-time Data & State Management",
        challenge:
          "Managing real-time data for features like appointment scheduling and in-app messaging. The calendar needed to update instantly for both the client and the barber to prevent double-bookings, and messages had to be delivered without delay.",
        solution:
          "I leveraged Firebase's real-time database and integrated it with Flutter's state management. This ensured that all data was consistent and instantly updated across the platform, providing a seamless and reliable user experience.",
      },
      {
        title: "Translating Design into a Scalable Component System",
        challenge:
          "Converting the high-fidelity designs from Figma into a robust and scalable frontend. The design had many custom components and interactions, which needed to be built efficiently while maintaining a single, performant codebase for Android.",
        solution:
          "I built a comprehensive component library using Flutter. By creating a reusable design system directly from my Figma files, I was able to rapidly develop features and ensure pixel-perfect visual consistency across the entire application.",
      },
    ],
  },

  {
    id: 2,
    type: "hybrid",
    name: "TaRIDES",
    description:
      "A Community-based Mobile Application Designed for Cyclists and Hobbyists",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754670960/tarides_cover_oxdcax.svg",
    researchImage:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1768483399/TaRides_user_persona_l3gwzn.png",
    researchImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    wireframeImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    myRole: "UI/UX Design | Frontend Development",
    keyFeatures: [
      "GPS-based route tracking and sharing system",
      "Community features for cyclist groups and events",
      "Performance analytics and ride statistics",
      "Social networking features for cycling enthusiasts",
      "Community-Driven Challenges: Fosters friendly competition through community-based events, games, and competitions to boost user engagement.",
      'Real-Time Geolocation Support: Ensures safety and convenience with a "Helping Hand" feature and an integrated map to find nearby assistance and essential services.',
      'Personalized Goal Tracking: Provides a structured path to fitness goals with the "Goal 30 Challenge" and allows users to create their own custom activity templates.',
      "Gamified Rewards & Recognition: Incentivizes continued activity with a badge and points system that can be redeemed for real-world freebies from local sponsors.",
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
      "Despite the rise in cycling's popularity, the modern biker's experience is fragmented and often solitary. Existing fitness apps primarily focus on performance metrics, leaving a significant gap in community engagement and real-world support. Bikers routinely struggle with finding safe and engaging routes, locating nearby assistance for unexpected mechanical issues, and connecting with a like-minded community for shared challenges and motivation. This creates a disconnect between the solitary act of biking and the collective energy of the fitness community.",
    solution:
      "TaRIDES is a community-first digital platform designed to elevate the biking experience from a solitary activity to a collaborative one. It addresses the core frustrations of modern bikers by fusing robust fitness tracking with a powerful social and support network.",
    challenges: [
      {
        title: "Designing for Dual Engagement",
        challenge:
          "The primary challenge was designing a user experience that seamlessly integrates a highly social, community-driven platform with a detailed, data-heavy fitness tracker. The UI had to prevent the social features from feeling like a distraction while ensuring the tracking features were intuitive and reliable.",
        solution:
          "I used a modular design approach, separating the 'Activities' and 'Community' flows into distinct but easily accessible sections. This was accomplished by building a component-based system in Flutter that allowed for a focused, contextual UI without overwhelming the user.",
      },
      {
        title: "Implementing Real-Time Geo-Data and Performance",
        challenge:
          "Building a real-time tracking system that accurately records routes and finds nearby services using a geolocation-based API. This was complex, as it required careful optimization to prevent excessive battery drain while maintaining accuracy.",
        solution:
          "I integrated the Google Maps API to provide live routing and a 'Helping Hand' feature that locates nearby users. I learned to optimize API calls and implement efficient background tracking to balance a rich feature set with device performance and battery life.",
      },
      {
        title: "Structuring a Scalable Game and Rewards System",
        challenge:
          "The app's core innovation lies in its community-based games, rankings, and a rewarding points system. The technical challenge was to design a scalable database schema in Firebase that could handle real-time scoring, individual rankings, and group challenges without performance bottlenecks.",
        solution:
          "I modeled the data structure in Firebase to prioritize quick reads for leaderboards and user profiles. This allowed me to create a robust and dynamic rewards system that automatically awards points and badges, ensuring the gamified elements were both engaging and technically sound.",
      },
    ],
  },
  {
    id: 3,
    type: "hybrid",
    name: "Mobile DTR",
    description:
      "From clock-in to clock-out, our All-in-One Employee DTR keeps your business running smoothly – anytime, anywhere.",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/q_auto,f_auto/v1754670916/mobile_dtr_cover_olg97r.svg",
    myRole: "Designed | Built with Flutter",
    keyFeatures: [
      "Biometric and QR code-based attendance system",
      "Real-time attendance tracking and reporting",
      "Geolocation-based check-in/check-out verification",
      "Administrative dashboard for HR management",
      "Effortless Mobile Tracking: An intuitive and user-friendly interface allows employees to clock in and out from anywhere, providing the flexibility needed for a dynamic workforce.",
      "Streamlined Management: The system offers a centralized dashboard for managers to easily track work hours, monitor attendance, and streamline the payroll process with accurate data.",
      "Accuracy & Convenience: By digitizing the entire process, the app eliminates manual errors and provides a convenient, real-time record of all work hours, saving both time and resources.",
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
    researchImage: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1768483399/DTR_user_persona_hwfhmt.png", // Unique research image for Mobile DTR
    researchImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    wireframeImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    problem:
      "Traditional methods for employee timekeeping, such as manual timesheets and physical punch-clocks, are inefficient, prone to error, and lack the flexibility required by modern businesses. These outdated systems create administrative bottlenecks for managers, introduce payroll inaccuracies, and are completely unsuited for businesses with remote or on-site employees who work outside of a single location. The core problem is the absence of an efficient, accurate, and flexible digital solution to a fundamental business need.",
    solution:
      "The Mobile DTR is a comprehensive, all-in-one digital solution designed to modernize employee time and attendance tracking. The app's purpose is to replace outdated systems with a powerful, intuitive mobile platform that enhances efficiency and accuracy for businesses of all sizes. By focusing on convenience and reliability, the app empowers both employees and managers to streamline a critical daily process.",
    challenges: [
      {
        title: "Designing for Simplicity and Reliability",
        challenge:
          "The primary design challenge was creating an interface so simple and intuitive that employees from any industry or technical background could use it reliably. The app's core function is critical to payroll, so there was no room for user error or confusion.",
        solution:
          "I focused on a minimalist UI with a single, prominent clock-in/out button. The design prioritized a clear user flow and a consistent experience across all devices, ensuring that the app's most important function was effortless and foolproof.",
      },
      {
        title: "Building a Secure and Scalable Backend",
        challenge:
          "Handling sensitive employee data—including time records, work hours, and potentially location—required implementing a robust and secure backend. The system needed to be scalable to support a growing number of users from various businesses without compromising data integrity.",
        solution:
          "I designed a secure data model in Firebase with strict authentication rules to ensure that time records were accurate and tamper-proof. I learned to implement server-side validation and secure APIs to protect user data and ensure the system could handle enterprise-level usage.",
      },
      {
        title: "Ensuring a Consistent Cross-Platform Experience",
        challenge:
          "To be an all-in-one solution for diverse businesses, the app needed to provide a seamless and identical experience on both iOS and Android. This required solving the challenge of maintaining a single codebase while delivering a native feel on each platform.",
        solution:
          "I leveraged a cross-platform framework like Flutter to build the application. This allowed for a single, unified codebase while ensuring the UI was consistent and the performance was high on all mobile devices.",
      },
    ],
  },
  {
    id: 4,
    type: "design-only",
    name: "Design Concepts",
    problem:
      "The challenge was to establish a clear visual direction for a new brand, ensuring consistency across all products and marketing materials.",
    solution:
      "The solution involved creating a series of web and mobile design concepts to establish a brand identity, visual system, and color palette.",
    image:
      "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369420/design_concept_jh438z.png",
    myRole: "UI/UX Designer",
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
    researchImage: "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754369420/design_concept_jh438z.png", // Unique research image for Design Concepts
    researchImageSize: "h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72", // Uniform size for bento-style layout
    designChallenges: [
      {
        heading: "Designing a Cohesive Visual System",
        text: "The main challenge was ensuring consistency across multiple concepts and platforms. I created a robust design system in Figma to define reusable components, typography, and color palettes for a unified brand identity.",
      },
      {
        heading: "Iterating on User Feedback",
        text: "The initial concepts were refined after gathering feedback. I learned to identify key user pain points and make data-driven design decisions to improve the overall user experience.",
      },
    ],
    designJourney: [
      {
        image:
          "https://res.cloudinary.com/your-cloud/image/upload/alexander_aronowitz.png",
        text: "My process began with user research and persona creation to define the target audience and their needs, exemplified here by the persona for 'Alexander Aronowitz'.",
      },
      {
        image:
          "https://res.cloudinary.com/your-cloud/image/upload/design_concepts_high_res.png",
        text: "Next, I explored various 'Design Concepts' to establish the overall visual direction and brand identity for the project.",
      },
      {
        image:
          "https://res.cloudinary.com/your-cloud/image/upload/high_fidelity_ui_final.png",
        text: "Finally, I polished the visual design into a high-fidelity prototype, focusing on clean UI, effective typography, and a seamless user experience.",
      },
    ],
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

            <div className="font-family-subheader text-xs sm:text-sm md:text-base text-[var(--color-textmain)]/40 flex flex-wrap gap-2 mb-2">
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
            solution: selectedProject.solution,
            researchImage:
              selectedProject.researchImage, // No fallback - each project should have unique research image
            wireframeImage:
              "https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754743719/user_persona_plsg85.svg",
            finalDesignImage: selectedProject.image,
            keyFeatures: selectedProject.keyFeatures,
            researchImageSize: selectedProject.researchImageSize, // Pass custom research image size
            wireframeImageSize: selectedProject.wireframeImageSize, // Pass custom wireframe image size
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
