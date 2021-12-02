import React, { useState } from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginDate, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData={...loginDate};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (loginDate.password !== loginDate.rePassword) {
            alert('Your password Did not match');
            return;
        }
        e.preventDefault();
    }
    return (
        <div>
            <div className="container mt-5 pt-5">
                <div className="row">
                    <div className="col-6 mx-auto">
                        <h2 className='my-4'>Register</h2>
                        <Form onSubmit={handleLoginSubmit}>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                <Form.Label column sm="4">
                                    Email
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control name="email" onBlur={handleOnChange} type='email' placeholder="Your Email" />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="4">
                                    Password
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control name="password" onBlur={handleOnChange} type="password" placeholder="Password" />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                                <Form.Label column sm="4">
                                    Re-Type Password
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control name="rePassword" onBlur={handleOnChange} type="password" placeholder="Re-Type Password" />
                                </Col>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            <br />
                            <br />
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                <p>Already Register? Please Login</p>
                            </NavLink>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;