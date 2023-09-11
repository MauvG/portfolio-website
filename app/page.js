import About from "@/components/About";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default page;
