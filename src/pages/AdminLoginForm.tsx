import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', data.user.role); // <-- Corrigido aqui

        if (data.user.role === 'admin') {
          navigate('/admin-dashboard');
        } else {
          navigate('/home');
        }
      } else {
        setErrorMessage(data.message || 'Erro no login');
      }
    } catch (error) {
      console.error('Erro de conexão', error);
      setErrorMessage('Erro de conexão');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">Login Admin</h2>
        {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}
        <form onSubmit={handleLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
          >
            Entrar
          </button>
        </form>

        {/* Botão de voltar para Home */}
        <button
          onClick={() => navigate('/home')}
          className="w-full bg-gray-300 text-gray-800 py-2 rounded-lg mt-4 hover:bg-gray-400"
        >
          Início
        </button>
      </div>
    </div>
  );
};

export default AdminLoginForm;
