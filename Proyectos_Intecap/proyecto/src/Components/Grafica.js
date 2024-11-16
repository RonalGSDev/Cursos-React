import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as chartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

chartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Grafica = () => {
  const [actividades, setActividades] = useState([]);

  useEffect(() => {
    const actividadesGuardadas = JSON.parse(localStorage.getItem('actividades')) || [];
    setActividades(actividadesGuardadas);
  }, []);

  const barData = {
    labels: actividades.map(actividad => actividad[0]),
    datasets: [
      {
        label: 'Tiempo de Ejercicio (min)',
        data: actividades.map(actividad => actividad[1]),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Distancia (km)',
        data: actividades.map(actividad => actividad[2]),
        backgroundColor: 'rgba(153,102,255,0.6)',
      }
    ]
  };

  return (
    <div className="container text-center mt-5">
      <div className="w-75 shadow-lg p-3 rounded-3">
        <h1 className="m-3 text-center text-primary">Gráfica de barras</h1>

        {actividades.length > 0 ? (
          <Bar data={barData} />
        ) : (
          <p>No hay actividades registradas.</p>
        )}
      </div>
    </div>
  );
};

export default Grafica;
