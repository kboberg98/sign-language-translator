import withAuth from "../components/Shared/withAuth"
import TranslationForm from "../components/Translation/TranslationForm"

function TranslationPage(){
    return(
        <div>
            <h1>Translation Page</h1>
            <TranslationForm />
        </div>
    )
}

export default withAuth(TranslationPage)