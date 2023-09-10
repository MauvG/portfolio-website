import { ArrowDownward } from "@mui/icons-material";
import Image from "next/image";

const Home = () => {
  return (
    <div className="">
      {/* Desktop */}
      <div className="sm:flex hidden items-center justify-center m-20">
        <div className="text-5xl font-bold">
          <h1>Hi,</h1>
          <h1>
            I am <span className="text-blue-500">Muavia</span>
          </h1>
          <p className="text-lg font-normal mt-10 w-[60%]">
            Computer Science student at Trinity College, Dublin
          </p>

          <button className="text-lg rounded-lg p-2 pl-4 pr-4 mt-10 bg-blue-500 text-white">
            About Me
          </button>
        </div>

        <div className="">
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
        <div className="w-full flex-1 text-5xl font-bold mt-20">
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

      <div className="text-center m-10 animate-bounce text-blue-600">
        <ArrowDownward fontSize="large" />
      </div>
    </div>
  );
};

export default Home;
