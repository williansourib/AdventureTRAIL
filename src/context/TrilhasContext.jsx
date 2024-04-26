import React, { createContext, useState, useEffect } from 'react';
import trilhasData from '../data/trilhas.json'; // Importa os dados das trilhas do arquivo JSON

// Criar contexto
export const TrilhasContext = createContext();

// Provedor de contexto
// Provedor de contexto
export const TrilhasProvider = ({ children }) => {
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    // Define os dados das trilhas diretamente do arquivo JSON importado
    console.log(trilhasData)
    setTrilhas(trilhasData);
  }, []);

  const adicionarTrilha = (novaTrilha) => {
    const novaTrilhaFormatada = {
      id: trilhas.length + 1, // ou qualquer lógica para gerar um novo ID
      nome: novaTrilha.nomeTrilha,
      cidade: novaTrilha.cidade,
      estado: novaTrilha.estado,
      duração: novaTrilha.duracaoEstimada,
      trajeto: novaTrilha.trajeto,
      dificuldade: novaTrilha.dificuldade,
      tipo: novaTrilha.tipoTrilha,
      criador: novaTrilha.nomeCompletoUsuario,
      imagem: novaTrilha.urlImagem
    };
    console.log(novaTrilhaFormatada)
    setTrilhas([...trilhas, novaTrilhaFormatada]);
    console.log(trilhas)
    
  };

  return (
    <TrilhasContext.Provider value={{ trilhas, adicionarTrilha }}>
      {children}
    </TrilhasContext.Provider>
  );
};
