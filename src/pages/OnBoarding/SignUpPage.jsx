import React from 'react'
import IMAGES from '../../assets/images'
import Button from "../../components/Button"
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'

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

                        <div className='flex flex-col w-full '>
                          <Input label={'Name'} placeholder={'Enter your name here'}/>
                        </div>
                        <div className='flex flex-col w-full '>
                        <Input label={'Email'} placeholder={'Enter your email'}/>
                        </div>
                        <div className='flex flex-col w-full '>
                           <Input label={'Role'} placeholder={'Your Role'}/>
                        </div>
                        <div className='flex flex-col w-full '>
                           <Input label={'Password'} placeholder={'Password'}/>
                        </div>

                        <div className=' flex flex-col w-full '>
                        <Input label={'Confirm Password'} placeholder={'Confirm password'}/>
                        </div>

                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className=' h-4 w-4' />
                            <h1 className=' text-sm font-normal font-mulish text-gray-4'>I have read and agree to the Terms of Service</h1>
                        </div>
                        <Button handleClick={()=>{navigate('/')}} text={'Sign Up'} onClick={()=>{navigate('/dashboard')}} className={'w-[400px]'}/>
                       
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
