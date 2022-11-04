import React from 'react';
import Header from "./components/Header";
import './App.scss'
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
