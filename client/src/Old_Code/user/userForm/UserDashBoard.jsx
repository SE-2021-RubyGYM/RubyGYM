import React from 'react';
import './userForm.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NewFeedForUser from '../../sub-sections/tung/newfeedForUser';
import { element } from 'prop-types';
import { useParams } from 'react-router';
import { BackEndBaseURL } from '../../../app/backend';
import { Notification2 } from '../../../components/Notification/Notification';
import 'font-awesome/css/font-awesome.min.css';
import { toast } from 'react-toastify';
import UserSchedule from '../../../pages/User-Schedule/userSchedule';
import { useHistory } from "react-router";

export default function UserDashBoard() {
    let history= useHistory();

  const [userInfo, setUserInfo] = useState({
    _id: 'Đang tải',
    name: 'Đang tải',
    username: 'Đang tải',
    phone: 'Đang tải',
    password: 'Đang tải',
    birthDay: 'Đang tải',
    gender: 'Đang tải',
    coach: 'Đang tải',
    referralCode: 'Đang tải',
    assessment: 'Trống',
    height: 'Đang tải',
    weight: 'Đang tải',
    paymentDay: 'Đang tải',
    aim: 'Trống',
    __v: 0,
  });
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      if(localStorage.getItem("user")!==null){
        axios.defaults.headers = {
          authorization:"Bearer " + localStorage.getItem("accessToken"),
        };

      }
    }else{
      history.push("/")
    }
    axios({
      method: 'GET',
      url: BackEndBaseURL + '/api/users/auth',
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    }).then((res) => {
      if (res.status == 200 || res.status == true) {
        setUserInfo(res.data.result);
      }
    });
  }, []);
  const handleSubmit = () => {
    var userInfoCopy = { ...userInfo };

    axios({
      method: 'PUT',
      url: BackEndBaseURL + '/api/users/' + userInfoCopy._id,
      data: userInfoCopy,
      headers: {
        authorization: 'Bearer ' + localStorage.getItem('accessToken'),
      },
    })
      .then((res) => {
        if (res.status == 200 || res.status == true) {
          const notificationTypes = ['success', 'error'];
          var success = true;
          var mes = 'Cập nhập thành công';
          let notificationName = success ? 'success' : 'error';
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
          const notificationTypes = ['success', 'error'];
          var success = false;
          var mes = 'Cập nhập thất bại';
          let notificationName = success ? 'success' : 'error';
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
        const notificationTypes = ['success', 'error'];
        var success = false;
        var mes = 'Cập nhập thất bại';
        let notificationName = success ? 'success' : 'error';
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

  const w3_open = (right) => {
    if (right)
      return (document.getElementById('mySidebar').style.display = 'block');
    else return (document.getElementById('mySidebar').style.display = 'none');
  };

  const click_schedule = (right) => {
    if (right)
      return (
        (document.getElementById('content_schedule_play').style.display =
          'block'),
        (document.getElementById('main_content_play').style.display = 'none'),
        (document.getElementById('content_ttsk_play').style.display = 'none'),
        (document.getElementById('hr_play2').style.display = 'block'),
        (document.getElementById('hr_play1').style.display = 'none'),
        (document.getElementById('hr_play3').style.display = 'none')
      );
    else return (document.getElementById('hr_play').style.display = 'none');
  };

  const click_user_info = (right) => {
    if (right)
      return (
        (document.getElementById('content_schedule_play').style.display =
          'none'),
        (document.getElementById('main_content_play').style.display = 'block'),
        (document.getElementById('content_ttsk_play').style.display = 'none'),
        (document.getElementById('hr_play1').style.display = 'block'),
        (document.getElementById('hr_play2').style.display = 'none'),
        (document.getElementById('hr_play3').style.display = 'none')
      );
    else return (document.getElementById('hr_play').style.display = 'none');
  };
  const click_ttsk = (right) => {
    if (right)
      return (
        (document.getElementById('content_schedule_play').style.display =
          'none'),
        (document.getElementById('main_content_play').style.display = 'none'),
        (document.getElementById('content_ttsk_play').style.display = 'block'),
        (document.getElementById('hr_play1').style.display = 'none'),
        (document.getElementById('hr_play3').style.display = 'block'),
        (document.getElementById('hr_play2').style.display = 'none')
      );
    else return (document.getElementById('hr_play').style.display = 'none');
  };

  const click_log_out = (right) => {
    if (right)
      return (document.getElementById('log_out_play').style.display = 'block');
    else return (document.getElementById('hr_play').style.display = 'none');
  };

  const click_log_out_no = (right) => {
    if (right)
      return (document.getElementById('log_out_play').style.display = 'none');
    else return (document.getElementById('hr_play').style.display = 'none');
  };

  return (
    <div className="body_user_ui">
      <div className="main-header_user">
        <nav>
          <a href="">
            <img src={element.image} className="logo" />
          </a>

          <div className="top-navbar">
            <div className="navbar-custom-menu">
              <div
                className="navbar-icon news"
                onClick={() => click_ttsk(true)}
              >
                {' '}
                TIN TỨC & SỰ KIỆN
                <hr className="white-line" id="hr_play3" />{' '}
              </div>

              <div
                className="navbar-icon user-info"
                onClick={() => click_user_info(true)}
              >
                {' '}
                THÔNG TIN KHÁCH HÀNG
                <hr className="white-line" id="hr_play1" />{' '}
              </div>

              <div
                className="navbar-icon user-schedule"
                onClick={() => click_schedule(true)}
              >
                {' '}
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
                  />{' '}
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
            <Link
              style={{ width: '50%' }}
              to="/user/home"
              onClick={() => {
                localStorage.clear();
              }}
            >
              <button className="btn-user">YES </button>
            </Link>
            <button className="btn-user" onClick={() => click_log_out_no(true)}>
              NO
            </button>
          </div>
        </div>
      </div>
      <div className="content-chinh-user">
        <div className="main-content1-user" id="main_content_play">
          <div className="content-header-user">
            <div className="title">
              <h2> Thông tin cá nhân của {userInfo.name} </h2>
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
                    src="https://wallpapercave.com/wp/wp9414303.jpg"
                    className="image-user"
                    style={{marginLeft:"30px"}}
                  />
                </div>

                <div className="box-user-infor">
                  <label>Họ và tên</label>
                  <input
                    type="text"
                    placeholder=""
                    value={userInfo.name}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.name = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />

                  <label>Giới tính:</label>
                  <select
                    type="text" placeholder="" value={userInfo.gender}
                    onChange=
                    {(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.gender = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                    ><option value="Male"> Nam</option>
                    <option value="Female"> Nữ</option>
                  </select>
                </div>
              </div>

              <div className="box-body-fix">
                <div className="user-name">
                  <label>Ngày sinh:</label>
                  <input
                    type="text"
                    placeholder="yy/mm/dd"
                    value={userInfo.birthDay}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.birthDay = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />
                </div>

                <div className="user-name">
                  <label>Số điện thoại:</label>
                  <input
                    type="text"
                    placeholder="Nhập số điện thoại của bạn"
                    value={userInfo.phone}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.phone = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />
                </div>
              </div>
              <div className="box-body-fix">
                <div className="user-name">
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

                <div className="user-name">
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
              </div>

              <div className="box-body-fix">
                <div className="user-name">
                  {' '}
                  Thành viên hạng: {userInfo.rank}
                </div>
                {/* <div className="user-name">
                        Thời gian đăng kí: {userInfo.start}
                      </div> */}

                <div className="user-name">
                  Hạn đăng kí: {userInfo.paymentDay}
                </div>
              </div>
              <div className="box-body-fix">
                <div className="user-name">Đánh giá: {userInfo.assessment}</div>
              </div>

              <div className="box-body-fix">
                <div className="user-name">
                  Đặt mục tiêu luyện tập:
                  <input
                    type="text"
                    placeholder="..."
                    value={userInfo.aim}
                    onChange={(e) => {
                      var newUserInfo = { ...userInfo };
                      newUserInfo.aim = e.target.value;
                      setUserInfo(newUserInfo);
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="change-infor-user">
              <button
                className="button-change"
                onClick={() => {
                  handleSubmit();
                }}
              >
                Cập nhật thông tin{' '}
              </button>
            </div>
          </div>
        </div>

        <div className="main-content-ttsk" id="content_ttsk_play">
          <NewFeedForUser />
        </div>

        <div className="main-content-schedule" id="content_schedule_play">
        <div className="content-header-user">
            <div className="title">
              <h2> Lịch tập của {userInfo.name} </h2>
            </div>

            <div className="explain-title">
              <p>Chúc bạn có khoảng thời gian tuyệt vời ở RubyGYM! </p>
            </div>
            <hr className="red-line" />
          </div>
          
          <div className="content-user">
            <div className = "box-user1">
          <UserSchedule />
          </div>
          
          </div>
          
          
        </div>
      </div>
      )
    </div>
  );
}