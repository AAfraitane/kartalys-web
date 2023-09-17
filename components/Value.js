import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";




const Values = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="values"
    >
      <div className="max-w-screen-xl  px-6 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Notre identité
            </motion.h3>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-items-start	">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-10 xl:px-16 w-full"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                  Nos valeurs
                </p>
                <p className="text-md text-gray-600 mb-5">
                  L'Innovation, l'Inclusion et l'Intégrité guident notre culture d'entreprise, inspirant la créativité et la confiance dans tout ce que nous faisons.
                </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-items-start	">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-items-start items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-10 xl:px-16 w-full"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >

              <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                Nos missions
              </p>
              <p className="text-md text-gray-600 mb-5">
                Catalyser l'innovation, promouvoir l'inclusion numérique et stimuler le développement économique en Afrique et dans l'Océan Indien. 
              </p>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-items-start">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-items-start items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-10 xl:px-16 w-full"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <p className="text-lg text-black-600 font-medium my-2 sm:my-7">
                Notre vision
              </p>
              <p className="text-md text-gray-600 mb-5">
                Faire avancer en intégrant l'innovation technologique au progrès socio-économique, transformant le numérique en opportunité universelle.
              </p>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
