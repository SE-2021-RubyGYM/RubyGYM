import React, { useState, useEffect } from "react";
import "./user_profile_style.css";
import { useParams } from "react-router";
import { Notification2 } from "../../../components/Notification/Notification";
import "font-awesome/css/font-awesome.min.css";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Badge,
} from "reactstrap";
import axios from "axios";
import DatePicker from "react-datepicker";

import { BackEndBaseURL } from "../../../app/backend";
// export default function UserProfile(props)

const UserProfile = function () {
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState({
    _id: "61e1ad339fef242d81511b98",
    name: "Lê Thiên Chúc",
    username: "user03",
    phone: "0169925628",
    password:
      "$argon2i$v=19$m=4096,t=3,p=1$wd449sARZ/FPw8hv/r0FQA$X/worTotBaY6v6N9mJQOesrBafHeLbO1sfAfETc7FcQ",
    birthDay: "2001-01-14T17:00:00.000Z",
    gender: "Female",
    coach: "61bb55ba80c3938bf7800378",
    referralCode: "GT-88XeP8KK-2022",
    assessment: "Trống",
    height: "1.73",
    weight: "69",
    paymentDay: "2022/06/06",
    aim: "Trống",
    __v: 0,
  });
  const [coachs, setCoachs] = useState([]);
  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/users/" + id,
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        setUserInfo(res.data.result);
        setDatePicker(new Date(res.data.result.paymentDay));
      }
    });
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/coachs",
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        setCoachs(res.data.result);
      }
    });
  }, []);
  const handleSubmit = () => {
    var userInfoCopy = { ...userInfo };
    var pay = payment;
    if (
      (Date.now() - new Date(userInfo.createAt).getTime()) /
        (1000 * 60 * 60 * 24 * 365) >
      1
    ) {
      if (pay == 12) {
        pay = 15;
      }
    }
    setDatePicker(
      new Date(datePicker.getTime() + 1000 * 30 * 24 * 60 * 60 * pay)
    );

    userInfoCopy.paymentDay = datePicker.toString();
    axios({
      method: "PUT",
      url: BackEndBaseURL + "/api/users/" + id,
      data: userInfoCopy,
    })
      .then((res) => {
        if (res.status == 200 || res.status == true) {
          const notificationTypes = ["success", "error"];
          var success = true;
          var mes = "Cập nhập thành công";
          let notificationName = success ? "success" : "error";
          let msg = { success: mes, error: mes };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg[notificationName]}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
        } else {
          const notificationTypes = ["success", "error"];
          var success = false;
          var mes = "Cập nhập thất bại";
          let notificationName = success ? "success" : "error";
          let msg = { success: mes, error: mes };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg[notificationName]}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
        }
      })
      .catch((e) => {
        const notificationTypes = ["success", "error"];
        var success = false;
        var mes = "Cập nhập thất bại";
        let notificationName = success ? "success" : "error";
        let msg = { success: mes, error: mes };
        toast(
          <Notification2
            type={notificationName}
            withIcon
            msg={msg[notificationName]}
          />,
          {
            autoClose: 4000,
            closeButton: false,
            hideProgressBar: true,
          }
        );
      });
  };
  const [datePicker, setDatePicker] = useState(new Date());

  const [payment, setPayment] = useState(0);

  return (
    <div className="gnanT_all">
      <div className="gnanT_content-chinh">
        <div className="gnanT_main-content" id="main_content_play">
          <div className="gnanT_content-header">
            <div className="gnanT_title">
              <h2> Thông tin chi tiết của khách hàng {userInfo.name} </h2>
            </div>
            <hr className="gnanT_red-line" />
          </div>

          <div className="gnanT_content">
            <div className="gnanT_box">
              <div className="gnanT_box-body">
                <div className="gnanT_user_image">
                  <img
                    src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                    className="gnanT_image-user"
                  />
                </div>

                <div className="gnanT_box-user-infor">
                  <div className="gnanT_user-name">
                    Mã khách hàng: {userInfo._id}
                  </div>
                  <div className="gnanT_user-name">
                    Họ và tên: {userInfo.name}
                  </div>
                  <div className="gnanT_user-name">
                    Số điện thoại: {userInfo.phone}
                  </div>
                  <div className="gnanT_user-name">
                    Giới tính: {userInfo.gender}
                  </div>
                  <div className="gnanT_user-name">
                    Ngày sinh: {userInfo.birthDay}
                  </div>
                  <div className="gnanT_user-name"> Thành viên hạng: Bạc</div>
                  <div className="gnanT_user-name">
                    <label>
                      {" "}
                      Huấn luyện viên:
                      {coachs.map((e) => {
                        if (e._id == userInfo.coach) {
                          return e.name;
                        }
                      })}
                    </label>
                  </div>
                </div>
              </div>
              <div className="gnanT_box-body-fix1">
                <div className="gnanT_user-name">
                  <label>Chiều cao hiện tại (cm):</label>
                  <input
                    type="text"
                    placeholder="Đơn vị: cm"
                    value={userInfo.height}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.height = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />
                </div>
                <div className="gnanT_user-name">
                  <label>Cân nặng hiện tại (kg):</label>
                  <input
                    type="text"
                    placeholder="Đơn vị: kg"
                    value={userInfo.weight}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.weight = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />
                </div>
                <div className="gnanT_user-name bmi-user">
                  <label>
                    Chỉ số BMI:
                    {Math.round(
                      userInfo.weight /
                        ((userInfo.height * userInfo.height) / 10000),
                      -2
                    )}
                  </label>
                </div>
              </div>

              <div className="gnanT_box-body-fix2">
                {/* <div className="gnanT_user-name"> Thời gian đăng kí</div> */}
                <div className="gnanT_user-name">
                  <label> Đã đóng phí: </label>
                  <select
                    value={payment}
                    onChange={(e) => {
                      setPayment(e.target.value);
                    }}
                  >
                    <option value={0}> Chưa đóng phí</option>
                    <option value={3}> 3 tháng</option>
                    <option value={6}> 6 tháng</option>
                    <option value={9}> 9 tháng</option>
                    <option value={12}> 12 tháng</option>
                  </select>
                </div>
                <div className="gnanT_user-name">
                  <label> Số lượt chia sẻ mã ID </label>
                  <input type="text" placeholder="" />
                </div>
                <div className="gnanT_user-name">
                  <label> Thời gian gia hạn </label>
                  <DatePicker
                    selected={datePicker}
                    onChange={(e) => {
                      setDatePicker(e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="gnanT_text-center">
              <button
                className="gnanT_button"
                onClick={() => {
                  handleSubmit();
                }}
              >
                {" "}
                Cập nhật thông tin{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
