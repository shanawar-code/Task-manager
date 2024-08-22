import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { pink, red } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import SelectDropdown from '../../../components/SelectDropdown';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export const SignUpPage = () => {
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
    }

    const [show, setshow]=useState(true)
    const [show1, setshow1]=useState(true)

    const roleOptions=[ { value: "admin", label: "Admin" },
                  { value: "user", label: "User" },
                  { value: "guest", label: "Guest" }]
        
    return (
        <div className='grid grid-cols-12  bg-white'>
            <div className=' col-span-12 lg:col-span-7 bg-gray-100 space-y-4 md:space-y-16 p-8 flex items-center flex-col '>
                <div className='flex items-center lg:justify-start  flex-col gap-5'>
                    <h1 className=' text-2xl lg:text-[40px] py-2 font-bold font-mulish text-gray-1'>
                        Dashboard
                    </h1>
                    <p className=' text-xs lg:text-base font-normal font-mulish text-gray-1'>
                        Manage your project and team in easy way
                    </p>
                </div>

                <img src={'images/logo.png'} alt="logo" className='object-cover w-3/5' />
            </div>


            <div className=' col-span-12 lg:col-span-5 w-full flex flex-col items-center justify-center px-3 lg:px-0 my-10'>
                <div className=' flex  flex-col gap-[40px] '>

                    <h1 className=' flex items-start text-start justify-start text-2xl lg:text-[31px] font-mulish text-gray-1 font-bold'>Create your account</h1>
                    <form onSubmit={handleSubmit} action="" className=''>
                        <div className='flex flex-col gap-[20px]'>
                        <div className=' '>
                          <Input  label={'Name'} placeholder={'Enter your name here'} className={'w-full sm:w-[350px]'}/>
                        </div>
                        <div className=' '>
                        <Input label={'Email'} placeholder={'Enter your email'} className={' w-full sm:w-[350px]'}/>
                        </div>
                        <div className=''>
                            
                           <SelectDropdown  label="Role" options={roleOptions} name="role" id="role"  selectClass={' w-full'} className={' w-full'} />
                            
                        </div>
                        <div className=' '>
                            <Input type={'password'} label={'Password'} placeholder={'input your password in here'} className={' w-full sm:w-[350px]'}/>
                        </div>

                        <div className=''>
                            <Input type={'password'} label={'Confirm Password'} placeholder={'input your password in here'} className={' w-full sm:w-[350px]'}/>
                        </div>
                        </div>
                        <div className='flex items-center -ml-2 mt-1'>
                            <Checkbox {...label} sx={{color: red['300'],'&.Mui-checked': {color: red['300'],},}} className='w-8 h-8'/>
                            <h1 className=' text-xs sm:text-sm font-normal font-mulish text-gray-4'>I have read and agree to the Terms of Service</h1>
                        </div>

                        <div className='mt-[40px]'>
                        <Button handleClick={()=>{navigate('/')}} text={'Sign Up'} onClick={()=>{navigate('/dashboard')}} className={'w-full'} customPadding={'px-[24px] py-[14px]'} />
                        </div>
                       
                    </form>


                    <div className='flex items-center justify-center gap-1'>
                        <h1 className=' text-base font-mulish font-normal text-gray-4'>Already have an account?&nbsp;</h1>
                        <Link to="/" className=' bg-btn-gradient text-transparent bg-clip-text text-base font-bold font-mulish '> Sign in now</Link>
                    </div>
                </div>

            </div>



        </div>
    )
}
