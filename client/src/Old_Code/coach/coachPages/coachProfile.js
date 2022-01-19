import React, { useEffect, useState } from "react";
import "./coach_profile_style.css";
import { useParams } from "react-router";
import axios from "axios";
import { BackEndBaseURL } from "../../../app/backend";
import { Table } from "reactstrap";
import { getCustomerList } from "../../../pages/Coach-customer/api/api";
import DatePicker from "react-datepicker";
import { Notification2 } from "../../../components/Notification/Notification";
import { toast } from "react-toastify";

const CoachProfile = function () {
  // export default function CoachProfile(props) {
  const { id } = useParams();
  const [coachInfo, setCoachInfo] = useState({
    _id: "Đang tải",
    name: "Đang tải",
    username: "Đang tải",
    phone: "Đang tải",
    birthDay: new Date("2018/6/6"),
    gender: "Đang tải",
    paymentDay: new Date("2018/6/6"),
    createAt: "Đang tải",
    updateAt: "Đang tải",
    __v: 0,
    image: "Đang tải",
    major: "Đang tải",
  });
  const [userInfo, setUserInfo] = useState([
    {
      _id: "Đang tải",
      name: "Đang tải",
      phone: "Đang tải",
    },
  ]);

  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/coachs/" + id,
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        var result = res.data.result;
        result.birthDay = new Date(result.birthDay);
        setCoachInfo(result);
      }
    });
  }, []);

  useEffect(async () => {
    var c = await getCustomerList(id);
    console.log(c);
    if (c != null) {
      if (c.length > 0) {
        setUserInfo(c);
      } else {
        setUserInfo([
          {
            _id: "Không có",
            name: "Không có",
            phone: "Không có",
          },
        ]);
      }
    }
  }, []);
  const submitChange = () => {
    var newCoachInfo = { ...coachInfo };
    axios({
      method: "PUT",
      url: BackEndBaseURL + "/api/coachs/" + id,
      data: newCoachInfo,
    })
      .then((res) => {
        console.log(coachInfo.birthDay);
        if (res.status == 200 || res.status == true) {
          let mes = "Cập nhập thành công";
          let notificationName = "success";
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
          let mes = "Lỗi hệ thống";
          let notificationName = "error";
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
        let mes = "Lỗi hệ thống";
        let notificationName = "error";
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
  return (
    <div className="ad_xct_hlv_content-chinh">
      <div className="ad_xct_hlv_main-content" id="main_content_play">
        <div className="ad_xct_hlv_content-header">
          <div className="ad_xct_hlv_title">
            <h2> Thông tin chi tiết của huấn luyện viên {coachInfo.name} </h2>
          </div>
          <hr className="ad_xct_hlv_red-line" />
        </div>

        <div className="ad_xct_hlv_content">
          <div className="ad_xct_hlv_box">
            <div className="ad_xct_hlv_box-body">
              <div className="ad_xct_hlv_coach_image">
                <img src={coachInfo.image} className="ad_xct_hlv_image-coach" />
              </div>

              <div className="ad_xct_hlv_box-coach-infor">
                <div className="ad_xct_hlv_coach-name">
                  {" "}
                  Mã huấn luyện viên: {coachInfo._id}{" "}
                </div>

                <div className="ad_xct_hlv_coach-name">
                  Họ và tên: {coachInfo.name}
                </div>
                <div className="ad_xct_hlv_coach-name">
                  Tên tài khoản: {coachInfo.username}{" "}
                </div>
                <div className="ad_xct_hlv_coach-name">
                  <label for="datefinish"> Giới tính: </label>

                  <select
                    type="text"
                    id="datefinish"
                    name="sex"
                    value={coachInfo.gender}
                    onChange={(e) => {
                      var newCoachInfo = { ...coachInfo };
                      newCoachInfo.gender = e.target.value;
                      setCoachInfo(newCoachInfo);
                    }}
                  >
                    <option value="Male">Nam</option>
                    <option value="Female">Nữ</option>
                  </select>
                </div>
                <div className="ad_xct_hlv_coach-name">
                  <label for="datefinish"> Số điện thoại: </label>
                  <input
                    type="text"
                    id="datefinish"
                    name="datefinish"
                    placeholder="vd:093432732"
                    value={coachInfo.phone}
                    onChange={(e) => {
                      var newCoachInfo = { ...coachInfo };
                      newCoachInfo.phone = e.target.value;
                      setCoachInfo(newCoachInfo);
                    }}
                  />
                </div>

                <div className="ad_xct_hlv_coach-name">
                  <label for="datefinish"> Ngày sinh: </label>
                  <DatePicker
                    selected={coachInfo.birthDay}
                    onChange={(date) => {
                      var newCoachInfo = { ...coachInfo };
                      newCoachInfo.birthDay = date;
                      setCoachInfo(newCoachInfo);
                    }}
                  />
                </div>
                <div className="ad_xct_hlv_coach-name">
                  Chuyên ngành: {coachInfo.major}
                </div>
              </div>
            </div>

            <div className="ad_xct_hlv_box-body-fix">
              <div className="ad_xct_hlv_coach_manager_user">
                <div className="ad_xct_hlv_list-user">
                  {" "}
                  Danh sách khách hàng do {coachInfo.name} quản lý{" "}
                </div>

                <div className="ad_xct_hlv_box-body-user">
                  <Table>
                    <thead>
                      <tr>
                        <th className="w-5">Mã khách hàng</th>
                        <th className="w-20">Tên khách hàng</th>
                        <th className="w-10">Số điện thoại</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userInfo.map((e, index) => {
                        return (
                          <tr>
                            <td>{e._id}</td>
                            <td>{e.name}</td>
                            <td>{e.phone}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>

          <div className="ad_xct_hlv_text-center">
            <button
              className="ad_xct_hlv_button"
              onClick={() => {
                submitChange();
              }}
            >
              Cập nhật thông tin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CoachProfile;
