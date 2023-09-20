import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './rotas';
import './App.css';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Principal from './paginas/Principal';

function App() {
  return (
    <Router>
      <div>
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/login" component={Login} />
        <Route path="/principal" component={Principal} />
        
      </div>
    </Router>
  );
}

export default App;