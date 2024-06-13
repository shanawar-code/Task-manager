// import React, { useState } from 'react'
// // import Svg from './Svg'

// const Input = (props) => {
//     const [showPassword, setshowPassword] = useState(false)
//     return (
//         <div className={`space-y-2  ${props?.parentClass ? props?.parentClass : ''}`}>
//             {props.title ? <p className={`font-medium ${props?.titleStyle ? props?.titleStyle : ''}`}>{props?.title}</p> : ''}
//             {props?.type == 'password' ?
//                 <div className={`flex items-center justify-between  border rounded-lg  px-4 py-3  border-[#DEDEDE] w-full transition-all ${props.errorMessage && "!border-l-[0.375rem] !border-[#eb3b3b]"}`}>
//                     <input name={props?.name ? props?.name : ''} onChange={props.onChange} required={props.required} type={`${showPassword ? 'text' : 'password'}`} maxLength={20} className={`w-full bg-transparent focus:outline-none ${props.inputStyle}`} placeholder={props?.placeholder ? props?.placeholder : ''} />
//                     <span className='outline-none border-none cursor-pointer' onClick={() => {
//                         setshowPassword(!showPassword)
//                     }}>
//                         {/* {showPassword ? <Svg.Eye className={w - 5} /> : <Svg.EyeSlash className={w - 5} />} */}
//                     </span>
//                 </div> : <input name={props?.name ? props?.name : ''} onChange={props.onChange} required={props.required} type={props?.type ? props?.type : 'text'} className={`bg-[#F5F6F8] border-[#DEDEDE] border px-4 py-3 rounded-lg focus:outline-none transition-all w-fit ${props.errorMessage && "!border-l-[0.375rem] !border-[#eb3b3b]"} ${props.inputStyle} ${props?.width}} placeholder={props?.placeholder ? props?.placeholder : ''`} />}
//             {props.errorMessage && (
//                 <p className="text-red-500 text-sm">{props.errorMessage}</p>
//             )}
//         </div>
//     )
// }

// export default Input

import React from 'react'

export const Input = ({ label, placeholder, value, onChange }) => {
    return (
        <div className='flex flex-col w-full gap-y-2'>
            <label htmlFor="">{label}</label>
            <input
                value={value}
                type="text"
                placeholder={placeholder}
                className='border-2 rounded-lg w-full px-4 py-2' />
        </div>)
}
