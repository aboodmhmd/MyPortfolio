import React from "react";
import "./animation.css";



function animation() {
  function btn_open(){
    window.open("https://wa.me/message/6GY4AL75VSD6I1")
  }
  return (
    <div>
      <button className="continue-application" onClick={btn_open}>
        <div>
          <div className="pencil"></div>
          <div className="folder">
            <div className="top">
              <svg viewBox="0 0 24 27">
                <path d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z"></path>
              </svg>
            </div>
            <div className="paper"></div>
          </div>
        </div>
        Hire Me
      </button>

      <a className="dribbble" href="https://dribbble.com/ai" target="_blank" rel="noreferrer">
        <img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""
        />
      </a>
    </div>
  );
}

export default animation;
