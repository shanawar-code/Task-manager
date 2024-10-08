import React from "react";

const Button = ({
  text,
  className,
  type,
  handleClick,
  customPadding,
}) => {
  return (
    <button
     
      onClick={handleClick}
      type={type ? type : ""}
      className={`text-sm font-mulish font-bold  bg-btn-gradient hover:scale-105 ease-in-out duration-300 text-white flex items-center justify-center  rounded-[8px]  ${className} ${
        customPadding ? customPadding : "p-4"
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
