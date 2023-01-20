import { useForm } from 'react-hook-form';
import { loginUser } from '../../api/user';
import { useState, useEffect } from 'react';
import { storageSave } from '../../utils/storage';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { STORAGE_KEY_USER } from '../../const/storageKeys';

const userNameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    // Hooks
    const { register, handleSubmit, formState: { errors }} = useForm()
    const { user, setUser} = useUser()
    const navigate = useNavigate()

    // Local State
    const [ loading, setLoading ] = useState(false)
    const [ apiError, setApiError ] = useState(null)

    // Side Effects
    useEffect(() => {
        if(user !== null) {
            navigate('/profile')
        }
    }, [ user, navigate ]) // Empty Deps - Only runs 1ce
    // Event Handlers

    // Render Functions
    const onSubmit = async ({ username }) => {
        setLoading(true);
        const [ error, userResponse ] = await loginUser(username)
        if (error !== null) {
            setApiError(error)
        }
        if (userResponse !== null) {
            storageSave(STORAGE_KEY_USER, userResponse)
            setUser(userResponse)
        }
        //console.log('Error: ', error)
        //console.log('User: ', user)
        setLoading(false);
    };

    const errorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>Username is required</span>
        }

        if (errors.username.type === 'minLength') {
            return <span>Username is too short (min. 3)</span>
        }
    })()

    return (
        <>
            <h2>What's your name?</h2>
            <form action="" onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        placeholder='johndoe' 
                        { ...register("username", userNameConfig) } 
                    />
                    <button type='submit' disabled={ loading }>Continue</button>
                </fieldset>
                { errorMessage }
                { loading && <p>Logging in...</p>}
                { apiError && <p>{ apiError }</p>}
            </form>
        </>
    )
}

export default LoginForm

