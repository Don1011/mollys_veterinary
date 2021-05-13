import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigationbar = ({ jumboShow }) => {
    return (
        <Navbar bg = "" sticky = "top" expand = "lg" collapseOnSelect className = {jumboShow ? "" : "my-primary-bg"} variant = "dark">
            <Navbar.Brand href = "/">Molly's Vet</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" className = "" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className = "ml-auto">
                    <Nav.Link >
                        <Link className = "navbar-custom-links" to = "/home">Home</Link>
                    </Nav.Link >
                    <Nav.Link >
                        <Link className = "navbar-custom-links" to = "/contact">Contact</Link>
                    </Nav.Link >
                    <Nav.Link >
                        <Link className = "navbar-custom-links" to = "/about">About</Link>
                    </Nav.Link >
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

Navigationbar.defaultProps = {
    jumboShow: true
}

export default Navigationbar
