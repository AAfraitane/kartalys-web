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
      className="w-full mt-6 bg-gradient-to-b from-white-300 to-white-500 xl:py-32 md:py-16 py-16 mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 xl:px-36"
      id="kartapay"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p y-4 mx-4">
      <ScrollAnimationWrapper className="max-w-screen-sm flex justify-end xl:mx-120">
          <motion.div className="h-full w-full xl:mx-10" variants={scrollAnimation}>
            <Image
              src="/assets/kartapay_flat_2_transparent.png"
              alt="kartaPay"
              layout="responsive"
              quality={100}
              width={380}
              height={130}
            />  
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex justify-start xl:mx-10">
        <motion.div className="flex flex-col items-start justify-center ml-auto w-full" variants={scrollAnimation}>
          <p className="my-4 text-black-800">
            KartaPay est un aggrégateur de paiements numériques, créé pour répondre au besoin d'inclusion financière aux Comores.
            Payez facilement et en toute situation grâce à un QR code sécurisé.
          </p>
          <ButtonKartapay scrollTo="contact-us" class="mt-12">En savoir plus</ButtonKartapay>
          
        </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Kartapay;
