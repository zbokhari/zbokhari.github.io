import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from ".././images/SSD-Logo.JPG"
import './Header.css'



const Header = () => {
    return (
        <Navbar className="top-nav" bg="white" expand="lg">
            <LinkContainer to="/">
                <Navbar.Brand>Silver Story Development LLC</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <LinkContainer to="/capabilities"><Nav.Link>Capabilities </Nav.Link></LinkContainer>
                <LinkContainer to="/team"><Nav.Link>Team </Nav.Link></LinkContainer>
                </Nav>
            </Navbar.Collapse>
            <img className="logo" src={logo} alt=""></img>
        </Navbar>
    )
}

export default Header;