import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import BurgersPage from "./pages/BurgersPage";
import SandwichPage from "./pages/SandwichPage";
import PizzaPage from "./pages/PizzaPage";
import SoupSaladPage from "./pages/SoupSaladPage";
import AppetizerPage from "./pages/AppetizerPage";
import SidesPage from "./pages/SidesPage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import { useState } from 'react';
import { AuthenticationContext } from './AuthenticationContext';

function App() {
    const [authToken, setAuthToken] = useState(null);
    return (
        <AuthenticationContext.Provider value={{ authToken, setAuthToken }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Burger" element={<BurgersPage />} />
                <Route path="/Sandwich" element={<SandwichPage />} />
                <Route path="/Pizza" element={<PizzaPage />} />
                <Route path="/SoupSalad" element={<SoupSaladPage />} />
                <Route path="/Appetizer" element={<AppetizerPage />} />
                <Route path="/Side" element={<SidesPage />} />
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Registration" element={<RegistrationPage />} />
                <Route path="/Cart" element={<CartPage />} />
                <Route path="/Checkout" element={<CheckoutPage />} />
                <Route path="/Confirmation" element={<ConfirmationPage />} />
            </Routes>
        </AuthenticationContext.Provider>
    );
}

export default App;


