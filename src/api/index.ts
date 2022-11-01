import axios from "axios";
import {IUpload} from "./types";

let baseApi = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {
        Authorization: "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRiZGJjODNhOGIzZmQxNjhjMGZlNWIiLCJpYXQiOjE2NjcyNDk0ODIsImV4cCI6MTY2OTg0MTQ4Mn0.4H0ESJ6pgLQirrEiUBPFkK55l1ac4ON-3Ov7iBLyqoo"
    }
})

export const API = {
    upload(formData: FormData) {
        return baseApi.post<IUpload>(`upload`, formData).then(res => res.data);
    },
}