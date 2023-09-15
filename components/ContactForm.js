import React, { useMemo, useState } from "react";

import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ButtonPrimary from "./misc/ButtonPrimary";
import DialogDefault from "./popup";

const notificationAPIUrl = 'https://dfdrpd6jkqhvvecr3v2ycnzo4i0ldkcc.lambda-url.us-east-1.on.aws'


const ContactForm = (props) => {

    const scrollAnimation = useMemo(() => getScrollAnimation(), []);

    const kartalysListId = "10352415"
    const registerFirstName = 'registerFirstName';
    const registerLastName = 'registerLastName';
    const registerCompany = 'registerCompany';
    const registerPhoneNumber = 'registerPhoneNumber';
    const registerEmail = 'registerEmail';

    const [contact, setContactInfo] = useState({
        registerFirstName: "",
        registerLastName: "",
        registerCompany: "",
        registerPhoneNumber: "",
        registerEmail: "",
    });

    const updateContactInfo = (e) => {
        setContactInfo({
        ...contact,
        [e.target.id]: e.target.value,
        });
    };

    const registerEmailToNewsletter = (event) => {
        event.preventDefault()
        // if(!event) return;
        fetch(notificationAPIUrl, {
            method: "POST",
            body: JSON.stringify({
            email: contact.registerEmail,
            listId: kartalysListId,
            fistName: contact.registerFirstName,
            lastName: contact.registerLastName,
            company: contact.registerCompany,
            phonenumber: contact.registerPhoneNumber,
            }),
            headers: {
            "content-type": "application/json",
            },
        }).catch((e) => console.error(e));
    };


    return <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
            {/* Test popup */}
            {/* <DialogDefault /> */}
            <form>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                    <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                        Restez informés !
                    </h5>
                        <div className="flex flex-row items-center justify-start"> 
                        <input type="text" required id={registerLastName} onInput={e => updateContactInfo(e)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-1/2 mt-4 mr-2" placeholder="Nom"/>
                        <input type="text" required id={registerFirstName} onInput={e => updateContactInfo(e)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-1/2 mt-4 " placeholder="Prénom"/>
                        </div>
                        <input type="text"  id={registerCompany} onInput={e => updateContactInfo(e)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-full mt-4" placeholder="Société (facultatif)"/>
                        <input type="text"  id={registerPhoneNumber} onInput={e => updateContactInfo(e)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-full mt-4" placeholder="Téléphone (facultatif)"/>
                        <input type="text" required id={registerEmail} onInput={e => updateContactInfo(e)} className="border-2 border-gray-500 rounded-lg px-4 py-2 w-full mt-4" placeholder="Adresse email"/>
                    </div>
                    <ButtonPrimary id="contact-us" onclick={e => registerEmailToNewsletter(e)} >S'inscrire</ButtonPrimary>
                </div>
            </form>
            <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
        </ScrollAnimationWrapper>

}

export default ContactForm;