import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { MyTextImput } from '../components';

    export const RegisterFormikPage = () => {

      return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik 
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: '',
                }}
                onSubmit={ (values) => {
                    console.log(values);    
                }}
                validationSchema={ Yup.object({
                    name: Yup.string()
                            .min( 2, 'At least 2 characters')
                            .max( 15, 'Must be 15 characters or less' )
                            .required('Required'),
                    email: Yup.string()
                                .email('Invalid email address')
                                .required('Required'),
                    password1: Yup.string()
                                .min( 6, 'At least 6 characters' )
                                .matches(/[A-Z]/, 'Password must contain at least one capital letter')
                                .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
                                .matches(/[0-9]/, 'Password must contain at least one number')
                                .required('Required') ,
                    password2: Yup.string()
                                .oneOf( [Yup.ref('password1')],'Passwords do not match')
                                .required('You must confirm the password'),
                }) }

                >
                    { ({ handleReset }) =>  (
                        <Form >
                            <MyTextImput 
                                label='Name'
                                name='name'
                                placeholder='Write your name here'
                            />
                            <MyTextImput 
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Write your email here'
                            />
                            <MyTextImput 
                                label='Password'
                                name='password1'
                                type='password'
                                placeholder='Write your password here'
                            />
                            <MyTextImput 
                                label='Confirm Password'
                                name='password2'
                                type='password'
                                placeholder='Confirm your password here'
                            />
                            <button type="submit"> Create </button>
                            <button type="button" onClick={ handleReset } > Reset Form </button>
                            
                        </Form>
                    )}              
            </Formik>

        </div>
      )
    }
    