import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';
import { LoginFormData } from '../types/auth';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Para exibir erro, se necessário

  const handleLogin = async (data: LoginFormData) => {
    console.log('Dados de login:', data);
    setIsLoading(true);
    setError(null); // Limpa o erro antes de tentar novamente

    try {
      // Envia as credenciais de login para o back-end
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.message || 'Erro ao fazer login');
      }

      // Recebe os dados de resposta (token e usuário)
      const result = await response.json();
      const { token, user } = result;

      // Armazena o token no localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user)); // Você pode armazenar os dados do usuário também, se necessário

      // Redireciona para a página inicial
      setIsLoading(false);
      navigate('/home');
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
      title="Entre na sua conta"
      subtitle="Bem-vindo de volta! Por favor, insira seus dados."
    >
      {error && <div className="text-red-500 mb-4">{error}</div>} {/* Exibe mensagem de erro */}
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default LoginPage;
