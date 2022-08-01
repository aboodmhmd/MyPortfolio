import React from "react";
import "./animy.css";
import GitHubIcon from "@mui/icons-material/GitHub";

function animy() {
  return (
    <li class="icon-item">
      <button class="icon-link">
        <GitHubIcon className="github"/>
      </button>
    </li>
  );
}

export default animy;
