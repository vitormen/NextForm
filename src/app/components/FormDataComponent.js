"use client";

import { useQuery, gql } from '@apollo/client';
import styles from './FormDataComponent.module.sass';

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
    <section className={styles.section}>
      {data && data.formDataList.length > 0 ? (
        <div>
          <h1>Dados do Formulário</h1>
          {data.formDataList.map((formData, index) => (
            <article key={index} className={styles.article}>
              <header>
                <h2>Nome Completo: {formData.nomeCompleto}</h2>
              </header>
              <ul>
                <li><span className={styles.label}>Email:</span> {formData.email}</li>
                <li><span className={styles.label}>Data de Nascimento:</span> {formData.dataNascimento}</li>
                <li><span className={styles.label}>Naturalidade:</span> {formData.naturalidade}</li>
                <li><span className={styles.label}>Telefone:</span> {formData.telefone}</li>
                <li><span className={styles.label}>Sexo:</span> {formData.sexo}</li>
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <p>Nenhum dado disponível.</p>
      )}
    </section>
  );
};

export default FormDataComponent;
