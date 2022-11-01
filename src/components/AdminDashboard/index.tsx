import React from 'react';
import {Admin, Resource} from 'react-admin'
import ProductList from "./ProductList";
import myRestProvider from "./myRestProvider";
import ProductEdit from "./ProductEdit";
import InventoryIcon from '@mui/icons-material/Inventory';

interface AdminDashboardProps {

}


const AdminDashboard: React.FC<AdminDashboardProps> = () => {
    return (
        <Admin dataProvider={myRestProvider}>
            <Resource name='product' list={ProductList} edit={ProductEdit} icon={InventoryIcon}/>
        </Admin>
    );
};

export default AdminDashboard;