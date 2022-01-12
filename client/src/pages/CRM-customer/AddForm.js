import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function AddForm({ open, onClose }) {
  return (
    <Modal show={open} onHide={onClose}>
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
    </Modal>
  );
}

export default AddForm;
