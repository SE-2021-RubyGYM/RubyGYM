import { useState, useCallback } from "react";
import "./style.css";
import Button from "../Element/button";
import axios from "axios";
import { useParams } from "react-router";
const CoachComment = (props) => {
  const { id } = useParams();

  const [comment, setComment] = useState("");
  const handleOnCommentChange = useCallback((e) => {
    setComment(e.target.value);
  });

  const handleSubmit = useCallback(() => {
    if (comment == "") {
      alert("Bạn phải viết gì đó trước!");
    }
    alert(id);
    axios({
      method: "put",
      url: "http://localhost:5000/api/users/" + id + "/assess",
      data: comment,
    })
      .then((res, req) => {
        alert("Đã gửi nhận xét");
        console.log(req);
      })
      .catch((res) => {
        alert("Không thành công");
        console.log(res);
      });
  });
  return (
    <div className="coach-comment">
      <div
        style={{
          margin: "10px 0 10px 0px",
        }}
      >
        Nhận xét
      </div>
      <textarea
        className="coach-comment-textarea"
        id="w3review"
        name="w3review"
        rows="4"
        cols="100"
        value={comment}
        placeholder="comment"
        onChange={handleOnCommentChange}
      ></textarea>
      <br />
      <Button
        onClickedFunction={() => handleSubmit()}
        style={{
          backgroundColor: "rgb(59, 137, 255)",
          color: "rgb(246, 249, 255)",
          float: "right",
          margin: "10px 0 0 0",
        }}
      >
        Nhận xét
      </Button>
    </div>
  );
};

export default CoachComment;
