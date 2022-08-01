import React from "react";
import "./Footer.css";
import Resume from "../../utils/resumeData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <p className="about-font">{Resume.full}<br/><p className="about-font3">React-JS Portfolio </p></p>
      </div>
      <div className="footer_right">
        <p className="about-font2">
          @2022 All Rights Reserved
          <br/>
          Designed and Developed by{" "}
          <a target="_blank" to={Resume.social.Facebook.link} rel="noreferrer">
            Me.
          </a>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
