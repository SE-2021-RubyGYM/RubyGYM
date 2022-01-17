import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { withRouter, Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Container,
  Row,
  Col,
  Button,
  FormGroup,
  FormText,
  Input,
} from "reactstrap";
import Widget from "../../components/Widget/Widget";
import Footer from "../../components/Footer/Footer";
import { loginUser } from "../../actions/auth";
import hasToken from "../../services/authService";

import loginImage from "../../assets/loginImage.svg";
import SofiaLogo from "../../components/Icons/SofiaLogo.js";
import GoogleIcon from "../../components/Icons/AuthIcons/GoogleIcon.js";
import TwitterIcon from "../../components/Icons/AuthIcons/TwitterIcon.js";
import FacebookIcon from "../../components/Icons/AuthIcons/FacebookIcon.js";
import GithubIcon from "../../components/Icons/AuthIcons/GithubIcon.js";
import LinkedinIcon from "../../components/Icons/AuthIcons/LinkedinIcon.js";
import { useHistory } from "react-router";
//
import { CoachLoginApi, AdminLoginApi } from "./api/api";
import { toast } from "react-toastify";
import { Notification2 } from "../../components/Notification/Notification";
import axios from "axios";
import { BackEndBaseURL } from "../../app/backend";
const Login = (props) => {
  
  let history = useHistory();

  const [state, setState] = useState({
    email: "admin@rubygym.com",
    password: "password",
  });

  const doLogin = (e) => {
    e.preventDefault();
    // props.dispatch(loginUser({ password: state.password, email: state.email }));
  };

  const changeCreds = (event) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };
  const [isHlv, setIsHlv] = useState("false");


  useEffect(() => {
    if (localStorage.getItem("accessToken") !==null) {
      if(localStorage.getItem("admin")!==null){
        history.push("/admin/dashboard");
      }
      if(localStorage.getItem("coach")!==null){
        history.push("/coach/dashboard");
      }
    }
  }, []);


  return (
    <div className="auth-page">
      <Container className="col-12">
        <Row className="d-flex align-items-center">
          <Col
            xs={12}
            lg={12}
            className="left-column"
            style={{ marginTop: "10vh" }}
          >
            <Widget className="widget-auth widget-p-lg">
              <div className="d-flex align-items-center justify-content-between py-3">
                <p className="auth-header mb-0">Login</p>
                <div className="logo-block">
                  <SofiaLogo />
                  <p className="mb-0">RUBYGYM</p>
                </div>
              </div>
              <div className="auth-info my-2">
                <p>This is a real app create by ruby team</p>
              </div>
              <form onSubmit={(event) => doLogin(event)}>
                <FormGroup className="my-3">
                  <FormText>Email</FormText>
                  <Input
                    id="email"
                    className="input-transparent pl-3"
                    value={state.email}
                    onChange={(event) => changeCreds(event)}
                    type="text    "
                    required
                    name="email"
                    placeholder="Email"
                  />
                </FormGroup>
                <FormGroup className="my-3">
                  <div className="d-flex justify-content-between">
                    <FormText>Password</FormText>
                    <Link to="/error">Forgot password?</Link>
                  </div>
                  <Input
                    id="password"
                    className="input-transparent pl-3"
                    value={state.password}
                    onChange={(event) => changeCreds(event)}
                    type="password"
                    required
                    name="password"
                    placeholder="Password"
                  />
                </FormGroup>
                <div className="bg-widget d-flex justify-content-left">
                  <input
                    type="checkbox"
                    value={isHlv}
                    onChange={(e) => {
                      if (e.target.value == "true") {
                        setIsHlv("false");
                      } else {
                        setIsHlv("true");
                      }
                    }}
                  />
                  <label for="vehicle1"> Là Huấn luyện viên</label>
                </div>
                <div className="bg-widget d-flex justify-content-center">
                  <Button
                    className="rounded-pill my-3"
                    type="submit"
                    color="secondary-red"
                    onClick={async () => {
                      if (isHlv == "true") {
                        var info = {
                          username: state.email,
                          password: state.password,
                        };
                        var result = await CoachLoginApi(info);
                        if (result == true) {
                          localStorage.setItem("coach","00");
                          history.push("/coach/dashboard");
                          // window.open(
                          //   "http://localhost:3000/coach/dashboard",
                          //   "_self"
                          // );
                        } else {
                          const notificationTypes = ["success", "error"];
                          var mes = "Sai thông tin đăng nhập";
                          let notificationName = result ? "success" : "error";
                          let msg = { success: mes, error: mes };
                          toast(
                            <Notification2
                              type={notificationName}
                              withIcon
                              msg={msg[notificationName]}
                            />,
                            {
                              autoClose: 4000,
                              closeButton: false,
                              hideProgressBar: true,
                            }
                          );
                        }
                      } else {
                        var info = {
                          username: state.email,
                          password: state.password,
                        };
                        var result = await AdminLoginApi(info);
                        if (result == true) {
                          localStorage.setItem("admin", "00");
                          history.push("/admin/dashboard");
                        } else {
                          const notificationTypes = ["success", "error"];
                          var mes = "Sai thông tin đăng nhập";
                          let notificationName = result ? "success" : "error";
                          let msg = { success: mes, error: mes };
                          toast(
                            <Notification2
                              type={notificationName}
                              withIcon
                              msg={msg[notificationName]}
                            />,
                            {
                              autoClose: 4000,
                              closeButton: false,
                              hideProgressBar: true,
                            }
                          );
                        }
                      }
                    }}
                  >
                    Login
                  </Button>
                  <br></br>
                </div>
                <p className="dividing-line my-3">&#8195;Or&#8195;</p>
                <div className="d-flex align-items-center my-3">
                  <p className="social-label mb-0">Login with</p>
                  <div className="socials">
                    <a href="https://www.google.com.vn/?hl=vi">
                      <GoogleIcon />
                    </a>
                    <a href="https://github.com/SE-2021-RubyGYM/RubyGYM/tree/main">
                      <GithubIcon />
                    </a>
                  </div>
                </div>
                <Link to="/register">Don’t have an account? Sign Up here</Link>
              </form>
            </Widget>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    isFetching: state.auth.isFetching,
    isAuthenticated: state.auth.isAuthenticated,
    errorMessage: state.auth.errorMessage,
  };
}

export default withRouter(connect(mapStateToProps)(Login));
