import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={NavLink} to="/home">
                    Motors
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/explore">Explore</Nav.Link>

                    </Nav>
                    <Nav>

                        <Nav.Link as={NavLink} to="/login">Login</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;