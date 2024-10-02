import React from "react";

export const SegundoC = () =>{
    const libros = ["Harry Potter","Las 48 leyes del poder","El pequelo cerdo capitalista"];

    return(
        <div>
            <h1>Listado de Libros</h1>
            {
                (() => {

                    if(libros.length >=1){
                        return(
                            <ul>
                                {libros.map((libro,indice) => (
                                    <li key={indice}>{libro}</li>

                                ))}
                            </ul>
                        )
                    }else{
                        return <p>No hay libros</p>
                    }

                })()
            }
        </div>
    );
}