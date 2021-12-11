import "./adminForm.css";
import React from 'react';
import { useState } from 'react';
//import from antd
import { Layout, Menu } from 'antd/lib';
//import from FontAwesome
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faHome, faList,faBell , faUserFriends} from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import SubMenu from 'antd/lib/menu/SubMenu';

const { Sider} = Layout;

export default function AdminSideBar(){
return (
  <div className="sidebar" style={{ position: "absolute", top: "0px" }}>
    <Layout>
      <Sider>
        <div className="logo">
          <img
            src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
            alt=""
          />
        </div>

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
            <a href="dashboard"> Trang chủ </a>
          </Menu.Item>
          <SubMenu
            key="user-manager"
            icon={<FontAwesomeIcon icon={faUserFriends} />}
            title="Quản lý người dùng "
          >
            <Menu.Item key="user-list" style={{ paddingLeft: "24px" }}>
              <a href="registeraccforuser">
                <FontAwesomeIcon icon={faList} /> Danh sách người dùng{" "}
              </a>
            </Menu.Item>
            <Menu.Item key="adduser" style={{ paddingLeft: "24px" }}>
              <a href="adduser">
                <FontAwesomeIcon icon={faList} /> Thêm người dùng{" "}
              </a>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="blog-manager"
            icon={<FontAwesomeIcon icon={faNewspaper} />}
            title="Quản lý bài viết "
          >
            <Menu.Item key="blog-list" style={{ paddingLeft: "24px" }}>
              <a href="bloglist">
                {" "}
                <FontAwesomeIcon icon={faList} /> Danh sách bài viết{" "}
              </a>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="sign-out">
            <FontAwesomeIcon icon={faSignOutAlt} /> Đăng xuất
          </Menu.Item>
        </Menu>
      </Sider>
    </Layout>
  </div>
);
}