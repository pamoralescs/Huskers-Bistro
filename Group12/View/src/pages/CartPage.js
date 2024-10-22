import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import axios from 'axios';

function CartPage() {
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

    const handleToCheckoutPage = () => {
        navigate('/Checkout');
    }


    const handleDeleteItem = (itemId) => {
        const data = {
            itemId: itemId,
        };

        const url = 'http://localhost:5064/api/cart/deletecartitem';
        axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
            .then((result) => {
                const res = result.data;
                if (res === "Item Removed.") {
                    axios.get('http://localhost:5064/api/cart/cartitemslist')
                        .then((result) => {
                            setData(result.data);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                } else {
                    alert("Item was not deleted.")
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div>
            <NavBar />
            <Container fluid className='mt-4'>
                <h2 className='mb-4 text-center' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Cart</h2>
                <Row className="g-4">
                    <Col>
                        <Card className="mb-4">
                            <Card.Header className="py-3">
                                <Card.Text className="mb-0">Items</Card.Text>
                            </Card.Header>
                            {
                                data && data.length > 0 ?
                                    data.map((item) => (
                                        <Card.Body key={item.itemId}>
                                            <Row>
                                                <Col lg="3" md="12" className="mb-4 mb-lg-0">
                                                    <Card className="bg-image rounded hover-zoom hover-overlay">
                                                        <Card.Img src={require(`../images/${item.image}`)} className="cart-image-size" />
                                                    </Card>
                                                </Col>

                                                <Col lg="5" md="6" className=" mb-4 mb-lg-0">
                                                    <Card.Text>{item.itemName}</Card.Text>
                                                    <Button variant="primary" type="button" id="button" onClick={() => handleDeleteItem(item.itemId)}> Remove </Button>
                                                </Col>
                                                <Col lg="4" md="6" className="mb-4 mb-lg-0">
                                                    <Card.Text>Price</Card.Text>
                                                    <hr className="my-4" />
                                                    <Card.Text>${parseFloat(item.price).toFixed(2)}</Card.Text>
                                                </Col>
                                            </Row>
                                            <hr className="my-4" />
                                        </Card.Body>
                                    ))
                                    :
                                    <Form.Text id="button" className="text-center">Empty Cart</Form.Text>
                            }
                        </Card>
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
                                            <Col xs={8}>Subtotal</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(subtotal).toFixed(2)}</Col>

                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center px-0">
                                        <Row className="w-100">
                                            <Col xs={8}>Taxes</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(tax).toFixed(2)}</Col>
                                        </Row>
                                    </ListGroupItem>
                                    <ListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <Row className="w-100">
                                            <Col xs={8}>Grand Total</Col>
                                            <Col xs={4} className="d-flex justify-content-end">${parseFloat(total).toFixed(2)}</Col>
                                        </Row>
                                    </ListGroupItem>
                                </ListGroup>
                                <Button block size="lg" id="button" onClick={() => handleToCheckoutPage()}>Continue To Payment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default CartPage;