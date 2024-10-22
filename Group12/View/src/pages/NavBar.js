import React, { useContext } from 'react';
import { Button, Image, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthenticationContext } from '../AuthenticationContext';
import nLogo from '../images/Nebraska.jpeg';
import huskers from '../images/Huskers.jpeg';
import cart from '../images/Cart.png';

function NavBar() {

    const { authToken, setAuthToken } = useContext(AuthenticationContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthToken(null);
        navigate("/Login");
    };

    return (
        <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#D00000' }} variant="dark">
            <Container fluid>
                <Link className="navbar-brand" to="/">
                    <Image src={nLogo} alt="Nebraska Logo" className="nebraska-logo" />
                    <Image src={huskers} alt="Huskers Logo" className="nebraska-logo" />
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categories" className="custom-dropdown" style={{ color: 'white', fontWeight: 'bold' }}>
                            <Link to="/" className="dropdown-item" id="button">Home</Link>
                            <Link to="/Burger" className="dropdown-item" id="button">Burgers</Link>
                            <Link to="/Sandwich" className="dropdown-item" id="button">Sandwiches</Link>
                            <Link to="/Pizza" className="dropdown-item" id="button">Pizza</Link>
                            <Link to="/SoupSalad" className="dropdown-item" id="button">Soups & Salads</Link>
                            <Link to="/Appetizer" className="dropdown-item" id="button">Appetizers</Link>
                            <Link to="/Side" className="dropdown-item" id="button">Sides</Link>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Link to="/Cart" className="nav-link">
                            <Image src={cart} alt="Cart" className="cart-logo" />
                        </Link>
                        {authToken ? (<Button className="nav-link" id="button" onClick={handleLogout}>Logout</Button>
                        ) : (
                            <Link to="/Login" className="nav-link" id="button">
                                Login
                            </Link>)}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
