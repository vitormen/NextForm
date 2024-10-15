import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form Component', () => {

  beforeAll(() => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  test('renders form and submits successfully', async () => {
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

    expect(screen.getByLabelText(/Nome Completo/i).value).toBe('');
    expect(screen.getByLabelText(/E-mail/i).value).toBe('');
    expect(screen.getByLabelText(/Data de Nascimento/i).value).toBe('');
    expect(screen.getByLabelText(/Naturalidade/i).value).toBe('');
    expect(screen.getByLabelText(/Telefone/i).value).toBe('');
    expect(screen.getByLabelText(/Sexo/i).value).toBe('');
  });

  
  afterAll(() => {
    window.alert.mockRestore();
  });
});
