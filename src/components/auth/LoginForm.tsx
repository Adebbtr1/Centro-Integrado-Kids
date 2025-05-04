import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { LoginFormData } from '../../types/auth';

interface LoginFormProps {
  onSubmit: (data: LoginFormData) => void;
  isLoading?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof LoginFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LoginFormData, string>> = {};
    
    if (!formData.email) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Senha deve ter pelo menos 6 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    
    if (errors[name as keyof LoginFormData]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          setErrors({ email: errorData.message || 'Erro ao fazer login' });
          return;
        }
  
        const data = await response.json();
  
        // Salva token e dados do usuário no localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('registeredUser', JSON.stringify(data.user));
  
        onSubmit(formData); // continua o fluxo normal do app
      } catch (error) {
        console.error('Erro ao fazer login:', error);
        setErrors({ email: 'Erro de rede. Tente novamente.' });
      }
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <Input
        label="Email"
        type="email"
        name="email"
        placeholder="seu@email.com"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
        icon={<Mail size={18} />}
        autoComplete="email"
      />
      
      <Input
        label="Senha"
        type="password"
        name="password"
        placeholder="••••••••"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        icon={<Lock size={18} />}
        autoComplete="current-password"
      />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="rememberMe"
            type="checkbox"
            checked={formData.rememberMe}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-white">
            Lembrar de mim
          </label>
        </div>
        
        <div className="text-sm">
          <a href="#" className="font-medium text-white hover:text-blue-600">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
      
      <Button
        type="submit"
        fullWidth
        isLoading={isLoading}
        className="mb-4 bg-blue-500 hover:bg-blue-600 text-white"
      >
        Entrar
      </Button>
      
      <div className="text-center text-sm text-white">
        Não tem uma conta?{' '}
        <Link to="/register" className="font-medium text-white hover:text-blue-600">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
