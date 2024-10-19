import React, { useEffect, useState } from "react";

export const NombresComponent = () =>{

    const[nombre, setNombre] = useState('');

    //Efecto para cargar el nombre del local storage cuando carge la pagina
    useEffect(()=> {
        const nombreGuardado = localStorage.getItem('nombre');
        setNombre(nombreGuardado);
    },[]);

    //Funcion para manejar el cambio del input y guardarlo en local storage
    const handleNameChage = (event) => {
        const nuevoNombre = event.target.value;
        setNombre(nuevoNombre);
        localStorage.setItem('nombre', nuevoNombre);
    }

    return(
        <div>
            <input 
                type="text"
                value = {nombre}
                onChange={handleNameChage}
                placeholder="Ingrese su nombre">

            </input>
        </div>
    );
}
