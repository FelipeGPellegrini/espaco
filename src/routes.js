import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "./components/Home";
import Foto from "./components/Foto";
import Info from "./components/Info";
import Reserva from "./components/Reserva";

export default function Routes() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/fotos" component={Foto} />
      <Route path="/info" component={Info} />
      <Route path="/reserva" component={Reserva} />
    </BrowserRouter>
  );
}
