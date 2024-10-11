"use client";

import { useState } from 'react';

const Form = () => {
  const [nomeCompleto, setNomeCompleto] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [naturalidade, setNaturalidade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [sexo, setSexo] = useState('');
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados enviados:', { nomeCompleto, email, dataNascimento, naturalidade, telefone, sexo });
    setSucesso(true);
    setNomeCompleto('');
    setEmail('');
    setDataNascimento('');
    setNaturalidade('');
    setTelefone('');
    setSexo('');
  };

  return (
    <div className="form-container">
        <h1>formulário</h1>
      {sucesso && <p className="success-message">Dados enviados com sucesso!</p>}
      <form onSubmit={handleSubmit}>
        <div className="inline-fields">
          <label>
            Nome Completo:
            <input
              type="text"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              placeholder="Digite seu nome completo"
              required
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
              required
            />
          </label>
        </div>
        <label>
          Data de Nascimento:
          <input
            type="date"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            required
          />
        </label>
        <label>
          Naturalidade:
          <input
            type="text"
            value={naturalidade}
            onChange={(e) => setNaturalidade(e.target.value)}
            placeholder="Digite sua naturalidade"
            required
          />
        </label>
        <label>
          Telefone:
          <input
            type="tel"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            placeholder="Digite seu telefone"
            required
          />
        </label>
        <label>
          Sexo:
          <select
            value={sexo}
            onChange={(e) => setSexo(e.target.value)}
            required
          >
            <option value="">Selecione</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
