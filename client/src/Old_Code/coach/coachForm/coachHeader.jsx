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
export default function CoachHeader() {
  return (
    <>
      <Header className="header" style={{ paddingLeft: "0px" }}>
        <Search
          style={{ width: "30%", verticalAlign: "middle", marginLeft: "60%" }}
          placeholder="Tìm kiếm"
          onSearch={onSearch}
          enterButton
        />

        <BellOutlined
          style={{
            fontSize: "30px",
            verticalAlign: "middle",
            marginLeft: "2%",
          }}
        />

        <div class="user-image_in_header">
          <img src="https://dxclan.com:5000/upload/avatars/user.png"></img>
        </div>
        <div className="globe">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c4/Globe_icon.svg"
            alt=""
          />
        </div>
      </Header>
    </>
  );
}
