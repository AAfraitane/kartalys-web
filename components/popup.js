import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SuccessNotification = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white-500 rounded-lg shadow-lg p-8 flex flex-col justify-center items-center"
        >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Merci pour votre inscription !
            </h3>
            <p className="text-gray-600 text-center">
            Vous allez recevoir un email de confirmation dans quelques minutes.
            </p>
            <Link
            to="/"
            className="bg-red-700 text-white-500 font-semibold rounded-lg py-3 px-8 mt-6 hover:shadow-orange-md transition-all"
            >
            Retour à l'accueil
            </Link>
        </motion.div>
        </div>
    );
}

export default SuccessNotification;