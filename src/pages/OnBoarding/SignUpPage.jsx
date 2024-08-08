// import React from 'react'
// import IMAGES from '../../assets/images'
// import { Input } from "../../components/Input"
// import Button from "../../components/Button"
// import { Link } from 'react-router-dom'
// import Checkbox from 'rc-checkbox';
// import 'rc-checkbox/assets/index.css';



// export const SignUpPage = () => {
//     return (
//         <div className='grid grid-cols-5  bg-white h-screen'>
//             <div className=' col-span-3 bg-gray-100 space-y-16 p-8 flex items-center flex-col '>
//                 <div className='flex items-center justify-start  flex-col'>
//                     <h1 className='text-4xl  '>
//                         Dashboard
//                     </h1>
//                     <p className='text-base'>
//                         Manage your project and team in easy way
//                     </p>
//                 </div>

//                 <img src={IMAGES.logo} alt="logo" className='object-cover w-3/5' />
//             </div>


//             <div className=' col-span-2 space-y-8  w-full flex flex-col items-center justify-center '>
//                 {/* <div className='w-full'> */}
//                 <div className='w-3/5 space-y-4 items-center justify-center flex flex-col'>
//                     <h1 className='text-3xl text-gray-1'>Create your account</h1>

//                     <Input
//                         label={"Name"}
//                         placeholder={'Input your name in here'}
//                         value={""}
//                         name="nameOnAccount"
//                     />
//                     <Input
//                         label={"Email"}
//                         placeholder={'Input your email in here'}
//                         value={""}
//                         // onChange={handleChange}
//                         name="nameOnAccount"
//                     // errorMessage={errors.nameOnAccount}
//                     />
//                     <Input
//                         label={"Role"}
//                         placeholder={'Input your role in here'}
//                         value={""}
//                         // onChange={handleChange}
//                         name="nameOnAccount"
//                     // errorMessage={errors.nameOnAccount}
//                     />
//                     <Input
//                         label={"Password"}
//                         placeholder={'Input your password in here'}
//                         value={""}
//                         // onChange={handleChange}
//                         name="nameOnAccount"
//                     // errorMessage={errors.nameOnAccount}
//                     />

//                     <div className='space-y-2 w-full'>

//                         <Input
//                             label={"Confirm Password"}

//                             placeholder={'Input your password in here'}
//                             value={""}
//                             // onChange={handleChange}
//                             name="nameOnAccount"
//                         // errorMessage={errors.nameOnAccount}
//                         />

//                         <div className='flex flex-row space-x-4 items-center'>
//                             {/* <Checkbox className='' /> */}
//                             <input type="checkbox" name="" id="" value={""} className='p-5 scale-150' />
//                             <p>I have read and agree to the Terms of Service</p>
//                         </div>
//                     </div>


//                     <Button text={'Sign up'} className={' px-8 py-2 !font-medium !text-base bg-black w-2/4'} />

//                 </div>

//                 <div>
//                     Already have a account ?&nbsp;
//                     <Link to="/SignUp" className='text-'>Sign in Now</Link>
//                 </div>

//             </div>



//         </div>
//     )
// }


import React from 'react'
import IMAGES from '../../assets/images'
import Button from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'

export const SignUpPage = () => {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='grid grid-cols-12  bg-white'>
            <div className=' col-span-12 lg:col-span-7 bg-gray-100 space-y-4 md:space-y-16 p-8 flex items-center flex-col '>
                <div className='flex items-center lg:justify-start  flex-col'>
                    <h1 className=' text-2xl lg:text-[40px] py-2 font-bold font-mulish text-gray-1'>
                        Dashboard
                    </h1>
                    <p className=' text-xs lg:text-base font-normal font-mulish text-gray-1'>
                        Manage your project and team in easy way
                    </p>
                </div>

                <img src={IMAGES.logo} alt="logo" className='object-cover w-3/5' />
            </div>


            <div className=' col-span-12 lg:col-span-5 w-full flex flex-col items-center justify-center px-3 lg:px-0 my-10'>
                <div className=' flex  flex-col  space-y-12'>

                    <h1 className=' flex items-start text-start justify-start text-2xl lg:text-[31px] font-mulish text-gray-1 font-bold'>Create your account</h1>
                    <form onSubmit={handleSubmit} action="" className='space-y-8 w-full'>

                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Name</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Email</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Role</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                        </div>
                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Password</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                        </div>

                        <div className=' flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Confirm Password</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg  w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                            {/* <div className='text-right font-mulish text-gray-2 font-bold text-base'>Forgot Password?</div> */}
                            {/* </div> */}
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className=' h-4 w-4' />
                            <h1 className=' text-sm font-normal font-mulish text-gray-4'>I have read and agree to the Terms of Service</h1>
                        </div>
                        <button onClick={()=>{navigate('/dashboard')}}
                            className=' text-base font-mulish font-bold bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-white w-full md:w-[400px] h-[48px] flex items-center justify-center py-[14px] px-[24px] rounded-lg'>
                            Sign In
                        </button>
                    </form>


                    <div className='flex items-center lg:gap-2'>
                        <h1 className=' text-base font-mulish font-normal text-gray-4'>Already have an account?&nbsp;</h1>
                        <Link to="/" className='bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-transparent bg-clip-text text-base font-bold font-mulish '> Sign in now</Link>
                    </div>
                </div>

            </div>



        </div>
    )
}
