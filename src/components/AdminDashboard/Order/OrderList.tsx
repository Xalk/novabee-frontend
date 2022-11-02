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
    NumberField,
    ArrayField,
    SingleFieldList,
    ChipField,
    List,
    DateField
} from 'react-admin';
import {ImageListItem, Stack} from '@mui/material';
import {IProduct} from "../../../types";


const productFilters = [
    <TextInput label="Search" source="title" alwaysOn/>,
];

const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">
        <FilterForm filters={productFilters}/>
        <Stack direction="row" alignItems="center" gap="10px">
            <FilterButton filters={productFilters}/>
            <CreateButton resource='order'/>
            <ExportButton/>
        </Stack>
    </Stack>
)


const OrderList: React.FC = (props) => {

    console.log(props)
    return (
        <ListBase {...props}>
            <ListToolbar/>
            <Datagrid>
                <TextField source='id'/>
                {/*<TextField source='products'/>*/}

                <ArrayField source="products">
                    <Datagrid bulkActionButtons={false}>
                        <TextField source='title'/>
                        <TextField source='price'/>
                        <FunctionField
                            label="Image"
                            render={(record: IProduct) => {
                                return (
                                    <ImageListItem key={record.imageUrl} sx={{maxWidth: 50}}>
                                        <img
                                            src={`http://localhost:5000${record.imageUrl}`}
                                        />
                                    </ImageListItem>
                                );
                            }}
                        />
                    </Datagrid>
                </ArrayField>

                <TextField source='user.fullName'/>
                <TextField source='user.email'/>
                <TextField source='address.city'/>
                <TextField source='address.street'/>
                <TextField source='status'/>
                <DateField  source='createdAt' showTime/>

                <EditButton resource='/order'/>
                <DeleteButton resource='order'/>
            </Datagrid>
            <Pagination/>
        </ListBase>
    );
};

export default OrderList;