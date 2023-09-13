import Image from "next/image";
import SkillsProgramming from "./SkillsProgramming";
import SkillsLibraries from "./SkillsLibraries";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="hiddenElement scaleUp text-4xl font-bold text-blue-600  text-center m-20">
        Skills
      </h1>

      {/* Dekstop */}
      <div className="sm:flex hidden text-center items-center">
        <div className="flex-1">
          <h1 className="hiddenElement upSlide text-xl font-bold  m-4">
            Technical Skills
          </h1>
          <div className="flex gap-4">
            <div className="hiddenElement leftSlide flex-1 ml-10">
              <h1 className=" font-bold  m-4">Programming Languages</h1>
              <SkillsProgramming />
            </div>

            <div className="hiddenElement rightSlide flex-1 mr-10">
              <h1 className="text-cente font-bold  m-4">
                Frameworks & Libraries
              </h1>
              <SkillsLibraries />
            </div>
          </div>
        </div>
        <div className="hiddenElement scaleUp flex-1 mt-20">
          <Image
            src="/Skills.jpg"
            alt="skills"
            width={500}
            height={500}
            priority
            className=" shadow-gray-400 rounded-2xl shadow-lg m-auto "
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col text-center items-center">
        <div className="flex-1">
          <h1 className="hiddenElement scaleUp text-xl font-bold m-4">
            Technical Skills
          </h1>
          <div className="flex">
            <div className="hiddenElement leftSlide flex-1">
              <h1 className="font-bold m-4">Programming Languages</h1>
              <SkillsProgramming />
            </div>

            <div className="hiddenElement rightSlide flex-1">
              <h1 className="text-center font-bold  m-4">
                Frameworks & Libraries
              </h1>
              <SkillsLibraries />
            </div>
          </div>
        </div>
        <div className="hiddenElement scaleUp m-10">
          <Image
            src="/Skills.jpg"
            alt="skills"
            width={500}
            height={500}
            priority
            className=" shadow-gray-400 rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
