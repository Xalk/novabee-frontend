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
