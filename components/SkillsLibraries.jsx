import React from "react";

const SkillsLibraries = () => {
  return (
    <ul className="flex flex-col gap-5">
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Next js</p>
          <p>80%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-red-500 w-[80%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>React js</p>
          <p>80%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-red-500 w-[80%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Mongo DB</p>
          <p>50%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-red-500 w-[50%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Git</p>
          <p>80%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-red-500 w-[80%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Tailwind</p>
          <p>90%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-red-500 w-[90%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
    </ul>
  );
};

export default SkillsLibraries;
