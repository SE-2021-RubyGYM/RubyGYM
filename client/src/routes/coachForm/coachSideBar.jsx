import "./adminForm.css";
import React from "react";
import { useState } from "react";
//import from antd
import { Layout, Menu } from "antd/lib";
import { UserAddOutlined, CalendarOutlined } from "@ant-design/icons/lib/icons";
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

export default function AdminSideBar() {
  return (
    <div
      className="sidebar"
      style={{
        top: "0px",
        height: "100%",
        width: "210px",
        display: "block",
      }}
    >
      <Layout>
        <Sider
          width={"210px"}
          style={{
            position: "absolute",
            top: "0px",
            height: "100%",
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
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[""]}>
            <Menu.Item key="home" icon={<FontAwesomeIcon icon={faHome} />}>
              <Link to="/coach/dashboard"> Trang chủ </Link>
            </Menu.Item>
            <SubMenu
              key="user-manager"
              icon={<FontAwesomeIcon icon={faUserFriends} />}
              title="Quản lý người tập "
            >
              <Menu.Item key="user-list" style={{ paddingLeft: "24px" }}>
                <Link to="/coach/userlist">
                  <FontAwesomeIcon icon={faList} /> Danh sách người tập{" "}
                </Link>
              </Menu.Item>
              <Menu.Item key="adduser" style={{ paddingLeft: "24px" }}>
                <Link to="/coach/schedule">
                  <CalendarOutlined /> Lịch tập{" "}
                </Link>
              </Menu.Item>
            </SubMenu>
            {/* <SubMenu
              key="blog-manager"
              icon={<FontAwesomeIcon icon={faNewspaper} />}
              title="Quản lý bài viết "
            >
              <Menu.Item key="blog-list" style={{ paddingLeft: "24px" }}>
                <Link to="/admin/bloglist">
                  <FontAwesomeIcon icon={faList} /> Danh sách bài viết
                </Link>
              </Menu.Item>
              <Menu.Item key="addblog" style={{ paddingLeft: "24px" }}>
                <Link to="/admin/addblog">
                  <FontAwesomeIcon icon={faFileUpload} /> Thêm bài viết
                </Link>
              </Menu.Item>
            </SubMenu> */}

            <Menu.Item key="sign-out">
              <Link to="/user/home">
                <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}
