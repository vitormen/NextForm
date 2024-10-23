"use client";

import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';

const Form = () => {
  const validationSchema = Yup.object({
    nomeCompleto: Yup.string().required('Nome completo é obrigatório'),
    email: Yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    dataNascimento: Yup.date().required('Data de nascimento é obrigatória'),
    naturalidade: Yup.string().required('Naturalidade é obrigatória'),
    telefone: Yup.string().required('Telefone é obrigatório'),
    sexo: Yup.string().required('Sexo é obrigatório'),
  });

  return (
    <div className="form-container">
      <h1>Formulário</h1>

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
          <form onSubmit={handleSubmit}>
            <div className="inline-fields">
              <label>
                Nome Completo:
                <Field
                  type="text"
                  name="nomeCompleto"
                  placeholder="Digite seu nome completo"
                />
                <ErrorMessage name="nomeCompleto" component="div" className="error" />
              </label>

              <label>
                E-mail:
                <Field
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </label>
            </div>

            <label>
              Data de Nascimento:
              <Field type="date" name="dataNascimento" />
              <ErrorMessage name="dataNascimento" component="div" className="error" />
            </label>

            <label>
              Naturalidade:
              <Field
                type="text"
                name="naturalidade"
                placeholder="Digite sua naturalidade"
              />
              <ErrorMessage name="naturalidade" component="div" className="error" />
            </label>

            <label>
              Telefone:
              <Field
                type="tel"
                name="telefone"
                placeholder="Digite seu telefone"
              />
              <ErrorMessage name="telefone" component="div" className="error" />
            </label>

            <label>
              Sexo:
              <Field as="select" name="sexo">
                <option value="">Selecione</option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
                <option value="outro">Outro</option>
              </Field>
              <ErrorMessage name="sexo" component="div" className="error" />
            </label>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
