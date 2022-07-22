import React from "react";
import logo from "../../assets/img/logo.png";
import { Button } from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import "./index.css";

const Header = () => {
  return (
    <div className="headerBar">
      <a href="/#" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="header_right">
        <NavBar />
        <Button
          submit={() => console.log("Submit Button")}
          title="CONNECT WALLET"
          className="connect_wallet"
        />
      </div>
    </div>
  );
};

export default Header;
