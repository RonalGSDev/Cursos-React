import React from "react";
import {Link, useParams} from "react-router-dom";

export const Persona = () => {
     const parametros = useParams();
     let {nombre} = useParams();

     return(
        <div>
            {!nombre && <h1>No hay ningun nombre de persona para mostrar</h1>}
            {nombre && <h1>Binvenido {nombre}</h1>}
            <Link to="/">Volver al inicio</Link>
        </div>
     );
}