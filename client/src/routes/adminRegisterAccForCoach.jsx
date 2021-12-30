import React from "react";
import { AdminContainerStyle } from "../component/dat/admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "../component/dat/admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "../component/dat/admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "../component/dat/admindefaultrightcontainer/admindefaultrightcontainer";
import AdminDefaultContentSearchTool from "../component/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
import AdminDefaultTable from "../component/dat/admindefaulttable/admindefaulttable";

import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "antd";
export default function AdminRegisterAccForCoach() {
  const major = "coachprofile/";
  const tableheader = [
    "ID",
    "Tên",
    "Tài khoản",
    "Số điện thoai",
    "Ngày sinh",
    "Ảnh",
    "Vai trò",
  ];

  const [data, setData] = useState([
    {
      _id: 0,
      name: "dat",
      birthDay: "",
    },
  ]);
  const getDataCoach = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/coachs/",
    }).then((res) => {
      if (res.status == 200) {
        setData(res.data.result);
      }
    });
  };
  useEffect(() => {
    getDataCoach();
  }, []);

  return (
    <div
      style={{
        AdminDefaultRightContainerStyle,

        width: "100%",
      }}
    >
      <div style={AdminContainerStyle}>
        <AdminTitleHeaderContainer title="Danh sách huấn luyện viên" />
        <div style={AdminContainerContentStyle}>
          <AdminDefaultContentSearchTool
            name1="Tên huấn luyện viên"
            name2="Thêm huấn luyện viên"
            name3="addcoach"
          />
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <AdminDefaultTable
            headertable={tableheader}
            datatable={data}
            function={major}
          />
        </div>
      </div>
    </div>
  );
}
