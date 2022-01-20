import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import "./style.css";

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";
import "font-awesome/css/font-awesome.min.css";
import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";
import moreIcon from "../../assets/tables/moreIcon.svg";
import Notification, {
  Notification2,
} from "../../components/Notification/Notification.js";
import { Slide, toast } from "react-toastify";
import classNames from "classnames";
import SelectCrm from "../CRM-customer/components/SelectCrm.js";

import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Rate } from "antd";
import "antd/dist/antd.css";
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Tabs, Radio } from "antd";
const { TabPane } = Tabs;

class OverlayVisible extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    visible: false,
  };

  handleMenuClick = (e) => {
    if (e.key === "3") {
      this.setState({ visible: false });
    }
  };

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  };

  render() {
    let self = this;
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        {self.props.data.map((row) => (
          <Menu.Item key="1">
            <i
              className="fa fa fa-circle-o"
              style={{ marginRight: "10px" }}
            ></i>
            {row}
          </Menu.Item>
        ))}
      </Menu>
    );
    return (
      <Dropdown
        arrow={true}
        overlay={menu}
        onVisibleChange={this.handleVisibleChange}
        visible={this.state.visible}
      >
        <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
          {this.props.title} <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}

let tabData = {
  "Khách hàng": [
    {
      title: "1. Khách chưa quá hạn",
      data: [
        "Người tạo: Vũ Văn Quân",
        "Mô tả: Khách hàng mới sử dụng dịch vụ",
        "Ngày tạo: 01-12-2021",
      ],
    },
    {
      title: "2. Khách hàng quá hạn",
      data: [
        "Người tạo: Hoàng Trọng Minh",
        "Mô tả: Khách hàng chỉ xem về dịch vụ",
        "Ngày tạo: 01-12-2021",
      ],
    },
  ],
};

class ContentTab extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let crudButton = (
      <span style={{ textAlign: "right", float: "right", marginRight: "50px" }}>
        <a>
          <i class="fa fa-edit" style={{ marginRight: "10px" }}></i>
        </a>
        <a>
          <i class="fa fa-trash" style={{ marginRight: "10px" }}></i>
        </a>
      </span>
    );
    return (
      <div>
        <h3>{this.props.tabTitle}</h3>
        <button
          style={{ float: "right", marginRight: "30px" }}
          color="primary"
          className={classNames("button_add")}
        >
          Gia hạn
        </button>
        <br></br>
        <br></br>
        <div style={{ fontSize: "20px" }}>
          {this.props.data.map((row) => (
            <div style={{ marginTop: "7px" }}>
              <OverlayVisible
                title={row.title}
                data={row.data}
              ></OverlayVisible>
              {crudButton}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

class SlidingTabsDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "left",
    };
  }

  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{
            height: 500,
          }}
        >
          {Object.keys(tabData).map((tabName) => (
            <TabPane tab={tabName} key={tabName}>
              <ContentTab
                data={tabData[tabName]}
                tabTitle={"Thanh toán " + tabName}
              />
            </TabPane>
          ))}
        </Tabs>
      </div>
    );
  }
}

const CrmMoney = function () {
  return (
    <div>
      <Row>
        <Col>
          <Row className="header__container">
            <div className="headline-1">Quản lý thanh toán</div>
            <div></div>
          </Row>
          {/* Filter */}
          <Row className="filter__root">
            <SlidingTabsDemo />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CrmMoney;
