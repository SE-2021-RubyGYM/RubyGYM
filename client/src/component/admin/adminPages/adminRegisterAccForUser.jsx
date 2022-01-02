import { AdminContainerStyle } from "../../sub-sections/dat/admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "../../sub-sections/dat/admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "../../sub-sections/dat/admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "../../sub-sections/dat/admindefaultrightcontainer/admindefaultrightcontainer";
import AdminDefaultContentSearchTool from "../../sub-sections/dat/admindefaultcontentsearchtools/admindefaultcontentsearchtool";
import UserTable from "../adminTable/UserTable";

import axios from "axios";
import { useState, useEffect } from "react";

export default function AdminRegisterAccForUsers() {
  const actor = "/admin";
  const tableheader = [
    "ID",
    "Tên",
    "Số điện thoai",
    "Ngày sinh",
    "ID HLV",
    "Payment Day",
  ];
  const [data, setData] = useState([
    {
      _id: 0,
      name: "dat",
      birthDay: "",
    },
  ]);
  const getDataUser = () => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/users/",
    }).then((res) => {
      if (res.status == 200) {
        const tmp = res.data.result;
        const out = [];
        tmp.forEach(myFunction);
        function myFunction(element) {
          const output = {
            _id: element._id,
            name: element.name,
            phone: element.phone,
            birthDay: element.birthDay,
            coach: element.coach,
            paymentDay: element.paymentDay,
          };
          out.push(output);
        }

        setData(out);

        console.log(tmp);
        console.log("loideptrai");
        console.log(out);
      }
    });
  };
  useEffect(() => {
    getDataUser();
  }, []);

  return (
    <div
      style={{
        AdminDefaultRightContainerStyle,

        width: "100%",
      }}
    >
      <div style={AdminContainerStyle}>
        <AdminTitleHeaderContainer title="Danh sách user" />
        <div style={AdminContainerContentStyle}>
          <AdminDefaultContentSearchTool
            name1="Tên người dùng"
            name2="Thêm người dùng"
            name3="adduser"
          />
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <UserTable headertable={tableheader} datatable={data} actor={actor} />
        </div>
      </div>
    </div>
  );
}
