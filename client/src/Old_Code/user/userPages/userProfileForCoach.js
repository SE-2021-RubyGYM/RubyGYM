import React, { useState, useEffect } from "react";
import "./user_profile_style.css";
import { useParams } from "react-router";
import { Notification2 } from "../../../components/Notification/Notification";
import "font-awesome/css/font-awesome.min.css";
import { toast } from "react-toastify";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import "react-datepicker/dist/react-datepicker.css";

import { BackEndBaseURL } from "../../../app/backend";
import { submitAssessment, getCustomerList } from "../../../pages/Coach-customer/api/api";
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


const UserProfileForCoach = function () {
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

   
  
  }, []);


var assessment= document.getElementById("subject")

  return (
    <div className="gnanT_all">
      <div className="gnanT_content-chinh">
        <div className="gnanT_main-content" id="main_content_play">
          <div className="gnanT_content-header">
            <div className="gnanT_title">
              <h2> Thông tin chi tiết khách hàng {userInfo.name} </h2>
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
                </div>
              </div>

              <div className="gnanT_box-body-fix">
                
                <div className="gnanT_user-name">
                  <label> Thời gian gia hạn </label>
                  <div>{userInfo.paymentDay}</div>
                </div>
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

              <div className="gnanT_box-body-fix">
                <div className="gnanT_user-name">
                  <label>Chiều cao(cm):</label>
                  
                  <div>{userInfo.height}</div>
                </div>
                <div className="gnanT_user-name">
                  <label>Cân nặng(kg):</label>
                  
                  <div>{userInfo.weight}</div>
                </div>
                <div className="gnanT_user-name">
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
            </div>
            <div className="gnanT_text-center">
              
            </div>
            <div className="coach-review">
      <h2>Đánh giá quá trình luyện tập của học viên {userInfo.name} </h2>

      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label for="score">Điểm</label>
            </div>

            <div className="col-75">
              <select id="score" name="score">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Nhận xét</label>
            </div>

            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Viết nhận xét"
                style={{ height: "200px" }}
                value={userInfo.assessment}
                onChange={(e)=>{
                  var newuserInfo={...userInfo};
                  newuserInfo.assessment=e.target.value;
                  setUserInfo(newuserInfo);
                }}
              ></textarea>
            </div>
          </div>

          <div className="row">
            <Button onClick={()=>{
              submitAssessment(id,userInfo);
            }}>
              Gửi đánh giá
            </Button>
          </div>
        </form>
      </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileForCoach;
