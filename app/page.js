"use client";

import About from "@/components/About";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { useEffect } from "react";

const page = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("showElement");
        } else {
          entry.target.classList.remove("showElement");
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hiddenElement");
    hiddenElements.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
