import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Testimoni from "./Testimoni";
import ContactForm from "./ContactForm";

const notificationAPIUrl = 'https://dfdrpd6jkqhvvecr3v2ycnzo4i0ldkcc.lambda-url.us-east-1.on.aws'

const Team = (props) => {

  

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="team"
    >
      <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-center mt-20 text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Notre équipe{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="text-center leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
             Forte d'expériences en architecture, développement logiciels et gestion de projets, notre équipe est prête à vous accompagner dans vos projets.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ContactForm />
        </div>
    </div>
  );
};

export default Team;
