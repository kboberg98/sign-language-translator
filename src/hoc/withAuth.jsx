import { useUser } from "../context/UserContext"
import { Navigate } from "react-router-dom"

// HOC component that checks for user authentication
const withAuth = Component => props => {
    // Get user from UserContext
    const { user } = useUser()
    // if user is authenticated, render the passed component
    if (user !== null) {
        return <Component {...props} />
        // otherwise, redirect to the home page
    } else {
        return <Navigate to="/" />
    }
}
export default withAuth