import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    DateField,
    EditButton,
    DeleteButton
} from 'react-admin'

interface ProductListProps {

}


const ProductList: React.FC<ProductListProps> = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='price'/>
                <TextField source='description'/>
                <TextField source='imageUrl'/>
                <EditButton resource='/product'/>
                <DeleteButton resource='/product'/>
            </Datagrid>
        </List>
    );
};

export default ProductList;