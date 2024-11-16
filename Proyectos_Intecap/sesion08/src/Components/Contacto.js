import React from "react";
import { Link } from "react-router-dom"

export const Contacto = () => {

    return(
        <div>
            <h1>Página de Contacto</h1>
            <p>Esta es la pagina de contacto</p>
            <Link to="/">Volver al inicio</Link>
        </div>
    );
}