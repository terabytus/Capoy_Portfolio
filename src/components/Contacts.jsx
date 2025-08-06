import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
const Contacts = () => {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);
  const [headingRef, headingVisible] = useScrollAnimation(0.1);
  const [infoRef, infoVisible] = useScrollAnimation(0.1);
  const [formRef, formVisible] = useScrollAnimation(0.1);
  const [getInTouchRef, getInTouchVisible] = useScrollAnimation(0.1);
  const [emailRef, emailVisible] = useScrollAnimation(0.1);
  const [linkedinRef, linkedinVisible] = useScrollAnimation(0.1);
  const [locationRef, locationVisible] = useScrollAnimation(0.1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Initialize EmailJS
  useEffect(() => {
    // Initialize EmailJS with your user ID (public key)
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    console.log("EmailJS Public Key:", publicKey ? "Set" : "Not set");

    if (publicKey) {
      emailjs.init(publicKey);
      console.log("EmailJS initialized successfully");
    } else {
      console.error(
        "EmailJS Public Key not found in environment variables. Please check your .env file."
      );
      setSubmitError(
        "Email service not properly configured. Please contact directly via LinkedIn."
      );
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Map EmailJS field names to formData properties
    const fieldMap = {
      from_name: "name",
      from_email: "email",
      subject: "subject",
      message: "message",
    };

    const formField = fieldMap[name] || name;

    setFormData({
      ...formData,
      [formField]: value,
    });
  };

  // EmailJS configuration
  // template_bidhr1g
  // service_abel71y

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitError(null);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitError("Please fill in all required fields.");
      setIsLoading(false);
      return;
    }

    // EmailJS template parameters - matching your template variables
    const templateParams = {
      from_name: formData.name, // matches {{from_name}} in template
      from_email: formData.email, // matches {{from_email}} in template
      subject: formData.subject || "New Contact Form Message",
      message: formData.message, // matches {{message}} in template
      to_name: "Crey",
      reply_to: formData.email,
    };

    // Get values from .env file
    const serviceID =
      import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_abel71y";
    const templateID =
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_bidhr1g";

    console.log("Sending email with params:", templateParams);
    console.log("Service ID:", serviceID);
    console.log("Template ID:", templateID);

    try {
      // Use send method with template parameters (more reliable)
      const result = await emailjs.send(serviceID, templateID, templateParams);

      console.log("Email sent successfully:", result);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);

      // Reset form
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error details:", {
        error,
        status: error.status,
        text: error.text,
        message: error.message,
      });

      // Provide more specific error messages
      let errorMessage = "Failed to send message. ";

      if (error.text === "Failed to fetch") {
        errorMessage +=
          "Network error - please check your internet connection and try again.";
      } else if (error.status === 400) {
        errorMessage += "Invalid request - please check your form data.";
      } else if (error.status === 401) {
        errorMessage +=
          "Authentication failed - please check EmailJS configuration.";
      } else if (error.status === 404) {
        errorMessage +=
          "Service or template not found - please check your EmailJS settings.";
      } else {
        errorMessage += `${
          error.text || error.message || "Unknown error"
        }. Please contact me directly.`;
      }

      setSubmitError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid grid-cols-12 gap-6 py-24 bg-[var(--color-primary)] transition-all duration-1000 px-4 sm:px-2 md:px-0"
    >
      <div className="col-span-12 lg:col-start-2 lg:col-span-10 xl:col-start-3 xl:col-span-8">
        <div className="max-w-6xl mx-auto relative">
          {/* Japanese-inspired floating decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Floating Sakura Petals */}
            <div className="absolute top-10 left-10 w-4 h-4 text-white/20 animate-float-slow">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 8 8 12 2 12C8 12 12 16 12 22C12 16 16 12 22 12C16 12 12 8 12 2Z" />
              </svg>
            </div>

            <div className="absolute top-32 right-20 w-3 h-3 text-gray-300/30 animate-float-medium">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 8 8 12 2 12C8 12 12 16 12 22C12 16 16 12 22 12C16 12 12 8 12 2Z" />
              </svg>
            </div>

            <div className="absolute bottom-40 left-1/4 w-5 h-5 text-white/15 animate-float-fast">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C12 8 8 12 2 12C8 12 12 16 12 22C12 16 16 12 22 12C16 12 12 8 12 2Z" />
              </svg>
            </div>

            {/* Floating Circles */}
            <div className="absolute top-20 right-1/3 w-2 h-2 bg-white/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute bottom-32 right-10 w-3 h-3 bg-gray-300/25 rounded-full animate-pulse-medium"></div>
            <div className="absolute top-1/2 left-5 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse-fast"></div>

            {/* Geometric shapes */}
            <div className="absolute top-1/3 right-5 w-6 h-6 border border-white/20 rotate-45 animate-spin-very-slow"></div>
            <div className="absolute bottom-1/4 left-10 w-4 h-4 border border-gray-300/25 animate-spin-slow"></div>

            {/* Floating Lines */}
            <div className="absolute top-1/4 left-1/2 w-16 h-0.5 bg-white/15 animate-float-medium transform rotate-45"></div>
            <div className="absolute bottom-1/3 right-1/3 w-12 h-0.5 bg-gray-300/20 animate-float-fast transform -rotate-45"></div>

            {/* Additional decorative elements */}
            <div className="absolute top-5 right-5 w-8 h-8 text-white/10 animate-spin-very-slow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>

            <div className="absolute bottom-5 left-1/2 w-6 h-6 text-gray-300/15 animate-float-slow">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              >
                <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
              </svg>
            </div>
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

          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Contact Info (Left Side) */}
            <div className="space-y-8 md:col-span-7">
              <div
                ref={headingRef}
                className={` lg:flex items-start mb-8 transition-all duration-700 ${
                  headingVisible
                    ? "animate-fade-in-up"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <h1 className="font-family-accent text-7xl md:text-8xl mb-4 text-[var(--color-accent)]">
                  CONTACT ME
                </h1>
              </div>

              <div>
                <h3
                  ref={getInTouchRef}
                  className={`font-family-subheader text-2xl text-[var(--color-highlight)] mb-6 transition-all duration-700 ${
                    getInTouchVisible
                      ? "animate-fade-in-up"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div
                    ref={emailRef}
                    className={`flex items-center space-x-4 transition-all duration-700 ${
                      emailVisible
                        ? "animate-fade-in-left"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: emailVisible ? "0ms" : "0ms" }}
                  >
                    <div className="w-10 h-10 bg-[var(--color-highlight)]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[var(--color-highlight)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-family-subheader font-medium mb-1 text-[var(--color-textmain)]">
                        Email
                      </p>
                      <a
                        href="https://mail.google.com/mail/?view=cm&to=crey1438@gmail.com&su=Project%20Inquiry&body=Hi%20Christian%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20I'm%20interested%20in%20working%20with%20you.%0D%0A%0D%0A[Please%20write%20your%20message%20here]%0D%0A%0D%0ALooking%20forward%20to%20connecting%20with%20you.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-highlight)] font-family-subheader hover:text-[var(--color-accent)] transition-colors duration-300"
                      >
                        crey1438@gmail.com
                      </a>
                    </div>
                  </div>

                  <div
                    ref={linkedinRef}
                    className={`flex items-center space-x-4 transition-all duration-700 ${
                      linkedinVisible
                        ? "animate-fade-in-left"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{
                      transitionDelay: linkedinVisible ? "150ms" : "0ms",
                    }}
                  >
                    <div className="w-10 h-10 bg-[var(--color-highlight)]/20 rounded-full flex items-center justify-center">
                      <img
                        src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754373466/linkedin_flat_wdbdzx.svg"
                        alt="LinkedIn"
                        className="w-5 h-5"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(92%) sepia(20%) saturate(644%) hue-rotate(321deg) brightness(101%) contrast(89%)",
                        }}
                      />
                    </div>
                    <div>
                      <p className="font-family-subheader font-medium text-[var(--color-textmain)]">
                        LinkedIn
                      </p>
                      <a
                        href="https://www.linkedin.com/in/christian-rey-capoy-091944231/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-highlight)] font-family-subheader hover:text-[var(--color-accent)] transition-colors duration-300"
                      >
                        Christian Capoy | LinkedIn
                      </a>
                    </div>
                  </div>

                  <div
                    ref={locationRef}
                    className={`flex items-center space-x-4 transition-all duration-700 ${
                      locationVisible
                        ? "animate-fade-in-left"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{
                      transitionDelay: locationVisible ? "300ms" : "0ms",
                    }}
                  >
                    <div className="w-10 h-10 bg-[var(--color-highlight)]/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-5 h-5 text-[var(--color-highlight)]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div>
                        <p className="font-family-subheader text-[var(--color-textmain)] font-medium">
                          Location
                        </p>
                        <div className="flex items-center space-x-2">
                          <a
                            href="https://maps.app.goo.gl/nHR2e5veGuA7bBfi6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-family-subheader text-[var(--color-highlight)] hover:text-[var(--color-accent)] transition-colors duration-300"
                          >
                            Cebu, Philippines
                          </a>
                          <img
                            src="https://res.cloudinary.com/dxsz6wu6j/image/upload/v1754371738/philippines_a99ap5.svg"
                            alt="Philippine Flag"
                            className="w-6 h-4 rounded-sm shadow-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form (Right Side) - Transparent */}

            <div
              ref={formRef}
              className={`backdrop-blur-md bg-[var(--color-textmain)]/5 rounded-2xl p-6 border border-[var(--color-highlight)]/10 shadow-2xl md:col-span-5 transition-all duration-700 ${
                formVisible
                  ? "animate-fade-in-right"
                  : "opacity-0 translate-x-10"
              } `}
              style={{ transitionDelay: formVisible ? "0ms" : "0ms" }}
            >
              <h3 className="font-family-header text-3xl md:text-3xl mb-3 text-[var(--color-textmain)]">
                Let's Work Together
              </h3>

              <p className="font-family-subheader text-sm text-[var(--color-highlight)] max-w-1xl mx-auto mb-4">
                I'm open to freelance work, internships, and full-time
                opportunities. Feel free to drop a message.
              </p>

              {isSubmitted && (
                <div className="bg-[var(--color-highlight)]/20 border border-[var(--color-highlight)]/40 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <p className="text-[var(--color-textmain)] font-medium font-family-subheader">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {submitError && (
                <div className="bg-red-500/20 border border-red-500/40 rounded-lg p-4 mb-6 backdrop-blur-sm">
                  <p className="text-red-400 font-medium">✗ {submitError}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[var(--color-highlight)] font-family-subheader mb-1 text-sm"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="from_name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[var(--color-primary)]/20 backdrop-blur-sm border border-[var(--color-highlight)]/20 rounded-xl text-[var(--color-textmain)] font-family-subheader focus:border-[var(--color-highlight)] focus:outline-none transition-all duration-300 placeholder-[var(--color-highlight)]/50"
                    placeholder="Juan Dela Cruz"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-[var(--color-highlight)] font-family-subheader mb-1 text-sm"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="from_email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[var(--color-primary)]/20 backdrop-blur-sm border border-[var(--color-highlight)]/20 rounded-xl text-[var(--color-textmain)] font-family-subheader focus:border-[var(--color-highlight)] focus:outline-none transition-all duration-300 placeholder-[var(--color-highlight)]/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-[var(--color-highlight)] font-family-subheader mb-1 text-sm"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[var(--color-primary)]/20 backdrop-blur-sm border border-[var(--color-highlight)]/20 rounded-xl text-[var(--color-textmain)] font-family-subheader focus:border-[var(--color-highlight)] focus:outline-none transition-all duration-300 placeholder-[var(--color-highlight)]/50"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-[var(--color-highlight)] font-family-subheader mb-1 text-sm"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-3 py-2 bg-primary/20 backdrop-blur-sm border border-[var(--color-highlight)]/20 rounded-xl text-[var(--color-textmain)] font-family-subheader focus:border-[var(--color-highlight)] focus:outline-none transition-all duration-300 resize-none placeholder-[var(--color-highlight)]/50"
                    placeholder="Tell me about your project or idea..."
                  ></textarea>
                </div>

                {/* Hidden fields for additional EmailJS template variables */}
                <input type="hidden" name="to_name" value="Crey" />
                <input type="hidden" name="reply_to" value={formData.email} />

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full px-6 py-3 backdrop-blur-sm text-[var(--color-highlight)] font-family-subheader font-medium rounded-xl shadow-xl text-base transition-all duration-300 border border-[var(--color-accent)]/20 ${
                    isLoading
                      ? "bg-[var(--color-primary-500)]/50 cursor-not-allowed"
                      : "bg-[var(--color-accent)]/70 hover:scale-105 hover:shadow-2xl hover:bg-[var(--color-accent)] hover:font-bold cursor-pointer"
                  }`}
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
