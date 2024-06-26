import React from "react";
import { scrollToId } from "./utils";

const ButtonOutline = ({ children, onclick, scrollTo }) => {
  
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-red-700 text-red-700 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-red-700 hover:text-white-500 transition-all hover:shadow-orange "
      onClick={() => {
        scrollToId(scrollTo)
        if (onclick) onclick()
      }}
    >
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
