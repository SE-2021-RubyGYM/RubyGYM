// import "./adminForm/adminForm.css";
// import React from 'react';
// import { useState } from 'react';
// import { Layout} from 'antd/lib';

// import AdminHeader from "./adminForm/adminHeader";
// import AdminSideBar from "./adminForm/adminSideBar";
// import AdminBreadCrumb from "./adminForm/adminBreadCrumb";
// import AdminContent from "./adminForm/adminContent";
import AdminForm from "./adminForm/adminForm";
import AdminDefaultTable from "../component/dat/admindefaulttable/admindefaulttable";

export default function AdminDashboard() {
  return (
    <>
      <AdminForm />
      {/* <AdminDefaultTable/> */}
    </>
  );
}
