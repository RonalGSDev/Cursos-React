import React, {useState} from "react";

const FormularioValidado = () =>{

    const [nombre, setNombre] =useState('');
    const [email, setEmail] =useState('');
   

    return(
        <div>
            <h2>Formulario Validar</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre: </label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={handleChanceNombre}
                    />
                    {errors.nombre && <p className="error">{error.nombre}</p>}
                </div>
                <div>
                    <label>Correo electronico: </label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleChanceEmail}
                    />
                </div>

                <button type="submit"></button>
            </form>
        </div>
    )

}

export default FormularioValidado;