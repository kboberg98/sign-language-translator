const ProfileHeader = ({ username }) => {
    return (
        <header id="profile-header">
            <h3 className="header-text">{ username }'s profile</h3>
            <hr />
            <h5 className="header-text">Last 10 translations</h5>
        </header>
    )
}
export default ProfileHeader