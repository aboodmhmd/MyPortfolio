import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Resume from "../../utils/resumeData";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Anime from "../Animation/button/Anime";
import "./header.css";
import Anima from "../Animation/button3/animation";

const Header = () => {
  return (
    <Navbar sticky="top" expand="lg" className="header">
      <Link to="/">
        <navbar className="header-home">{<HomeIcon />}</navbar>
      </Link>
      <nav className="header-left">
        <Link to="/resume" className={"header-link"}>
          Resume
        </Link>
        <Link to="/portfolio" className={"header-link"}>
          Portfolio
        </Link>
        <Link to="/contact" className={"header-link"}>
          Contact
        </Link>
      </nav>
      <div className="header-right">
        {Object.keys(Resume.social).map((key) => (
          <Anime
            style={Resume.social[key].style}
            style2={Resume.social[key].style2}
            title={Resume.social[key].name}
            icon={Resume.social[key].icon}
            link={Resume?.social[key]?.link}
          />
        ))}
        <Anima />
      </div>
    </Navbar>
  );
};

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    return <Component history={history} {...props} />;
  };
  return Wrapper;
};

export default withRouter(Header);
