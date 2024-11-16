import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "../Components/Inicio";
import { Articulos } from "../Components/Articulos";
import { Contacto } from "../Components/Contacto";
import { Error } from "../Components/Error";
import { Persona } from "../Components/Persona";

export const RoterPrincipal = () => {

  return (
    <BrowserRouter>

      <h1>Cabacera</h1>
      <hr></hr>
      <navbar>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Inicio</NavLink>
          </li>
          <li>
            <NavLink
              to="/Articulos"
              className={({ isActive }) => isActive ? "activado" : ""}
            >Articulos</NavLink>
          </li><li>
            <NavLink
              className={({ isActive }) => isActive ? "activado" : ""}
              to="/Contacto">Contacto</NavLink>
          </li>
        </ul>
      </navbar>

      <hr></hr>

      <section>
        <Routes>
          <Route path="/" element={<Inicio></Inicio>}></Route>
          <Route path="/articulos" element={<Articulos></Articulos>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
          <Route path="/persona/:nombre" element={<Persona></Persona>}></Route>
          <Route path="/persona/-" element={<Persona></Persona>}></Route>
          <Route path="/*" element={<Error></Error>}></Route>
        </Routes>
      </section>

      <hr></hr>

      <footer>
        <p>Pie de página</p>
      </footer>
    </BrowserRouter>
  );
}