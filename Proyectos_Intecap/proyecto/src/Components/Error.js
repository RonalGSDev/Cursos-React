import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="text-center">
        <h1 className="text-danger">Error 404</h1>
        <p className="lead text-muted">Esta página no existe</p>
        <Link
          className="btn btn-primary mt-4"
          to="/"
        >
          Volver al inicio de sesión
        </Link>
      </div>
    </div>
  );
}

export default Error;
