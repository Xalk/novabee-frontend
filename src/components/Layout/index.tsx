import React from 'react';
import Header from "../Header";
import Footer from "../Footer";
import {Outlet} from "react-router-dom";


const Layout: React.FC = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default Layout;