import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style/style.css";
import {
  Col,
  Row,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
} from "reactstrap";
import Widget from "../../components/Widget/Widget.js";
import "font-awesome/css/font-awesome.min.css";

import cloudIcon from "../../assets/tables/cloudIcon.svg";
import funnelIcon from "../../assets/tables/funnelIcon.svg";
import optionsIcon from "../../assets/tables/optionsIcon.svg";
import printerIcon from "../../assets/tables/printerIcon.svg";
import searchIcon from "../../assets/tables/searchIcon.svg";

import s from "./Tables.module.scss";
import mock from "./mock.js";
import { Modal } from "react-bootstrap";
import { Notification2 } from "../../components/Notification/Notification.js";
import { toast } from "react-toastify";
import "./styles.scss";
import classNames from "classnames";
import SelectCrm from "./components/SelectCrm.js";
import { Select } from "antd";
import AddForm from "./AddForm.js";
import { customers, data, changeData } from "./data/customer.js";
import { element } from "prop-types";
import EditForm from "./EditForm";
import { getCustomerList, deleteCustomerById, createUser } from "./api/api";
const CrmCustomers = function () {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable, setFirstTable] = useState(data);
  useEffect(async () => {
    var c = await getCustomerList();
    if (c != null) {
      if (c.length > 0) {
        setFirstTable(c);
      } else {
        setFirstTable([
          {
            _id: "Không có",
            name: "Không có",
            gender: "Không có",
            phone: "Không có",
          },
        ]);
      }
    }
  }, []);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const [openExport, setOpenExport] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(false);

  const pageSize = 10;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

  const setFirstTablePage = (e, index) => {
    e.preventDefault();
    setFirstTableCurrentPage(index);
  };

  const setSecondTablePage = (e, index) => {
    e.preventDefault();
    setSecondTableCurrentPage(index);
  };

  const toggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const transactionMenuOpen = (id) => {
    setTransactions(
      transactions.map((transaction) => {
        if (transaction.id === id) {
          transaction.dropdownOpen = !transaction.dropdownOpen;
        }
        return transaction;
      })
    );
  };

  const tableMenuOpen = () => {
    setTableMenuOpen(!tableDropdownOpen);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      })
    );
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = async (info) => {
    var newFirstTable = [...firstTable];
    var success = await createUser(info);
    if (success) {
      newFirstTable.push(info);
      setFirstTable(newFirstTable);
    }
    return success;
    // newFirstTable.push({
    //   _id: "checkbox113",
    //   code: "KH00" + (newFirstTable.length + 1),
    //   name: info[0],
    //   type: info[1],
    //   email: info[2],
    //   phone: info[3],
    //   assignee: info[4],
    //   status: customers.status[0],
    // });
    // setFirstTable(newFirstTable);
    // changeData(newFirstTable);
  };

  const deleteCustom = async (index) => {
    var newTable = [...firstTable];
    var elementDeleted = newTable[index];

    var sucess = await deleteCustomerById(elementDeleted._id);
    var notificationName = "success";
    if (sucess) {
      newTable.splice(index, 1);
      setFirstTable(newTable);
    } else {
      notificationName = "error";
    }

    let msg = {
      success: "Đã xóa " + elementDeleted.name,
      error: "Xóa thất bại",
    };
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
  };

  const [filter, setFilter] = useState({
    name: "",
    status: "Trạng thái",
    type: "Loại",
    assignee: "Người quản lý",
  });

  const [changeIndex, setChangeIndex] = useState(-1);
  const handleChangeSubmit = (e) => {
    var newFirstTable = [...firstTable];
    firstTable[changeIndex] = {
      id: "checkbox113",
      code: newFirstTable[changeIndex].id,
      name: e[0],
      status: e[5],
      type: e[1],
      email: e[2],
      phone: e[3],
      assignee: e[4],
    };
  };

  const [showChangeElment, setShowChangeElment] = useState(false);
  const handleShowChange = () => setShowChangeElment(true);
  const handleCloseChange = () => setShowChangeElment(false);

  return (
    <div>
      {/* <AddForm open={openAddForm} onClose={() => setOpenAddForm(false)} /> */}
      <Modal show={show} onHide={handleClose}>
        <AddForm handleClose={handleClose} submitForm={submitForm} />
      </Modal>
      <Modal show={showChangeElment} onHide={handleCloseChange}>
        <EditForm
          handleClose={handleCloseChange}
          submitForm={handleChangeSubmit}
          info={firstTable[changeIndex]}
        />
      </Modal>
      {/* Modal Export */}
      <Modal show={openExport} onHide={() => setOpenExport(false)}>
        <div className="modal_export__container">
          <img src="https://3.bp.blogspot.com/-LcEMnX2bshM/V8L36D14JLI/AAAAAAAAASc/1UWz_uWk6ek-ziP0xWvY_MuIucnhRTZaACEw/s1600/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Tick_Accept_Check_Ok_Yes-512.png" />
          <h4> Xuất báo cáo thành công ở địa chỉ email 'abc@gamil.com' </h4>
          <button
            type="button"
            className={"button_search"}
            onClick={() => setOpenExport(false)}
          >
            Ok
          </button>
        </div>
      </Modal>
      <Row>
        <Col>
          <Row className="header__container">
            <div className="headline-1">Quản lý thông tin khách hàng</div>
            <div>
              <button
                color="primary"
                className={classNames("button_add")}
                onClick={() => handleShow()}
              >
                Thêm mới khách hàng
              </button>
              <button
                color="primary"
                className={classNames("button_export")}
                onClick={() => setOpenExport(true)}
              >
                Xuất báo cáo
              </button>
            </div>
          </Row>
          {/* Filter */}
          <Row className="filter__root">
            <div className="filter__container">
              <img src={searchIcon} alt="Search" className="icon_search" />
              <input
                type="text"
                placeholder="Tên khách hàng ví dụ: dembele"
                value={filter.name}
                onChange={(e) => {
                  var newFilter = { ...filter };
                  newFilter.name = e.target.value;
                  setFilter(newFilter);
                }}
              ></input>
              <button type="button" className={classNames("button_search")}>
                Tìm kiếm
              </button>
            </div>
          </Row>
          <Row className="mb-4">
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div></div>
                  <div className="d-flex">
                    <a href="/#">
                      <img src={searchIcon} alt="Search" />
                    </a>
                    <a href="/#">
                      <img
                        className="d-none d-sm-block"
                        src={cloudIcon}
                        alt="Cloud"
                      />
                    </a>
                    <a href="/#">
                      <img src={printerIcon} alt="Printer" />
                    </a>
                    <a href="/#">
                      <img
                        className="d-none d-sm-block"
                        src={optionsIcon}
                        alt="Options"
                      />
                    </a>
                    <a href="/#">
                      <img src={funnelIcon} alt="Funnel" />
                    </a>
                  </div>
                </div>
                <div className="widget-table-overflow">
                  <Table
                    className={`table-striped table-borderless table-hover ${s.statesTable}`}
                    responsive
                  >
                    <thead>
                      <tr>
                        <th className="w-5">Mã khách hàng</th>
                        <th className="w-20">Tên khách hàng</th>
                        <th className="w-10">Giới tính</th>
                        <th className="w-10">Số điện thoại</th>
                        <th className="w-10">Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map((item, index) => {
                          if (filter.name != "") {
                            var perfectName = filter.name
                              .trim()
                              .replace(/\s+/g, " ")
                              .toLowerCase()
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "");

                            var perfectItem = item.name
                              .trim()
                              .replace(/\s+/g, " ")
                              .normalize("NFD")
                              .replace(/[\u0300-\u036f]/g, "");
                            perfectItem = perfectItem.toLocaleLowerCase();
                            if (perfectName.length > perfectItem.length) {
                              return;
                            }
                            // for (var i = 0; i < perfectName.length; i++) {
                            //   if (perfectName[i] != perfectItem[i]) {
                            //     return;
                            //   }
                            // }
                            if (perfectItem.search(perfectName) == -1) {
                              return;
                            }
                          }
                          if (filter.status != "Trạng thái") {
                            if (item.status != filter.status) {
                              return;
                            }
                          }
                          if (filter.type != "Loại") {
                            if (item.type != filter.type) {
                              return;
                            }
                          }
                          if (filter.assignee != "Người quản lý") {
                            if (item.assignee != filter.assignee) {
                              console.log(item.manager);
                              console.log(filter.assignee);

                              return;
                            }
                          }
                          var gender = "Nam";
                          if (item.gender.toLowerCase() == "female") {
                            gender = "Nữ";
                          }
                          return (
                            <tr key={uuidv4()}>
                              <td>{item._id}</td>
                              <td>{item.name}</td>
                              <td>{gender}</td>
                              <td>{item.phone}</td>

                              <td>
                                <i
                                  className="fa fa-edit"
                                  style={{ marginRight: "10px" }}
                                  onClick={() => {}}
                                ></i>
                                <i
                                  className="fa fa-trash hover-button"
                                  onClick={() => {
                                    deleteCustom(
                                      index + firstTableCurrentPage * pageSize
                                    );
                                  }}
                                ></i>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </Table>
                  <Pagination
                    className="pagination-borderless"
                    aria-label="Page navigation example"
                  >
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={(e) =>
                          setFirstTablePage(e, firstTableCurrentPage - 1)
                        }
                        previous
                        href="#top"
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) => (
                      <PaginationItem
                        active={i === firstTableCurrentPage}
                        key={i}
                      >
                        <PaginationLink
                          onClick={(e) => setFirstTablePage(e, i)}
                          href="#top"
                        >
                          {i + 1}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem
                      disabled={
                        firstTableCurrentPage >= firstTablePagesCount - 1
                      }
                    >
                      <PaginationLink
                        onClick={(e) =>
                          setFirstTablePage(e, firstTableCurrentPage + 1)
                        }
                        next
                        href="#top"
                      />
                    </PaginationItem>
                  </Pagination>
                </div>
              </Widget>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CrmCustomers;
