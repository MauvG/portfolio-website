import { ArrowDownward, Email, GitHub, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div id="home" className="mb-40">
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

          <div className="flex gap-5 mt-10">
            <Link href={"https://www.github.com/MauvG"}>
              <GitHub fontSize="large" className="hover:text-blue-600" />
            </Link>

            <Link href={"https://www.linkedin.com/in/muavia-ghazi/"}>
              <LinkedIn fontSize="large" className=" hover:text-blue-600" />
            </Link>

            <Link href="mailto:MuaviaIjazGhazi@gmail.com">
              <Email fontSize="large" className=" hover:text-blue-600" />
            </Link>
          </div>
        </div>

        <div className="">
          <Image
            src="/ProfilePhoto.jpeg"
            alt=""
            priority
            width={500}
            height={500}
            className=""
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

          <div className="flex justify-center gap-5">
            <Link href={"https://www.github.com/MauvG"}>
              <GitHub fontSize="large" className="hover:text-blue-600" />
            </Link>

            <Link href={"https://www.linkedin.com/in/muavia-ghazi/"}>
              <LinkedIn fontSize="large" className=" hover:text-blue-600" />
            </Link>

            <Link href="mailto:MuaviaIjazGhazi@gmail.com">
              <Email fontSize="large" className=" hover:text-blue-600" />
            </Link>
          </div>
        </div>
      </div>

      <div className="sm:block hidden absolute left-[50%] translate-x-[-50%]  bottom-10 border-2 rounded-full p-1 border-blue-600 animate-bounce text-blue-600">
        <ArrowDownward fontSize="large" />
      </div>
    </div>
  );
};

export default Home;
