import React from "react";
import "../css/Header.css";

function Header(props) {
  return (
    <div className="container header">
      <div className="logo">
        <img src="./logo.png" />
      </div>
      <div className="user">
        <div className="content">
          <p className="intro">Handicrafted by</p>
          <p className="name">Jim HLS</p>
        </div>
        <div className="user-img">
          <img src="https://picsum.photos/200" />
        </div>
      </div>
    </div>
  );
}

export default Header;
