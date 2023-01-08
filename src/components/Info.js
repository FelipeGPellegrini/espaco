import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <>
      <h1 id="titleInfo">Informações</h1>
      <div className="containerInfo">
        <h2 className="listItem">O salão possui: </h2>
        <ul id="listInfo">
          <li className="listItem">Fogão Industrial</li>
          <li className="listItem">Churrasqueira</li>
          <li className="listItem">12 Mesas</li>
          <li className="listItem">48 Cadeiras</li>
          <li className="listItem">Iluminação na piscina</li>
          <li className="listItem">2 Banheiros</li>
          <li className="listItem">2 Freezers</li>
          <li className="listItem">Wifi</li>
        </ul>
      </div>
    </>
  );
}
