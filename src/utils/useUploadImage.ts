import {IProduct} from "../components/AdminDashboard/types";
import {API} from "../api";

export const useProductUploadImage = () => {

    return async (data :IProduct) => {
        try {
            console.log(data)
            const formData = new FormData()
            const file = data.imageFile.rawFile
            formData.append('image', file)
            const res = await API.upload(formData)
            const {imageFile, ...reqData} = data

            return {
                ...reqData,
                imageUrl: `${res.url}`,
            }

        } catch (e) {
            console.log(e)
        }
    }
}