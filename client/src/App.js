// -- React and related libs
import React from "react";
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

// -- Redux Actions
import { logoutUser } from "./actions/auth";

// -- Third Party Libs
import { ToastContainer } from "react-toastify";

// -- Services
import isAuthenticated from "./services/authService";

// -- Component Styles
import "./styles/app.scss";

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
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/admin/dashboard" />}
          />
          <Route
            path="/template"
            exact
            render={() => <Redirect to="/template/dashboard" />}
          />
          <PrivateRoute
            path="/template"
            dispatch={props.dispatch}
            component={LayoutComponent}
          />
          <PrivateRoute
            path="/admin"
            dispatch={props.dispatch}
            component={CrmLayoutComponent}
          />
          <Route path="/login" exact component={Login} />
          <Route path="/error" exact component={ErrorPage} />
          <Route path="/register" exact component={Register} />
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
