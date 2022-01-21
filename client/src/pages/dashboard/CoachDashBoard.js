import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Progress,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import ApexActivityChart from "./components/ActivityChart.js";
import { useEffect } from "react";
import axios from "axios";
import { BackEndBaseURL } from "../../app/backend.js";
import meal1 from "../../assets/dashboard/meal-1.svg";
import meal2 from "../../assets/dashboard/meal-2.svg";
import meal3 from "../../assets/dashboard/meal-3.svg";
import upgradeImage from "../../assets/dashboard/upgradeImage.svg";
import heartRed from "../../assets/dashboard/heartRed.svg";
import heartTeal from "../../assets/dashboard/heartTeal.svg";
import heartViolet from "../../assets/dashboard/heartViolet.svg";
import heartYellow from "../../assets/dashboard/heartYellow.svg";
import gymIcon from "../../assets/dashboard/gymIcon.svg";
import therapyIcon from "../../assets/dashboard/therapyIcon.svg";
import user from "../../assets/user.svg";
import statsPie from "../../assets/dashboard/statsPie.svg";

import s from "./Dashboard.module.scss";

const CoachDashboard = () => {
  const [coachInfo, setCoachInfo] = useState({
    _id: "Đang tải",
    name: "Huấn luyện viên",
    username: "Đang tải",
    phone: "Đang tải",
    password: "Đang tải",
    birthDay: "Đang tải",
    gender: "Đang tải",
    coach: "Đang tải",
    referralCode: "Đang tải",
    assessment: "Trống",
    height: "Đang tải",
    weight: "Đang tải",
    paymentDay: "Đang tải",
    aim: "Trống",
    image: "",
    __v: 0,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: BackEndBaseURL + "/api/coachs/auth",
      headers: {
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        console.log("thanh cong");
        setCoachInfo(res.data.result);
      }
    });
  }, []);

  const [checkboxes, setCheckboxes] = useState([true, false]);

  const toggleCheckbox = (id) => {
    setCheckboxes((checkboxes) =>
      checkboxes.map((checkbox, index) => (index === id ? !checkbox : checkbox))
    );
  };

  const meals = [meal1, meal2, meal3];

  return (
    <div>
      <Widget className="widget-p-lg">
        <div className="d-flex">
          <img className={s.image} src={coachInfo.image} alt="..." />
          <div className={s.userInfo}>
            <p className="headline-3">{coachInfo.name}</p>
            <p className="body-3 muted">{coachInfo.major}</p>
          </div>
        </div>

        <div className={s.goals}>
          <div className={s.goalsTitle}>
            <p className="headline-3" style={{ color: "#2128bf" }}>
              Thông tin cá nhân
            </p>
          </div>
          <div>
            <p className="body-2">Mã huấn luyện viên</p>
            <p className="body-3 muted">{coachInfo._id}</p>
          </div>
          <div>
            <p className="body-2"> Tên huấn luyện viên</p>
            <p className="body-3 muted">{coachInfo.name}</p>
          </div>
          <div>
            <p className="body-2"> Tên tài khoản</p>
            <p className="body-3 muted">{coachInfo.username}</p>
          </div>
          <div>
            <p className="body-2"> Số điện thoại</p>
            <p className="body-3 muted">{coachInfo.phone}</p>
          </div>
          <div>
            <p className="body-2"> Ngày sinh</p>
            <p className="body-3 muted">{coachInfo.birthDay}</p>
          </div>
          <div>
            <p className="body-2"> Chyên môn</p>
            <p className="body-3 muted">{coachInfo.major}</p>
          </div>
        </div>
      </Widget>
    </div>
  );
};

export default CoachDashboard;
