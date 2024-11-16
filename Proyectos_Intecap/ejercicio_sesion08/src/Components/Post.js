// src/Post.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

export const Post = ({ posts }) => {
  const { id } = useParams(); 
  const post = posts.find((p) => p.id === parseInt(id)); 

  return (
    <div>
      {post ? (
        <>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </>
      ) : (
        <h2>Post no encontrado</h2>
      )}
      <Link to="/" >Volver al inicio</Link>
    </div>
  );
}
