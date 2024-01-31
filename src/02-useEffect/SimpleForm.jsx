import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        username: 'MASTER_ILAYER',
        email: 'daniel@gmail.com',
    })
    const { username, email } = formState;

    const onInputChange = ({target}) =>{
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    // Se recomienda hacer uno por cada efecto secundario que se quiere llamar

    // Cada que haya un cambio en el estado, si no tiene ninguna depedencia se llamará cada que se redibuje el componente
    useEffect(()=>{
        // console.log('useEffect called');
    }, []);
    
    useEffect(()=>{
        // console.log('formState changed');
    }, [ formState ]);
    
    useEffect(()=>{
        // console.log('email changed');
    }, [ email ]);
    
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
                onChange={onInputChange}
            />
            <input 
                type='email' 
                className='form-control mt-2'
                placeholder='algo@gmail.com'
                name= 'email'
                value={ email }
                onChange={onInputChange}
            />
            {
                ( username === 'MASTER_ILAYER2' ) && <Message/> 
            }

        </>
  )
}
