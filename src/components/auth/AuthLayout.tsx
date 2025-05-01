import React from 'react';
import { Flag } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Lado esquerdo com gradiente azul, amarelo e vermelho */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-blue-500 via-yellow-500 to-red-500 flex-col justify-center items-center p-8 animate-fade-in">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm text-white">
            <Flag size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Centro Integrado Kids</h1>
          <p className="text-blue-100 text-lg mb-8">
            Bem-vindo ao nosso sistema. Faça login para continuar.
          </p>
        </div>
      </div>

      {/* Lado direito com fundo azul */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-8 bg-blue-500">
        <div className="w-full max-w-md">
          {/* Cabeçalho para mobile */}
          <div className="md:hidden text-center mb-8">
            <div className="inline-block">
              <div className="w-16 h-12 rounded-md overflow-hidden shadow-md mx-auto mb-4">
                <div className="w-full h-1/3 bg-blue-500"></div>
                <div className="w-full h-1/3 bg-yellow-500"></div>
                <div className="w-full h-1/3 bg-red-500"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-white">Centro Integrado Kids</h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
            <p className="text-white">{subtitle}</p>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
