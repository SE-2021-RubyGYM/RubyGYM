import { useState } from "react";
import "./adminblogliststyle.css";
import "antd/dist/antd.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Table, Input, Search, Button } from "antd";

export default function AdminBlogList() {
  const { Search } = Input;

  const iconsShow = [
    "https://cdn-icons.flaticon.com/png/128/2767/premium/2767194.png?token=exp=1637688275~hmac=4335cc16c7685e973322366bc82fcb2f",
    "https://cdn-icons.flaticon.com/png/128/2767/premium/2767146.png?token=exp=1637688275~hmac=b9bf96fbbc6c8fb7c91ac32db7c174a3",
  ];
  const notificationIcon =
    "https://cdn-icons.flaticon.com/png/128/2058/premium/2058148.png?token=exp=1637689396~hmac=51948d2dde6315dd4268d966c60c7fc1";
  const [showNaviIcon, setShowNavigation] = useState(iconsShow[0]);
  const [adminInfo, setAdminInfo] = useState({
    picture:
      "https://cdn-icons.flaticon.com/png/128/3136/premium/3136101.png?token=exp=1637681714~hmac=a4353897d09277a372682bd1e90073d2",
    name: "Nguyen Van Dat",
  });

  const fgetBlogData = async () => {
    axios({
      method: "get",
      url: "http://localhost:5000/api/adv",
    }).then((res) => {
      if (res.status == 200) {
        setBlogListInfo(res.data.result);
      }
    });
  };

  useEffect(() => {
    fgetBlogData();
  }, []);

  const [blogListInfo, setBlogListInfo] = useState([
    {
      _id: 1234,
      title: "Hello world",
      creator: "Dat",
      __v: 10000,
    },
    {
      _id: 1234,
      title: "Hello world",
      creator: "Dat",
      __v: 10000,
    },
    {
      _id: 1234,
      title: "Hello world",
      creator: "Dat",
      __v: 10000,
    },
  ]);

  return (
    <div className="admin-blog-list">
      <div className="admin-blog-list-container">
        <div className="title">
          <div>Danh sách bài viết</div>
        </div>
        <div className="container">
          <div className="search-tools">
            <Search
              style={{ width: "30%" }}
              type="text"
              placeholder="Mã bài viết"
              enterButton
            ></Search>
            {/* <div className="blogcode">
              <div>Mã bài viết</div>
              <input type="text" placeholder="Mã bài viết" />
            </div>
            <div className="search-button">
              <button>Tìm kiếm</button>
            </div> */}
            <div style={{ float: "right", width: "190px" }}>
              <div className="addblog">
                <Link to="/admin/addblog">
                  <Button type="primary">Thêm bài viết</Button>
                </Link>
              </div>
              <div className="setting">
                <img
                  src="https://cdn-icons.flaticon.com/png/128/2040/premium/2040504.png?token=exp=1637698397~hmac=a27326feb11e6978bb38a61d1a6e80e9"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="blogList">
            <table>
              <tr>
                <th style={{ borderRadius: "10px 0px 0px 0px" }}>
                  Mã bài viết
                </th>
                <th>Tên bài viết</th>
                <th>Người đăng</th>
                <th>Lượt tương tác</th>
                <th>...</th>
              </tr>
              {blogListInfo.map((element, index) => {
                return (
                  <tr>
                    <td>{element._id}</td>
                    <td>{element.title}</td>
                    <td>{element.creator}</td>
                    <td>{element.__v}</td>
                    <td>
                      {/* <a
                        href={
                          "http://localhost:3000/admin/bloglist/" + element._id
                        }
                      >
                        Xem chi tiết
                      </a> */}
                      <Link to={"/admin/bloglist/" + element["_id"]}>
                        Xem chi tiết
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
