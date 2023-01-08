import React from "react";
import "./Header.css";

import Logo from "../assets/Logo.png";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={Logo} alt="Logo" />
    </div>
  );
}
