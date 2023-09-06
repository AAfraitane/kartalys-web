import React from "react";

export const ButtonPrimary = ({ children, addClass, onclick}) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-red-700 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }

      onClick={onclick}
    >
      {children}
    </button>
  );
};

export const ButtonKartapay = ({ children, addClass }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none" +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
