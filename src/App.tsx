import React from 'react';
import Header from "./components/Header";
import './App.scss'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            {/*<Home/>*/}
            {/*<Shop/>*/}
            {/*<Cart/>*/}
            <Order/>
            <Footer/>
        </div>
    );
}

export default App;
