import React from 'react';
import NavBar from './NavBar';
import { Container, Row, Col, Card, Button, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Pizza = require('../images/PizzaHomePage.jpeg');
const Burger = require('../images/BurgerHomePage.jpeg');
const Sides = require('../images/SidesHomePage.jpeg');
const PepPizza = require('../images/PepperoniPizza.jpeg');
const WesternBurger = require('../images/WesternBurger.jpeg');
const SmokedMac = require('../images/SmokedMac.jpeg');
const DoughBalls = require('../images/DoughBalls.jpeg');
const MeatLoversPizza = require('../images/MeatLoversPizza.jpeg');

function HomePage() {

    const navigate = useNavigate();

    const handleToPizzaPage = () => {
        navigate('/Pizza');
    }

    const handleToBurgersPage = () => {
        navigate('/Burger');
    }

    const handleToSidesPage = () => {
        navigate('/Side');
    }

    return (
        <div>
            <NavBar />
            <Container fluid className='mt-4'>
                <h2 className='mb-4 text-center' style={{ textDecoration: 'underline', fontWeigh: 'bold' }}>Featured</h2>
                <Row className="g-4">
                    <Col xs={4} className="mb-3">
                        <Card className="h-100">
                            <Card.Img variant="top" src={Pizza} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>Pizza</Card.Title>
                                <Card.Text style={{ fontweight: 'normal' }}>
                                    From plain old cheese to classic Husker Specialties you will find all of the Pizza to fit your needs right here!
                                </Card.Text>
                                <Button variant="primary" type="button" id="button" onClick={() => handleToPizzaPage()}>Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} className="mb-3">
                        <Card className="h-100">
                            <Card.Img variant="top" src={Burger} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>Burgers</Card.Title>
                                <Card.Text style={{ fontweight: 'normal' }}>
                                    Classic burgers, western style, and Husker Bistro specials. You can find anything Burgers right here!
                                </Card.Text>
                                <Button variant="primary" type="button" id="button" onClick={() => handleToBurgersPage()}>Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={4} className="mb-3">
                        <Card className="h-100">
                            <Card.Img variant="top" src={Sides} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold' }}>Sides</Card.Title>
                                <Card.Text style={{ fontweight: 'normal' }}>
                                    Need something extra besides your main course? Find all of your secondary options right here!
                                </Card.Text>
                                <Button variant="primary" type="button" id="button" onClick={() => handleToSidesPage()}>Check it out!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="my-4">
                <h2 className='mb-4 text-center' style={{ textDecoration: 'underline', fontWeigh: 'bold' }}>Husker Favorites</h2>
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={PepPizza} alt="Pepperoni Pizza" style={{ filter: 'brightness(65%)' }} />
                        <Carousel.Caption>
                            <h3>Pepperoni Pizza</h3>
                            <p>Delicious pepperoni pizza with a crispy crust and gooey cheese.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={WesternBurger} alt="Western Burger" style={{ filter: 'brightness(65%)' }} />
                        <Carousel.Caption>
                            <h3>Western Burger</h3>
                            <p>A tasty burger loaded with BBQ sauce, onion rings, and cheddar cheese.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={SmokedMac} alt="Smoked Mac & Cheese" style={{ filter: 'brightness(65%)' }} />
                        <Carousel.Caption>
                            <h3>Smoked Mac & Cheese</h3>
                            <p>Rich and creamy smoked macaroni and cheese with breadcrumbs dashed on top.</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={DoughBalls} alt="Garlic Dough Balls" style={{ filter: 'brightness(65%)' }} />
                        <Carousel.Caption>
                            <h3>Garlic Dough Balls</h3>
                            <p>Soft dough balls toped with our husker made garlic butter</p>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={MeatLoversPizza} alt="Meat Lovers Pizza" style={{ filter: 'brightness(65%)' }} />
                        <Carousel.Caption>
                            <h3>Meat Lovers Pizza</h3>
                            <p>A pizza made for the meat lovers! Packed with pepperoni, sausage, and chicken, this is the meat lovers dream.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    );
}

export default HomePage;