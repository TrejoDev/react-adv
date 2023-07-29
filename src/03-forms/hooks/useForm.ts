import { ChangeEvent, useState } from "react";

export const useForm = <T>( initialValues: T ) => {

    const [ formData, setFormData] = useState(initialValues)

    const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setFormData( { ...formData,
                            [ name ]: value })
    }

    const resetForm = () => {
        setFormData({ ...initialValues })
    }

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    

  return {  
    //properties
    ...formData,
     formData,
    
    // Methods
    onChange,
    resetForm,
    isValidEmail,
  }
}
