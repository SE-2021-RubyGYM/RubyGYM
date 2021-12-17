import AdminBlogList from "../component/trang/admin/adminBlogList";

import { useState } from "react";
import { useEffect } from "react";
import { useContext, createContext } from "react";
import AddBlog from "../component/dat/addBlog";

import { UserContext } from "../component/context/firstcontext";
import AdminForm from "./adminForm/adminForm";

export default function AdminBlogListPage(props) {
  const [margin, setMargin] = useState("250px");

  return (
    <div>
      {/* <UserContext.Provider value={{margin,setMargin}}>
                <div style={{position:'fixed',zIndex:'1000'}}>
                    <AdminLeftSidebar/>
                </div>
                <div style={{marginLeft:margin,transition:'0.5s'}}>
                    <AdminBlogList/>
                </div>
            </UserContext.Provider> */}
      <AdminForm />
      {/* <AdminBlogList /> */}
      {props.content}
    </div>
  );
}
