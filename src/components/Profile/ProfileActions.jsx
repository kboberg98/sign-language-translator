import { translationClearHistory } from "../../api/translation"
import { STORAGE_KEY_USER } from "../../const/storageKeys"
import { useUser } from "../../context/UserContext"
import { storageDelete, storageSave } from "../../utils/storage"
import { Button } from "react-bootstrap"

const ProfileActions = () => {

    const { user, setUser } = useUser()

    // Deleting user from storage and setting user to null if user confirm logout
    const handleLogoutClick = () => {
        if (window.confirm('Are you sure?')) {
            storageDelete(STORAGE_KEY_USER)
            setUser(null)
        }
    }

    // Clearing translation history for user on confirm, and updating user to storage and context
    const handleClearHistoryClick = async () => {
        if (!window.confirm('Are you sure?\nThis can not be undone!')) {
            return
        }

        // call the translationClearHistory function from api
        const [ clearError ] = await translationClearHistory(user.id)
        
        if (clearError !== null) {
            return
        }

        const updatedUser = {
            ...user,
            translations: []
        }
        
        storageSave(STORAGE_KEY_USER, updatedUser)
        setUser(updatedUser)
    }

    return (
        <div id="profile-btn-container">
            <Button variant="warning" id="clear-history-btn" className="profile-btn" onClick={ handleClearHistoryClick }>Clear History</Button>
            <Button variant="danger" id="logout-btn" className="profile-btn" onClick={ handleLogoutClick }>Logout</Button>
        </div>
    )
}
export default ProfileActions