// src/Inicio.js
import React from "react";
import { Link } from "react-router-dom"; 

export const Inicio = ({ posts }) => { 
    return (
        <div>
            <h1>Todos los posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link> 
                    </li>
                ))}
            </ul>
        </div>
    );
};
