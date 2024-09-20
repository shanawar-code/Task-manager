import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import { Input } from '../../../components/Input';
import Button from '../../../components/Button';
import SelectDropdown from '../../../components/SelectDropdown';
import { Formik, useFormik } from 'formik';
import * as yup from 'yup';
import { pink, red } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const initialValues = {
    name: '',
    email: '',
    password: '',
    confirm_password: '',
};

// Define the signInSchema here
const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email format')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Required'),
});

const signUpSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(25, 'Name cannot exceed 25 characters')
        .required('Please enter your name'),
    email: yup
        .string()
        .email('Invalid email format')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter your password'),
    confirm_password: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Please confirm your password'),
});

export const SignUpPage = () => {
    const navigate = useNavigate();

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            navigate('/');
        }
    });

    const [show, setshow] = useState(true);
    const [show1, setshow1] = useState(true);

    const roleOptions = [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" },
        { value: "guest", label: "Guest" }
    ];

    return (
        <div className='grid grid-cols-12 bg-white'>
            <div className='col-span-12 lg:col-span-6 xl:col-span-7 bg-gray-100 space-y-4 md:space-y-16 p-8 flex items-center flex-col'>
                <div className='flex items-center lg:justify-start flex-col gap-5'>
                    <h1 className='text-2xl lg:text-[40px] py-2 font-bold font-mulish text-gray-1'>
                        Dashboard
                    </h1>
                    <p className='text-xs lg:text-base font-normal font-mulish text-gray-1'>
                        Manage your project and team in an easy way
                    </p>
                </div>

                <img src={'images/logo.png'} alt="logo" className='object-cover w-3/5' />
            </div>

            <div className='col-span-12 lg:col-span-6 xl:col-span-5 w-full flex flex-col items-center justify-center px-3 lg:px-0 my-10'>
                <div className='flex flex-col gap-[40px]'>
                    <h1 className='flex items-start text-start justify-start text-2xl lg:text-[31px] font-mulish text-gray-1 font-bold'>Create your account</h1>
                    <form onSubmit={handleSubmit} action="" className=''>
                        <div className='flex flex-col gap-[20px]'>
                            <div>
                                <Input
                                    error={errors.name && touched.name}
                                    value={values.name}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                    name="name"
                                    id={'name'}
                                    type={'text'}
                                    label={'Name'}
                                    placeholder={'Enter your name here'}
                                    className={'w-full sm:w-[350px]'} />
                                {touched.name && errors.name && (
                                    <small className='text-custom-red'>{errors.name}</small>
                                )}
                            </div>
                            <div>
                                <Input
                                    error={errors.email && touched.email}
                                    value={values.email}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                    name="email"
                                    id={'email'}
                                    type={'email'}
                                    label={'Email'}
                                    placeholder={'Enter your email'}
                                    className={'w-full sm:w-[350px]'} />
                                {touched.email && errors.email && (
                                    <small className='text-custom-red'>{errors.email}</small>
                                )}
                            </div>
                            <div>
                                <SelectDropdown label="Role" options={roleOptions} name="role" id="role" selectClass={'w-full'} className={'w-full'} />
                            </div>
                            <div>
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
                                    className={'w-full sm:w-[350px]'} />
                                {touched.password && errors.password && (
                                    <small className='text-custom-red'>{errors.password}</small>
                                )}
                            </div>

                            <div>
                                <Input
                                    error={errors.confirm_password && touched.confirm_password}
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    handleBlur={handleBlur}
                                    name="confirm_password"
                                    id={'confirm_password'}
                                    type={'password'}
                                    label={'Confirm Password'}
                                    placeholder={'Input your password here'}
                                    className={'w-full sm:w-[350px]'} />
                                {touched.confirm_password && errors.confirm_password && (
                                    <small className='text-custom-red'>{errors.confirm_password}</small>
                                )}
                            </div>
                        </div>
                        <div className='flex items-center -ml-2 mt-1'>
                            <Checkbox {...label} sx={{ color: red['300'], '&.Mui-checked': { color: red['300'], } }} className='w-8 h-8' />
                            <h1 className='text-xs sm:text-sm font-normal font-mulish text-gray-4'>I have read and agree to the Terms of Service</h1>
                        </div>

                        <div className='mt-[40px]'>
                            <Button type={'submit'} text={'Sign Up'} className={'w-full'} customPadding={'px-[24px] py-[14px]'} />
                        </div>
                    </form>

                    <div className='flex items-center justify-center gap-1'>
                        <h1 className='text-base font-mulish font-normal text-gray-4'>Already have an account?&nbsp;</h1>
                        <Link to="/" className='bg-btn-gradient text-transparent bg-clip-text text-base font-bold font-mulish'> Sign in now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
