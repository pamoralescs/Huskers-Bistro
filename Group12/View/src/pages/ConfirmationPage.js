import React from 'react';
import { Button, Image } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import check from '../images/CheckMark.png';

function ConfirmationPage() {
    const navigate = useNavigate();

    const handleToHomePage = () => {
        navigate('/');
    }

    return (
        <div>
            <NavBar />
            <div class="card-body mx-4">
                <div class="container">
                    <br /><br />
                    <hr style={{ height: "80px", width: "80%", margin: "auto" }} />
                    <h1 class="display-3" style={{ textAlign: 'center' }}>Thank You For Your Order!</h1><br />
                    <Link to="/Reciept" className="nav-link">
                        <Image src={check} alt="Check Mark" style={{ width: "300px", height: "300px", margin: "auto", display: "block" }} />
                    </Link><br /><br />
                    <h3 class="display-6" style={{ textAlign: 'center' }}> Estimated Time: 20-30 Minutes </h3><br /><br />
                    <h3 class="display-6" style={{ textAlign: 'center' }}> Pick-Up Location: </h3>
                    <h3 class="display-6" style={{ textAlign: 'center' }}> 49537 Main Street, Lincoln, NE 68500 </h3><br /><br />
                    <hr style={{ height: "50px", width: "80%", margin: "auto" }} /><br />
                    <div class="text-center">
                        <Button variant="primary" size="lg" type="button" id="button" onClick={() => handleToHomePage()}>Back To Home</Button>
                    </div><br /><br />
                </div>
            </div>
        </div>
    )
}

export default ConfirmationPage;




