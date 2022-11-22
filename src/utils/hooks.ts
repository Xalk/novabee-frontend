import {useContext} from "react";
import AppContext from "../context";
import {useState, useEffect} from 'react';

export const useAdmin = () => {
    const {user} = useContext(AppContext);
    return user?.role === 'admin'
}
export const useAuth = () => {
    const {user} = useContext(AppContext);
    console.log(Boolean(user))
    return Boolean(user)
}


function getWindowDimensions() {
    const {innerWidth: width, innerHeight: height} = window;
    return {
        width,
        height
    };
}

export default function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}