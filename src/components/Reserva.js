import React, { useState } from "react";
import "./Reserva.css";

export default function Reserva() {
  const [data, setData] = useState();

  function verificarData() {
    window.location.href = `https://api.whatsapp.com/send?phone=5521983407395&text=Oi%20gostaria%20de%20saber%20a%20disponibilidade%20do%20dia:%20${data}`;
  }

  return (
    <>
      <h1 className="titleReserva">Reserve sua data</h1>
      <h2 id="subTitleReserva">Escolha a data do evento</h2>
      <input
        type="date"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <button onClick={verificarData}>Verifique a disponibilidade</button>
    </>
  );
}
