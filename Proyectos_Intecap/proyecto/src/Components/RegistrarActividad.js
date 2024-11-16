import React, { useState } from 'react';

const RegistrarActividad = () => {
  const [actividadFisica, setActividadFisica] = useState('');
  const [tiempoEjercicio, setTiempoEjercicio] = useState('');
  const [distancia, setDistancia] = useState('');
  const [tiempoDescanso, setTiempoDescanso] = useState('');
  const [enGrupo, setEnGrupo] = useState('Si');

  const handleSave = (e) => {
    e.preventDefault();

  
    const actividadData = [
      actividadFisica, 
      tiempoEjercicio, 
      distancia, 
      tiempoDescanso, 
      enGrupo
    ];

    const actividadesGuardadas = JSON.parse(localStorage.getItem('actividades')) || [];
    actividadesGuardadas.push(actividadData);
    localStorage.setItem('actividades', JSON.stringify(actividadesGuardadas));
    alert('Datos guardados correctamente');
  };

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="w-75 shadow-lg p-3 rounded-3">
        <h1 className="m-3 text-center text-primary">Registro de actividades</h1>

        <form onSubmit={handleSave}>
          <div className="mb-3">
            <label className="form-label">Actividad Fisica:</label>
            <input
              type="text"
              className="form-control"
              value={actividadFisica}
              onChange={(e) => setActividadFisica(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tiempo de ejercicio (min):</label>
            <input
              type="number"
              className="form-control"
              value={tiempoEjercicio}
              onChange={(e) => setTiempoEjercicio(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Distancia (km):</label>
            <input
              type="number"
              className="form-control"
              value={distancia}
              onChange={(e) => setDistancia(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tiempo de descanso (minutos):</label>
            <input
              type="number"
              className="form-control"
              value={tiempoDescanso}
              onChange={(e) => setTiempoDescanso(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">¿En grupo?</label>
            <select
              className="form-select"
              value={enGrupo}
              onChange={(e) => setEnGrupo(e.target.value)}
              required
            >
              <option value="Si">Si</option>
              <option value="No">No</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary mt-2 w-100">
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrarActividad;
