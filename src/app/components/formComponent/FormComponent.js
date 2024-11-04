"use client";

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import styles from './FormComponent.module.sass'; // Importação do módulo Sass

const FormComponent = () => {
  const validationSchema = Yup.object({
    nomeCompleto: Yup.string().required('Nome completo é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    dataNascimento: Yup.date().required('Data de nascimento é obrigatória'),
    naturalidade: Yup.string().required('Naturalidade é obrigatória'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    sexo: Yup.string().required('Sexo é obrigatório'),
  });

  return (
    <div className={styles['form-container']}>
      <h1 className={styles.title}>Formulário</h1>

      <Formik
        initialValues={{
          nomeCompleto: '',
          email: '',
          dataNascimento: '',
          naturalidade: '',
          telefone: '',
          sexo: '',
        }}
        validationSchema={validationSchema} 
        onSubmit={async (values, { resetForm }) => {
          try {
            await axios.post('http://localhost:3001/formDataList', values);
            alert('Dados enviados com sucesso!');
            resetForm();
          } catch (error) {
            alert('Erro ao enviar os dados.');
          }
        }}
      >
        {({ isSubmitting, handleSubmit }) => (
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
              Nome Completo:
              <Field
                className={styles.input} // Usando a classe específica
                type="text"
                name="nomeCompleto"
                placeholder="Digite seu nome completo"
              />
              <ErrorMessage name="nomeCompleto" component="div" className={styles.error} />
            </label>

            <label className={styles.label}>
              E-mail:
              <Field
                className={styles.input} // Usando a classe específica
                type="email"
                name="email"
                placeholder="Digite seu e-mail"
              />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </label>

            <div className={styles['inline-fields']}>
              <label className={styles.label}>
                Naturalidade:
                <Field
                  className={styles.input} // Usando a classe específica
                  type="text"
                  name="naturalidade"
                  placeholder="Digite sua naturalidade"
                />
                <ErrorMessage name="naturalidade" component="div" className={styles.error} />
              </label>

              <label className={styles['data-nascimento']}>
                Data de Nascimento:
                <Field className={styles.input} type="date" name="dataNascimento" />
                <ErrorMessage name="dataNascimento" component="div" className={styles.error} />
              </label>
            </div>

            <div className={styles['inline-fields']}>
              <label className={styles.label}>
                Telefone:
                <Field
                  className={styles.input} // Usando a classe específica
                  type="tel"
                  name="telefone"
                  placeholder="Digite seu telefone"
                />
                <ErrorMessage name="telefone" component="div" className={styles.error} />
              </label>

              <label className={styles.label}>
                Sexo:
                <Field as="select" name="sexo" className={styles.select}> {/* Usando a classe específica */}
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </Field>
                <ErrorMessage name="sexo" component="div" className={styles.error} />
              </label>
            </div>

            <button type="submit" className={styles.button} disabled={isSubmitting}> {/* Usando a classe específica */}
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
