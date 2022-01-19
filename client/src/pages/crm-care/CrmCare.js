import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
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
} from 'reactstrap';
import { Button, Modal } from 'react-bootstrap';
import Widget from '../../components/Widget/Widget.js';
import TaskContainer from './components/TaskContainer/TaskContainer.js';

// import BootstrapTable from "react-bootstrap-table-next";
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import MUIDataTable from "mui-datatables";

import cloudIcon from '../../assets/tables/cloudIcon.svg';
import funnelIcon from '../../assets/tables/funnelIcon.svg';
import optionsIcon from '../../assets/tables/optionsIcon.svg';
import printerIcon from '../../assets/tables/printerIcon.svg';
import searchIcon from '../../assets/tables/searchIcon.svg';
import moreIcon from '../../assets/tables/moreIcon.svg';
import s from './Tables.module.scss';
import mock from './mock.js';
import AddForm from './AddForm.js';
import Notification, {
  Notification2,
} from '../../components/Notification/Notification.js';
import { toast } from 'react-toastify';
import './styles.scss';
import classNames from 'classnames';
import SelectCrm from '../CRM-customer/components/SelectCrm.js';

const CrmCare = function () {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [firstTable] = useState(mock.firstTable);
  const [secondTable] = useState(mock.secondTable);
  const [transactions, setTransactions] = useState(mock.transactionsWidget);
  const [tasks, setTasks] = useState(mock.tasksWidget);
  const [firstTableCurrentPage, setFirstTableCurrentPage] = useState(0);
  const [secondTableCurrentPage, setSecondTableCurrentPage] = useState(0);
  const [tableDropdownOpen, setTableMenuOpen] = useState(false);

  const pageSize = 10;
  const firstTablePagesCount = Math.ceil(firstTable.length / pageSize);

  const [openExport, setOpenExport] = useState(false);

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

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <AddForm />
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Đóng
          </Button>
          <Button
            variant='primary'
            onClick={() => {
              const notificationTypes = ['success', 'error'];
              const getRandomNotification = () => {
                return notificationTypes[
                  Math.floor(Math.random() * notificationTypes.length)
                ];
              };
              let notificationName = getRandomNotification();
              let msg = { success: 'Thêm thành công', error: 'Thêm thất bại' };
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
              if (notificationName == 'success') handleClose();
            }}
          >
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal Export */}
      <Modal show={openExport} onHide={() => setOpenExport(false)}>
        <div className='modal_export__container'>
          <img src='https://3.bp.blogspot.com/-LcEMnX2bshM/V8L36D14JLI/AAAAAAAAASc/1UWz_uWk6ek-ziP0xWvY_MuIucnhRTZaACEw/s1600/Bulletpoint_Bullet_Listicon_Shape_Bulletfont_Glyph_Typography_Bullet_Point_Customshape_Wingding_Custom_Tick_Accept_Check_Ok_Yes-512.png' />
          <h4> Xuất báo cáo thành công ở địa chỉ email 'abc@gamil.com' </h4>
          <button
            type='button'
            className={'button_search'}
            onClick={() => setOpenExport(false)}
          >
            Ok
          </button>
        </div>
      </Modal>

      <Row>
        <Col>
          <Row className='header__container'>
            <div className='headline-1'>Hoạt động chăm sóc khách hàng</div>
            <div>
              <button
                color='primary'
                className={classNames('button_add')}
                onClick={() => setShow(true)}
              >
                Thêm mới hoạt động
              </button>
              <button
                color='primary'
                className={classNames('button_export')}
                onClick={() => setOpenExport(true)}
              >
                Xuất báo cáo
              </button>
            </div>
          </Row>
          {/* Filter */}
          <Row className='filter__root'>
            <div className='filter__container'>
              <img src={searchIcon} alt='Search' className='icon_search' />
              <input
                type='text'
                placeholder='Tìm kiếm theo Tên hoạt động'
              ></input>
              <button type='button' className={classNames('button_search')}>
                Tìm kiếm
              </button>
            </div>
            <div className='filter__options'>
              <SelectCrm title={'Tháng'} />
              <SelectCrm title={'Trạng thái'} />
              <SelectCrm title={'Loại hình chăm sóc'} />
              <SelectCrm title={'Nhân viên phụ trách'} />
            </div>
          </Row>
          <Row className='mb-4'>
            <Col>
              <Widget>
                <div className={s.tableTitle}>
                  <div className='headline-2'></div>
                  <div className='d-flex'>
                    <a href='/#'>
                      <img src={searchIcon} alt='Search' />
                    </a>
                    <a href='/#'>
                      <img
                        className='d-none d-sm-block'
                        src={cloudIcon}
                        alt='Cloud'
                      />
                    </a>
                    <a href='/#'>
                      <img src={printerIcon} alt='Printer' />
                    </a>
                    <a href='/#'>
                      <img
                        className='d-none d-sm-block'
                        src={optionsIcon}
                        alt='Options'
                      />
                    </a>
                    <a href='/#'>
                      <img src={funnelIcon} alt='Funnel' />
                    </a>
                  </div>
                </div>
                <div className='widget-table-overflow'>
                  <Table
                    className={`table-striped table-borderless table-hover ${s.statesTable}`}
                    responsive
                  >
                    <thead>
                      <tr>
                        {/* <th className={s.checkboxCol}>
                        <div className="checkbox checkbox-primary">
                          <input
                            className="styled"
                            id="checkbox100"
                            type="checkbox"
                          />
                          <label for="checkbox100"/>
                        </div>
                      </th> */}
                        <th className='w-auto'>Tên hoạt động</th>
                        <th className='w-auto'>Loại hình chăm sóc</th>
                        <th className='w-auto'>Tên khách hàng</th>
                        <th className='w-auto'>Độ ưu tiên</th>
                        <th className='w-auto'>Nhân viên phụ trách</th>
                        <th className='w-auto'>Trạng thái</th>
                        <th className='w-auto'>Ngày bắt đầu</th>
                        <th className='w-auto'>Ngày kết thúc</th>
                        <th className='w-auto'>Hành động</th>
                      </tr>
                    </thead>
                    <tbody>
                      {firstTable
                        .slice(
                          firstTableCurrentPage * pageSize,
                          (firstTableCurrentPage + 1) * pageSize
                        )
                        .map((item) => (
                          <tr key={uuidv4()}>
                            {/* <td>
                            <div className="checkbox checkbox-primary">
                              <input
                                id={item.id}
                                className="styled"
                                type="checkbox"
                              />
                              <Label for={item.id} />
                            </div>
                          </td> */}
                            {/* <td className="d-flex align-items-center"><img className={s.image} src={item.img} alt="User"/><span className="ml-3">{item.name}</span></td> */}
                            <td>{item.activityName}</td>
                            <td>{item.careType}</td>
                            <td>{item.customerName}</td>
                            <td>{item.priority}</td>
                            <td>{item.employee}</td>
                            <td>{item.status}</td>
                            <td>{item.start_date}</td>
                            <td>{item.end_date}</td>
                            <td>
                              <td>
                                <i
                                  className='fa fa-edit'
                                  style={{ marginRight: '10px' }}
                                ></i>
                                <i className='fa fa-trash'></i>
                              </td>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                  <Pagination
                    className='pagination-borderless'
                    aria-label='Page navigation example'
                  >
                    <PaginationItem disabled={firstTableCurrentPage <= 0}>
                      <PaginationLink
                        onClick={(e) =>
                          setFirstTablePage(e, firstTableCurrentPage - 1)
                        }
                        previous
                        href='#top'
                      />
                    </PaginationItem>
                    {[...Array(firstTablePagesCount)].map((page, i) => (
                      <PaginationItem
                        active={i === firstTableCurrentPage}
                        key={i}
                      >
                        <PaginationLink
                          onClick={(e) => setFirstTablePage(e, i)}
                          href='#top'
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
                        href='#top'
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

export default CrmCare;
