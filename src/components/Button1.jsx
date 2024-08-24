import React from 'react'

const Button1 = ({ text, className, type, handleClick, customPadding}) => {
    return (
        <button
            onClick={handleClick}
            type={type ? type : ''}
            className={ `  font-open-sans font-semibold py-[8px] px-[16px]  bg-gradient-to-t from-[#F33F41] to-[#FB6D72] hover:scale-105 ease-in-out duration-300 text-white flex items-center justify-center  rounded-lg sm:text-[14px] text-[10px]   }`}>
            {text}       
        </button>
    )
}

export default Button1