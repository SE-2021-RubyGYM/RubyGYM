import { AdminContainerStyle } from "../component/dat/admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "../component/dat/admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "../component/dat/admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "../component/dat/admindefaultrightcontainer/admindefaultrightcontainer";
import AdminDefaultContentSearchTool from "../component/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
import AdminDefaultTable from "../component/dat/admindefaulttable/admindefaulttable";
import AdminForm from "./adminForm/adminForm";
import React from "react";

import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function UserProfilePage() {
  const { id } = useParams();
  const url = "http://localhost:5000/api/users/" + id;
  const tableheader = [
    "ID",
    "Tên",
    "Tài khoản",
    "Số điện thoai",
    "Ngày sinh",
    "...",
  ];

  const [data, setData] = useState([
    // {
    //   _id: 0,
    //   name: "dat",
    //   birthDay: "",
    // },
  ]);
  const getData = () => {
    axios({
      method: "GET",
      url: url,
      data: {},
    })
      .then((res) => {
        setData(res.data.result);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // getData();
  useEffect(() => {
    getData();
  }, []);

  return (
    // <>

    //   <h1>{data.id}</h1>
    // </>
    // <div
    //   style={{
    //     AdminDefaultRightContainerStyle,
    //     paddingLeft: "200px",
    //     width: "100%",
    //   }}
    // >
    //   <div style={AdminContainerStyle}>
    //     <AdminTitleHeaderContainer title="Danh sách user" />
    //     <div style={AdminContainerContentStyle}>
    //       <AdminDefaultContentSearchTool
    //         name1="Tên người dùng"
    //         name2="Thêm người dùng"
    //         name3="http://localhost:3000/admin/adduser"
    //       />
    //     </div>
    //     <div style={{ paddingLeft: "30px" }}>
    //       <AdminDefaultTable headertable={tableheader} datatable={data} />
    //     </div>
    //   </div>
    // </div>
    <>
      <AdminForm />
      <div style={{ marginLeft: "300px" }}>
        <h1>{data.id}</h1>
        <h1>{data.name}</h1>
        <h1>{data.username}</h1>
        <h1>{data.phone}</h1>
        <h1>{data.birthday}</h1>
        <h1>{data.gender}</h1>;
      </div>
    </>
  );
}
