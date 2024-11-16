import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import RoterPrincipal from './Routes/RoutePricnipal';

const App = () => {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/roterprincipal/*" element={<RoterPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
