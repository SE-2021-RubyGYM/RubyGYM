import React, { useState } from "react"
import "./AddForm.module.css"
import { Button, Modal } from "react-bootstrap";

function AddForm() {

    return (
        <div>
            <Modal.Header closeButton>
                <Modal.Title>Thêm mới hoạt động</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div class="container">
                    <form action="action_page.php">

                        <label for="fname">Nhân viên phụ trách</label>
                        <input type="text" id="fname" name="firstname" placeholder="Nhân viên phụ trách" />

                        <label for="lname">Tên khách hàng</label>
                        <input type="text" id="lname" name="lastname" placeholder="Tên khách hàng" />

                        <label for="lname">Tên hoạt động</label>
                        <input type="text" placeholder="Tên hoạt động" />

                        <label for="lname">Mô tả</label>
                        <input type="text" placeholder="" />

                        <label for="careType">Loại hình chăm sóc</label>
                        <select id="careType" name="country">
                            <option value="call">Gọi điện tư vấn</option>
                            <option value="email">Gửi email</option>
                        </select>
                        <label for="lname" style={{marginTop:"10px"}}>Ngày bắt đầu</label>
                        <input type="text" placeholder="" />

                        <label for="lname">Ngày kết thúc</label>
                        <input type="text" placeholder="" />

                    </form>
                </div>
            </Modal.Body>
        </div>
    );
}

export default AddForm