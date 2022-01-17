
import { useState } from "react";
export default function AdminBlogListPage(props) {
  const [margin, setMargin] = useState("250px");

  return (
    <div>
      {/* <AdminBlogList /> */}
      {props.content}
    </div>
  );
}
