import "./adminForm.css";
import React from "react";
import { useState } from "react";
import { Layout } from "antd/lib";

import AdminHeader from "./adminHeader";
import AdminSideBar from "./adminSideBar";

export default function AdminForm(props) {
  return (
    <Layout>
      <AdminHeader />
      {/* <AdminBreadCrumb /> */}
      <div style={{ marginLeft: "210px" }}>{props.children}</div>
      <AdminSideBar />
    </Layout>
  );
}
