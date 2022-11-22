import React from "react";
import {
    ArrayField,
    Datagrid, DeleteButton,
    Edit,
    EditButton,
    FunctionField,
    NumberInput,
    SimpleForm,
    TextField,
    TextInput,
    SelectInput
} from "react-admin";
import {IProduct} from "../types";
import {ImageListItem} from "@mui/material";

const OrderEdit: React.FC = (props) => {
    return (
        <div>
            <Edit {...props}>
                <SimpleForm>
                    <TextInput disabled source="id"/>
                    <TextInput source='user.fullName'/>
                    <TextInput source='user.email'/>
                    <TextInput source='address.city'/>
                    <TextInput source='address.street'/>
                    <SelectInput source="status" choices={[
                        { id: 'pending', name: 'Pending' },
                        { id: 'accepted', name: 'Accepted' },
                        { id: 'processing', name: 'Processing' },
                        { id: 'sent', name: 'Sent' },
                        { id: 'received', name: 'Received' },
                        { id: 'rejected', name: 'Rejected' },
                    ]} />
                    <ArrayField source="products" fullWidth={true}>
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
                </SimpleForm>

            </Edit>

        </div>
    );
};



export default OrderEdit;