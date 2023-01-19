import { Navigate } from "react-router-dom";

function withAuth(Component){
    return function(props) {
        //condition to navigate to page
        if(localStorage.getItem('userName') !== null){
            return <Component {...props} />
        } else {
            return <Navigate to="/" />
        }
    };
}

export default withAuth;