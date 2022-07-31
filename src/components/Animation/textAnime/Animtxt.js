import React from "react";
import "./Animetxt.css";

function Animtxt({title,title2}) {
  return (
    <div>
      <h1 class="anim">{title}</h1>
      <p class="subtitle">{title2}</p>
    </div>
  );
}

export default Animtxt;
