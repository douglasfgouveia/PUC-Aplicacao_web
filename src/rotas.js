import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import Cadastro from './paginas/Cadastros';
import Login from './paginas/Login';
import Principal from './paginas/Principal';

function Rotas() {
  return (
    <Router>
      <Routes> 
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Principal" element={<Principal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default Rotas;