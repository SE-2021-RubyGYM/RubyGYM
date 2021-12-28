import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext } from "react";
// import AddBlog from "../component/dat/addBlog";
import AdminForm from "./adminForm/adminForm";
import AdminContent from "./adminForm/adminContent";
import AddBlog from "../component/new28_12_21/AddBlog/AddBlog";

export default function Adminaddblogpage() {
  return (
    <>
      <AdminForm />
      {/* <div style={{position:'fixed',zIndex:'1000'}}>
                    <AdminLeftSidebar/>
                </div> */}
      {/* <div style={{marginLeft:margin,transition:'0.5s'}}> */}

      <AddBlog />

      {/* </div> */}
    </>
  );
}
