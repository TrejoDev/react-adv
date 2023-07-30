/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


import formJson from '../data/custom-form.json';
import { MySelect, MyTextImput } from '../components';

const initialValues: { [ x : string ]: any } = {};
const requiredFields: { [ x : string ]: any } = {};

for (const input of formJson) {
    initialValues [ input.name ] = input.value;

    if( !input.validations ) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        
        if ( (rule).type === "required" ){
            schema = schema.required('Required')
        }
        if ( rule.type === "minLegth" ){
            schema = schema.min( rule.value || 2, `At least ${ rule.value || 2 } characters` )
        }
        if ( rule.type === "email" ){
            schema = schema.email('Invalid email address')
        }
    }
    requiredFields[ input.name ] = schema;
}

const validationSchema = Yup.object({ ...requiredFields })

export const DynamicForm = () => {
  return (
    <div>
        <h1>Dynamic Form</h1>

        <Formik
            initialValues={ initialValues }
            validationSchema={ validationSchema }
            onSubmit={ (values => {
                console.log(values);
            }) }
        >
            { (formik) => (
                <Form noValidate>
                        {
                            formJson.map( ({ type, label, name, placeholder, options }) => {

                                if ( type === "input" || type === "pasword" || type === "email" ){
                                    return <MyTextImput 
                                                key={ name }
                                                label={label} 
                                                name={name} 
                                                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                                type={ (type as any )}
                                                placeholder={ placeholder }  />
                                } else if ( type === "select" ){
                                    return (<MySelect 
                                                key={name}
                                                label={label} 
                                                name={name} 
                                                >
                                                    <option value="">Select an option</option>
                                                    {
                                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                                                        options?.map( ({ id = 1, label })  => (
                                                            <option key={ id } value={ id }>{ label }</option>
                                                        ) )
                                                    }
                                                </MySelect>
                                            )  
                                }

                                throw new Error( `El type: ${ type }, no es soportado` )
                            })
                        }

                        <button type="submit">Submit</button>
                </Form>
            ) }
        </Formik>
    </div>
  )
}
