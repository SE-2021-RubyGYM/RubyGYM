// import { AdminContainerStyle } from "../component/dat/admincontainer/admincontainerstyle";
// import AdminTitleHeaderContainer from "../component/dat/admintitleheadercontainer/admintitleheadercontainer";
// import { AdminContainerContentStyle } from "../component/dat/admincontainercontent/admincontainercontent";
// import { AdminDefaultRightContainerStyle } from "../component/dat/admindefaultrightcontainer/admindefaultrightcontainer";
// import AdminDefaultContentSearchTool from "../component/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
// import AdminDefaultTable from "../component/dat/admindefaulttable/admindefaulttable";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import React from "react";
import { Button, Table } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
export default function UserProfilePage(props) {
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

  //deleteUser
  const handleDeleteUser = useCallback(() => {
    const url = "http://localhost:5000/api/users/" + id;

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
      coach_ID: data.coach,
      goal: data.aim,
      height: data.height,
      weight: data.weight,
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
      title: "Coach_ID",
      dataIndex: "coach_ID",
      key: "coach_ID",
    },
    {
      title: "Goal",
      dataIndex: "goal",
      key: "goal",
    },
    {
      title: "Height",
      dataIndex: "height",
      key: "height",
    },
    {
      title: "Weight",
      dataIndex: "weight",
      key: "weight",
    },
  ];

  return (
    <>
      <div>
        <div>
          <h1>Thông tin người tập</h1>{" "}
        </div>
        <Table dataSource={dataSource} columns={columns} />

        <div>
          <Link to="/admin/userlist">
            <Button onClick={() => handleDeleteUser()}>Xoá người tập</Button>
          </Link>

          {props.children}
        </div>
      </div>
    </>
  );
}
