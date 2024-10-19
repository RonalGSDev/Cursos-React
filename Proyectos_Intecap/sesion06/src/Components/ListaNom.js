import React, { useState, useEffect } from "react";

const ListaNom = () => {
  const [nombres, setNombres] = useState(["Emma", "Ana", "Mario", "Ludwing"]);
  const [nombreEditado, setNombreEditado] = useState("");
  const [indexEditado, setIndexEditado] = useState(null);

  useEffect(() => {
    if (indexEditado !== null) {
      setNombreEditado(nombres[indexEditado]);
    } else {
      setNombreEditado("");
    }
  }, [indexEditado, nombres]);

  const eliminarNombre = (index) => {
    const nuevosNombres = nombres.filter((_, i) => i !== index);
    setNombres(nuevosNombres);
  };

  const comenzarEdicion = (index) => {
    setIndexEditado(index);
  };

  const manejarCambio = (e) => {
    setNombreEditado(e.target.value);
  };

  const guardarEdicion = (index) => {
    const nuevosNombres = nombres.map((nombre, i) =>
      i === index ? nombreEditado : nombre
    );
    setNombres(nuevosNombres); 
    setIndexEditado(null);
  };

  return (
    <div>
      <h2>Listado de nombres</h2>
      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>
            {indexEditado === index ? (
              <>
                <input
                  type="text"
                  value={nombreEditado}
                  onChange={manejarCambio}
                />
                <button onClick={() => guardarEdicion(index)}>Guardar</button>
              </>
            ) : (
              <>
                {nombre}
                <button onClick={() => comenzarEdicion(index)}>Editar</button>
                <button onClick={() => eliminarNombre(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNom;
