import React from 'react';
import {Edit, SimpleForm, TextInput, NumberInput, ImageField, ImageInput, FunctionField} from 'react-admin';
import {IProduct} from "../types";
import {ImageListItem} from "@mui/material";
import {useProductUploadImage} from "../../../utils/useUploadImage";

interface ProductEditProps {

}




const ProductEdit: React.FC<ProductEditProps> = (props) => {

    const transform = useProductUploadImage()

    return (
        <div>
            <Edit {...props} transform={transform}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
                    <NumberInput source='price'/>
                    <TextInput source='description'/>
                    <FunctionField
                        label="Image"
                        render={(record: IProduct) => {
                            return (
                                <ImageListItem key={record.imageUrl} sx={{maxWidth: 100}}>
                                    <img
                                        src={`http://localhost:5000${record.imageUrl}`}
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