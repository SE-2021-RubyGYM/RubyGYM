import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext } from "react";
import AddBlog from "../component/dat/addBlog";
import AdminForm from "./adminForm/adminForm";
import AdminContent from "./adminForm/adminContent";
import { Layout } from "antd";
const { Header, Content, Footer, Sider } = Layout;
export default function Adminaddblogpage() {
  return (
    <>
      <AdminForm />
      
      <Content>
        <div className="site-layout-background" >
        <AddBlog />
        </div>  
      </Content>

      {/* </div> */}
    </>
  );
}
