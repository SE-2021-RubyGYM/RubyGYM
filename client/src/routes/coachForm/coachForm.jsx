import "./adminForm.css";
import React from "react";
import { useState } from "react";
import { Layout } from "antd/lib";

import AdminHeader from "./adminHeader";
import CoachSideBar from "./coachSideBar";
import AdminBreadCrumb from "./adminBreadCrumb";
import AdminContent from "./adminContent";

export default function CoachForm(props) {
  return (
    <Layout>
      <AdminHeader />
      <div style={{ marginLeft: "210px" }}>{props.children}</div>
      <CoachSideBar />
    </Layout>
  );
}
