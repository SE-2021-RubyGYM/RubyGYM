import React, { useState, useEffect } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { customers } from "./data/customer";
import { data } from "./data/customer";
import axios from "axios";
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
import { getCoachList } from "./api/api";
import "./components/addformstyle.css";
import { getCustomerList, updateUserById } from "./api/api";
function AddForm(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Nam");
  const [paymentDay, setPaymentDay] = useState(new Date());
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthDay] = useState(new Date());
  const [coach, setCoach] = useState("");
  const [coachList, setCoachList] = useState([]);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  useEffect(async () => {
    var data = await getCoachList();
    if (data != null) {
      setCoachList(data);
      if (data.length > 0) {
        setCoach(data[0].name);
      }
    }
  }, []);

  const [invitedBy, setInvitedBy] = useState("");
  const handleGiveAway = async () => {
    if (invitedBy == "") {
      return "Thành công";
    }
    var found = -1;

    var result = await getCustomerList();
    if (result == null) {
      return "Lỗi hệ thống";
    }

    for (var i = 0; i < result.length; i++) {
      if (result[i].referralCode == invitedBy) {
        found = i;
        break;
      }
    }

    if (found == -1) {
      return "Không tìm thấy mã giới thiệu";
    }

    var newUpdatePaymentday = { ...result[found] };
    newUpdatePaymentday.paymentDay = new Date(newUpdatePaymentday.paymentDay);

    newUpdatePaymentday.paymentDay = new Date(
      (newUpdatePaymentday.paymentDay.getTime() / 1000 + 60 * 60 * 24 * 30) *
        1000
    );

    var updateSuccess = await updateUserById(
      result[i]._id,
      newUpdatePaymentday
    );

    if (updateSuccess == 1) {
      return "Thành công";
    } else {
      return "Lỗi hệ thống";
    }
  };

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
                type="password"
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
              <label for="fname">Huấn luyện viên</label>
              <select
                type="text"
                id="fname"
                name="firstname"
                value={coach}
                onChange={(e) => {
                  setCoach(e.target.value);
                }}
              >
                {coachList.map((element) => {
                  return <option value={element.name}>{element.name}</option>;
                })}
                {/* <option value={"Male"}>Nam</option>
                <option value={"Female"}>Nữ</option> */}
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
              <label for="lname">Chiều cao(cm)</label>
              <input
                type="text"
                placeholder=""
                value={height}
                onChange={(e) => {
                  setHeight(e.target.value);
                }}
              />
              <label for="lname">Cân nặng(kg)</label>
              <input
                type="text"
                placeholder=""
                value={weight}
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
              />
              <div>Thông tin khác</div>
              <label for="lname">Mã giới thiệu</label>
              <input
                type="text"
                placeholder=""
                value={invitedBy}
                onChange={(e) => {
                  setInvitedBy(e.target.value);
                }}
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
            var mes = "";
            if (name == "") {
              mes += " Tên không được bỏ trống.";
            }
            if (userName.length < 4) {
              mes += " Tài khoản phải có ít nhất 4 ký tự.";
            }
            if (password.length < 4) {
              mes += " Mật khẩu phải có ít nhất 4 ký tự";
            }

            var success;
            if (mes != "") {
              mes = "Thêm thất bại" + mes;
              const notificationTypes = ["success", "error"];

              let notificationName = "error";
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

              return;
            } else {
              var id = "";
              for (var i = 0; i < coachList.length; i++) {
                if (coachList.name == coach) {
                  id = coachList._id;
                  break;
                }
              }
              success = await handleGiveAway();
              if (success != "Thành công") {
                success = false;
              } else {
                success = await props.submitForm({
                  username: userName,
                  password: password,
                  name: name,
                  gender: gender,
                  paymentDay: paymentDay,
                  phone: phoneNumber,
                  birthDay: birthday,
                  aim: "",
                  coach: id,
                  assessment: "",
                  height: height,
                  weight: weight,
                });
              }
            }
            if (success != true) {
              mes = "Thêm thất bại lỗi hệ thống";
            } else {
              mes = "Thêm thành công" + name;
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
          Thêm
        </Button>
      </Modal.Footer>
    </>
  );
}

export default AddForm;
