import React, { useState, useEffect, useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style/style.css";
import { Link } from "react-router-dom";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
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
import { getAdvList, deleteAdvById, createUser, getAdvById } from "./api/api";
import { useHistory } from "react-router-dom";

import { useParams } from "react-router-dom";
import { BackEndBaseURL } from "../../app/backend";
const EditBlog = function () {
  let { id } = useParams();

  let history = useHistory();

  const [contentEditorState, setContentEditorState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    // const contentBlock = htmlToDraft("write st");
    // if (contentBlock) {
    //   const contentState = ContentState.createFromBlockArray(
    //     contentBlock.contentBlocks
    //   );
    //   setContentEditorState(EditorState.createWithContent(contentState));
    // }
  }, []);

  const handleOnContentEditorChange = useCallback((e) => {
    setContentEditorState(e);
  });

  const handlePostToBlog = useCallback(async () => {
    var result = await deleteAdvById(id);
    if (!result) {
    }
    var now = new Date().toLocaleDateString("pt-PT");
    const blogContent = draftToHtml(
      convertToRaw(contentEditorState.getCurrentContent())
    );

    axios({
      method: "POST",
      url: BackEndBaseURL + "/api/adv",
      data: {
        creator: "Admin",
        title: titleValue.title,
        time: now,
        view: 0,
        picture: titleValue.picture,
        content: blogContent,
      },
    })
      .then((res) => {
        if (res.status == 200 || res.status == true) {
          var notificationName = "success";

          let msg = {
            success: "????ng b??i th??nh c??ng",
            error: "X??a th???t b???i",
          };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg.success}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
          history.push("/admin/blogs");
        } else {
          var notificationName = "error";

          let msg = {
            success: "????ng b??i th??nh c??ng",
            error: "????ng th???t b???i",
          };
          toast(
            <Notification2
              type={notificationName}
              withIcon
              msg={msg.success}
            />,
            {
              autoClose: 4000,
              closeButton: false,
              hideProgressBar: true,
            }
          );
        }
      })
      .catch((e) => {
        var notificationName = "error";

        let msg = {
          success: "????ng b??i th??nh c??ng",
          error: "????ng th???t b???i",
        };
        toast(
          <Notification2 type={notificationName} withIcon msg={msg.success} />,
          {
            autoClose: 4000,
            closeButton: false,
            hideProgressBar: true,
          }
        );
      });
    // send to server
  });

  const [settingDispay, setSettingDisplay] = useState("block");
  const handleClickSettingButton = useCallback(() => {
    if (settingDispay == "none") {
      setSettingDisplay("block");
    } else {
      setSettingDisplay("none");
    }
  });

  const [element, setElement] = useState({
    picture: "https://www.w3schools.com/tags/img_girl.jpg",
    title: "Helo",
    time: "00",
  });
  const [titleValue, setTitleValue] = useState({
    picture: "",
    title: "",
  });
  useEffect(async () => {
    var result = await getAdvById(id);
    if (result != null) {
      setTitleValue({
        picture: result.picture,
        title: result.title,
      });
      const contentBlock = htmlToDraft(result.content);
      if (contentBlock) {
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks
        );
        setContentEditorState(EditorState.createWithContent(contentState));
      }
    } else {
    }
  }, []);
  return (
    <div>
      <Row>
        <Col>
          <Row className="header__container">
            <div className="headline-1">S???a b??i vi???t</div>
          </Row>
          <Row className="mb-4">
            <div
              className="add-blog"
              style={{ backgroundColor: "rgba(247, 247, 247, 0.8)" }}
            >
              <div
                style={{
                  width: "100%",
                  margin: "0 0 10px 0",
                  height: "20px",
                  float: "right",
                }}
              >
                <div
                  style={{
                    float: "right",
                    position: "relative",
                    width: "80 px",
                  }}
                ></div>
              </div>

              <div className="title">
                <div>
                  <Button style={{ margin: "0 10px 0 10px" }}>H??nh ???nh </Button>
                  <input
                    value={titleValue.picture}
                    type="text"
                    placeholder="Url t???i ???nh"
                    onChange={(e) => {
                      var newElement = { ...element };
                      newElement.picture = e.target.value;
                      setElement(newElement);

                      var newTitleValue = { ...titleValue };
                      newTitleValue.picture = e.target.value;
                      setTitleValue(newTitleValue);
                    }}
                  />
                  <Button style={{ margin: "0 10px 0 10px" }}>Ti??u ?????</Button>
                  <input
                    value={titleValue.title}
                    type="text"
                    placeholder="??o???n ti??u ????? t??m t???t b??i vi???t"
                    onChange={(e) => {
                      var newElement = { ...element };
                      newElement.title = e.target.value;
                      setElement(newElement);

                      var newTitleValue = { ...titleValue };
                      newTitleValue.title = e.target.value;
                      setTitleValue(newTitleValue);
                    }}
                  />
                </div>
              </div>

              <div className="content">Content</div>
              <div
                style={{
                  borderBottom: "2px solid rgb(209, 209, 209)",
                }}
              >
                <Editor
                  editorState={contentEditorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleOnContentEditorChange}
                />
              </div>

              <Button
                style={{
                  backgroundColor: "rgb(65, 166, 255)",
                  margin: "auto",
                  borderRadius: "3px",
                  float: "right",
                  margin: "0 10px 0 0 ",
                }}
                onHoldStyle={{ backgroundColor: "rgb(14, 76, 247)" }}
                onClick={() => handlePostToBlog()}
              >
                <div style={{ color: "rgb(247, 247, 247)" }}>L??u</div>
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default EditBlog;
