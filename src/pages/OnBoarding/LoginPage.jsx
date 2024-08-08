import React from 'react'
import IMAGES from '../../assets/images'
import Button from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'

export const LoginPage = () => {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <div className='grid grid-cols-12  bg-white h-screen'>
            <div className=' col-span-12 lg:col-span-7 bg-gray-100 space-y-16 p-8 flex items-center flex-col '>
                <div className='flex items-center justify-start  flex-col'>
                    <h1 className=' text-2xl lg:text-[40px] py-2 font-bold font-mulish text-gray-1'>
                        Dashboard
                    </h1>
                    <p className=' text-sm lg:text-base font-normal font-mulish text-gray-1'>
                        Manage your project and team in easy way
                    </p>
                </div>

                <img src={IMAGES.logo} alt="logo" className='object-cover w-3/5' />
            </div>


            <div className=' col-span-12 lg:col-span-5 w-full flex flex-col items-center justify-center px-3'>
                <div className=' flex items-center justify-center flex-col  space-y-12'>

                    <h1 className=' text-2xl lg:text-[31px] font-mulish text-gray-1 font-bold'>Sign in to Dashboard</h1>
                    <form onSubmit={handleSubmit} action="" className='space-y-8 w-full'>

                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Email</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                        </div>

                        <div className='space-y-2 flex flex-col w-full gap-y-2'>
                            <label htmlFor="" className='font-mulish text-gray-1 font-bold text-base '>Password</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg  w-full md:w-[400px] h-[44px] flex items-center justify-center px-[16px] py-[10px] ' />
                            <div className='text-right font-mulish text-gray-2 font-bold text-base'>Forgot Password?</div>
                            {/* </div> */}
                        </div>


                        <button onClick={()=>{navigate('/dashboard')}}
                            className=' text-base font-mulish font-bold bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-white w-full md:w-[400px] h-[48px] flex items-center justify-center py-[14px] px-[24px] rounded-lg'>
                            Sign In
                        </button>
                    </form>


                    <div className='flex items-center lg:gap-2'>
                        <h1 className=' text-base font-mulish font-normal text-gray-4'>Doesn’t have an account?&nbsp;</h1>
                        <Link to="/SignUp" className='bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-transparent bg-clip-text text-base font-bold font-mulish '>Sign up Now</Link>
                    </div>
                </div>

            </div>



        </div>
    )
}
