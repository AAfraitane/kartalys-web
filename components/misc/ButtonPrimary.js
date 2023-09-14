import React from "react";
import { scrollToId } from "./utils";

export const ButtonPrimary = ({ children, addClass, onclick, scrollTo, id}) => {
  const onclickAndScroll = (e) => {
    if (onclick) onclick(e)
    if (scrollTo) scrollToId(scrollTo)
  }
  return (
    <button
      id={id}
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-red-700 hover:shadow-orange-md transition-all outline-none " +
        addClass
      }
      onClick={onclickAndScroll}
    >
      {children}
    </button>
  );
};

export const ButtonKartapay = ({ children, addClass, onclick, scrollTo, }) => {
  return (
    <button
      className={
        "py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-blue-500 hover:shadow-blue-md transition-all outline-none" +
        addClass
      }
      onClick={() => {
        scrollToId(scrollTo)
        if (onclick) onclick()
      }}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
