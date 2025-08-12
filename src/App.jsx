import About from "./components/About";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div className="bg-primary min-h-screen text-textmain font-body dark:bg-primary transition-colors duration-500 w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
