import AdminLeftSidebar from "../component/trang/admin/adminleftsidebar";

import { useState } from "react";

import { UserContext } from "../component/context/firstcontext";
import AdminAddUser from "../component/dat/adminadduser/adminadduser";
import AdminForm from "./adminForm/adminForm";

export default function AdminAddUserPage() {
  const [margin, setMargin] = useState("250px");

  return (
    <div>

      <AdminAddUser />
    </div>
  );
}
