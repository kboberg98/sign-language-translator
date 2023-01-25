import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext"

const MainNavigation = () => {

    const { user } = useUser()

    return(
        <>
            <Navbar id="navbar">
                <Container style={{textAlign: "center", alignContent: "center"}}>
                    <Navbar.Brand id="navbar-brand"><h3>Lost on Translation</h3></Navbar.Brand>
                    { user !== null &&
                        <Nav id="navbar-nav">
                            <Nav.Link as={Link} to="/translation"><h5>Translation</h5></Nav.Link>
                            <Nav.Link as={Link} to="/profile"><h5>Profile</h5></Nav.Link>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavigation