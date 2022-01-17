import React, { useState, useEffect } from "react";
import "./user_profile_style.css";
import { useParams } from "react-router";

import axios from "axios";
import { BackEndBaseURL } from "../../../app/backend";
export default function UserProfile(props) {
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
  });

  return (
    <div className="ad_all">
      <div className="ad_content-chinh">
        <div className="ad_main-content" id="main_content_play">
          <div className="ad_content-header">
            <div className="ad_title">
              <h2> Thông tin chi tiết khách hàng {userInfo.name} </h2>
            </div>
            <hr className="ad_red-line" />
          </div>

          <div className="ad_content">
            <div className="ad_box">
              <div className="ad_box-body">
                <div className="ad_user_image">
                  <img
                    src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                    className="ad_image-user"
                  />
                </div>

                <div className="ad_box-user-infor">
                  <div className="ad_user-name">
                    {" "}
                    Mã khách hàng: {userInfo._id}{" "}
                  </div>
                  <div className="ad_user-name">Họ và tên: {userInfo.name}</div>
                  <div className="ad_user-name">
                    {" "}
                    Số điện thoại: {userInfo.phone}{" "}
                  </div>
                  <div className="ad_user-name">
                    Giới tính: {userInfo.gender}
                  </div>
                  <div className="ad_user-name">
                    Ngày sinh: {userInfo.birthDay}
                  </div>
                  <div className="ad_user-name"> Thành viên hạng: Bạc</div>
                </div>
              </div>

              <div className="ad_box-body-fix">
                {/* <div className="ad_user-name"> Thời gian đăng kí</div> */}
                <div className="ad_user-name">
                  <form action="action_page.php">
                    <label for="datefinish"> Thời gian gia hạn </label>
                    <input
                      type="text"
                      id="datefinish"
                      name="datefinish"
                      placeholder="dd/mm/yy"
                      value={userInfo.paymentDay}
                      onChange={(e) => {
                        var newUserInfo = { ...userInfo };
                        newUserInfo.paymentDay = e.target.value;
                        setUserInfo(newUserInfo);
                      }}
                    />
                  </form>
                </div>

                <div className="ad_user-name">
                  <form action="action_page.php">
                    <label for="datefinish">
                      {" "}
                      Huấn luyện viên:
                      {coachs.map((e) => {
                        if (e._id == userInfo.coach) {
                          return e.name;
                        }
                      })}
                    </label>
                  </form>
                </div>
              </div>

              <div className="ad_box-body-fix">
                <div className="ad_user-name">
                  <form>
                    <label for="datefinish">Chiều cao(cm):</label>

                    <input
                      type="text"
                      id="datefinish"
                      name="datefinish"
                      placeholder="Đơn vị: cm"
                      value={userInfo.height}
                      onChange={(e) => {
                        var newUserInfo = { ...userInfo };
                        newUserInfo.height = e.target.value;
                        setUserInfo(newUserInfo);
                      }}
                    />
                  </form>
                </div>

                <div className="ad_user-name">
                  <form>
                    <label for="datefinish">Cân nặng(kg):</label>
                    <input
                      type="text"
                      id="datefinish"
                      name="datefinish"
                      placeholder="Đơn vị: kg"
                      value={userInfo.weight}
                      onChange={(e) => {
                        var newUserInfo = { ...userInfo };
                        newUserInfo.weight = e.target.value;
                        setUserInfo(newUserInfo);
                      }}
                    />
                  </form>
                </div>

                <div className="ad_user-name">
                  <form>
                    <label for="datefinish">
                      Chỉ số BMI:
                      {Math.round(
                        userInfo.weight /
                          ((userInfo.height * userInfo.height) / 10000),
                        -2
                      )}
                    </label>
                  </form>
                </div>
              </div>
            </div>

            <div className="ad_text-center">
              <button className="ad_button" input type="submit" value="Submit">
                {" "}
                Cập nhật thông tin{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
