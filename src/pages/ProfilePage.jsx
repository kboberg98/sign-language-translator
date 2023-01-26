import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"


function ProfilePage(){

    const { user } = useUser()

    return(
        <div id="profile-page">
            <ProfileHeader username={ user.username } />
            <ProfileTranslationHistory translations={ user.translations }/>
            <ProfileActions />
        </div>
    )
}

export default withAuth(ProfilePage)