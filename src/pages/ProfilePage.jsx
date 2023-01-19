import withAuth from "../components/Shared/withAuth"

function ProfilePage(){
    return(
        <div>
            <h1>Profile Page</h1>
        </div>
    )
}

export default withAuth(ProfilePage)