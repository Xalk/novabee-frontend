import React, {useEffect, useState} from 'react';
import './App.scss'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import {Routes, Route} from "react-router-dom";
import AppContext from "./context";
import {IUser} from "./context/types";
import {UserAPI} from "./api";
import AdminDashboard from "./components/AdminDashboard";
import Layout from "./components/Layout";

function App() {

    const [user, setUser] = useState<IUser | null>()

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

                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="shop" element={<Shop/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="order" element={<Order/>}/>
                    </Route>
                    <Route path="/dashboard/*" element={<AdminDashboard/>}/>
                </Routes>

            </div>

        </AppContext.Provider>
    );
}

export default App;
