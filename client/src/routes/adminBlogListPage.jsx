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
      {/* <AdminBlogList /> */}
      {props.content}
    </div>
  );
}
