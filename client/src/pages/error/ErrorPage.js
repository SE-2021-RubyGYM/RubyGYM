import React from "react";
import {
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import s from "./ErrorPage.module.scss";

import errorImage from "../../assets/errorImage.svg"
import FooterIcon from "../../components/Icons/FooterIcon.js";
import { useHistory } from "react-router";
const ErrorPage = () => {
  let history=useHistory();
  return (
    <div className={s.pageContainer}>
      <div className={s.errorContainer}>
        <h1 className={s.errorCode}>404</h1>
        <p className={s.errorInfo}>
          Oops. Looks like the page you're looking for no longer exists
        </p>
        <p className={s.errorHelp}>
          But we're here to bring you back to safety
        </p>
          <Button onClick={()=>{
            history.push("/user/home");
          }}>
            Back to Home
          </Button>
      </div>
      <div className={s.imageContainer}>
        <img className={s.errorImage} src={errorImage} alt="Error page" width="80" />
      </div>
      <div className={s.footer}>
        
        <FooterIcon />
      </div>
    </div>
  );
}

export default ErrorPage;
