import React, { useEffect, useState } from 'react';

const Historial = () => {

  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('actividades')) || [];
    setActividades(actividadesGuardadas);
  }, []);

  return (
    <div className="container mt-5 d-flex justify-content-center ">

      <div className="w-75 shadow-lg p-3 rounded-3">

        <h1 className="mt-3 mb-4 text-center text-primary">Historial de Actividades</h1>

        {actividades.length === 0 ? (
          <p className="text-center">No hay actividades registradas.</p>
        ) : (

          <div className='table-responsive'>
            <table className="table table-bordered text-center table-striped table-hover">
              <thead>
                <tr>
                  <th>Actividad</th>
                  <th>Tiempo de Ejercicio (min)</th>
                  <th>Distancia (km)</th>
                  <th>Tiempo de Descanso (min)</th>
                  <th>En Grupo</th>
                </tr>
              </thead>
              <tbody>
                {actividades.map((actividad, index) => (
                  <tr key={index}>
                    <td>{actividad[0]}</td>
                    <td>{actividad[1]}</td>
                    <td>{actividad[2]}</td>
                    <td>{actividad[3]}</td>
                    <td>{actividad[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}
      </div>
    </div>
  );
};

export default Historial;
