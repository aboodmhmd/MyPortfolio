import React from 'react'
import './button.css'

const Anime = ({ style, style2, title,icon,link }) => {
  function btn(){
    window.open(link)
  }
    return (
        <div className="wrapper" onClick={btn}>
        <link to={link} target="_blank" />
        <li className={style}  >
          <span className="tooltip" >{title}</span>
          <span><i className={style2}></i></span>
          <span className='linked'>{icon}</span>
        </li>
        </div>
    );
  };
export default Anime