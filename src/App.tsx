import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import './App.scss'
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import {Routes, Route} from "react-router-dom";
import AppContext from "./context";
import {IUser} from "./context/types";
import {UserAPI} from "./api";

function App() {

    const [user, setUser] = useState<IUser| null>()

    useEffect(() => {
        initUser()
    }, [])

    const initUser = async () => {
        try {
            const user = await UserAPI.getMe()

            setUser(user)
        } catch (e) {
            console.log(e)
        }
    }



    return (
        <AppContext.Provider value={{user, setUser}}>
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
        </AppContext.Provider>
    );
}

export default App;
