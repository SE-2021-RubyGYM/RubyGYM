import "./style.css";
import { useState, useCallback, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import htmlToDraft from "html-to-draftjs";
import draftToHtml from "draftjs-to-html";

import { Link } from "react-router-dom";
import Button from "../Element/button";

import axios from "axios";

const AddBlog = () => {
  const [contentEditorState, setContentEditorState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    const contentBlock = htmlToDraft("write st");
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      setContentEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const handleOnContentEditorChange = useCallback((e) => {
    setContentEditorState(e);
  });

  const handlePostToBlog = useCallback(() => {
    var now = new Date().toLocaleDateString("pt-PT");
    const blogContent = draftToHtml(
      convertToRaw(contentEditorState.getCurrentContent())
    );

    axios({
      method: "POST",
      url: "http://localhost:5000/api/adv",
      data: {
        creator: "Admin",
        title: element.title,
        time: now,
        view: 0,
        picture: element.picture,
        content: blogContent,
      },
    })
      .then((res) => {
        alert("Đăng bài thành công");
      })
      .catch((e) => {
        alert("Không thể đăng bài");
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

  return (
    <div className="add-blog" style={{ marginLeft: "210px" }}>
      <div
        style={{
          width: "100%",
          margin: "0 0 10px 0",
          height: "20px",
          float: "right",
        }}
      >
        <div style={{ float: "right", position: "relative", width: "80 px" }}>
          <Button
            style={{
              margin: "0 10px 0",
              borderRadius: "50%",
              height: "30px",
              width: "30px",
              paddingRight: "none",
              paddingLeft: "none",
              backgroundColor: "white",
            }}
            onHoverStyle={{ backgroundColor: "rgb(240, 240, 240)" }}
            onClickedFunction={() => handleClickSettingButton()}
          >
            <img
              width="30px"
              src="https://cdn-icons-png.flaticon.com/128/2099/2099058.png"
              alt=""
            />
          </Button>
        </div>
      </div>

      <div className="title">
        Title
        <div>
          <Button style={{ margin: "0 10px 0 10px" }}>Hình ảnh</Button>
          <input
            value={titleValue.picture}
            type="text"
            onChange={(e) => {
              var newElement = { ...element };
              newElement.picture = e.target.value;
              setElement(newElement);

              var newTitleValue = { ...titleValue };
              newTitleValue.picture = e.target.value;
              setTitleValue(newTitleValue);
            }}
          />
          <Button style={{ margin: "0 10px 0 10px" }}>Tiêu đề</Button>
          <input
            value={titleValue.title}
            type="text"
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
      <Link to="/admin/bloglist">
        <Button
          style={{
            backgroundColor: "rgb(65, 166, 255)",
            margin: "auto",
            borderRadius: "3px",
            float: "right",
            margin: "0 10px 0 0 ",
          }}
          onHoldStyle={{ backgroundColor: "rgb(14, 76, 247)" }}
          onClickedFunction={() => handlePostToBlog()}
        >
          <div style={{ color: "rgb(247, 247, 247)" }}>Đăng bài</div>
        </Button>
      </Link>
    </div>
  );
};

export default AddBlog;
