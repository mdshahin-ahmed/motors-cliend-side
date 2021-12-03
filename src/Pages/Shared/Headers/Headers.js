import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Headers = () => {
    const { user, logOut } = useAuth();
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
                        {
                            user?.email && <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user?.email && <span style={{color:'white', marginRight:'10px', alignSelf:'center'}}>Welcome! {user.displayName}</span>
                        }
                        {
                            user?.email ?
                                <Button onClick={logOut}>Log Out</Button>
                                :
                                <Nav.Link as={NavLink} to="/login">
                                    <Button>Login</Button>
                                </Nav.Link>
                        }                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Headers;