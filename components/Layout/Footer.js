import React from "react";
import Image from "next/image";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Linkedin from "../../public/assets/Icon/linkedin.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24 mt-60">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid  sm:grid-rows-1 grid-flow-row sm:grid-flow-col sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4  flex flex-col items-start sm:col-start-9 sm:col-end-13">
        <Image
                  src="/assets/Kartalys.png"
                  alt="logo-kartalys"
                  quality={100}
                  width={150}
                  height={70}
                />
          <p className="mb-4">
            <strong className="font-medium">Kartalys</strong> est une société d'édition et de service informatique offrant de multiples solutions.
          </p>
          <div className="flex w-full mt-2 mb-1 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6 fill-red-700" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6 fill-red-700" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6 fill-red-700" />
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Linkedin className="h-6 w-6 fill-red-700" />
            </div>
          </div>
          <p className="text-gray-400">©{new Date().getFullYear()} - Kartalys</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
