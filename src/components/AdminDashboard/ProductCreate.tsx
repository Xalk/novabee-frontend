import React from 'react';
import {
    Create, SimpleForm, TextInput, NumberInput
} from 'react-admin'



const ProductCreate: React.FC = () => {
    return (
        <Create>
            <SimpleForm>
                <TextInput source="title"/>
                <NumberInput source='price'/>
                <TextInput source='description'/>
                <TextInput source='imageUrl'/>
            </SimpleForm>
        </Create>
    );
};

export default ProductCreate;