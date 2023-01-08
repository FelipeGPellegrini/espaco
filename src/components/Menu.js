import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <ul className="menu">
      <a className="menuItem" href="/">
        Home
      </a>
      <a className="menuItem" href="/fotos">
        Fotos
      </a>
      <li className="menuItem">Informações</li>
      <li className="menuItem">Reservar</li>
    </ul>
  );
}
