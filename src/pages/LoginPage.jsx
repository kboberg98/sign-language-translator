import LoginForm from "../components/Login/LoginForm"

function LoginPage(){
    return(
        <div id="login-page">
            <div id="login-header">
                <div id='login-header-text'>
                    <h1>Lost in Translation</h1>
                    <h2>Get started</h2>
                </div>
            </div>
            <LoginForm></LoginForm>
            <div id="login-bottom"></div>
        </div>
    )
}

export default LoginPage