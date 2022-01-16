import React, { useState } from "react";
import "./AddForm.module.css";
import { Button, Modal } from "react-bootstrap";
import { element } from "prop-types";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";

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
function EditForm(props) {
  const [name, setName] = useState(props.info.name);
  const [type, setType] = useState(props.info.type);
  const [typeList, setTypeList] = useState(["Cá nhân", "Doanh nghiệp"]);
  const [manager, setManager] = useState(props.info.assignee);
  const [managerList, setManagerList] = useState([
    "Hoàng Trọng Minh",
    "Nguyễn Văn Quân",
    "Lê Xuân Vinh",
    "Nguyễn Văn Đạt",
  ]);
  const [phoneNumber, setPhoneNumber] = useState(props.info.phone);
  const [email, setEmail] = useState(props.info.email);
  const [status, setStatus] = useState(props.info.status);

  return (
    <>
      <div>
        <Modal.Header closeButton>
          <Modal.Title style={{ margin: "auto" }}>
            Thay đổi thông tin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="container">
            <form action="action_page.php">
              <label for="fname" value={name}>
                Tên khách hàng
              </label>
              <input
                type="text"
                id="fname"
                name="firstname"
                placeholder="Tên"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />

              <label for="lname">Loại khách hàng</label>
              <select
                name="customerType"
                id="customerTypes"
                value={type}
                onChange={(e) => {
                  setType(e.target.value);
                }}
              >
                {typeList.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
              </select>

              <label for="lname">Email</label>

              <input
                type="text"
                placeholder=""
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
              <label for="lname">Người quản lý</label>
              <select
                name="managerInput"
                id="customerManagers"
                value={manager}
                onChange={(e) => {
                  setManager(e.target.value);
                }}
              >
                {managerList.map((element, index) => {
                  return <option value={element}>{element}</option>;
                })}
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
          onClick={() => {
            var mes = "Thay đổi thành công";
            if (name == "") {
              mes = "Tên không được bỏ trống.";
            }
            if (email == "") {
              mes += " Email không đc bỏ trống.";
            }
            if (phoneNumber == "") {
              mes += " Số điện thoại không đc bỏ trống.";
            }

            const notificationTypes = ["success", "error"];
            const getRandomNotification = () => {
              if (mes != "Thay đổi thành công") {
                mes = "Thay đổi thất bại " + mes;
                return notificationTypes[1];
              }
              props.submitForm([
                name,
                type,
                email,
                phoneNumber,
                manager,
                status,
              ]);

              return notificationTypes[0];
            };

            let notificationName = getRandomNotification();
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

export default EditForm;
