import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { ButtonKartapay } from "./misc/ButtonPrimary";

const Kartapay = () => {

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mt-6 bg-gradient-to-b from-white-300 to-white-500 max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="kartapay"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-4">
      <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/kartapay_flat_2_transparent.png"
              alt="kartaPay"
              layout="responsive"
              quality={100}
              height={350}
              width={300}
            />
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
        <motion.div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
          <p className="my-4 text-black-800">
          Il s'agit d'une plateforme de paiement numérique novatrice conçue pour digitaliser les paiements aux Comores.
          Sa fonction première est d'aggréger les différentns supports de paiement disponibles.
          </p>
          <ButtonKartapay scrollTo="contact-us" class="mt-12">En savoir plus</ButtonKartapay>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Kartapay;
