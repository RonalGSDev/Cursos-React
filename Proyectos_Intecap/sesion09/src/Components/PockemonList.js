import React, { useState, useEffect } from "react";

const PokemonList = () => {
    // Declarar constantes
    const [pokemon, setPokemon] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Después de que se cargue el componente
    useEffect(() => {
        // Solicitud de API
        fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ocurrió un error');
                } else {
                    return response.json();
                }
            })
            .then(data => {
                setPokemon(data.results);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []); // Array vacío indica ejecutar el hook solo una vez, cuando carga

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <h1>Lista de Pokemones</h1>
            <ol>
                {pokemon.map((poke, index) => (
                    <li key={index}>{poke.name}</li>
                ))}
            </ol>
        </div>
    );
}

export default PokemonList;
