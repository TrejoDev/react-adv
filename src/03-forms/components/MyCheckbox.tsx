import { ErrorMessage, useField } from "formik";

interface Props {
  label?: string;
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

export const MyCheckbox = ( { label, ...rest }: Props ) => {

  const [ field ] = useField({ ...rest, type: 'checkbox'});
  
  return (
    <>
      {/*  eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
      <label >
        <input type="checkbox" { ...field } {...rest} />
        {label}
      </label>
      <ErrorMessage name={ rest.name } component="span" />
    </>
  )
}
