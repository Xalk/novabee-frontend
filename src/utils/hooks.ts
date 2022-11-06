import {useContext} from "react";
import AppContext from "../context";


export const useAdmin = () => {
    const {user} = useContext(AppContext);
    return user?.role === 'admin'
}
export const useAuth = () => {
    const {user} = useContext(AppContext);
    console.log(Boolean(user))
    return Boolean(user)
}