import React, {useEffect, useState} from 'react';
import './App.scss'
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Faq from "./pages/Faq";
import Equipment from "./pages/Equipment";

import {Routes, Route} from "react-router-dom";
import AppContext from "./context";
import {IProduct, IUser} from "./context/types";
import {API, UserAPI} from "./api";
import AdminDashboard from "./components/AdminDashboard";
import Layout from "./components/Layout";
import {IResProduct} from "./api/types";


function App() {
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState<IUser | null>()
    const [products, setProducts] = useState<IResProduct | null>(null)
    const [cart, setCart] = useState<IProduct[] | null>(null)


    useEffect(() => {
        initUser()
        fetchProducts()
        fetchCart()
        setIsLoading(false)
    }, [])

    const initUser = async () => {
        try {
            const user = await UserAPI.getMe()
            setUser(user)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchProducts = async () => {
        try {
            const resProducts = await API.getProducts()
            setProducts(resProducts)
        } catch (e) {
            console.log(e)
        }
    }

    const fetchCart = async () => {
        try {
            const resCart = await API.getCart()
            setCart(resCart)
        } catch (e) {
            console.log(e)
        }
    }

    console.log(process.env.REACT_APP_API_URL)

    return (
        <AppContext.Provider value={{
            user,
            setUser,
            isLoading,
            setIsLoading,
            products,
            cart,
            setCart
        }}>
            <div className="wrapper">

                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="shop" element={<Shop/>}/>
                        <Route path="cart" element={<Cart/>}/>
                        <Route path="order" element={<Order/>}/>
                        <Route path="equipment" element={<Equipment/>}/>
                        <Route path="faq" element={<Faq/>}/>
                    </Route>
                    <Route path="/dashboard/*" element={<AdminDashboard/>}/>
                </Routes>

            </div>

        </AppContext.Provider>
    );
}

export default App;
