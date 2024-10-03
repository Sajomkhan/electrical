import { socialmedias } from "@/lib/data";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-gray-950 text-white mt-14">
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center px-4 md:px-32 py-8">
        <p className="text-sm text-gray-400 text-center">
          Address: SouthZone Tech Solution, Kawnia Road, Barishal.
        </p>
        <p className="text-sm text-gray-400">
          © 2024 copyright all right reserved by Ajom
        </p>
        <div className="flex gap-6">
          {socialmedias.map((socialmedia, index) => {

            return (
              <div key={index}>
                <a href={socialmedia.link} target="blank">
                  <Image
                    className="h-5 w-5 bg-gray-200 rounded-md shadow-md hover:bg-teal-300 hover:scale-110 duration-300"
                    src={socialmedia.icon}
                    //   src={`${icon}`}
                    alt="Icon Image"
                    width={20}
                    height={20}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
