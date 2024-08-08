import React from 'react'

const Button = ({ text, className, type, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            type={type ? type : ''}
            className={`  text-base font-mulish font-bold bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-white flex items-center justify-center rounded-lg bg-btn-gradien hover:bg-gradient-r hover:scale-x-105 transition-all ${className}`}>
            {text}       
        </button>
    )
}

export default Button