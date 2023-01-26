import LoginForm from "../components/Login/LoginForm"

function LoginPage(){
    return(
        <div id="login-page">
            <div id="login-header">
                <div id="login-header-img">
                    <img src="img/Logo-Hello.png" alt="Logo" width="125ø" />
                </div>
                <div id='login-header-text'>
                    <h1 className="header-text">Lost in Translation</h1>
                    <h2 className="header-text">Get started</h2>
                </div>
            </div>
            <LoginForm></LoginForm>
            <div id="login-bottom"></div>
        </div>
    )
}

export default LoginPage