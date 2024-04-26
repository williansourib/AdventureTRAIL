import React, { createContext, useState, useContext, useEffect } from 'react';
import trilhasData from '../data/trilhas.json';

// Criar contexto
export const TrilhasContext = createContext();

// Provedor de contexto
export const useTrilhas = () => useContext(TrilhasContext);

export const TrilhasProvider = ({ children }) => {
  const [trilhas, setTrilhas] = useState([]);

  // Carregar trilhas do arquivo JSON ao inicializar o componente
  useEffect(() => {
    setTrilhas(trilhasData); // Define as trilhas do arquivo JSON como estado inicial
  }, []); // Executa apenas uma vez, ao montar o componente

  const adicionarTrilha = novaTrilha => {
    setTrilhas([...trilhas, novaTrilha]);
  };

  return (
    <TrilhasContext.Provider value={{ trilhas, adicionarTrilha }}>
      {children}
    </TrilhasContext.Provider>
  );
};
