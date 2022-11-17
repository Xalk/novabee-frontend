import {IResProduct} from "../api/types";

export interface AppContextInterface {
    user?: IUser | null
    setUser: (data: IUser | null) => void
    isLoading?: boolean
    setIsLoading?: (b: boolean) => void
    products: IResProduct | null
}

export interface IUser {
    fullName: string
    email: string
    role: 'user' | 'admin'
    token: string
}

export interface IProduct {
    _id: string
    title: string
    price: number
    description: string
    imageUrl: string
    createdAt: string
    updatedAt: string
    __v: number
}

