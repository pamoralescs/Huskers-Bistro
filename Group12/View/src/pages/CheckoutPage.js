import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

function CheckoutPage() {
    const [data, setData] = useState([]);
    const [subtotal, setSubtotal] = useState();
    const [tax, setTax] = useState();
    const [total, setTotal] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5064/api/cart/cartitemslist')
            .then((result) => {
                setData(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5064/api/cart/subtotal')
            .then((result) => {
                setSubtotal(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    });

    useEffect(() => {
        axios.get('http://localhost:5064/api/cart/taxtotal')
            .then((result) => {
                setTax(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    });

    useEffect(() => {
        axios.get('http://localhost:5064/api/cart/carttotal')
            .then((result) => {
                setTotal(result.data);
            })
            .catch((error) => {
                console.log(error);
            })
    });


    const handleDeleteAllItems = () => {
        const url = 'http://localhost:5064/api/cart/deleteallcartitems';
        axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
            .then((result) => {
                result.data = {};
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleToConfirmationPage = () => {
        navigate('/Confirmation');
    }

    function handleSubmit(event) {
        const form = document.getElementById('paymentForm');
        if (form.checkValidity() === true) {
            handleToConfirmationPage();
            handleDeleteAllItems();
        } else {
            form.reportValidity();
        }
    }

    return (
        <div>
            <NavBar />
            <Container fluid className='mt-4'>
                <h2 className='mb-4 text-center' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Checkout</h2>
                <Row className="g-4">
                    <Col>
                        <form id="paymentForm" onSubmit={() => handleSubmit()}>
                            <h5 class="mb-4">Payment</h5>
                            <div class="row mb-4">
                                <div class="col">
                                    <div data-mdb-input-init class="form-outline">
                                        <input type="text" id="formCardNumber" class="form-control" pattern="^\d{16}" length="16" title="Please enter a valid credit card number" required />
                                        <label class="form-label" for="formCardNumber">Credit card number</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <div class="col-3">
                                    <div data-mdb-input-init class="form-outline">
                                        <input type="number" id="formExpirationMonth" class="form-control" pattern="^\d{2}" min="1" max="12" title="MM format" required />
                                        <label class="form-label" for="formExpirationMonth">Expiration Month</label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div data-mdb-input-init class="form-outline">
                                        <input type="number" id="formExpirationYear" class="form-control" pattern="^\d{2}" min="24" max="99" title="YY format" required />
                                        <label class="form-label" for="formExpirationYear">Expiration Year</label>
                                    </div>
                                </div>
                                <div class="col-3">
                                    <div data-mdb-input-init class="form-outline">
                                        <input type="text" id="formCVV" class="form-control" pattern="\d{3}" length="3" title="Please enter a valid CVV" required />
                                        <label class="form-label" for="formCVV">CVV</label>
                                    </div>
                                </div>
                            </div>

                            <button style={{ width: "100%" }} stylevariant="primary" type="submit" id="button" class="btn btn-primary btn-lg btn-block">Place Order</button>
                        </form>
                    </Col>
                    <Col md="4">
                        <Card className="mb-4">
                            <Card.Header>
                                <Card.Text className="mb-0">Summary</Card.Text>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup variant="flush">
                                    <ListGroupItem className="border-0 px-0 pb-0">
                                        <Row className="w-100">
                                            <Col xs={8}>Items</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(subtotal).toFixed(2)}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                        <Row className="w-100">
                                            <Col xs={8}>Tax</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(tax).toFixed(2)}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <Row className="w-100">
                                            <Col xs={8}>Total amount</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(total).toFixed(2)}</Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default CheckoutPage;
