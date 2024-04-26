// Trilhas.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import TrilhaCard from './TrilhaCard';
import './Home.css'; // Arquivo de estilos CSS

function Trilhas() {
  // Suponha que você tenha uma lista de trilhas disponível no estado ou em algum contexto
  const trilhas = [
    { id: 1, nome: 'Trilha Lagoinha do leste',criador:'Willian Ribeiro',tipo:'trekking',trajeto:'2km',duração: '60min', cidade: 'florianopolis',estado:'Santa Catarina', dificuldade: 'Média', imagem: 'https://images.pexels.com/photos/19234571/pexels-photo-19234571/free-photo-of-por-do-sol-homem-deserto-caminhada.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, nome: 'Trilha Praia Dos Naufragados',criador:'Willian Ribeiro',tipo:'trekking',trajeto:'2km',duração: '60min',cidade: 'florianopolis',estado:'Santa Catarina', dificuldade: 'Média', imagem: 'https://images.pexels.com/photos/19753828/pexels-photo-19753828/free-photo-of-frio-com-frio-neve-panorama.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, nome: 'Trilha Praia Das Aranhas',criador:'Willian Ribeiro',tipo:'trekking',trajeto:'2km',duração: '60min',cidade: 'florianopolis',estado:'Santa Catarina', dificuldade: 'Média', imagem: 'https://images.pexels.com/photos/7084186/pexels-photo-7084186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    // Adicione mais trilhas conforme necessário
  ];

  return (
    <div>
      {/* Cabeçalho */}
      <header>
        <h1>Trilhas</h1>
        
      </header>

      {/* Seção de listagem de trilhas */}
      <section className="trilhas-list">
        <h2>Lista de Trilhas</h2>
        {/* Renderização da lista de trilhas */}
        {trilhas.map(trilha => (
          <TrilhaCard key={trilha.id} trilha={trilha} />
        ))}
      </section>

      {/* Rodapé */}
      <footer>
        <p>&copy; 2024 Willian Ribeiro. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Trilhas;
