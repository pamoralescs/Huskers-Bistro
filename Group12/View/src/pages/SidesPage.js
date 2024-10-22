import React, { useEffect, useState, Fragment } from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function SidesPage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5064/api/order/getallitems')
            .then((result) => {
                setData(result.data.filter(item => item.category === 'Side'));
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const handleAddItem = (itemId) => {
        const data = {
            itemId: itemId,
        };

        const url = 'http://localhost:5064/api/cart/createcartitem';
        axios.post(url, JSON.stringify(data), { headers: { 'Content-Type': 'application/json' } })
            .then((result) => {
                const res = result.data;
                if (res === "Item Added.") {
                    alert("Item added.")
                } else {
                    alert("Item was not added.")
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
                <h2 className='mb-4 text-center' style={{ textDecoration: 'underline', fontWeight: 'bold' }}>Sides</h2>
                <Row className="g-4">
                    {
                        data && data.length > 0 ?
                            data.map((item) => {
                                return (
                                    <Fragment>
                                        <Col xs={12} sm={6} md={4} className="mb-3">
                                            <Card className="h-100">
                                                <Card.Img variant="top" src={require(`../images/${item.image}`)} alt="item.image" />
                                                <Card.Body>
                                                    <Card.Title style={{ fontWeight: 'bold' }}> {item.itemName} </Card.Title>
                                                    <Card.Text style={{ fontWeight: 'normal' }}> {item.description} </Card.Text>
                                                    <Card.Title style={{ fontWeight: 'bold' }}> ${parseFloat(item.price).toFixed(2)} </Card.Title>
                                                    <Button variant="primary" type="button" id="button" onClick={() => handleAddItem(item.itemId)}>Add To Cart!</Button>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Fragment>
                                )
                            })
                            :
                            "No data was retrieved"
                    }
                </Row>
            </Container>
        </div>
    );
}

export default SidesPage