import React from 'react';
import './Home.css'; // Arquivo de estilos CSS
import './Trilhas.css';


function TrilhaCard({ trilha }) {
  return (
    <div className="trilha-card">
      <h3 className='titulo-card'>{trilha.nome}</h3>
      <img src={trilha.imagem} width={150} height={150} alt={trilha.nome} />
    
      <p>Cidade: {trilha.cidade}</p>
      <p>Estado: {trilha.estado}</p>
      <p>Duração: {trilha.duração}</p>
      <p>Trajeto:{trilha.trajeto}</p>
      <p>Dificuldade: {trilha.dificuldade} </p>
      <p>Tipo:{trilha.tipo}</p>
      <p>Criador:{trilha.criador}</p>
     
      
      {/* Adicione mais informações sobre as trilhas, se necessário */}
    </div>
  );
}

export default TrilhaCard;