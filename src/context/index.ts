import {createContext} from "react";
import {AppContextInterface} from "./types";

const AppContext = createContext({} as AppContextInterface);


export default AppContext;