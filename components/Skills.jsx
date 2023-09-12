import { Circle } from "@mui/icons-material";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills">
      <h1 className="text-4xl font-bold  text-blue-600 text-center m-20">
        Skills
      </h1>

      {/* Dekstop */}
      <div className="sm:flex hidden text-center items-center">
        <div className="flex-1">
          <h1 className="text-xl font-bold  m-4">Technical Skills</h1>
          <div className="flex gap-4">
            <div className="flex-1 ml-10">
              <h1 className="text-blue-600 font-bold  m-4">
                Programming Languages
              </h1>
              <ul className="">
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Java
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  JavaScript
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  HTML & CSS
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Python
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Lua
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  C
                </li>
              </ul>
            </div>

            <div className="flex-1 mr-10">
              <h1 className="text-center text-red-600 font-bold  m-4">
                Frameworks & Libraries
              </h1>
              <ul>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Next js
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  React js
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Mongo DB
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1 mt-20">
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
          <h1 className="text-xl font-bold  m-4">Technical Skills</h1>
          <div className="flex gap-4">
            <div className="ml-10">
              <h1 className="text-blue-600 font-bold  m-4">
                Programming Languages
              </h1>
              <ul>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Java
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  JavaScript
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  HTML & CSS
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Python
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Lua
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  C
                </li>
              </ul>
            </div>

            <div className="flex-1 mr-10">
              <h1 className="text-center text-red-600 font-bold  m-4">
                Frameworks & Libraries
              </h1>

              <ul>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Next js
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  React js
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Mongo DB
                </li>
                <li className="rounded-lg p-2 m-2   shadow-md border-2  shadow-gray-400">
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-10">
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
