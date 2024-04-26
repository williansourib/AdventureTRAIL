// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Trilhas from './Pages/Trilhas';
import CadastroTrilha from './Pages/CadastroTrilhas';
import './App.css'; // Arquivo de estilos CSS

function App() {
  return (
    <Router>
      <header className="navbar">
        <h1>Adventure Trail</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trilhas">Trilhas</a></li>
            <li><a href="/cadastro-trilhas">Cadastro de Trilhas</a></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/trilhas" element={<Trilhas />} />
        <Route path="/cadastro-trilhas" element={<CadastroTrilha />} />   
      </Routes>

      <footer>
        <p>&copy; 2024 Willian Ribeiro. Todos os direitos reservados.</p>
      </footer>
    </Router>
  );
}

export default App;