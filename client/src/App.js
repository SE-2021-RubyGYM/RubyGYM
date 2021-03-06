// -- React and related libs
import React,{useEffect} from "react";
import { Switch, Route, Redirect } from "react-router";
import { BrowserRouter } from "react-router-dom";

// -- Redux
import { connect } from "react-redux";

// -- Custom Components
import LayoutComponent from "./components/Layout/Layout";
import CrmLayoutComponent from "./components/Layout/CrmLayout";
import ErrorPage from "./pages/error/ErrorPage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

// new file for coach
import CoachLayoutComponent from "./components/Layout/CoachLayout";

// -- Redux Actions
import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";
// User

import UserPage from "./Old_Code/user/userPages/userPage";
import NewFeeds from "./Old_Code/user/userPages/newFeeds";
import UserBlogDetail from "./Old_Code/user/userPages/userBlogDetail";
import UserBlogDetailForUser from "./Old_Code/user/userPages/userBlogDetailForUser";
import axios from 'axios';
import UserDashBoard from "./Old_Code/user/userForm/UserDashBoard";
import UserProfile from "./Old_Code/user/userPages/userProfile";
const PrivateRoute = ({ dispatch, component, ...rest }) => {
  if (!isAuthenticated(JSON.parse(localStorage.getItem("authenticated")))) {
    dispatch(logoutUser());
    return <Redirect to="/login" />;
  } else {
    return (
      <Route
        {...rest}
        render={(props) => React.createElement(component, props)}
      />
    );
  }
};

const App = (props) => {

  useEffect(() => {
      if (localStorage.getItem("accessToken") !== null) {
        axios.defaults.headers={
          authorization:"Bearer " + localStorage.getItem("accessToken"),
        }
      }
  }, [])




  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/user/home" />} />
          <Route
            path="/admin"
            dispatch={props.dispatch}
            component={CrmLayoutComponent}
          />
          <Route
            path="/coach"
            dispatch={props.dispatch}
            component={CoachLayoutComponent}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/register" exact component={Register} />
          <Route path="/user/home" exact component={UserPage} />
          <Route path="/user/blog" exact component={NewFeeds} />
          <Route path="/user/blog/:id" exact component={UserBlogDetail} />
          <Route path="/user/blogforuser/:id" exact component={UserBlogDetailForUser} />
          <Route path="/user/dashboard" exact component={UserDashBoard} />
          
          <Route path="/user" exact render={() => <Redirect to="/user/home" />} />
          <Route component={ErrorPage} />
          <Route
            path="*"
            exact={true}
            render={() => <Redirect to="/error" />}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
