import React from "react";

export const TercerC = ({nombre, apellido, ficha}) => {

    return(
        <div>
            <ul>
                <li>{nombre}</li>
                <li>{apellido}</li>
                <li>{ficha.gropoSanguineo}</li>
                <li>{ficha.alergia}</li>
                <li>{ficha.genero}</li>
                <li>{ficha.edad}</li>
                <li>{ficha.nacionalidad}</li>
            </ul>
        </div>
    );

}