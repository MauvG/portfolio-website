import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="mt-20 mb-20">
      <div className="flex justify-center gap-5 m-20">
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
  );
};

export default Footer;
