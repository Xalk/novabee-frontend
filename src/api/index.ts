import axios from "axios";
import {IResProduct, IResUserOrder, IUpload, reqUserData} from "./types";
import {IProduct, IUser} from "../context/types";
import {getWithExpiry} from "../utils/localStorage";


const token = getWithExpiry('access_key')

let baseApi = axios.create({
    baseURL: 'http://192.168.0.103:5000/api/',
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
    },
    addToCart(productId: string){
        return baseApi.post(`cart`, {productId}).then(res => res.data);
    },
    getCart(){
        return baseApi.get<IProduct[]>(`cart`).then(res => res.data);
    },
    removeFromCart(productId: string){
        return baseApi.delete(`cart/${productId}`).then(res => res.data);
    },
    postOrder(address: {city: string, street:string}){
        return baseApi.post(`order`, {address}).then(res => res.data);
    },
    getUserOrder(){
        return baseApi.get<IResUserOrder[]>(`user-orders`).then(res => res.data);
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

