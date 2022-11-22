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
    ExportButton,
    FunctionField,
    NumberField
} from 'react-admin';
import {ImageListItem, Stack} from '@mui/material';
import {IProduct} from "../types";


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


const ProductList: React.FC = (props) => {
    return (
        <ListBase {...props}>
            <ListToolbar/>
            <Datagrid>
                {/*<TextField source='id'/>*/}
                <TextField source='title'/>
                <NumberField source='price'
                             locales="fr-FR"
                             options={{style: 'currency', currency: 'UAH'}}
                             textAlign="center" fontWeight="bold"/>
                <TextField source='description'/>
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

                <EditButton resource='/product'/>
                <DeleteButton resource='product'/>
            </Datagrid>
            <Pagination/>
        </ListBase>
    );
};

export default ProductList;