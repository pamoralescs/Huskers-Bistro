import React, { useState, useContext } from 'react';
import NavBar from './NavBar'
import { Button, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthenticationContext } from '../AuthenticationContext';

function LoginPage() {
    const [validated, setValidated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setAuthToken } = useContext(AuthenticationContext);
    var res;

    const handleInputChange = (setState) => (event) => {
        setState(event.target.value);
    };

    const handleEmailChange = (value) => {
        setEmail(value);
    }

    const handlePasswordChange = (value) => {
        setPassword(value);
    }


    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
        }

        setValidated(true);

        if (form.checkValidity() === true) {
            const data = {
                firstName: '',
                lastName: '',
                email: email,
                phoneNumber: '',
                password: password
            };

            const url = 'http://localhost:5064/api/customer/login';
            axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).then((result) => {
                res = result.data;
                if (res === "Login successful") {
                    alert("Login successful")
                    setAuthToken("tempDONOTUSE");
                    navigate('/');
                } else {
                    alert(result.data)
                }
            }).catch((error) => {
                alert(error);
            });
        }
    }

    const handleReturnToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <NavBar />
            <br />
            <br />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <div align="center" style={{ color: '#D00000' }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label id="login-label">Login</Form.Label>
                        <Form.Control
                            required
                            pattern="^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$"
                            isInvalid={validated && !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(setEmail)}
                            className="input-box"
                            type="email"
                            placeholder="Email"
                            onChange={handleInputChange(handleEmailChange)}
                        />
                        <Form.Control.Feedback type="invalid"> Email is not in valid format. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            required
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            isInvalid={validated && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(setPassword)}
                            className="input-box"
                            type="password"
                            placeholder="Password"
                            onChange={handleInputChange(handlePasswordChange)}
                        />
                        <Form.Control.Feedback type="invalid"> Password is not in valid format. </Form.Control.Feedback>
                    </Form.Group>
                    <Button variant="primary" type="submit" id="button" > Submit </Button>
                    <Button variant="primary" type="button" id="button" onClick={() => handleReturnToHome()}> Return Home </Button>
                    <br />
                    <br />
                    <Link to="/registration">Or Register An Account</Link>
                </div>
            </Form>
        </div >
    );
}

export default LoginPage