import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext"

const MainNavigation = () => {

    const { user } = useUser()

    return(
        <>
            <Navbar id="navbar">
                <Container>
                    <Navbar.Brand id="navbar-brand"><h3 className="header-text">Lost in Translation</h3></Navbar.Brand>
                    { user !== null &&
                        <Nav id="navbar-nav">
                            <Nav.Link as={Link} to="/translation"><h5 className="header-text">Translation</h5></Nav.Link>
                            <Nav.Link as={Link} to="/profile"><h5 className="header-text">Profile</h5></Nav.Link>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavigation