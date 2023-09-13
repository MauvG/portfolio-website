import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="hiddenElement leftSlide text-4xl font-bold text-blue-600 text-center m-20">
        Projects
      </h1>

      {/* Desktop */}
      <div className="flex flex-wrap items-center justify-center m-10 gap-10 ">
        <ProjectCard
          src="/projects/mg-footwear.PNG"
          name="MG-Footwear"
          website="https://mg-footwear.vercel.app/"
          desc="An online shoe store, where the user can choose any shoe from a category and add it to their cart."
          skills="Next js, JavaScript, HTML, CSS, Tailwind, MongoDB"
          github="https://github.com/MauvG/shoe-store"
        />
        <ProjectCard
          src="/projects/showcase-website.PNG"
          name="Project Showcase Platform"
          website=""
          desc="A web app that showcases projects made by users through an AsciiDoc input form."
          skills="JavaScript, React js, HTML, CSS, Git, FastApi, Docker"
          github="https://github.com/MauvG/Project-Showcase-Website"
        />
        <ProjectCard
          src="/projects/roblox.PNG"
          name="Roblox Game"
          website="https://www.roblox.com/games/11879742279/Every-second-you-get-1-height#!/about"
          desc="A roblox game, where your character gets taller every second. It has almost 30K visits."
          skills="Lua, Roblox Studio"
          github=""
        />
      </div>
    </div>
  );
};

export default Projects;
