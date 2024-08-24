import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import { Formik, useFormik } from 'formik';
import { signInSchema } from '../../../schemas';
import { useUserContext } from '../../../Context/UserProvider';

const initialValues = {
    email: '',
    password: ''
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const { setUser, user } = useUserContext()



    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signInSchema,
        onSubmit: (values) => {
            // navigate('/dashboard');
            if (values.email === "hr@gmail.com") {
                setUser({ isLoggedIn: true, role: "HR" })
                navigate("/hr/dashboard")
            }
            else {
                setUser({ isLoggedIn: true, role: "USER" })
                navigate("/user/dashboard")

            }
            console.log(values)
        }
    })
    console.log(values)

    return (
        <div className='grid grid-cols-12  h-screen '>
            {/* Left Side (Text and Image) */}
            <div className='col-span-12 lg:col-span-7 bg-gray-100 space-y-8 lg:space-y-16 p-8 flex flex-col items-center'>
                <div className='flex items-center justify-start flex-col gap-5'>
                    <h1 className='text-2xl lg:text-[40px] py-2 font-bold font-mulish text-gray-1'>
                        Dashboard
                    </h1>
                    <p className='text-sm lg:text-base font-normal font-mulish text-gray-1 text-center'>
                        Manage your project and team in an easy way
                    </p>
                </div>
                <img src={'images/logo.png'} alt="logo" className='  w-3/5' />
            </div>

            {/* Right Side (Form) */}

            <div className='col-span-12 lg:col-span-5 flex flex-col items-center justify-center  lg:px-20 py-8 lg:py-8 bg-white'>
                <div className='flex items-center justify-center flex-col gap-[64px]'>
                    <h1 className='text-2xl lg:text-[31px] font-mulish text-gray-1 font-bold text-center'>
                        Sign in to Dashboard
                    </h1>
                    <form onSubmit={handleSubmit} className=' w-full flex flex-col gap-[20px]'>
                        <div className=''>
                            {/* EMAILLLLLLLLLLLLLLLLL */}
                            <Input
                                error={errors.email && touched.email}
                                value={values.email}
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                name="email"
                                id={'email'}
                                type={'email'}
                                label={'Email'}
                                placeholder={'Input your Email here'}
                                className={'w-full sm:w-[350px]'} />
                            {touched.email && errors.email && (
                                <small className=' text-custom-red'>{errors.email}</small>
                            )}
                        </div>
                        <div>
                            {/* PASSWORDDDDDDDDDDDDDDDDDDDDD */}
                            <Input
                                error={errors.password && touched.password}
                                value={values.password}
                                onChange={handleChange}
                                handleBlur={handleBlur}
                                name="password"
                                id={'password'}
                                type={'password'}
                                label={'Password'}
                                placeholder={'Input your password here'}
                                className={' w-full sm:w-[350px]'} />
                            <div className='flex items-center justify-between'>
                                <div>
                                    {touched.password && errors.password && (
                                        <small className=' text-custom-red'>{errors.password}</small>
                                    )}
                                </div>
                                <div className='text-right font-mulish text-gray-2 font-bold text-sm lg:text-base cursor-pointer pt-3'>
                                    Forgot Password?
                                </div>

                            </div>
                        </div>
                        <div className='mt-[64px]'>
                            <Button
                                type={'submit'}
                                text={'Sign in'} className={'w-full'} customPadding={'px-[24px] py-[14px]'} />
                        </div>
                    </form>

                    <div className='flex items-center gap-1'>
                        <h1 className='text-sm lg:text-base font-mulish font-normal text-gray-4 text-center'>
                            Doesn’t have an account?&nbsp;
                        </h1>
                        <Link to="/sign-up" className='bg-btn-gradient text-transparent bg-clip-text text-sm lg:text-base font-bold font-mulish'>
                            Sign up Now
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    );
};