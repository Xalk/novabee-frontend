import React from 'react';
import {
    CreateButton,
    Datagrid,
    FilterButton,
    FilterForm,
    ListBase,
    Pagination,
    TextField,
    TextInput,
    EditButton,
    DeleteButton,
    ExportButton
} from 'react-admin';
import {Stack} from '@mui/material';


const productFilters = [
    <TextInput label="Search" source="title" alwaysOn/>,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={productFilters}/>
        <Stack direction="row" alignItems="center" gap="10px">
            <FilterButton filters={productFilters}/>
            <CreateButton resource='product'/>
            <ExportButton/>
        </Stack>
    </Stack>
)


const ProductList: React.FC = () => {


    return (
        <ListBase>
            <ListToolbar/>
            <Datagrid>
                <TextField source='id'/>
                <TextField source='title'/>
                <TextField source='price'/>
                <TextField source='description'/>
                <TextField source='imageUrl'/>
                <EditButton resource='/product'/>
                <DeleteButton resource='product'/>
            </Datagrid>
            <Pagination/>
        </ListBase>
    );
};

export default ProductList;