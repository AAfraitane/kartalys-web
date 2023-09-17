import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import {motion} from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero = ({
  listUser = [
    {
      name: "Users",
      number: "390",
      icon: "/assets/Icon/heroicons_sm-user.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/Icon/gridicons_location.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/Icon/bx_bxs-server.svg",
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  function rotatex(arg0, deg) {
    throw new Error("Function not implemented.");
  }

  return (
    <div
      className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper>
          <motion.div
            className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
            variants={scrollAnimation}>
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal">
                <strong>KartaLys</strong>, l'innovation à votre service 
              </h1>
              <p className="text-black-500 mt-4 mb-6">
              Votre solution sur mesure pour répondre aux défis IT en plein cœur de l'océan Indien et de l'Afrique.
              </p>
              <ButtonPrimary scrollTo="contact-us">Contactez-nous</ButtonPrimary>
            </div>
            <div className="flex w-full">
              <motion.div className="h-full w-full" variants={scrollAnimation}>
                <Image
                  // style = {{borderRadius: "3%"}} and reflexion on bottom
                  id="hero-image"
                  style={{borderRadius: "2%"}}
                  src="/assets/IMG_3074_computer_without_bg2.png"
                  alt="kartalys"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
              </motion.div>
            </div>
          </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
