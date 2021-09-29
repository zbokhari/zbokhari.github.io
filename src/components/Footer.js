import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from "./SocialFollow"

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">


            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/team"><Nav.Link>Terms of Service </Nav.Link></LinkContainer>
                    <LinkContainer to="/privacypolicy"><Nav.Link>Privacy Policy </Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
            <SocialFollow />
            <LinkContainer to="/">
                <Navbar.Brand>Silver Story Development LLC</Navbar.Brand>
            </LinkContainer>
        </Navbar>

    )
}

export default Header;