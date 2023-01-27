import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
    
    // Storing mapped translations in a list
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={ translation } />)

    // Storing the 10 last translations in a  new list
    const lastTenTranslations = translationList.slice(-10);

    return (
        <section id="profile-history">
            { translationList.length === 0 && <p>You have no translation history</p>}
            <div id="profile-history-container">
                <ul id="profile-history-list">
                    { lastTenTranslations }
                </ul>
                <div id="profile-history-container-bottom"><span id="history-span">History</span></div>
            </div>
        </section>
    )
}
export default ProfileTranslationHistory