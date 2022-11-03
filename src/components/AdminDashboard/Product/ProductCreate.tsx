import React from 'react';
import {
    Create,
    SimpleForm,
    TextInput,
    NumberInput,
    ImageInput,
    ImageField
} from 'react-admin'

import {useProductUploadImage} from "../../../utils/useUploadImage";


const ProductCreate: React.FC = () => {

    const transform = useProductUploadImage()


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