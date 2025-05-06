import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Flag,
  LogOut,
  Building,
  UserPlus,
  BookOpen,
  Home,
  CalendarPlus,
  CalendarCheck,
  Menu,
  X
} from 'lucide-react';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const MenuItems = [
    {
      icon: <BookOpen size={16} className="mr-2" />,
      label: 'Instituições',
      onClick: () => navigate('/schools')
    },
    {
      icon: <Building size={16} className="mr-2" />,
      label: 'Registrar Instituição',
      onClick: () => navigate('/register-school')
    },
    {
      icon: <UserPlus size={16} className="mr-2" />,
      label: 'Cadastrar Aluno',
      onClick: () => navigate('/register-student')
    },
    {
      icon: <CalendarPlus size={16} className="mr-2" />,
      label: 'Agendar Consulta',
      onClick: () => navigate('/consultation-schedule')
    },
    {
      icon: <CalendarCheck size={16} className="mr-2" />,
      label: 'Minhas Consultas',
      onClick: () => navigate('/scheduled-consultations')
    },
    {
      icon: <Home size={16} className="mr-2" />,
      label: 'Home',
      onClick: () => navigate('/home')
    },
    {
      icon: <Flag size={16} className="mr-2" />,
      label: 'Admin',
      onClick: () => navigate('/admin-login') // Alterado para redirecionar para o login do admin
    }
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-500 text-white shadow-md z-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/home')}
          >
            <img
              src="/images/cik10.jpg" // substitua pelo caminho correto da sua logo
              alt="Logo Centro Integrado Kids"
              className="h-11 w-11 mr-2 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-white">CIK</span>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {MenuItems.map((item, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={item.onClick}
                className="text-white border-white hover:bg-purple-500 hover:border-blue-500 focus:outline-none"
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
            <Button
              variant="outline"
              size="sm"
              onClick={handleLogout}
              className="text-white border-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none"
            >
              <LogOut size={16} className="mr-2" />
              Sair
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-gradient-to-r from-blue-600 to-green-600 p-4 rounded shadow-md">
            <div className="space-y-2">
              {MenuItems.map((item, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  fullWidth
                  onClick={() => {
                    item.onClick();
                    setIsMenuOpen(false);
                  }}
                  className="text-white border-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none justify-start"
                >
                  {item.icon}
                  {item.label}
                </Button>
              ))}
              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="text-white border-white hover:bg-blue-500 hover:border-blue-500 focus:outline-none justify-start"
              >
                <LogOut size={16} className="mr-2" />
                Sair
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
