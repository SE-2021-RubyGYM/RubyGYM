import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import s from "./Sidebar.module.scss";
import LinksGroup from "./LinksGroup/LinksGroup.js";
import { changeActiveSidebarItem } from "../../actions/navigation.js";
import SofiaLogo from "../Icons/SofiaLogo.js";
import cn from "classnames";

const CoachSidebar = (props) => {
  const { activeItem = "", ...restProps } = props;

  const [burgerSidebarOpen, setBurgerSidebarOpen] = useState(false);

  useEffect(() => {
    if (props.sidebarOpened) {
      setBurgerSidebarOpen(true);
    } else {
      setTimeout(() => {
        setBurgerSidebarOpen(false);
      }, 0);
    }
  }, [props.sidebarOpened]);    

  return (
    <nav className={cn(s.root, { [s.sidebarOpen]: burgerSidebarOpen })}>
      <header className={s.logo}>
        {/* <SofiaLogo/> */}
        <span className={s.title}>Ruby GYM</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Dashboard"
          isHeader
          iconName={<i className={"eva eva-home-outline"} />}
          link="/coach/dashboard"
          index="dashboard"
          badge="9"
        />

        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Quản lý người tập"
          isHeader
          iconName={<i className={"eva eva-people-outline"} />}
          link="/coach/customers"
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            props.dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={props.activeItem}
          header="Lịch tập"
          isHeader
          iconName={<i className={"eva eva-calendar-outline"} />}
          link="/coach/schedule"
        />
      </ul>
    </nav>
  );
};

CoachSidebar.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  activeItem: PropTypes.string,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    activeItem: store.navigation.activeItem,
  };
}

export default withRouter(connect(mapStateToProps)(CoachSidebar));
