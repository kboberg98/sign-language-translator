import { useForm } from 'react-hook-form'
import { loginUser } from '../../api/user'

const userNameConfig = {
    required: true,
    minLength: 3
}

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async ({ username }) => {
        const [error, user] = await loginUser(username)
        console.log('Error: ', error)
        console.log('User: ', user)
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
                    <button type='submit'>Continue</button>
                </fieldset>
                { errorMessage }
            </form>
        </>
    )
}

export default LoginForm

