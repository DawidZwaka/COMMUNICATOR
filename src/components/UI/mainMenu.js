import React from 'react';
import { Navbar, Nav, Form, Container } from 'react-bootstrap';

const mainMenu = props => {

    return (
        <Container className="mainMenu">    
            <Navbar expand="md" className="px-0">
                <Navbar.Brand href="#home">ChaTTer</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link href="/home">Login</Nav.Link>
                    <Nav.Link href="#link">Sign In</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
}

export default mainMenu;