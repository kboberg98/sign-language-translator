import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext"

const MainNavigation = () => {

    const { user } = useUser()

    return(
        <>
            <Navbar bg="dark" variant="dark">
                <Container style={{textAlign: "center", alignContent: "center"}}>
                    <Navbar.Brand>Lost In Translation</Navbar.Brand>
                    { user !== null &&
                        <Nav>
                            <Nav.Link as={Link} to="/translation">Translation</Nav.Link>
                            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </>
    )
}

export default MainNavigation