import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import TranslationPage from '../pages/TranslationPage';
import MainNavigation from '../components/Shared/MainNavigation';

const Routing = () => {
    return(
        <BrowserRouter>
            <MainNavigation></MainNavigation>
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