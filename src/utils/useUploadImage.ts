import {IProduct} from "../components/AdminDashboard/types";
import {API} from "../api";

export const useProductUploadImage =  async (data: IProduct) => {
    try {

        if(data.imageFile){
            const formData = new FormData()
            const file = data.imageFile.rawFile
            formData.append('image', file)
            const res = await API.upload(formData)
            const {imageFile, ...reqData} = data

            return {
                ...reqData,
                imageUrl: `${res.url}`,
            }
        }else {
            return data
        }


    } catch (e) {
        console.log(e)
    }

}