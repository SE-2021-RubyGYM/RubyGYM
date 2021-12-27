import "./adminForm.css";
import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { BellOutlined } from "@ant-design/icons/lib/icons";
//import from antd
import { Layout, Input } from "antd/lib";

const { Header } = Layout;
const { Search } = Input;
const onSearch = (value) => console.log(value);
export default function AdminHeader() {
  return (
    <>
      <Header className="header">
        <img
          className="logo"
          src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
          alt=""
        />

        <Search
          style={{ width: "30%", verticalAlign: "middle", marginLeft: "40%" }}
          placeholder="Tìm kiếm"
          onSearch={onSearch}
          enterButton
        />

        <BellOutlined
          style={{
            fontSize: "30px",
            verticalAlign: "middle",
            marginLeft: "1%",
          }}
        />

        <div class="user-image_in_header">
          <img src="https://dxclan.com:5000/upload/avatars/user.png"></img>
        </div>
        <div className="globe">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg"
            alt=""
          />
        </div>
      </Header>
    </>
  );
}
