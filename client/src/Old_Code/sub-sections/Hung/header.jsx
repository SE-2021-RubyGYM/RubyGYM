import "./style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Header() {
  // define login for user
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("accessToken") !== null) {
      axios({
        method: "get",
        url: "http://localhost:5000/api/users/6190c6fbb62fa29cba2b1322/my_info",
        headers: {
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      })
        .then((res) => {
          if (res.status == 200) {
            setLoggedIn(true);
            console.log(res.data.result.name);
          }
        })
        .catch((err) => {
          console.log("failed author");
        });
    }
  }, []);
  const fLogin = async () => {
    if (!document.getElementsByClassName("checkhlv")[0].checked) {
      axios({
        method: "post",
        url: "http://localhost:5000/api/users/login",
        data: {
          username: userName,
          password: password,
        },
      })
        .then((res) => {
          if (res.status == 200) {
            localStorage.setItem("accessToken", res.data.result);
            window.open("http://localhost:3000/user/dashboard", "_self");
          }
        })
        .catch((err) => {
          alert("Tài khoản hoặc mật khẩu không chính xác!");
        });
    } else {
      
    }
  };

  // show login panel
  const [state, setState] = useState("none");

  const showLoginPanel = () => {
    setState((state) => {
      if (state == "none") {
        return "block";
      } else {
        return "none";
      }
    });
  };

  const closeLoginPanel = () => {
    setState((state) => {
      if (state == "block") {
        return "none";
      } else {
        return "block";
      }
    });
  };
  

  return (
    <div id="html">
      {/* Phần header  */}
      <div id="header">
        <div className="logo-page">
          <a href="/user/home">
            <img
              src="https://lh3.googleusercontent.com/d/1TR8uxHUpxSpM6NeGLU-Tz_2LswOLN2eH=s220?authuser=0"
              className="logo"
            />
          </a>
        </div>

        <div className="nav-menu">
          <a href="http://localhost:3000/user/blog">Tin tức & sự kiện</a>
        </div>

        {localStorage.getItem("accessToken") !== null ? (
          <div
            className="nav-menu-login"
            onClick={() => {
              localStorage.removeItem("accessToken");
            }}
          >
            <a href="/user/home">Đăng xuất</a>
          </div>
        ) : (
          <div
            className="nav-menu-login"
            onClick={() => {
              showLoginPanel();
            }}
          >
            <button>Đăng nhập</button>
          </div>
        )}
      </div>
      {/* Panel Login */}
      <div class="login-panel" style={{ display: state }}>
        <h2>Ruby Gym</h2>
        <br />
        <input
          type="text"
          placeholder="Enter user"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <div className="check">
          <label>
            <input className="checkhlv" type="checkbox" />
            Tôi là huấn luyện viên
          </label>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div> */}
        <br />
        <button className="submit-login" onClick={() => fLogin()}>
          Log in
        </button>
        
        <Link to ="/login">
          <button className="submit-login" >
            Huấn luyện viên/Admin
          </button>
        </Link>
        <button className="close-panel" onClick={closeLoginPanel}>
          Đóng
        </button>
        
      </div>
    </div>
  );
}
export default Header;
