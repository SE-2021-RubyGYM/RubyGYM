import React from "react";
import { AdminContainerStyle } from "../../sub-sections/dat/admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "../../sub-sections/dat/admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "../../sub-sections/dat/admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "../../sub-sections/dat/admindefaultrightcontainer/admindefaultrightcontainer";
import AdminDefaultContentSearchTool from "../../sub-sections/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
import CoachTable from "../adminTable/CoachTable";
import axios from "axios";
import { useState, useEffect } from "react";
import { Table } from "antd";
export default function AdminCoachList
() {
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
          <CoachTable headertable={tableheader} datatable={data} />
        </div>
      </div>
    </div>
  );
}
