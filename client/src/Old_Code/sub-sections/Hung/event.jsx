import "./style.css";
import Header from "./header.jsx";
import Footer from "../tung/footer.jsx";

import axios from "axios";
import { useState, useEffect } from "react";
// import ReactHtmlParser from "react-html-parser";

import { useParams } from "react-router-dom";

function Event() {
  const [content, setContent] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:5000/api/adv/" + id,
    })
      .then((res) => {
        setContent(res.data.result.content);
      })
      .catch((e) => {
        setContent("Bài viết không tồn tại");
      });
  }, []);
  return (
    <div id="event-page">
      <Header />
      <div id="event">
        <div className="event-cover">
          <div className="event-content">
            <div className="event-header">
              <ul className="home-page">Trang chủ </ul>
              <ul className="arrow"> {">"} </ul>
              <ul className="event">Tin tức & sự kiện </ul>
              <ul className="arrow"> {">"} </ul>
            </div>
            <hr />
            <div className="event-logo">TIN TỨC & SỰ KIỆN</div>
            <div className="new-content" style={{ width: "100%" }}>
              <div dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Event;
