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
  ];
  
  return (
    <header className="bg-gradient-to-r from-teal-800 to-green-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/home')}
          >
            <Flag className="h-8 w-8 mr-2" />
            <span className="text-xl font-bold">CIK</span>
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
                className="text-white border-white hover:bg-white/10"
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleLogout}
              className="text-white border-white hover:bg-white/10"
            >
              <LogOut size={16} className="mr-2" />
              Sair
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-gradient-to-r from-teal-400 to-green-400 z-50">
            <div className="px-4 pt-2 pb-4 space-y-2">
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
                  className="text-white border-white hover:bg-white/10 justify-start"
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
                className="text-white border-white hover:bg-white/10 justify-start"
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
