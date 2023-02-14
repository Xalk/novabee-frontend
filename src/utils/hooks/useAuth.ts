import {useContext} from "react";
import AppContext from "../../context";

export const useAuth = () => {
    const {user} = useContext(AppContext);
    return Boolean(user)
}