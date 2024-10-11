"use client"; 

import { useQuery, gql } from '@apollo/client';

const GET_FORM_DATA = gql`
  query GetFormData {
    formData {
      nomeCompleto
      email
      dataNascimento
      naturalidade
      telefone
      sexo
    }
  }
`;

const FormDataComponent = () => {
  const { loading, error, data } = useQuery(GET_FORM_DATA, {fetchPolicy:"no-cache",});

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Dados do Formulário</h1>
      <p><strong>Nome Completo:</strong> {data.formData.nomeCompleto}</p>
      <p><strong>Email:</strong> {data.formData.email}</p>
      <p><strong>Data de Nascimento:</strong> {data.formData.dataNascimento}</p>
      <p><strong>Naturalidade:</strong> {data.formData.naturalidade}</p>
      <p><strong>Telefone:</strong> {data.formData.telefone}</p>
      <p><strong>Sexo:</strong> {data.formData.sexo}</p>
    </div>
  );
};

export default FormDataComponent;
