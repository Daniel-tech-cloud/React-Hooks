import { useState } from "react"

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'MASTER_ILAYER',
        email: 'daniel@gmail.com',
    })
    const { username, email } = formState;
    return (
        <>
            <h1> Formulario simple</h1>
            <hr/>
            <input 
                type='text' 
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
            />
            <input 
                type='email' 
                className='form-control mt-2'
                placeholder='algo@gmail.com'
                name= 'email'
                value={ email }
            />

        </>
  )
}
