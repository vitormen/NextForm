import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from './Form';

describe('Form Component', () => {
  test('renders form and submits successfully', () => {
    render(<Form />);

    // Verifica se os campos estão presentes
    expect(screen.getByLabelText(/Nome Completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Nascimento/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Naturalidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Telefone/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Sexo/i)).toBeInTheDocument(); 

    // Preenche o formulário
    fireEvent.change(screen.getByLabelText(/Nome Completo/i), {
      target: { value: 'João Silva' },
    });
    fireEvent.change(screen.getByLabelText(/E-mail/i), {
      target: { value: 'joao.silva@example.com' },
    });
    fireEvent.change(screen.getByLabelText(/Data de Nascimento/i), {
      target: { value: '2000-01-01' },
    });
    fireEvent.change(screen.getByLabelText(/Naturalidade/i), {
      target: { value: 'São Paulo' },
    });
    fireEvent.change(screen.getByLabelText(/Telefone/i), {
      target: { value: '(11) 91234-5678' },
    });
    fireEvent.change(screen.getByLabelText(/Sexo/i), {
      target: { value: 'masculino' },
    });

    // Submete o formulário
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }));

    // Verifica se a mensagem de sucesso é exibida
    expect(screen.getByText(/Dados enviados com sucesso!/i)).toBeInTheDocument();

    // Verifica se os campos foram limpos
    expect(screen.getByLabelText(/Nome Completo/i).value).toBe('');
    expect(screen.getByLabelText(/E-mail/i).value).toBe('');
    expect(screen.getByLabelText(/Data de Nascimento/i).value).toBe('');
    expect(screen.getByLabelText(/Naturalidade/i).value).toBe('');
    expect(screen.getByLabelText(/Telefone/i).value).toBe('');
    expect(screen.getByLabelText(/Sexo/i).value).toBe('');
  });
});
