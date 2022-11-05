import React from 'react';
import Header from "./components/Header";
import './App.scss'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import {Routes, Route} from "react-router-dom";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="shop" element={<Shop/>}/>
                <Route path="cart" element={<Cart/>}/>
                <Route path="order" element={<Order/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
