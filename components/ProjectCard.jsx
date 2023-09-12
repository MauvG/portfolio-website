import { GitHub } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ src, name, website, desc, skills, github }) => {
  return (
    <div className="basis-44">
      <div className="border-2 border-black shadow-lg w-[300px] min-h-[70vh] rounded-xl">
        <div className="m-4 border-2 border-black">
          <Image
            src={src ? src : "/"}
            alt={name}
            width={500}
            height={500}
            priority
            className=""
          />
        </div>
        <div className="m-4 text-center">
          <h1 className="font-bold text-lg">{name}</h1>
          <div>
            {website === "" ? (
              <></>
            ) : (
              <Link href={website} className="text-blue-600 hover:underline">
                website
              </Link>
            )}
          </div>

          <div>
            {github === "" ? (
              <></>
            ) : (
              <Link href={github} className="hover:text-blue-600">
                <GitHub fontSize="large" />
              </Link>
            )}
          </div>

          <div className="mt-10">
            <h1 className="font-bold mt-4">Description</h1>
            <p>{desc}</p>
            <h1 className="font-bold mt-4">Made using</h1>
            <p>{skills}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
