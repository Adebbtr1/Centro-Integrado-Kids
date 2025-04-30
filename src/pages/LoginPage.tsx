import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import LoginForm from '../components/auth/LoginForm';
import { LoginFormData } from '../types/auth';

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (data: LoginFormData) => {
    setIsLoading(true);
    
    setTimeout(() => {
      console.log('Login attempt with:', data);
      setIsLoading(false);
      navigate('/home');
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Entre na sua conta" 
      subtitle="Bem-vindo de volta! Por favor, insira seus dados."
    >
      <LoginForm onSubmit={handleLogin} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default LoginPage;
