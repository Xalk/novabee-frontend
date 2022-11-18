import {IProduct} from "../context/types";

export interface IUpload {
    url: string
}

export interface reqUserData {
    email: string
    password: string
    fullName?: string
    rememberMe?: boolean
}

export interface IResProduct {
    data: IProduct[]
}

export interface IResUserOrder {
    _id: string
    products: Array<{
        _id: string
        title: string
        price: number
        description: string
        imageUrl: string
        createdAt: string
        updatedAt: string
        __v: number
    }>
    user: string
    address: {
        city: string
        street: string
    }
    status: string
    total: number
    createdAt: string
    updatedAt: string
    __v: number
}
