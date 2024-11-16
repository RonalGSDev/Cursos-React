import React from "react";
import { Link } from "react-router-dom"

export const Articulos = () => {

    return(
        <div>
            <h1>Página de Articulos</h1>
            <p>Esta es la pagina de articulos</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}