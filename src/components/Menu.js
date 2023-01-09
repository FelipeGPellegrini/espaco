import React from "react";
import "./Menu.css";

export default function Menu() {
  return (
    <nav className="menu">
      <a className="menuItem" href="/">
        Home
      </a>
      <a className="menuItem" href="/fotos">
        Fotos
      </a>
      <a className="menuItem" href="/info">
        Informações
      </a>
      <a className="menuItem" href="/reserva">
        Reservar
      </a>
    </nav>
  );
}
