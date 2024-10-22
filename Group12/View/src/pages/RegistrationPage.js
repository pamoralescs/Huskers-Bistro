import React, { useState } from 'react';
import NavBar from './NavBar';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CreateAnAccountPage() {
    const [validated, setValidated] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (setState) => (event) => {
        setState(event.target.value);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
        }

        setValidated(true);

        if (form.checkValidity()) {
            const data = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            };

            const url = 'http://localhost:5064/api/customer/registration';
            axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } }).then((result) => {
                const res = result.data;
                if (res === "Data inserted") {
                    alert("Registration complete.")
                    navigate('/login');
                } else {
                    alert(result.data)
                }
            }).catch((error) => {
                alert(error);
            });
        }
    }

    const handleReturnToLogin = () => {
        navigate('/login');
    }

    const handleReturnToHome = () => {
        navigate('/');
    }

    return (
        <div>
            <NavBar />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <br />
                <br />
                <div align="center" style={{ color: '#D00000' }}>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Label id="registration-label">Registration</Form.Label>
                        <Form.Control
                            required
                            pattern="^[A-Z][a-z]+$"
                            isInvalid={validated && !/^[A-Z][a-z]+$/.test(setFirstName)}
                            className="input-box"
                            type="firstname"
                            placeholder="First Name"
                            onChange={handleInputChange(setFirstName)}
                        />
                        <Form.Control.Feedback type="invalid" id="feedback"> Must start with uppercase and only contain letters. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Control
                            required
                            pattern="^[A-Z][a-z]+$"
                            isInvalid={validated && !/^[A-Z][a-z]+$/.test(setLastName)}
                            className="input-box"
                            type="lastname"
                            placeholder="Last Name"
                            onChange={handleInputChange(setLastName)}
                        />
                        <Form.Control.Feedback type="invalid" id="feedback"> Must start with uppercase and only contain letters. </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            required
                            pattern="^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$"
                            isInvalid={validated && !/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,}$/.test(setEmail)}
                            className="input-box"
                            type="email"
                            placeholder="Email"
                            onChange={handleInputChange(setEmail)}
                        />
                        <Form.Control.Feedback type="invalid" id="feedback"> Must be in form email@example </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPhoneNumber">
                        <Form.Control
                            required
                            pattern="^\d{3}-\d{3}-\d{4}$"
                            isInvalid={validated && !/^\d{3}-\d{3}-\d{4}$/.test(setPhoneNumber)}
                            className="input-box"
                            type="phonenumber"
                            placeholder="Phone Number"
                            onChange={handleInputChange(setPhoneNumber)}
                        />
                        <Form.Control.Feedback type="invalid" id="feedback"> Must be in format XXX-XXX-XXXX </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Control
                            required
                            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                            isInvalid={validated && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(setPassword)}
                            className="input-box"
                            type="password"
                            placeholder="Password"
                            onChange={handleInputChange(setPassword)}
                        />
                        <Form.Control.Feedback type="invalid" id="feedback"> Must contain one capital letter, one lowercase, one number, no special characters, and have a length 8. </Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" id="button"> Submit </Button>
                    <br />
                    <Button variant="primary" type="button" id="button" onClick={() => handleReturnToLogin()}> Return to Login </Button>
                    <Button variant="primary" type="button" id="button" onClick={() => handleReturnToHome()}> Return Home </Button>
                </div>
            </Form>
        </div>
    );
}

export default CreateAnAccountPage
