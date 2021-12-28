import "./adminForm.css";
import React from "react";
import { useState } from "react";
//import from antd
import { Layout, Menu } from "antd/lib";
import { UserAddOutlined } from "@ant-design/icons/lib/icons";
//import from FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faList,
  faBell,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function CoachSideBar() {
  return (
    <div className="sidebar" style={{ position: "absolute", top: "0px" }}>
      <Layout>
        <Sider
          display={"block"}
          width={"210px"}
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
          }}
        >
          {/* <div className="logo">
            <img
              src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
              alt=""
            />
          </div> */}

          <div className="userPanel">
            <div class="user-image">
              <img
                src="https://dxclan.com:5000/upload/avatars/user.png"
                class="user-image"
              />
            </div>
            <div class="user-info">
              <p class="user-name"> Nguyễn Văn Đạt </p>
              <p class="user-online"> Online</p>
              <p class="user-noti">
                <FontAwesomeIcon icon={faBell} />
                Thông báo
              </p>
            </div>
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["home"]}>
            <Menu.Item key="home" icon={<FontAwesomeIcon icon={faHome} />}>
              <Link to="/coach/dashboard"> Trang chủ </Link>
            </Menu.Item>
            <SubMenu
              key="user-manager"
              icon={<FontAwesomeIcon icon={faUserFriends} />}
              title="Quản lý người tập "
            >
              <Menu.Item key="user-list" style={{ paddingLeft: "24px" }}>
                {/* <Link to="/admin/registeraccforuser"> */}
                <FontAwesomeIcon icon={faList} /> Danh sách người tập
                {/* </Link> */}
              </Menu.Item>
              <Menu.Item key="adduser" style={{ paddingLeft: "24px" }}>
                <Link to="/coach/calendar">
                  <UserAddOutlined /> Lịch tập
                </Link>
              </Menu.Item>
            </SubMenu>
            {/*   */}

            <Menu.Item key="sign-out">
              <Link to="/admin/home">
                <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}
