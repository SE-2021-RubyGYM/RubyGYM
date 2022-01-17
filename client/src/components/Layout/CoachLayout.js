// -- React and related libs
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import CoachHeader from "../Header/CoachHeader";
import CoachSchedule from "../../pages/Coach-schedule/CoachSchedule";
// import Sidebar from "../Sidebar/Sidebar";
import CoachSidebar from "../Sidebar/CoachSideBar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";
import Dashboard from "../../pages/dashboard/Dashboard";
import Typography from "../../pages/typography/Typography";
import Notifications from "../../pages/notifications/Notifications";
import CrmCare from "../../pages/crm-care/CrmCare";
import CrmGroup from "../../pages/crm-group/CrmGroup";
import Tables from "../../pages/tables/Tables";
import Charts from "../../pages/uielements/charts/Charts";
import Icons from "../../pages/uielements/icons/IconsPage";
import Maps from "../../pages/uielements/maps/google/GoogleMapPage";

// new file for Coach

import CoachDashboard from "../../pages/dashboard/CoachDashBoard";
// -- Component Styles
import s from "./Layout.module.scss";
import CoachCustomers from "../../pages/Coach-customer/CrmCustomer";
import Blog from "../../pages/blog/Blog";

import { useHistory } from "react-router";

const CoachLayout = (props) => {
 let history = useHistory();
 useEffect(() => {
 
   if (
     localStorage.getItem("accessToken") === null ||
     localStorage.getItem("coach") === null
   ) {
            history.push("/login");
   } 
 });
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <CoachHeader />
        <CoachSidebar />
        <main className={s.content}>
          {/* <Breadcrumbs url={props.location.pathname} /> */}
          <Switch>
            {/* <Route
              path='/crm'
              exact
              render={() => <Redirect to='template/dashboard' />}
            /> */}
            <Route path="/coach/dashboard" exact component={CoachDashboard} />
            <Route path="/coach/customers" exact component={CoachCustomers} />
            <Route path="/coach/schedule" exact component={CoachSchedule} />
            <Route path="*" exact render={() => <Redirect to="/error" />} />
            
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

CoachLayout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(CoachLayout));
