// import { AdminContainerStyle } from "../component/dat/admincontainer/admincontainerstyle";
// import AdminTitleHeaderContainer from "../component/dat/admintitleheadercontainer/admintitleheadercontainer";
// import { AdminContainerContentStyle } from "../component/dat/admincontainercontent/admincontainercontent";
// import { AdminDefaultRightContainerStyle } from "../component/dat/admindefaultrightcontainer/admindefaultrightcontainer";
// import AdminDefaultContentSearchTool from "../component/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
// import AdminDefaultTable from "../component/dat/admindefaulttable/admindefaulttable";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import AdminForm from "./adminForm/adminForm";
import React from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function CoachProfilePage() {
  const { id } = useParams();
  const url = "http://localhost:5000/api/coachs/" + id;
  const tableheader = [
    "ID",
    "Tên",
    "Tài khoản",
    "Số điện thoai",
    "Ngày sinh",
    "...",
  ];

  const [data, setData] = useState([
    {
      _id: 0,
      name: "dat",
      birthDay: "",
    },
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

  //deleteUser
  const handleDeleteCoach = useCallback(() => {
    const url = "http://localhost:5000/api/coachs/" + id;

    axios({
      method: "DELETE",
      url: url,
    })
      .then((res) => {
        alert("Xoa thanh cong");
      })
      .catch((e) => {
        alert("Khong the xoa");
      });
  });
  const dataSource = [
    {
      key: "1",
      name: data.name,
      username: data.username,
      phone: data.phone,
      birthday: data.birthDay,
      // birthday: data.birthDay.toLocaleDateString("pt-PT"),
      gender: data.gender,
      id: data._id,
      major: data.major,
    },
    ,
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Birthday",
      dataIndex: "birthday",
      key: "birthday",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Major",
      dataIndex: "major",
      key: "major",
    },
  ];

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
      <div>
        <div>
          <h1>Thông tin huấn luyện viên </h1>{" "}
        </div>
        <Table dataSource={dataSource} columns={columns} />

        <div>
          <Link to="/admin/registeraccforcoach">
            <Button onClick={() => handleDeleteCoach()}>
              Xoá huấn luyện viên{" "}
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
