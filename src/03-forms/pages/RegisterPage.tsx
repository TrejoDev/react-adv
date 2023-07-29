import { FormEvent } from 'react';

import '../styles/styles.css'
import { useForm } from '../hooks/useForm'

    

    export const RegisterPage = () => {

        const { 
            onChange, resetForm , isValidEmail , formData,
            name, email, password1, password2 
        } = useForm({
            name: '',
            email: '',
            password1: '',
            password2: '',
    
        });


        const onSubmit = ( e: FormEvent<HTMLFormElement> ) => {
            e.preventDefault();
        }

      return (
        <div>
            <h1>Register Page</h1>

            <form 
                noValidate
                onSubmit={ onSubmit }>
                <input 
                    type="text"
                    placeholder="Name"
                    value={ name }
                    name='name'
                    onChange={ onChange }
                    className={ name.trim().length <= 0 ? 'has-error' : ''}
                />
                { name.trim().length <= 0 && (<span>Este campo es necesario</span>)}

                <input 
                    type="email"
                    placeholder="Email"
                    value={ email }
                    name='email'
                    onChange={ onChange }
                    className={ !isValidEmail ? 'has-error' : '' }
                />
                { !isValidEmail(email) && (<span>Email no es valido</span>)}

                <input 
                    type="password"
                    placeholder="Password"
                    value={ password1 }
                    name='password1'
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && (<span>Este campo es necesario</span>)}
                { password1.trim().length < 6 && password1.trim().length > 0 && (<span>La contraseña tiene q tener 6 caracteres</span>)}

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    value={ password2 }
                    name='password2'
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && (<span>Este campo es necesario</span>)}
                { password2.trim().length > 0 && password1 !== password2 && (<span>Las contraseñas deben de ser iguales</span>)}

                <button type="submit"> Create </button>
                <button type="button" onClick={ resetForm } > Reset Form </button>
            </form>
        </div>
      )
    }
    