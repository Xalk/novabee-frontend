import React from 'react';
import {Admin, Resource} from 'react-admin'
import ProductList from "./Product/ProductList";
import myRestProvider from "./myRestProvider";
import ProductEdit from "./Product/ProductEdit";
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ProductCreate from "./Product/ProductCreate";
import OrderList from "./Order/OrderList";
import OrderEdit from "./Order/OrderEdit";
import MyLayout from "./AdminLayout";

interface AdminDashboardProps {

}


const AdminDashboard: React.FC<AdminDashboardProps> = () => {
    return (
        <Admin dataProvider={myRestProvider} basename="/dashboard" layout={MyLayout}>
            <Resource name='product'
                      list={ProductList}
                      edit={ProductEdit}
                      create={ProductCreate}
                      icon={InventoryIcon}/>
            <Resource name='order'
                      list={OrderList}
                      icon={ShoppingCartIcon}
                      edit={OrderEdit}
            />
        </Admin>
    );
};

export default AdminDashboard;