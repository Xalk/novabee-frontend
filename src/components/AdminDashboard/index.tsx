import React from 'react';
import {Admin, Resource} from 'react-admin'
import ProductList from "./Product/ProductList";
import myRestProvider from "./myRestProvider";
import ProductEdit from "./Product/ProductEdit";
import InventoryIcon from '@mui/icons-material/Inventory';
import ProductCreate from "./Product/ProductCreate";

interface AdminDashboardProps {

}


const AdminDashboard: React.FC<AdminDashboardProps> = () => {
    return (
        <Admin dataProvider={myRestProvider}>
            <Resource name='product'
                      list={ProductList}
                      edit={ProductEdit}
                      create={ProductCreate}
                      icon={InventoryIcon}/>
        </Admin>
    );
};

export default AdminDashboard;