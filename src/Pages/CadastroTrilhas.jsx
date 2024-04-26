// CadastroTrilhas.js
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TrilhasContext } from '../context/TrilhasContext';
import './CadastroTrilhas.css'; // Arquivo de estilos CSS

function CadastroTrilha() {
  const { register, handleSubmit, reset } = useForm();
  const { adicionarTrilha } = useContext(TrilhasContext);

  const onSubmit = data => {
    adicionarTrilha(data);
    reset();
  };

  return (
    <div className="background-image"> {/* Aplica a classe da imagem de fundo */}
      <div className="cadastro-trilha-container">
        <h1>Cadastro de Nova Trilha</h1>
        <form className="cadastro-trilha-form" onSubmit={handleSubmit(onSubmit)}>
          {/* Inputs do formulário */}
          <label htmlFor="nomeTrilha">Nome da Trilha:</label>
          <input type="text" id="nomeTrilha" {...register('nomeTrilha', { required: true })} />

          <label htmlFor="duracaoEstimada">Duração Estimada (em minutos):</label>
          <input type="number" id="duracaoEstimada" {...register('duracaoEstimada', { required: true, min: 1 })} />

          <label htmlFor="trajeto">Trajeto (em quilômetros):</label>
          <input type="number" id="trajeto" {...register('trajeto', { required: true, min: 1 })} />

          <label htmlFor="cidade">Cidade:</label>
          <input type="text" id="cidade" {...register('cidade', { required: true })} />

          <label htmlFor="estado">Estado:</label>
          <input type="text" id="estado" {...register('estado', { required: true })} />

          <label htmlFor="nomeCompletoUsuario">Nome Completo do Usuário:</label>
          <input type="text" id="nomeCompletoUsuario" {...register('nomeCompletoUsuario', { required: true })} />

          <label htmlFor="dificuldade">Dificuldade:</label>
          <select id="dificuldade" {...register('dificuldade', { required: true })}>
            <option value="">Selecione</option>
            <option value="Fácil">Fácil</option>
            <option value="Média">Média</option>
            <option value="Difícil">Difícil</option>
          </select>

          <label htmlFor="tipoTrilha">Tipo de Trilha:</label>
          <select id="tipoTrilha" {...register('tipoTrilha', { required: true })}>
            <option value="">Selecione</option>
            <option value="Caminhada">Caminhada</option>
            <option value="Corrida">Corrida</option>
            <option value="Mountain Bike">Mountain Bike</option>
            <option value="Cavalgada">Cavalgada</option>
          </select>

          <label htmlFor="urlImagem">URL Imagem da Trilha:</label>
          <input type="text" id="urlImagem" {...register('urlImagem', { required: true })} />

          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroTrilha;
