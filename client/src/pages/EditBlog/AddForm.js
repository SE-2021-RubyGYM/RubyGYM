import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { customers } from "./data/customer";
import { data } from "./data/customer";
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
  const [gender, setGender] = useState("Nam");
  const [paymentDay, setPaymentDay] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthDay] = useState(new Date());
  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>Thêm khách hàng</Modal.Title>
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
                type="text"
                id="fname"
                name="firstname"
                placeholder="Ví dụ: 123456"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label for="fname">Tên khách hàng</label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tên khách"
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
              <label for="fname">Ngày gia hạn</label>
              <DatePicker
                selected={paymentDay}
                onChange={(date) => setPaymentDay(date)}
              />
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
            var mes = "Thêm thành công";
            if (name == "") {
              mes = "Tên không được bỏ trống.";
            }
            var success;
            if (mes != "Thêm thành công") {
              mes = "Thêm thất bại" + mes;
            } else {
              success = await props.submitForm({
                username: userName,
                password: password,
                name: name,
                gender: gender,
                paymentDay: paymentDay,
                phone: phoneNumber,
                birthDay: birthday,
              });
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
