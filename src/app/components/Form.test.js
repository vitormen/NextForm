import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form Component', () => {
  test('renders form and submits successfully', () => {
    render(<Form />);

    expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Nascimento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Naturalidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sexo/i)).toBeInTheDocument(); 

    fireEvent.change(screen.getByLabelText(/Nome Completo/i), {
      target: { value: 'vitor menezes' },
    });
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: 'vitor.menezes@test.com' },
    });
    fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), {
      target: { value: '2001-05-19' },
    });
    fireEvent.change(screen.getByLabelText(/Naturalidade/i), {
      target: { value: 'Brsileiro' },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: '(88) 91234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/Sexo/i), {
      target: { value: 'masculino' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    expect(screen.getByText(/Dados enviados com sucesso!/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Nome Completo/i).value).toBe('');
    expect(screen.getByLabelText(/E-mail/i).value).toBe('');
    expect(screen.getByLabelText(/Data de Nascimento/i).value).toBe('');
    expect(screen.getByLabelText(/Naturalidade/i).value).toBe('');
    expect(screen.getByLabelText(/Telefone/i).value).toBe('');
    expect(screen.getByLabelText(/Sexo/i).value).toBe('');
  });
});
