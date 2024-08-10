import React from 'react'

const Button = ({ text, className, type, handleClick, customPadding}) => {
    return (
        <button
            onClick={handleClick}
            type={type ? type : ''}
            className={`text-base font-mulish font-bold  bg-btn-gradient hover:bg-gradient-r text-white flex items-center justify-center  rounded-lg  ${className} ${customPadding?customPadding:'p-4'}`}>
            {text}       
        </button>
    )
}

export default Button