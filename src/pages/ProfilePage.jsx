import ProfileActions from "../components/Profile/ProfileActions"
import ProfileHeader from "../components/Profile/ProfileHeader"
import ProfileTranslationHistory from "../components/Profile/ProfileTranslationHistory"
import { useUser } from "../context/UserContext"
import withAuth from "../hoc/withAuth"

function ProfilePage(){

    const { user } = useUser()

    return(
        <div>
            <h1>Profile Page</h1>
            <ProfileHeader username={ user.username } />
            <ProfileActions />
            <ProfileTranslationHistory translations={ user.translations }/>
        </div>
    )
}

export default withAuth(ProfilePage)