import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext } from "react";
import AddBlog from "../component/dat/addBlog";
import AdminForm from "./adminForm/adminForm";
import AdminContent from "./adminForm/adminContent";

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
