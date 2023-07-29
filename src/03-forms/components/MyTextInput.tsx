import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  type?:  'text' | 'email' | 'password' ;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const MyTextImput = ( { label, ...rest }: Props ) => {

  const [ field, /* meta */ ] = useField( rest )
  
  return (
    <>
      {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <label htmlFor={ rest.id || rest.name }>{label}</label>
      <input className="text-input" {...field} { ...rest } />
      <ErrorMessage name={ rest.name } component="span" />
      {
        /* meta.touched && meta.error && (<span className="error"> { meta.error } </span>) */
      }
    </>
  )
}
