import { InputGroup, Form, Button } from "react-bootstrap"
import { useForm } from "react-hook-form"

const TranslationsForm = ({ onTranslation }) => {

    const { register, handleSubmit } = useForm()

    const onSubmit = ({ translationInput }) => { onTranslation(translationInput) }


    return (
        <div id="translation-form-container">
            <form id="translation-form" onSubmit={ handleSubmit(onSubmit) }>
                <InputGroup id="translation-group">
                    <Form.Control id="translation-input" type="text" maxLength={40} { ...register('translationInput')} placeholder="React is fun" />
                    <Button id="translation-btn" type="submit">Translate</Button>
                </InputGroup>
            </form>
        </div>
    )
}

export default TranslationsForm