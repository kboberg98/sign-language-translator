import ProfileTranslationHistoryItem from "./ProfileTranslationHistoryItem"

const ProfileTranslationHistory = ({ translations }) => {
    
    const translationList = translations.map(
        (translation, index) => <ProfileTranslationHistoryItem key={ index + '-' + translation } translation={ translation } />)

    return (
        <section id="profile-history">
            { translationList.length === 0 && <p>You have no translation history</p>}
            <div id="profile-history-container">
                <ul>
                    { translationList }
                </ul>
                <div id="profile-history-container-bottom"><span id="history-span">History</span></div>
            </div>
        </section>
    )
}
export default ProfileTranslationHistory