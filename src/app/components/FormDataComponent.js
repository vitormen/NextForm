"use client"; 

import { useQuery, gql } from '@apollo/client';

const GET_FORM_DATA_LIST = gql`
  query GetFormDataList {
    formDataList {
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
  const { loading, error, data } = useQuery(GET_FORM_DATA_LIST, { fetchPolicy: "no-cache" });

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro: {error.message}</p>;

  return (
    <div>
      <h1>Dados do Formulário</h1>
      {data.formDataList.map((formData, index) => (
        <div key={index}>
          <p><strong>Nome Completo:</strong> {formData.nomeCompleto}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Data de Nascimento:</strong> {formData.dataNascimento}</p>
          <p><strong>Naturalidade:</strong> {formData.naturalidade}</p>
          <p><strong>Telefone:</strong> {formData.telefone}</p>
          <p><strong>Sexo:</strong> {formData.sexo}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default FormDataComponent;
