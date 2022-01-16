
import React from "react";
import { useState } from "react";
import { Layout } from "antd/lib";

import CoachSideBar from "./coachSideBar";
import CoachHeader from "./coachHeader";


export default function CoachForm(props) {
  return (
    <Layout>
      <CoachHeader />
      <div style={{ marginLeft: "210px" }}>{props.children}</div>
      <CoachSideBar />
    </Layout>
  );
}
