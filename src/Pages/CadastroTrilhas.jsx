import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TrilhasContext } from '../context/TrilhasContext';
import './CadastroTrilhas.css';
import './Home.css'; // Arquivo de estilos CSS


function CadastroTrilha() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { adicionarTrilha } = useContext(TrilhasContext);

  const onSubmit = data => {
    adicionarTrilha(data);
    reset();
  };

  return (
    <div className="cadastro-trilha-container">
      <h1>Cadastro de Nova Trilha</h1>
      <form className="cadastro-trilha-form" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nomeTrilha">Nome da Trilha:</label>
        <input
          type="text"
          id="nomeTrilha"
          {...register('nomeTrilha', { required: true })}
        />
        {errors.nomeTrilha && (
          <span className="error-message">Nome da trilha é obrigatório</span>
        )}

        <label htmlFor="duracaoEstimada">Duração Estimada (em minutos):</label>
        <input
          type="number"
          id="duracaoEstimada"
          {...register('duracaoEstimada', { required: true, min: 1 })}
        />
        {errors.duracaoEstimada && (
          <span className="error-message">Duração estimada é obrigatória e deve ser maior que zero</span>
        )}

        <label htmlFor="trajeto">Trajeto (em quilômetros):</label>
        <input
          type="number"
          id="trajeto"
          {...register('trajeto', { required: true, min: 1 })}
        />
        {errors.trajeto && (
          <span className="error-message">Trajeto é obrigatório e deve ser maior que zero</span>
        )}

        <label htmlFor="cidade">Cidade:</label>
        <input type="text" id="cidade" {...register('cidade', { required: true })} />
        {errors.cidade && (
          <span className="error-message">Cidade é obrigatória</span>
        )}

        <label htmlFor="estado">Estado:</label>
        <input type="text" id="estado" {...register('estado', { required: true })} />
        {errors.estado && (
          <span className="error-message">Estado é obrigatório</span>
        )}

        <label htmlFor="nomeCompletoUsuario">Nome Completo do Usuário:</label>
        <input
          type="text"
          id="nomeCompletoUsuario"
          {...register('nomeCompletoUsuario', { required: true })}
        />
        {errors.nomeCompletoUsuario && (
          <span className="error-message">Nome completo do usuário é obrigatório</span>
        )}

        <label htmlFor="dificuldade">Dificuldade:</label>
        <select id="dificuldade" {...register('dificuldade', { required: true })}>
          <option value="">Selecione</option>
          <option value="Fácil">Fácil</option>
          <option value="Média">Média</option>
          <option value="Difícil">Difícil</option>
        </select>
        {errors.dificuldade && (
          <span className="error-message">Selecione a dificuldade</span>
        )}

        <label htmlFor="tipoTrilha">Tipo de Trilha:</label>
        <select id="tipoTrilha" {...register('tipoTrilha', { required: true })}>
          <option value="">Selecione</option>
          <option value="Caminhada">Caminhada</option>
          <option value="Corrida">Corrida</option>
          <option value="Mountain Bike">Mountain Bike</option>
          <option value="Cavalgada">Cavalgada</option>
        </select>
        {errors.tipoTrilha && (
          <span className="error-message">Selecione o tipo de trilha</span>
        )}

        <label htmlFor="urlImagem">URL Imagem da Trilha:</label>
        <input
          type="text"
          id="urlImagem"
          {...register('urlImagem', { required: true })}
        />
        {errors.urlImagem && (
          <span className="error-message">URL da imagem é obrigatória</span>
        )}

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroTrilha;
