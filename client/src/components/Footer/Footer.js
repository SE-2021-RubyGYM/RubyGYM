import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.footerLabel}>2021 &copy; Team UIUX_12</span>
      <FooterIcon />
    </div>
  )
}

export default Footer;
