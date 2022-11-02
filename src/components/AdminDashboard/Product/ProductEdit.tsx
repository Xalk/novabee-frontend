import React from 'react';
import {Edit, SimpleForm, TextInput, NumberInput} from 'react-admin';

interface ProductEditProps {

}


const ProductEdit: React.FC<ProductEditProps> = (props) => {
    return (
        <div>
            <Edit {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
                    {/*<TextInput source="products"/>*/}
                    <NumberInput source='price'/>
                    <TextInput source='description'/>
                    <TextInput source='imageUrl'/>
                </SimpleForm>
            </Edit>
        </div>
    );
};

export default ProductEdit;