import { ErrorMessage, useField } from "formik";

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const MySelect = ( { label, ...rest }: Props ) => {

  const [ field ] = useField( rest )
  
  return (
    <>
      {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <label htmlFor={ rest.id || rest.name }>{label}</label>
      <select  {...field} { ...rest } />
      <ErrorMessage name={ rest.name } component="span" />
    </>
  )
}
