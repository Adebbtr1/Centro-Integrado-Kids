import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { RegisterFormData } from '../../types/auth';

interface RegisterFormProps {
  onSubmit: (data: RegisterFormData) => void;
  isLoading?: boolean;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit, isLoading = false }) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof RegisterFormData, string>> = {};
    
    if (!formData.username) {
      newErrors.username = 'Nome de usuário é obrigatório';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Nome de usuário deve ter pelo menos 3 caracteres';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Por favor, confirme sua senha';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'Você deve aceitar os termos e condições';
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
    
    if (errors[name as keyof RegisterFormData]) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Store full user information in localStorage
      localStorage.setItem('registeredUser', JSON.stringify({
        username: formData.username,
        email: formData.email,
        fullName: formData.username  // Use username as full name for now
      }));

      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="animate-slide-up">
      <Input
        label="Nome de usuário"
        type="text"
        name="username"
        placeholder="seunome"
        value={formData.username}
        onChange={handleChange}
        error={errors.username}
        icon={<User size={18} />}
        autoComplete="username"
      />
      
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
        autoComplete="new-password"
      />
      
      <Input
        label="Confirmar Senha"
        type="password"
        name="confirmPassword"
        placeholder="••••••••"
        value={formData.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        icon={<Lock size={18} />}
        autoComplete="new-password"
      />
      
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            name="agreeToTerms"
            type="checkbox"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="h-4 w-4 text-aqua-600 focus:ring-aqua-500 border-gray-300 rounded"
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-medium text-gray-700">
            Eu aceito os <a href="#" className="text-aqua-600 hover:text-aqua-500">Termos de Serviço</a> e a <a href="#" className="text-aqua-600 hover:text-aqua-500">Política de Privacidade</a>
          </label>
          {errors.agreeToTerms && <p className="mt-1 text-sm text-red-600">{errors.agreeToTerms}</p>}
        </div>
      </div>
      
      <Button
        type="submit"
        fullWidth
        isLoading={isLoading}
        className="mb-4"
      >
        Criar Conta
      </Button>
      
      <div className="text-center text-sm">
        Já tem uma conta?{' '}
        <Link to="/login" className="font-medium text-aqua-600 hover:text-aqua-500">
          Entrar
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
