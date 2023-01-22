import { translationAdd } from "../api/translation"
import TranslationsForm from "../components/Translation/TranslationsForm"
import { STORAGE_KEY_USER } from "../const/storageKeys"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"
import { storageSave } from "../utils/storage"

const TranslationPage = () => {
    const { user, setUser} = useUser()

    const handleTranslationClick = async translation => {
        if(!translation) {
            alert('Please enter text first.')
            return
        }

        if(!user || !user.translations) {
            alert('User not found.')
            return
        }

        const [error, updatedUser] = await translationAdd(user, translation)
        if (error !== null) {
            // Bad
            return
        }

        // Keep UI state and Server state in sync 
        storageSave(STORAGE_KEY_USER, updatedUser)
        // Update Context state.
        setUser(updatedUser)

        console.log('Error', error);
        console.log('updatedUser', updatedUser);
    }

    return(
        <>
            <h1>Translation Page</h1>
            <section id="translation-form">
                <TranslationsForm onTranslation={ handleTranslationClick }/>
            </section>
        </>
    )
}

export default withAuth(TranslationPage)