import React from 'react'
import IMAGES from '../../assets/images'
import Button from "../../components/Button"
import { Link } from 'react-router-dom'

export const LoginPage = () => {
    return (
        <div className='grid grid-cols-5  bg-white h-screen'>
            <div className=' col-span-3 bg-gray-100 space-y-16 p-8 flex items-center flex-col '>
                <div className='flex items-center justify-start  flex-col'>
                    <h1 className='text-4xl text-gray-1 '>
                        Dashboard
                    </h1>
                    <p className='text-base'>
                        Manage your project and team in easy way
                    </p>
                </div>

                <img src={IMAGES.logo} alt="logo" className='object-cover w-3/5' />
            </div>


            <div className=' col-span-2 w-full flex flex-col items-center justify-center '>
                <div className='w-3/5 flex items-center justify-center flex-col  space-y-12'>

                    <h1 className='text-3xl text-gray-1'>Sign in to Dashboard</h1>
                    <form action="" className='space-y-8 w-full'>

                        <div className='flex flex-col w-full gap-y-2'>
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full px-4 py-2' />
                        </div>

                        <div className='space-y-2 flex flex-col w-full gap-y-2'>
                            <label htmlFor="">Email</label>
                            <input
                                type="text"
                                placeholder='input your email in here'
                                className='border-2 rounded-lg w-full px-4 py-2' />
                            <div className='text-right'>Forgot Password?</div>
                            {/* </div> */}
                        </div>


                        <button
                            className='bg-gradient-to-r from-[#F33F41] to-[#FB6D72] text-white w-full py-2 rounded-lg'>
                            Sign In
                        </button>
                    </form>


                    <div>
                        Doesn’t have an account?&nbsp;
                        <Link to="/SignUp" className='bg-btn-gradient text-transparent bg-clip-text'>Sign up Now</Link>
                    </div>
                </div>

            </div>



        </div>
    )
}
