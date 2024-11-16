import React, { useState } from "react";
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as chartJS, BarElement, CategoryScale, ArcElement, Tooltip, Legend, LinearScale } from "chart.js";

chartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const SalesChart = () => {
  const [sales, setSales] = useState([]);
  const [producto, setProducto] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddSale = () => {
    const newSale = {
      producto,
      quantity: parseInt(quantity),
      price: parseFloat(price)
    };
    setSales([...sales, newSale]);
    setProducto('');
    setQuantity('');
    setPrice('');
  };

  //construir grafico de barras
  const barData = {
    labels: sales.map(sale => sale.producto),
    datasets: [
      {
        label: 'cantidad vendida',
        data: sales.map(sale => sale.quantity),
        backgroundColor: 'rgba(75,192,192,0.6)',
      },
      {
        label: 'Ventas (Q)',
        data: sales.map(sale => sale.quantity * sale.price),
        backgroundColor: 'rgba(153,102,255,0.6)',
      }
    ]
  };

  //construir grafico de sectores o pie
  const pieData = {
    labels: sales.map(sale => sale.producto),
    datasets:[
      {
         label: 'Ventas (Q)',
         data: sales.map(sale => sale.quantity * sale.price),
         backgroundColor: [
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(255,162,235,0.6)',
         ]
      }
     
    ]
  }

  return (
    <div>
      <h1>Detalles de venta</h1>

      <div>
        <input
          type="text"
          placeholder="producto"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
        />

        <input
          type="number"
          placeholder="Cantidad"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <input
          type="number"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button onClick={handleAddSale}>Agregar</button>
      </div>

      <h2>Tabla de ventas</h2>
      <table>
        <thead>
          <tr>
            <th>Producto</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale,index)=>(
            <tr key={index}>
              <td>{sale.producto}</td>
              <td>{sale.quantity}</td>
              <td>{sale.price}</td>
              <td>{sale.quantity * sale.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

          

      <h2>Grafica de Barras</h2>
      <Bar data={barData}/><br></br>

      <h2>Grafica de Pie</h2>
      <Pie data={pieData} />
      
    </div>
  );

}

export default SalesChart;