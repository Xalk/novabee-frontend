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
    DateField,
    useRecordContext,
    WithRecord,
    SelectInput
} from 'react-admin';
import {Chip, ImageListItem, Stack} from '@mui/material';
import {IProduct} from "../types";


const orderStatus = ["pending", "accepted", "processing", "sent", "received", "rejected"]
const orderColors = ["#ffa726", "#66bb6a", "#80deea", "#29b6f6", "#bdbdbd", "#d32f2f"]


const orderFilters = [
    <TextInput label="Status" source="status"/>,

];


const ListToolbar = () => (
    <Stack direction="row" justifyContent="space-between">

        <FilterForm filters={orderFilters}/>
        <div>
            <FilterButton filters={orderFilters}/>
        </div>
        <ExportButton/>
    </Stack>
)


const OrderList: React.FC = (props) => {
    return (
        <ListBase {...props}>
            <ListToolbar/>
            <Datagrid>
                {/*<TextField source='id'/>*/}
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
                                            src={`${process.env.REACT_APP_API_URL}${record.imageUrl}`}
                                        />
                                    </ImageListItem>
                                );
                            }}
                        />
                    </Datagrid>
                </ArrayField>
                <NumberField source='total'
                             locales="fr-FR"
                             options={{style: 'currency', currency: 'UAH'}}
                             textAlign="center" fontWeight="bold"/>
                <TextField source='user.fullName'/>
                <TextField source='user.email'/>
                <TextField source='address.city'/>
                <TextField source='address.street'/>
                <WithRecord label="status" render={(record) => {
                    const idx = orderStatus.indexOf(`${record.status}`)
                    const chipColor = `${orderStatus[idx] === record.status && orderColors[idx]}`
                    return <>
                        {

                            <Chip label={record.status}
                                  style={{backgroundColor: chipColor, color: "white"}}/>


                        }
                    </>
                }}/>
                <DateField source='createdAt' showTime/>

                <EditButton resource='/order'/>
                <DeleteButton resource='order'/>
            </Datagrid>
            <Pagination rowsPerPageOptions={[5, 10, 25]}/>
        </ListBase>
    );
};



export default OrderList;