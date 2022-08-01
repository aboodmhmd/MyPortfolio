import React from "react";
import "./Footer.css";
import Resume from "../../utils/resumeData";

const Footer = () => {
  function btnUrl() {
    window.open(Resume.social.Facebook.link);
  }
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
          <button onClick={btnUrl} className="btn-url">
            Me.
          </button>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
