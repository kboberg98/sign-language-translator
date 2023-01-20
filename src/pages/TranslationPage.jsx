import TranslationForm from "../components/Translation/TranslationForm"
import withAuth from "../hoc/withAuth"

function TranslationPage(){
    return(
        <div>
            <h1>Translation Page</h1>
            <TranslationForm />
        </div>
    )
}

export default withAuth(TranslationPage)