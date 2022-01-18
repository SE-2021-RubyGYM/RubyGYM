import React from "react";
import "./userForm.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NewFeed from "../../sub-sections/tung/newfeed";
import { element } from "prop-types";
import { useParams } from "react-router";
import { BackEndBaseURL } from "../../../app/backend";
import { Notification2 } from "../../../components/Notification/Notification";
import "font-awesome/css/font-awesome.min.css";
import { toast } from "react-toastify";
// const user_ruby = [
//   {
//     name: "Nguyễn Văn A",
//     ID_user: "IT3040",
//     phone_number: "096905605",
//     sex: "Nam",
//     dob: "09/09/2000",
//     mail: "abcd@gmai.com",
//     rank: "Bạc",
//     start: "08/12/2021",
//     finish: "08/1/2022",
//   },
// ];

export default function UserDashBoard() {
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
   const { id } = useParams();
  useEffect(() => {
    axios({
      method: "get",
      url: BackEndBaseURL + "/api/users/" + id,
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        setUserInfo(res.data.result);
        
      }
    });
  
  }, []);
   const handleSubmit = () => {
    var userInfoCopy = { ...userInfo };
   

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
  const user_ruby = [
    {
      name: userInfo.name,
      ID_user: userInfo._id,
      phone_number: userInfo.phone,
      sex: userInfo.gender,
      dob: userInfo.birthDay,
      paymentDay: userInfo.paymentDay,
      rank: "Bạc",
      assess: userInfo.assessment,

      //   mail: "abcd@gmai.com",
      //   rank: "Bạc",
      //   start: "08/12/2021",
      //   finish: "08/1/2022",
    },
  ];

  const w3_open = (right) => {
    if (right)
      return (document.getElementById("mySidebar").style.display = "block");
    else return (document.getElementById("mySidebar").style.display = "none");
  };

  const click_schedule = (right) => {
    if (right)
      return (
        (document.getElementById("content_schedule_play").style.display =
          "block"),
        (document.getElementById("main_content_play").style.display = "none"),
        (document.getElementById("content_ttsk_play").style.display = "none"),
        (document.getElementById("hr_play2").style.display = "block"),
        (document.getElementById("hr_play1").style.display = "none"),
        (document.getElementById("hr_play3").style.display = "none")
      );
    else return (document.getElementById("hr_play").style.display = "none");
  };

  const click_user_info = (right) => {
    if (right)
      return (
        (document.getElementById("content_schedule_play").style.display =
          "none"),
        (document.getElementById("main_content_play").style.display = "block"),
        (document.getElementById("content_ttsk_play").style.display = "none"),
        (document.getElementById("hr_play1").style.display = "block"),
        (document.getElementById("hr_play2").style.display = "none"),
        (document.getElementById("hr_play3").style.display = "none")
      );
    else return (document.getElementById("hr_play").style.display = "none");
  };
  const click_ttsk = (right) => {
    if (right)
      return (
        (document.getElementById("content_schedule_play").style.display =
          "none"),
        (document.getElementById("main_content_play").style.display = "none"),
        (document.getElementById("content_ttsk_play").style.display = "block"),
        (document.getElementById("hr_play1").style.display = "none"),
        (document.getElementById("hr_play3").style.display = "block"),
        (document.getElementById("hr_play2").style.display = "none")
      );
    else return (document.getElementById("hr_play").style.display = "none");
  };

  const click_log_out = (right) => {
    if (right)
      return (document.getElementById("log_out_play").style.display = "block");
    else return (document.getElementById("hr_play").style.display = "none");
  };

  const click_log_out_no = (right) => {
    if (right)
      return (document.getElementById("log_out_play").style.display = "none");
    else return (document.getElementById("hr_play").style.display = "none");
  };

  return (
    <div className="body_user_ui">
      <div className="main-header_user">
        <nav>
          <a href="">
            <img
              src={element.image}
              className="logo"
            />
          </a>

          <div className="top-navbar">
            <div className="navbar-custom-menu">
             
              <div
                className="navbar-icon news"
                onClick={() => click_ttsk(true)}
              >
                {" "}
                TIN TỨC & SỰ KIỆN
                <hr className="white-line" id="hr_play3" />{" "}
              </div>

              <div
                className="navbar-icon user-info"
                onClick={() => click_user_info(true)}
              >
                {" "}
                THÔNG TIN KHÁCH HÀNG
                <hr className="white-line" id="hr_play1" />{" "}
              </div>

              <div
                className="navbar-icon user-schedule"
                onClick={() => click_schedule(true)}
              >
                {" "}
                LỊCH TẬP
                <hr className="white-line" id="hr_play2" />
              </div>

              <div
                className=" log-out-button_user"
                onClick={() => click_log_out(true)}
              >
                <button className="button1_user">
                  <img
                    className="img-button"
                    src="https://scontent.fhan5-2.fna.fbcdn.net/v/t1.15752-9/270316520_345976443619938_656043017235543212_n.png?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=-8wJ6Hu9NAIAX_OZ9Kk&_nc_ht=scontent.fhan5-2.fna&oh=03_AVJSWW68RWAvw4KVRkU_LQY8Dvo9M6t3SkVeXVQ1rYGpCg&oe=61F2871C"
                  />{" "}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="container_box_user" id="log_out_play">
        <div className="container2">
          <h1 className="login-user">Bạn muốn đăng xuất?</h1>

          <div className="kaka">
            <button className="btn-user">
              <Link
                to="/user/home"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                }}
              >
                YES{" "}
              </Link>
            </button>
            <button className="btn-user" onClick={() => click_log_out_no(true)}>
              NO
            </button>
          </div>
        </div>
      </div>

      {user_ruby.map((element, index) => {
        return (
          <div className="content-chinh-user">
            <div className="main-content1-user" id="main_content_play">
              <div className="content-header-user">
                <div className="title">
                  <h2> Thông tin cá nhân của {element.name} </h2>
                </div>

                <div className="explain-title">
                  <p>Chúc bạn có khoảng thời gian tuyệt vời ở RubyGYM! </p>
                </div>
                <hr className="red-line" />
              </div>

              <div className="content-user">
                <div className="box-user">
                  <div className="box-body-user">
                    <div className="user_image">
                      <img
                        src="https://i.insider.com/5ab53db4095b111a068b45b6?width=700"
                        className="image-user"
                      />
                    </div>

                    <div className="box-user-infor">
                      <div className="user-name">Họ và tên: {element.name}</div>
                      <div className="user-name">
                        Số điện thoại: {element.phone_number}
                      </div>
                      <div className="user-name">Giới tính: {element.sex}</div>
                      <div className="user-name">Ngày sinh: {element.dob}</div>
                      {/* <div className="user-name">Email: {element.mail}</div> */}

                      <div className="user-name">
                        {" "}
                        Thành viên hạng: {element.rank}
                      </div>
                      {/* <div className="user-name">
                        Thời gian đăng kí: {element.start}
                      </div> */}
                      <div className="user-name">
                        Hạn đăng kí: {element.paymentDay}
                      </div>
                      <div className="user-name">
                        Đánh giá: {element.assess}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="change-infor-user">
                  <button
                   className="button-change"
                   onClick={()=>{
                     handleSubmit();
                   }}
                  >
                   
                    Chỉnh sửa thông tin{" "}
                  </button>
                </div>
              </div>
            </div>

            <div className="main-content-ttsk" id="content_ttsk_play">
              <NewFeed/>
            </div>

            <div className="main-content-schedule" id="content_schedule_play">
              <div className="content-header-user">
                <div className="title">
                  <h2> Lịch tập của {element.name} </h2>
                </div>

                <div className="explain-title">
                  <p>Chúc bạn có khoảng thời gian tuyệt vời ở RubyGYM! </p>
                </div>

                <hr className="red-line" />
              </div>

              <div className="content-user">
                <div className="box-user">
                  <div className="box-body-user">
                    <table border="1" className="table-content-user">
                      <thread>
                        <tr>
                          <th className="column"> Mã khách hàng </th>
                          <th className="column"> Buổi </th>
                          <th className="column"> Thứ </th>
                          <th className="column"> Thời gian </th>
                          <th className="column"> Môn tập </th>
                          <th className="column"> Huấn luyện viên </th>
                        </tr>
                        <tr>
                          <th className="co">{element.ID_user} </th>
                          <th className="co"> 1</th>
                          <th className="co"> 5</th>
                          <th className="co"> 8:00 - 10:00 </th>
                          <th className="co"> Yoga </th>
                          <th className="co"> Bùi Thị Phương </th>
                        </tr>
                        <tr>
                          <th className="co"> {element.ID_user} </th>
                          <th className="co"> 2</th>
                          <th className="co"> 7</th>
                          <th className="co"> 15:00 - 17:00 </th>
                          <th className="co"> Yoga </th>
                          <th className="co"> Bùi Thị Phương </th>
                        </tr>
                      </thread>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
