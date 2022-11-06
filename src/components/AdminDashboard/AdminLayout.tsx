import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar';

const MyLayout = (props:any) => <Layout {...props} appBar={MyAppBar} sx={{
    "& .css-i91xiw-MuiList-root-RaMenu-root":{alignItems: "flex-start", gap: "20px"},
    "& .css-i91xiw-MuiList-root-RaMenu-root a":{padding: "10px", width: "100%", justifyContent: "start"},
}}/>;

export default MyLayout;



