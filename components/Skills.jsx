import Image from "next/image";

const Skills = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-blue-600 text-center m-20">
        Skills
      </h1>

      {/* Dekstop */}
      <div className="sm:flex hidden text-center items-center">
        <div className="flex-1">
          <h1 className="text-xl font-bold m-4">Technical Skills</h1>
          <div className="flex gap-4">
            <div className="flex-1 ml-10">
              <h1 className="text-blue-600 font-bold m-4">
                Programming Languages
              </h1>
              <ul>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Java
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  JavaScript
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  HTML & CSS
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Python
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Lua
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  C
                </li>
              </ul>
            </div>

            <div className="flex-1 mr-10">
              <h1 className="text-center text-blue-600 font-bold m-4">
                Frameworks & Libraries
              </h1>
              <ul>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Next js
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  React js
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Mongo DB
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
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
            className="border-2 border-black rounded-2xl shadow-lg shadow-gray-500 m-auto "
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col text-center items-center">
        <div className="flex-1">
          <h1 className="text-xl font-bold m-4">Technical Skills</h1>
          <div className="flex gap-4">
            <div className="ml-10">
              <h1 className="text-blue-600 font-bold m-4">
                Programming Languages
              </h1>
              <ul>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Java
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  JavaScript
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  HTML & CSS
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Python
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Lua
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  C
                </li>
              </ul>
            </div>

            <div className="flex-1 mr-10">
              <h1 className="text-center text-blue-600 font-bold m-4">
                Frameworks & Libraries
              </h1>

              <ul>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Next js
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  React js
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Mongo DB
                </li>
                <li className="rounded-lg p-2 m-2 shadow-md border-2 border-black">
                  Git
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="m-5">
          <Image
            src="/Skills.jpg"
            alt="skills"
            width={500}
            height={500}
            priority
            className="border-2 border-black rounded-2xl shadow-lg shadow-gray-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
