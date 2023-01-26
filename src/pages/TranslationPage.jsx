    import { useState } from "react"
    import { translationAdd } from "../api/translation"
    import TranslationsForm from "../components/Translation/TranslationsForm"
    import TranslationSign from "../components/Translation/TranslationSign"
    import { STORAGE_KEY_USER } from "../const/storageKeys"
    import { useUser } from "../context/UserContext"
    import withAuth from "../hoc/withAuth"
    import { storageSave } from "../utils/storage"

    const TranslationPage = () => {
        const { user, setUser } = useUser()
        const [ translatedText, setTranslatedText ] = useState([])

        const SIGNS = [
            {letter: 'a', image: 'img/a.png'},
            {letter: 'b', image: 'img/b.png'},
            {letter: 'c', image: 'img/c.png'},
            {letter: 'd', image: 'img/d.png'},
            {letter: 'e', image: 'img/e.png'},
            {letter: 'f', image: 'img/f.png'},
            {letter: 'g', image: 'img/g.png'},
            {letter: 'h', image: 'img/h.png'},
            {letter: 'i', image: 'img/i.png'},
            {letter: 'j', image: 'img/j.png'},
            {letter: 'k', image: 'img/k.png'},
            {letter: 'l', image: 'img/l.png'},
            {letter: 'm', image: 'img/m.png'},
            {letter: 'n', image: 'img/n.png'},
            {letter: 'o', image: 'img/o.png'},
            {letter: 'p', image: 'img/p.png'},
            {letter: 'q', image: 'img/q.png'},
            {letter: 'r', image: 'img/r.png'},
            {letter: 's', image: 'img/s.png'},
            {letter: 't', image: 'img/t.png'},
            {letter: 'u', image: 'img/u.png'},
            {letter: 'v', image: 'img/v.png'},
            {letter: 'w', image: 'img/w.png'},
            {letter: 'x', image: 'img/x.png'},
            {letter: 'y', image: 'img/y.png'},
            {letter: 'z', image: 'img/z.png'},
            {letter: ' ', image: 'img/white.png'}
        ];

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

            let tempArray = [];
            for(let i = 0; i < translation.length; i++){
                let letter = translation[i].toLowerCase()
                let sign = SIGNS.find(obj => obj.letter === letter)
                if(sign){
                    tempArray.push(sign)
                }
            }

            setTranslatedText(tempArray);
            
            console.log('Error', error);
            console.log('updatedUser', updatedUser);
        }

        return(
            <div id="translation-page">
                <div id="translation-header">
                    <TranslationsForm onTranslation={ handleTranslationClick }/>
                </div>
                <div id="translation-bottom">
                    <div id="translated-text-container">
                        <div id="translated-signs">
                            {translatedText.map((text, index) => (
                                <TranslationSign key={index} letter={text.letter} image={text.image}/>
                            ))}
                        </div>
                        <div id="translated-text-container-bottom">
                            <span id="translation-span">Translation</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    export default withAuth(TranslationPage)