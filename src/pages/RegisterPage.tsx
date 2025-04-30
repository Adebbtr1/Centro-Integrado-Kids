import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthLayout from '../components/auth/AuthLayout';
import RegisterForm from '../components/auth/RegisterForm';
import { RegisterFormData } from '../types/auth';

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = (data: RegisterFormData) => {
    setIsLoading(true);
    
    // Retrieve existing registered users
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    
    // Add new user
    registeredUsers.push({
      username: data.username,
      email: data.email,
      fullName: data.username  // Use username as full name for now
    });
    
    // Store updated users list
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt with:', data);
      setIsLoading(false);
      
      // Redirect to login
      navigate('/login');
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Criar conta" 
      subtitle="Junte-se à nossa comunidade hoje"
    >
      <RegisterForm onSubmit={handleRegister} isLoading={isLoading} />
    </AuthLayout>
  );
};

export default RegisterPage;
