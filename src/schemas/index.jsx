// import * as yup from 'yup'

// const signUpSchema = yup.object({
//     name:yup.string().min(2).max(25).required('please enter your name'),
//     email: yup.string().email().required('Please enter your email'),
//     password: yup.string().min(6).required('please enter your password'),
//     confirm_password:yup.string().required('confirm password').oneOf([yup.ref('password'), null], 'Password must match')
// })



// const signInSchema = yup.object({
//     email: yup.string().email().required('Please enter your email'),
//     password: yup.string().min(6).required('please enter your password'),
// })

// export {signInSchema, signUpSchema}


import * as yup from 'yup';

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

const signInSchema = yup.object().shape({
    email: yup
        .string()
        .email('Invalid email format')
        .required('Please enter your email'),
    password: yup
        .string()
        .min(6, 'Password must be at least 6 characters')
        .required('Please enter your password'),
});

export { signInSchema, signUpSchema };
