import "./adminForm.css";
import React from "react";
import { HashRouter, useLocation, Link, Routes, Route } from "react-router-dom";
import { Breadcrumb, Alert } from "antd";
import { useState } from "react";
//import from antd
import { Layout } from "antd/lib";

const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>：
      <Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>：
      <Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);

const breadcrumbNameMap = {
  "/apps": "Application List",
  "/apps/1": "Application1",
  "/apps/2": "Application2",
  "/apps/1/detail": "Detail",
  "/apps/2/detail": "Detail",
};
const Home = (props) => {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div style={{ margin: "16px 210px" }} className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" component={Apps} />
        <Route
          style={{ margin: "16px 210px" }}
          render={() => <span>Home Page</span>}
        />
      </Routes>
      <Breadcrumb style={{ margin: "16px 210px" }}>
        {breadcrumbItems}
      </Breadcrumb>
    </div>
  );
};

export default function AdminBreadCrumb() {
  return (
    <HashRouter>
      <Home />
    </HashRouter>
  );
}
