// import AdminHomeHeader from "../adminhomeheader/adminhomeheader";
import { AdminContainerStyle } from "./admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "./admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "./admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "./admindefaultrightcontainer/admindefaultrightcontainer";
// import AdminDefaultContentSearchTool from "../admindefaultcontentsearchtools/admindefaultcontentsearchtool";
// import AdminDefaultTable from "../admindefaulttable/admindefaulttable";
import axios from "axios";
import { useState } from "react";
import AdminEditCoachForm from "../../admin/adminEditForm/admineditcoachform";
export default function AdminAddCoach() {
  const tableheader = [
    "id",
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

  const dataForm = [
    {
      title: "Họ và tên",
      titleE: "name",
      type: "inputField",
      value: "",
    },
    {
      title: "Tài khoản",
      titleE: "username",
      type: "inputField",
      value: "",
    },
    {
      title: "Mật khẩu",
      titleE: "password",
      type: "inputField",
      value: "",
    },
    {
      title: "Số điện thoại",
      titleE: "phone",
      type: "inputField",
      value: "",
    },
    {
      title: "Ngày sinh",
      titleE: "birthDay",
      type: "inputField",
      value: "",
    },

    {
      title: "Vai trò",
      titleE: "major",
      type: "dropdown",
      value: "Huấn luyện cá nhân",
    },
    // {
    //   title: "Hạn đóng phí",
    //   titleE: "paymentDay",
    //   type: "inputField",
    //   value: "",
    // },
    // {
    //   title: "Giới tính",
    //   titleE: "gender",
    //   type: "inputField",
    //   value: "",
    // },
    // {
    //     title:"Chiều cao",
    //     titleE:'height',
    //     type:'inputField',
    //     value:''
    // },
    // {
    //     title:"Huan luyen vien",
    //     titleE:'coach',
    //     type:'inputField',
    //     value:''
    // },
    // {
    //     title:"Cân nặng",
    //     titleE:'weight',
    //     type:'inputField',
    //     value:''
    // },
    {
      title: "Submit",
      titleE: "weight",
      type: "buttonField",
      value: "",
    },
  ];

  return (
    <div style={{ AdminDefaultRightContainerStyle }}>
      <div style={AdminContainerStyle}>
        <AdminTitleHeaderContainer title="Thêm tài khoản cho huấn luyện viên" />
        <div style={AdminContainerContentStyle}>
          <div>
            <AdminEditCoachForm
              data={dataForm}
              url="localhost:5000/api/coachs/"
            />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
