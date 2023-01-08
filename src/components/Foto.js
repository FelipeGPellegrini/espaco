import React from "react";
import "./Foto.css";

import Foto1 from "../assets/Foto1.jpeg";
import Foto2 from "../assets/Foto2.jpg";
import Foto3 from "../assets/Foto3.jpg";
import Foto4 from "../assets/Foto4.jpg";
import Foto5 from "../assets/Foto5.jpg";
import Foto6 from "../assets/Foto6.jpg";

export default function Foto() {
  return (
    <>
      <h1 id="titleFoto">Fotos</h1>
      <div className="containerFotos">
        <img width={250} className="fotos" src={Foto2} alt="" />
        <img width={250} className="fotos" src={Foto6} alt="" />
        <img width={250} className="fotos" src={Foto1} alt="" />
        <img width={250} className="fotos" src={Foto4} alt="" />
        <img width={250} className="fotos" src={Foto3} alt="" />
        <img width={250} className="fotos" src={Foto5} alt="" />
      </div>
      <p id="backFoto">
        <a href="#titleFoto">Voltar ⬆️</a>
      </p>
    </>
  );
}
