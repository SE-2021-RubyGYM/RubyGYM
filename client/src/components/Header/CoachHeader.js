import React, { useState } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";

import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
  InputGroupAddon,
  InputGroup,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Form,
  FormGroup,
} from "reactstrap";

import { logoutUser } from "../../actions/auth";
import { closeSidebar, openSidebar } from "../../actions/navigation";
import MenuIcon from "../Icons/HeaderIcons/MenuIcon";
import SearchBarIcon from "../Icons/HeaderIcons/SearchBarIcon";
import SearchIcon from "../Icons/HeaderIcons/SearchIcon";

import ProfileIcon from "../../assets/navbarMenus/pfofileIcons/ProfileIcon";
import MessagesIcon from "../../assets/navbarMenus/pfofileIcons/MessagesIcon";
import TasksIcon from "../../assets/navbarMenus/pfofileIcons/TasksIcon";

import logoutIcon from "../../assets/navbarMenus/pfofileIcons/logoutOutlined.svg";
import basketIcon from "../../assets/navbarMenus/basketIcon.svg";
import calendarIcon from "../../assets/navbarMenus/calendarIcon.svg";
import envelopeIcon from "../../assets/navbarMenus/envelopeIcon.svg";
import mariaImage from "../../assets/navbarMenus/mariaImage.jpg";
import notificationImage from "../../assets/navbarMenus/notificationImage.jpg";
import userImg from "../../assets/user.svg";

import s from "./Header.module.scss";
import "animate.css";
import { useEffect } from "react";
import { BackEndBaseURL } from "../../app/backend";
import axios from "axios"


import { useHistory } from "react-router";

const CoachHeader = (props) => {
  let history = useHistory();
  const [coachInfo, setCoachInfo] = useState({
  _id: "Đang tải",
  name: "Coach",
  username: "Đang tải",
  phone: "Đang tải",
  password:
    "Đang tải",
  birthDay: "Đang tải",
  gender: "Đang tải",
  coach: "Đang tải",
  referralCode: "Đang tải",
  assessment: "Trống",
  height: "Đang tải",
  weight: "Đang tải",
  paymentDay: "Đang tải",
  aim: "Trống",
  
  __v: 0,
});
useEffect(() => {
axios({
  method:"GET",
  url:BackEndBaseURL+"/api/coachs/auth" ,
  headers: {
    authorization: "Bearer " + localStorage.getItem("accessToken"),
  },
}).then(res=>{
  if(res.status==200||res.status==true){
    console.log("thanh cong");
    setCoachInfo(res.data.result);       
  }
})


}, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  const toggleNotifications = () => {
    setNotificationsOpen(!notificationsOpen);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleSidebar = () => {
    if (props.sidebarOpened) {
      props.dispatch(closeSidebar());
    } else {
      const paths = props.location.pathname.split("/");
      paths.pop();
      props.dispatch(openSidebar());
    }
  };

  const doLogout = () => {
    props.dispatch(logoutUser());
  };

  return (
    <Navbar className={`${s.root} d-print-none`}>
      <div>
        <NavLink
          onClick={() => toggleSidebar()}
          className={`d-md-none mr-3 ${s.navItem}`}
          href="#"
        >
          <MenuIcon className={s.menuIcon} />
        </NavLink>
      </div>
     
      <Nav className="ml-auto">
        <NavItem className="d-sm-none mr-4">
          <NavLink className="" href="#">
            <SearchIcon />
          </NavLink>
        </NavItem>
        <Dropdown
          nav
          isOpen={menuOpen}
          toggle={() => toggleMenu()}
          className="tutorial-dropdown mr-2 mr-sm-3"
        >
          <DropdownToggle nav>
            <div className={s.navbarBlock}>
              <i className={"eva eva-bell-outline"} />
              
            </div>
          </DropdownToggle>
         
        </Dropdown>
        <Dropdown
          isOpen={notificationsOpen}
          toggle={() => toggleNotifications()}
          nav
          id="basic-nav-dropdown"
          className="ml-3"
        >
          <DropdownToggle nav caret className="navbar-dropdown-toggle">
            <span className={`${s.avatar} rounded-circle float-left mr-2`}>
              <img src={coachInfo.image} alt="User" />
            </span>
            <span className="small d-none d-sm-block ml-1 mr-2 body-1">
              {coachInfo.name}
            </span>
          </DropdownToggle>
          <DropdownMenu
            className="navbar-dropdown profile-dropdown"
            style={{ width: "194px" }}
          >
            
            <NavItem >
              <button style={{marginTop:"0px"}}
                className="btn btn-primary rounded-pill mx-auto logout-btn"
                type="submit"
                onClick={() => {
                  localStorage.clear();
                history.push("/login");
              }}
              >
                <img src={logoutIcon} alt="Logout" />
                <span className="ml-1">Logout</span>
              </button>
            </NavItem>
          </DropdownMenu>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

CoachHeader.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sidebarOpened: PropTypes.bool,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    sidebarStatic: store.navigation.sidebarStatic,
  };
}

export default withRouter(connect(mapStateToProps)(CoachHeader));
