import axios from "axios";
import {IResProduct, IUpload, reqUserData} from "./types";
import {IUser} from "../context/types";
import {getWithExpiry} from "../utils/localStorage";


const token = getWithExpiry('access_key')

let baseApi = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Authorization: "Bearer " + token
    }
})

export const API = {
    upload(formData: FormData) {
        return baseApi.post<IUpload>(`upload`, formData).then(res => res.data);
    },
    getProducts(){
        return baseApi.get<IResProduct>(`product`).then(res => res.data);
    }
}

export const UserAPI = {
    login(userData: reqUserData) {
        return baseApi.post<IUser>(`auth/login`, userData).then(res => res.data);
    },
    getMe() {
        return baseApi.get<IUser>(`auth/me`).then(res => res.data);
    },

    register(userData: reqUserData) {
        return baseApi.post<IUser>(`auth/register`, userData).then(res => res.data);
    },
}

