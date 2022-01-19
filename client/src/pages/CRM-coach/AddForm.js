import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { coachs } from "./data/coach";
import { data } from "./data/coach";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  ButtonDropdown,
  Dropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Label,
  Badge,
} from "reactstrap";
function AddForm(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [paymentDay, setPaymentDay] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [major, setMajor] = useState("Yoga");
  const [birthday, setBirthDay] = useState(new Date());
  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Thêm HLV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <form action="action_page.php">
              <label for="fname">Tài khoản</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ví dụ: abc@got.com"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <label for="fname">Mật khẩu</label>
              <input
                type="password"
                id="fname"
                name="firstname"
                placeholder="Ví dụ: 123456"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label for="fname">Tên HLV</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tên HLV"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label for="fname">Giới tính</label>
              <select
                type="text"
                id="fname"
                name="firstname"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              >
                <option value={"Male"}>Nam</option>
                <option value={"Female"}>Nữ</option>
              </select>
              {/* <label for="fname">Ngày gia hạn</label>
              <DatePicker
                selected={paymentDay}
                onChange={(date) => setPaymentDay(date)}
              /> */}
              <label for="lname">Số điện thoại</label>
              <input
                type="text"
                placeholder=""
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                }}
              />
              <label for="fname">Ngày sinh</label>
              <DatePicker
                selected={birthday}
                onChange={(date) => setBirthDay(date)}
              />
              <label for="lname">Major</label>
              
              <select
                type="text"
                value={major}
                onChange={(e) => {
                  setMajor(e.target.value);
                }}
              >
                <option value={"LesMills"}>LesMills</option>
                <option value={"Yoga"}>Yoga</option>
                <option value={"Dance"}>Dance</option>
                <option value={"Huấn luyện cá nhân"}>Huấn luyện cá nhân</option>
                <option value={"Kickfit/MMA"}>Kickfit/MMA</option>
                <option value={"Group Fitness"}>Group Fitness</option>
                {/* enum: [
      "LesMills",
      "Yoga",
      "Dance",
      "Huấn luyện cá nhân",
      "Kickfit/MMA",
      "Group Fitness",
    ], */}
              </select>
            </form>
          </div>
        </Modal.Body>
      </div>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            props.handleClose();
          }}
        >
          Đóng
        </Button>
        <Button
          variant="primary"
          onClick={async () => {
            var mes = "";
            if (name == "") {
              mes = +" Tên không được bỏ trống.";
            }
            if (userName == "") {
              mes = +" Tên tài khoản không được bỏ trống.";
            }
            if (password == "") {
              mes = +" Mật khẩu không được bỏ trống.";
            }
            var success = true;
            if (mes != "") {
            } else {
              success = await props.submitForm({
                username: userName,
                password: password,
                name: name,
                gender: gender,
                phone: phoneNumber,
                birthDay: birthday,
                major: major,
              });
            }
            if (success != true) {
              mes = "Thêm thất bại lỗi hệ thống";
            } else {
              if (mes != "") {
                mes = "Thêm thất bại " + mes;
              } else {
                mes = "Thêm thành công huấn luyện viên " + name;
              }
            }
            const notificationTypes = ["success", "error"];

            let notificationName = success ? "success" : "error";
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
            if (notificationName == "success") props.handleClose();
          }}
        >
          Lưu
          
        </Button>
      </Modal.Footer>
    </>
  );
}

export default AddForm;
