import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Inicio from '../Components/Inicio';
import Registro from '../Components/RegistrarActividad';
import Grafica from '../Components/Grafica';
import Error from "../Components/Error";
import Historial from "../Components/Historial";

export const RoterPrincipal = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <nav className="navbar navbar-expand-lg p-3 navbar-dark bg-dark">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/roterprincipal/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/roterprincipal/registro"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Registro de actividad
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/roterprincipal/historial"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Historial de actividades
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/roterprincipal/grafica"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Gráfica
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <section className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/historial" element={<Historial />} />
          <Route path="/grafica" element={<Grafica />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        <p>Pie de página - Proyecto final Intecap</p>
      </footer>
    </div>
  );
};

export default RoterPrincipal;
