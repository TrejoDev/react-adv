import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextImput, MyCheckbox, MySelect } from '../components';
import '../styles/styles.css';

/* interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
    terms: boolean;
    jobType: string;
} */


export const FormikAbstraction = () => {


  return (
    <div>
        <h1>Formik Abstraction</h1>

        <Formik
            initialValues={{
                firstName: '',
                lastName: '', 
                email: '',
                terms: false,
                jobType: '',
            }}
            onSubmit={ (values) => {
                console.log(values);
                
            }} 
            validationSchema={ Yup.object({
                firstName: Yup.string()
                            .max( 15, 'Must be 15 characters or less' )
                            .required( 'Required' ),
                lastName: Yup.string()
                            .max( 15, 'Must be 15 characters or less' )
                            .required( 'Required' ),
                email: Yup.string()
                            .email('Invalid email address')
                            .required( 'Required' ),
                terms: Yup.boolean()
                            .oneOf([true], 'You must be agreement whit terms and conditions'),
                jobType: Yup.string()
                            .required('Required') 
                            .notOneOf(['it-junior'], 'Option not available')        
            })}
            >
            { (/* formik */) => (
                    <Form >
                        <MyTextImput 
                            label='First Name'
                            name='firstName' 
                            placeholder='First Name'
                        />

                        <MyTextImput 
                            label='Last Name'
                            name='lastName' 
                            placeholder='Last Name'
                        />

                        <MyTextImput 
                            label='Email Address'
                            name='email'
                            placeholder='Email Address'
                            type='email'
                        />

                        <MySelect label='Job Type' name='jobType'  >
                            <option value="">Pick something</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-junior">IT Junior</option>
                        </MySelect>

                        <MyCheckbox label='Terms & Conditions' name='terms' />

                        <button type='submit'>Submit</button>

                    </Form>
                )
            }
        </Formik>

        
    </div>
  )
}
