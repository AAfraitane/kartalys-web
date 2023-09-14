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
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
            >
              Nos valeurs
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
                <p className="text-lg text-black-600 font-medium my-2 sm:my-7 mx-3">
                  Nos principes
                </p>
                <p className="text-lg text-gray-600 mx-10">
                  <ul className="list-disc text-left items-center">
                    <li className="text-gray-600">Innovation</li>
                    <li className="text-gray-600">Inclusion</li>
                    <li className="text-gray-600">Intégrité</li>
                  </ul>
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
              <p className="text-lg text-gray-600 mx-3">
                <ul className="list-disc text-left items-center">
                  <li className="text-gray-600">Innovation constante</li>
                  <li className="text-gray-600">Inclusion numérique</li>
                  <li className="text-gray-600">Développement économique</li>
                  <li className="text-gray-600">Responsabilité sociale d'entreprise (RSE)</li>
                </ul>
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
              <p className="text-lg text-gray-600">
                Nous façonnons l'avenir en plaçant l'innovation technologique au cœur du progrès socio-économique, 
                convertissant ainsi le digital en un tremplin universel.
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
