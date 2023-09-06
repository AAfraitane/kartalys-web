import Image from "next/image";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import ButtonPrimary from "./misc/ButtonPrimary";
import Testimoni from "./Testimoni";

const Team = (props) => {

  const kartalysListId = "10352415"
  const emailRegistrationId = 'emailRegistrationId';
  const [input, setInput] = useState(props?.value ?? '');

  const registerEmailToNewsletter = (email) => {
    fetch("https://dfdrpd6jkqhvvecr3v2ycnzo4i0ldkcc.lambda-url.us-east-1.on.aws", {
        method: "POST",
        body: JSON.stringify({
          email,
          listId: kartalysListId,
        }),
        headers: {
          "content-type": "application/json",
        },
      }).catch((e) => console.error(e));
  };

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
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Restez informés !
                  </h5>
                  <input type="text"  id={emailRegistrationId} value={input} onInput={e => setInput(e.target.value)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-full mt-4" placeholder="Votre adresse email"/>
                </div>
                <ButtonPrimary onclick={registerEmailToNewsletter}>S'inscrire</ButtonPrimary>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
    </div>
  );
};

export default Team;
