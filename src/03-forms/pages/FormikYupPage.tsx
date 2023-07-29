import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}


export const FormikYupPage = () => {

    

   const { handleSubmit, getFieldProps, errors, touched} =  useFormik({ 
        initialValues: {
            firstName: 'dev',
            lastName: '', 
            email: '',
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                        .max( 15, 'Must be 15 characters or less' )
                        .required( 'Required' ),
            lastName: Yup.string()
                        .max( 15, 'Must be 15 characters or less' )
                        .required( 'Required' ),
            email: Yup.string()
                        .email('Invalid email address')
                        .required( 'Required' ),
        })
    })

  return (
    <div>
        <h1>Formik Yup</h1>

        <form onSubmit={ handleSubmit } noValidate>
            <label htmlFor="firstName">First Name</label>
            <input type="text" {...getFieldProps('firstName')} />
            {touched.firstName && errors.firstName  && <span className='mt-2'>{ errors.firstName }</span>}

            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...getFieldProps('lastName')} />

            <label htmlFor="email">Email Address</label>
            <input  type="email" {...getFieldProps('email')} />
            {touched.email && errors.email  && <span className='mt-2'>{ errors.email }</span>}

            <button type='submit'>Submit</button>

        </form>
    </div>
  )
}
