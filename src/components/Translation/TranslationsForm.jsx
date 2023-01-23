
import { useForm } from "react-hook-form"

const TranslationsForm = ({ onTranslation }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationInput }) => { onTranslation(translationInput) }


    return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <fieldset>
                    <label htmlFor="translation-input">Translate</label>
                    <input type="text" { ...register('translationInput')} placeholder="React is fun" />
                </fieldset>
                <button type="submit">Translate</button>
            </form>
        </>
    )
}

export default TranslationsForm