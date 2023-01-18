import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import TranslationPage from '../pages/TranslationPage';

function Routing(){
    return(
        <BrowserRouter>

        <NavLink to="/login">Login</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/translation">Translation</NavLink>

        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
            <Route path="/translation" element={<TranslationPage/>}/>
        </Routes>

      </BrowserRouter>
    )
}

export default Routing