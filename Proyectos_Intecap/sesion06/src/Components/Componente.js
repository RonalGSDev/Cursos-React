import React, {useState} from "react";
import ErrorComponente from "./ErrorComponente";

const Componente = () => {

    const [error,setError] = useState('');

    const sumularError = () =>{
        setError('Ha ocurrido un error inesperado');
    }

    return (

        <div>
            <h1>Componente error</h1>
            <button onClick={sumularError}>Simular Error</button>
            {error && <ErrorComponente mensaje={error}></ErrorComponente>}
        </div>

    );

}

export default Componente;