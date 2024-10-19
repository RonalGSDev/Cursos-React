import React, { useState } from "react";
import ErrorComponente from "./ErrorComponente";

const ListaNombres = ({ nombres }) => {
  const [error, setError] = useState("");

  const simularError = () => {
    setError("Ha ocurrido un error inesperado");
  };

  return (
    <div>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>

      <button onClick={simularError}>Simular Error</button>
      {error && <ErrorComponente mensaje={error}></ErrorComponente>}
    </div>
  );
};

export default ListaNombres;
