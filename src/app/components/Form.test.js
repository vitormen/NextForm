import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './Form';
import axios from 'axios';

jest.mock('axios');

describe('Form Component', () => {
  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterAll(() => {
    window.alert.mockRestore();
  });

  test('renders form and submits successfully', async () => {
    axios.post.mockResolvedValueOnce({});

    render(<Form />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Nome Completo/i), 'vitor menezes');
    await user.type(screen.getByLabelText(/E-mail/i), 'vitor.menezes@test.com');
    await user.type(screen.getByLabelText(/Data de Nascimento/i), '2001-05-19');
    await user.type(screen.getByLabelText(/Naturalidade/i), 'Brasileiro');
    await user.type(screen.getByLabelText(/Telefone/i), '(88) 91234-5678');
    await user.selectOptions(screen.getByLabelText(/Sexo/i), 'masculino');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(window.alert).toHaveBeenCalledWith('Dados enviados com sucesso!');

    await waitFor(() => {
      expect(screen.getByLabelText(/Nome Completo/i).value).toBe('');
      expect(screen.getByLabelText(/E-mail/i).value).toBe('');
      expect(screen.getByLabelText(/Data de Nascimento/i).value).toBe('');
      expect(screen.getByLabelText(/Naturalidade/i).value).toBe('');
      expect(screen.getByLabelText(/Telefone/i).value).toBe('');
      expect(screen.getByLabelText(/Sexo/i).value).toBe('');
    });
  });

  test('shows validation errors when fields are empty', async () => {
    render(<Form />);

    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(await screen.findByText(/Nome completo é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/E-mail é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/Data de nascimento é obrigatória/i)).toBeInTheDocument();
    expect(await screen.findByText(/Naturalidade é obrigatória/i)).toBeInTheDocument();
    expect(await screen.findByText(/Telefone é obrigatório/i)).toBeInTheDocument();
    expect(await screen.findByText(/Sexo é obrigatório/i)).toBeInTheDocument();
  });

  test('handles submit error', async () => {
    axios.post.mockRejectedValueOnce(new Error('Erro ao enviar dados'));
    render(<Form />);

    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/Nome Completo/i), 'vitor menezes');
    await user.type(screen.getByLabelText(/E-mail/i), 'vitor.menezes@test.com');
    await user.type(screen.getByLabelText(/Data de Nascimento/i), '2001-05-19');
    await user.type(screen.getByLabelText(/Naturalidade/i), 'Brasileiro');
    await user.type(screen.getByLabelText(/Telefone/i), '(88) 91234-5678');
    await user.selectOptions(screen.getByLabelText(/Sexo/i), 'masculino');

    await user.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(window.alert).toHaveBeenCalledWith('Erro ao enviar os dados.');
  });
});
