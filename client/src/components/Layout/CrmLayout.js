// -- React and related libs
import React,{useEffect} from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

// -- Third Party Libs
import PropTypes from "prop-types";

// -- Custom Components
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
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

// -- Component Styles
import s from "./Layout.module.scss";
import CrmCustomers from "../../pages/CRM-customer/CrmCustomer";
import CrmCoachs from "../../pages/CRM-coach/CrmCoach";
import Blog from "../../pages/blog/Blog";
import AddBlog from "../../pages/AddBlog/Blog";
import EditBlog from "../../pages/EditBlog/Blog";
import { useHistory } from "react-router";
const CrmLayout = (props) => {
  let history=useHistory();
  useEffect(()=>{
     if (
       localStorage.getItem("accessToken") === null ||
       localStorage.getItem("admin") === null
     ) {
       history.push("/login");
     } 
  })
   
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          {/* <Breadcrumbs url={props.location.pathname} /> */}
          <Switch>
            {/* <Route
              path='/crm'
              exact
              render={() => <Redirect to='template/dashboard' />}
            /> */}
            <Route path="/admin/dashboard" exact component={Dashboard} />
            <Route path="/admin/customers" exact component={CrmCustomers} />
            <Route path="/admin/coachs" exact component={CrmCoachs} />
            <Route path="/admin/blogs" exact component={Blog} />
            <Route path="/admin/blogs/addblog" exact component={AddBlog} />
            <Route path="/admin/blogs/:id" exact component={EditBlog} />

            <Route path="*" exact render={() => <Redirect to="/error" />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
};

CrmLayout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
  };
}

export default withRouter(connect(mapStateToProps)(CrmLayout));
