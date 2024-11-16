import React from "react";
import { Routes, Route, BrowserRouter, NavLink } from "react-router-dom";
import { Inicio } from "./Inicio";
import { Post } from "./Post";
import { Error } from "./Error";

const posts = [
  { id: 1, title: 'Primer Post', content: 'Este es el contenido del primer post' },
  { id: 2, title: 'Segundo Post', content: 'Este es el contenido del segundo post' },
  { id: 3, title: 'Tercer Post', content: 'Este es el contenido del tercer post' }
];

export const RoutePrincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio posts={posts}/>}>Inicio</Route>
        <Route path="/post/:id" element={<Post posts={posts} />} /> 

        <Route path="/*" element={<Error></Error>}>Error</Route>
      </Routes>
    </BrowserRouter>
  );
}