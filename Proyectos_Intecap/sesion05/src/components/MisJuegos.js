import React, { useEffect, useReducer } from "react";
import { juegosReducer } from "../reducers/juegosreducer";

const init = () => {
    return JSON.parse(localStorage.getItem("juegos")) || [];
};

export const MisJuegos = () => {
    const [juegos, dispatch] = useReducer(juegosReducer, [], init);

    useEffect(() => {
        localStorage.setItem("juegos", JSON.stringify(juegos));
    }, [juegos]);

    const conseguirDatosForm = e => {
        e.preventDefault(); // Corrección aquí
        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value // Asegúrate de que esto coincida
        };

        const accion = {
            type: "crear",
            payload: juego
        };

        dispatch(accion);
        console.log(juego);
    };

    const borramelo = id => {
        const accion = {
            type: "borrar",
            payload: id // Cambié 'juego' por 'id'
        };
        dispatch(accion); // No olvides despachar la acción
    };

    return (
        <div>
            <h1>Estos son mis videojuegos</h1>
            <p>Número de videojuegos: {juegos.length}</p>
            <ul>
                {
                    juegos.map(juego => (
                        <li key={juego.id}>
                            {juego.titulo}
                            &nbsp;<button onClick={() => borramelo(juego.id)}>X</button>
                        </li>
                    ))
                }
            </ul>

            <form onSubmit={conseguirDatosForm}>
                <input type="text" name="titulo" placeholder="titulo" required />
                <textarea name="descripcion" placeholder="descripcion" required></textarea> {/* Corrección aquí */}
                <input type="submit" value="Guardar" />
            </form>
        </div>
    );
};
