import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* Desktop */}
      <div className="sm:flex hidden top-[50%] left-[50%] absolute translate-x-[-50%] translate-y-[-50%]">
        <div className="w-full flex-1 text-5xl font-semibold mt-20">
          <h1>Hi,</h1>
          <h1>
            I am <span className="text-blue-500">Muavia</span>
          </h1>
          <p className="text-lg font-normal mt-5 w-[75%]">
            Computer Science student at Trinity College, Dublin
          </p>

          <button className="text-lg font-medium rounded-lg p-2 pl-4 pr-4 mt-5 bg-blue-500 text-white">
            About Me
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/ProfilePhoto.jpeg"
            alt=""
            priority
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="sm:hidden flex flex-col justify-center text-center items-center">
        <div className="w-full flex-1 text-5xl font-semibold mt-20">
          <h1>Hi,</h1>
          <h1>
            I am <span className="text-blue-500">Muavia</span>
          </h1>

          <div className="block ml-auto mr-auto w-[80%]">
            <Image
              src="/ProfilePhoto.jpeg"
              alt=""
              priority
              width={500}
              height={500}
            />
          </div>

          <p className="text-lg font-normal ml-10 mr-10">
            Computer Science student at Trinity College, Dublin
          </p>

          <button className="text-lg font-medium rounded-lg p-2 pl-4 pr-4 m-10 bg-blue-500 text-white">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
