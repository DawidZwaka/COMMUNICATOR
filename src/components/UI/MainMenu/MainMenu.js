import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MainMenu.scss';

const mainMenu = props => {

    return (
        <Container className="mainMenu h-100 m-0 p-2 bg-primary">    
            <Navbar expand="md" className="p-0 text-ligth d-flex flex-column">
                <Navbar.Brand className="mx-auto">
                  <Link className="font-weight-light h2 w-100 p-0 nav-link text-white" to="/">
                    C
                  </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto flex-column">
                    <Link to="/login" className="nav-link">Login</Link>
                    <Link to="/signin" className="nav-link">Sign In</Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default mainMenu;