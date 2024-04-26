// Trilhas.js
import React from 'react';
import { useTrilhas } from '../context/TrilhasContext';
import TrilhaCard from './TrilhaCard';
import CadastroTrilha from './CadastroTrilhas';
import './Home.css'; // Arquivo de estilos CSS

function Trilhas() {
  const { trilhas } = useTrilhas();

  return (
    <div className="background-image"> {/* Aplica a classe da imagem de fundo */}
      {/* Cabeçalho */}
      <header className="navbar">
        <h1>Trilhas</h1>
        <nav>
          {/* Links de navegação */}
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trilhas">Trilhas</a></li>
            <li><a href="/cadastro-trilhas">Cadastro de Trilhas</a></li>
          </ul>
        </nav>
      </header>

      {/* Seção de listagem de trilhas */}
      <section className="trilhas-list">
        <h2>Lista de Trilhas</h2>
        {/* Renderização da lista de trilhas */}
        {trilhas.map(trilha => (
          <TrilhaCard key={trilha.nome} trilha={trilha} />
        ))}

        {/* Formulário de cadastro de trilhas */}
        <CadastroTrilha />
      </section>

      {/* Rodapé */}
      <footer>
        <p>&copy; 2024 Willian Ribeiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Trilhas;
