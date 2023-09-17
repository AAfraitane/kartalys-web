import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { ButtonPrimary } from "./misc/ButtonPrimary";

const Expertise = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-6 bg-gradient-to-b from-white-300 to-white-500 max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto py-14"
      id="expertise"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-4">
      <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/africa.png"
              alt="expertise"
              layout="responsive"
              quality={100}
              height={200}
              width={300}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <h3 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal mb-5">
            Notre expertise
          </h3>
          <p className="text-black-800">
            Nous intervenons dans la transformation digitale des entreprises et des organisations. Nos domaines d'expertise sont les suivants:
          </p>
          <p>
            <br/>
            <ul className="list-disc text-left items-center">
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-red-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Achitecture et développment</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-red-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Gestion de projet</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-red-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Sécurité réseau et informatique</span>
              </li>
              <li className="flex items-center mb-2">
                <svg className="w-3 h-3 fill-current text-red-700 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Intelligence artificielle</span>
              </li>
            </ul>
          </p>
          <br/>
          <ButtonPrimary scrollTo="contact-us" class="mt-12">En savoir plus</ButtonPrimary>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Expertise;
