import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { Link } from "react-router-dom";

function MainNavigation(){
    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container style={{textAlign: "center", alignContent: "center"}}>
                    <Navbar.Brand>Lost In Translation</Navbar.Brand>
                        <Nav>
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            <Nav.Link as={Link} to="/translation">Translation</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavigation