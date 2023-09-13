const SkillsProgramming = () => {
  return (
    <ul className="flex flex-col gap-5">
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Java</p>
          <p>90%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[90%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>JavaScript</p>
          <p>80%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[80%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>HTML & CSS</p>
          <p>80%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[80%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>C</p>
          <p>50%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[50%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Lua</p>
          <p>60%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[60%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
      <li className="w-[70%] m-auto">
        <div className="flex justify-between">
          <p>Python</p>
          <p>50%</p>
        </div>
        <div className="relative">
          <div className="absolute h-2 rounded-lg bg-blue-500 w-[50%] z-10" />
          <div className="absolute h-2 rounded-lg bg-gray-300 w-[100%]" />
        </div>
      </li>
    </ul>
  );
};

export default SkillsProgramming;
