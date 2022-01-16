import { AdminContainerStyle } from "./admincontainer/admincontainerstyle";
import AdminTitleHeaderContainer from "./admintitleheadercontainer/admintitleheadercontainer";
import { AdminContainerContentStyle } from "./admincontainercontent/admincontainercontent";
import { AdminDefaultRightContainerStyle } from "./admindefaultrightcontainer/admindefaultrightcontainer";
import AdminDefaultContentSearchTool from "./admindefaultcontentsearchtools/admindefaultcontentsearchtool";
import UserTable from "../../admin/adminTable/UserTable";

import axios from "axios";
import { useState, useEffect } from "react";

export default function CoachUserTable() {
  const actor = "/coach";
  const tableheader = [
    "ID",
    "Tên",
    "Số điện thoai",
    "Ngày sinh",
    // "ID HLV",
    // "Payment Day",
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
      method: "GET",

      url: "http://localhost:5000/api/users/get_by_coach",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
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
            // coach: element.coach,
            // paymentDay: element.paymentDay,
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
  //   axios({
  //     method: "GET",

  //     url: "http://localhost:5000/api/users/get_by_coach",
  //     headers: {
  //       authorization: "Bearer " + localStorage.getItem("accessToken"),
  //     },
  //   })
  //     .then((res) => {
  //       console.log(res);
  //       setData()
  //     })
  //     .catch((res) => {
  //       console.log(res);
  //     });
  // };
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
        <AdminTitleHeaderContainer title="Danh sách người tập" />
        <div style={AdminContainerContentStyle}>
          <AdminDefaultContentSearchTool
            name1="Tên người tập"
            // name2="Thêm người dùng"
            // name3="adduser"
          />
        </div>
        <div style={{ paddingLeft: "30px" }}>
          <UserTable headertable={tableheader} datatable={data} actor={actor} />
        </div>
      </div>
    </div>
  );
}
