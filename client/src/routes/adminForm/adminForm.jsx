import "./adminForm.css";
import React from "react";
import { useState } from "react";
import { Layout } from "antd/lib";

import AdminHeader from "./adminHeader";
import AdminSideBar from "./adminSideBar";
import AdminBreadCrumb from "./adminBreadCrumb";
import AdminContent from "./adminContent";

export default function AdminForm() {
  return (
    <>
      <AdminHeader />
      <AdminBreadCrumb />
      <AdminSideBar />
    </>
  );
}
