import React from "react";
import "./coachReview.css";
export default function CoachReview() {
  return (
    <div className="coach-review">
      <h2>Đánh giá quá trình luyện tập của học viên Nguyễn Văn A</h2>

      <div className="container">
        <form action="/action_page.php">
          <div className="row">
            <div className="col-25">
              <label for="score">Điểm</label>
            </div>

            <div className="col-75">
              <select id="score" name="score">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label for="subject">Nhận xét</label>
            </div>

            <div className="col-75">
              <textarea
                id="subject"
                name="subject"
                placeholder="Viết nhận xét"
                style={{ height: "200px" }}
              ></textarea>
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Gửi đánh giá" />
          </div>
        </form>
      </div>
    </div>
  );
}
