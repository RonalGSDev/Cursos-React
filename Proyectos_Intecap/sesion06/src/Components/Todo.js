import React, { useState, useEffect } from "react";
import ErrorComponente from './ErrorComponente'

const Todo = () => {
    const [tareas, setTareas] = useState(["Tarea Mate", "Comprar leche", "Lavar ropa"]);
    const [tareaEditada, setTareaEditada] = useState("");
    const [indexEditado, setIndexEditado] = useState(null);
    const [nuevaTarea, setNuevaTarea] = useState("");
    const [error, setError] = useState("");

    const simularError = () => {
        setError("El campo no puede estar vacío.");
    };

    useEffect(() => {
        if (indexEditado !== null) {
            setTareaEditada(tareas[indexEditado]);
        } else {
            setTareaEditada("");
        }
    }, [indexEditado, tareas]);

    const agregarTarea = () => {
        if (nuevaTarea.trim() !== "") {
            setTareas([...tareas, nuevaTarea]);
            setNuevaTarea("");
            setError(""); 
        } else {
            simularError(); 
        }
    };

    const eliminarTarea = (index) => {
        const nuevasTareas = tareas.filter((_, i) => i !== index);
        setTareas(nuevasTareas);
    };

    const comenzarEdicion = (index) => {
        setIndexEditado(index);
    };

    const manejarCambio = (e) => {
        setTareaEditada(e.target.value);
    };

    const guardarEdicion = (index) => {
        const nuevasTareas = tareas.map((tarea, i) => (i === index ? tareaEditada : tarea));
        setTareas(nuevasTareas);
        setIndexEditado(null);
    };

    return (
        <div>
            <h1 className="text-center">Lista de tareas</h1>
            <div className="row">

                <div className="col bg-white mt-5 mb-5 pt-3 pb-3">
                    <label className="form-label text-dark">Ingresa una tarea:</label>
                    <input
                        className="form-control"
                        type="text"
                        value={nuevaTarea}
                        onChange={(e) => setNuevaTarea(e.target.value)}
                        placeholder="Nueva tarea"
                    />
                    <button className="btn btn-primary" onClick={agregarTarea}>Agregar tarea</button>
                    {error && <ErrorComponente mensaje={error}></ErrorComponente>}
                </div>



            </div>
            <div className="row">
                <div className="col bg-white  pt-3 pb-3">
                    <h2 className="text-dark">Lista de tareas</h2>
                    <ul className="text-dark">
                        {tareas.map((tarea, index) => (
                            <li  key={index}>
                                {indexEditado === index ? (
                                    <>
                                        <input
                                            type="text"
                                            value={tareaEditada}
                                            onChange={manejarCambio}
                                        />
                                        <button className="btn btn-success" onClick={() => guardarEdicion(index)}>Guardar</button>
                                    </>
                                ) : (
                                    <>
                                        {tarea}
                                        <button className="btn btn-warning ms-3 me-2" onClick={() => comenzarEdicion(index)}>Editar</button>
                                        <button className="btn btn-danger" onClick={() => eliminarTarea(index)}>Eliminar</button>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>

                </div>

            </div>


        </div>
    );
};

export default Todo;
