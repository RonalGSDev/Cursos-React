//importar dependencias 
import React from "react";

const MiComponente = () =>{
    const nombre="Ronal";
    const web = "www.example.com"
    let usuario ={
        nombre: "Ronal",
        direccion: "Zona 5 Xela"
    };

    console.log(usuario)

    return(
        <div>
            <hr></hr>
            <h2>Componente Creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: {usuario.nombre}</li>
                <li>Dirección: {usuario.direccion}</li>
            </ul>
            <p>Nombre exteiror: {nombre}</p>
            <p>Web: {web}</p>

            <p className="fancy-title">Listado de Tecnologias:</p>
            <ul>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
            </ul>
        </div>
    );
}

export default MiComponente;