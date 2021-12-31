import { useState, useCallback } from "react";
import "./CoachComment.css";
import Button from "../Element/button";
const CoachComment = (props) => {
  const [comment, setComment] = useState("");
  const handleOnCommentChange = useCallback((e) => {
    setComment(e.target.value);
  });

  const handleSubmit = useCallback(() => {
    if (comment == "") {
      alert("Bạn phải viết gì đó trước!");
    }

    //handlee api
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
