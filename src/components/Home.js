import React from "react";
import "./Home.css";

import Foto1 from "../assets/Foto1.jpeg";
import Foto2 from "../assets/Foto2.jpg";

export default function Home() {
  return (
    <>
      {" "}
      <div className="containerText">
        <h2>VENHA REALIZAR</h2>
        <h1>
          <span className="contrastDark">SEU EVENTO</span>
        </h1>
        <h2>
          NO <span className="contrastLight">ESPAÇO FAMÍLIA</span>
        </h2>
      </div>
      <div className="containerImg">
        <img className="itemImg" src={Foto1} alt="" />
        <img className="itemImg" src={Foto2} alt="" />
      </div>
      <p className="telHome">📱 21 98340-7395</p>
    </>
  );
}
