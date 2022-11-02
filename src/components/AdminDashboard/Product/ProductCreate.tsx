import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ImageInput,
    ImageField
} from 'react-admin'
import {API} from "../../../api";
import {IProduct} from "../../../types";


const ProductCreate: React.FC = () => {

    const transform = async (data: IProduct) => {
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

    return (
        <Create transform={transform}>
            <SimpleForm>
                <TextInput source="title"/>
                <NumberInput source='price'/>
                <TextInput source='description' multiline/>
                <ImageInput source="imageFile" label="Related pictures" accept="image/*">
                    <ImageField source="src" title="title"/>
                </ImageInput>
            </SimpleForm>
        </Create>
    );
};

export default ProductCreate;