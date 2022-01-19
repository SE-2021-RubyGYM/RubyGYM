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

const BlogDetail = (props) => {
  const [id, setId] = useState(props.id);
  const [contentEditorState, setContentEditorState] = useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    const url = "http://localhost:5000/api/adv/" + id;

    axios({
      method: "GET",
      url: url,
    })
      .then((res) => {
        console.log(res.data.result);
        const contentBlock = htmlToDraft(res.data.result.content);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
          );
          setContentEditorState(EditorState.createWithContent(contentState));
        }
        setTitleValue({
          picture: res.data.result.picture,
          title: res.data.result.title,
        });

        var newElement = { ...element };
        newElement.picture = res.data.result.picture;
        newElement.title = res.data.result.title;
        setElement(newElement);
      })
      .catch((e) => {
        const html = "Ko the lay du lieu";

        const contentBlock = htmlToDraft(html);
        if (contentBlock) {
          const contentState = ContentState.createFromBlockArray(
            contentBlock.contentBlocks
          );
          setContentEditorState(EditorState.createWithContent(contentState));
        }
      });
  }, []);

  const handleOnContentEditorChange = useCallback((e) => {
    setContentEditorState(e);
  });

  const handlePostToBlog = useCallback(() => {
    const url = "http://localhost:5000/api/adv/" + props.id;

    axios({
      method: "DELETE",
      url: url,
    })
      .then((res) => {
        const blogContent = draftToHtml(
          convertToRaw(contentEditorState.getCurrentContent())
        );

        var now = new Date().toLocaleDateString("pt-PT");

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
            console.log(res);
          })
          .catch((e) => {
            alert(e);
          });

        alert("cap nhap thanh cong");
      })
      .catch((e) => {
        alert("khong the cap nhap");
      });
    // send to server
  });
  const handleDeleteBlog = useCallback(() => {
    const url = "http://localhost:5000/api/adv/" + props.id;

    axios({
      method: "DELETE",
      url: url,
    })
      .then((res) => {
        alert("xoa thanh cong");
      })
      .catch((e) => {
        alert("khong the xoa");
      });
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
    <div className="add-blog">
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
          <div
            style={{
              position: "absolute",
              margin: "40px 0 0 0",
              left: "0",
              backgroundColor: "rgb(65, 166, 255)",
              display: settingDispay,
            }}
          >
            {/* <Link to="admin/bloglist"> */}
            <Button onClickedFunction={() => handleDeleteBlog()}>
              <Link to="/admin/bloglist">Xoá bài viết</Link>
            </Button>
            {/* </Link> */}
          </div>
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
        {/* <div className="section">
                    <div className="image-wrapper">
                        <img className="image_link" src={element.picture} alt="" onClick={()=>{
                                window.open('#');
                        }}/>      
                    </div>
                    <div className="info-wrapper">
                        <div className="red-dot"> Tin tức &amp; Sự kiện</div>
                        <div className="date">
                            <h4>{element.time}</h4>
                        </div>
                        <a className="title" href ='#' title={element.title} >
                            <p >{element.title}</p>
                        </a>
                    </div>
                </div>    */}
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
        onClickedFunction={() => handlePostToBlog()}
      >
        <div style={{ color: "rgb(247, 247, 247)" }}>Cập nhập</div>
      </Button>
    </div>
  );
};

export default BlogDetail;
