import React from 'react';
import {Edit, SimpleForm, TextInput, NumberInput, ImageField, ImageInput, FunctionField} from 'react-admin';
import {IProduct} from "../types";
import {ImageListItem} from "@mui/material";
import {useProductUploadImage} from "../../../utils/hooks/useUploadImage";

interface ProductEditProps {

}




const ProductEdit: React.FC<ProductEditProps> = (props) => {

    return (
        <div>
            <Edit {...props} transform={useProductUploadImage}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
                    <TextInput source="title"/>
                    <NumberInput source='price'/>
                    <TextInput source='description'/>
                    <FunctionField
                        label="Image"
                        render={(record: IProduct) => {
                            return (
                                <ImageListItem key={record.imageUrl} sx={{maxWidth: 100}}>
                                    <img
                                        src={`${process.env.REACT_APP_API_URL}${record.imageUrl}`}
                                    />
                                </ImageListItem>
                            );
                        }}
                    />
                    <ImageInput source="imageFile" label="Image to change" accept="image/*">
                        <ImageField source="src" title="title"/>

                    </ImageInput>
                </SimpleForm>
            </Edit>
        </div>
    );
};

export default ProductEdit;