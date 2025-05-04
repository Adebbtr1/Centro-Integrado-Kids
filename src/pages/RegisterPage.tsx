import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';
import { RegisterFormData } from '../types/auth';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Para exibir erro, se necessário

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true);
    setError(null); // Limpa o erro antes de tentar novamente

    try {
      // Envia os dados de registro para o back-end
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
        }),
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Erro ao registrar usuário');
      }

      // Recebe os dados de resposta (token e usuário)
      const result = await response.json();
      const { token, user } = result;

      // Armazena o token no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Você pode armazenar os dados do usuário também, se necessário

      // Redireciona para a página de login
      setIsLoading(false);
      navigate('/login');
    } catch (err) {
      setIsLoading(false);
      if (err instanceof Error) {
        setError(err.message); // Exibe o erro
      } else {
        setError('Erro inesperado');
      }
    }
  };

  return (
    <AuthLayout
      title="Criar conta"
      subtitle="Junte-se à nossa comunidade hoje"
    >
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Exibe mensagem de erro */}
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default RegisterPage;
