import React from "react";

const NuevoComponente = () => {
  return (

    <div className="container">
      <h1 className="text-center mt-5 mb-5">Componente con Bootstrap</h1>

      <div className="row">

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarjeta 1</h5>
              <p className="card-text">Este es un ejemplo de una tarjeta con Bootstrap</p>
              <button className="btn btn-primary float-end">Leer más</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarjeta 2</h5>
              <p className="card-text">Este es otro ejemplo de una tarjeta con Bootstrap</p>
              <button className="btn btn-danger float-end">Stop</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarjeta 3</h5>
              <p className="card-text">Este es un tercer ejemplo de una tarjeta con Bootstrap</p>
              <button className="btn btn-success float-end">Guardar</button>
            </div>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Tarjeta 4</h5>
              <p className="card-text">Este es un tercer ejemplo de una tarjeta con Bootstrap</p>
              <button className="btn btn-warning float-end">Editar</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>

  );
}

export default NuevoComponente;
