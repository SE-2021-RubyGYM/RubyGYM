import React, { useState } from 'react';
import './AddForm.module.css';
import { Button, Modal } from 'react-bootstrap';
import './styles.scss';

function AddForm() {
  return (
    <div>
      <Modal.Header closeButton>
        <Modal.Title>Thêm nhóm khách hàng</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class='container'>
          <form action='action_page.php'>
            <label for='fname'>Mã nhóm khách hàng</label>
            <input type='text' id='fname' name='firstname' placeholder='' />

            <label for='lname'>Tên nhóm khách hàng</label>
            <input type='text' id='lname' name='lastname' placeholder='' />

            <label for='lname'>Mô tả nhóm khách hàng</label>
            <input type='text' placeholder='' />
          </form>
        </div>
      </Modal.Body>
    </div>
  );
}

export default AddForm;
