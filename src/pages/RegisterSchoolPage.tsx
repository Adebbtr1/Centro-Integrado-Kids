import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Building, User, Briefcase, MapPin } from 'lucide-react';

interface SchoolFormData {
  id: string;
  name: string;
  director: string;
  cnpj: string;
  address: string;
}

const RegisterSchoolPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<SchoolFormData>({
    id: crypto.randomUUID(),
    name: '',
    director: '',
    cnpj: '',
    address: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof SchoolFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof SchoolFormData, string>> = {};
    
    if (!formData.name) {
      newErrors.name = 'Nome da escola é obrigatório';
    }
    
    if (!formData.director) {
      newErrors.director = 'Nome do diretor é obrigatório';
    }
    
    if (!formData.cnpj) {
      newErrors.cnpj = 'CNPJ é obrigatório';
    } else if (!/^\d{14}$/.test(formData.cnpj.replace(/\D/g, ''))) {
      newErrors.cnpj = 'CNPJ inválido';
    }
    
    if (!formData.address) {
      newErrors.address = 'Endereço é obrigatório';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof SchoolFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsLoading(true);
      
      // Save school data to localStorage
      const token = localStorage.getItem('token'); 
      if (!token) {
        alert("Você precisa estar logado para registrar uma escola.");
        navigate('/login');  // Redireciona para a página de login
        return;
      }
      
      fetch('http://localhost:5000/schools', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Erro ao registrar escola');
          }
          return response.json();
        })
        .then(() => {
          setIsLoading(false);
          navigate('/home');
        })
        .catch((error) => {
          setIsLoading(false);
          alert(error.message);
        });
      
    }
  };

  const token = localStorage.getItem('token');
if (!token) {
  alert("Você precisa estar logado para registrar uma escola.");
  navigate('/login');  // Redirecionar para a página de login
  return;
}


  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Registrar Nova Escola</h1>
              <p className="text-gray-600">Preencha os dados da instituição</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome da Escola"
                type="text"
                name="name"
                placeholder="Digite o nome da escola"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={<Building size={18} />}
              />
              
              <Input
                label="Nome do Diretor"
                type="text"
                name="director"
                placeholder="Digite o nome do diretor"
                value={formData.director}
                onChange={handleChange}
                error={errors.director}
                icon={<User size={18} />}
              />
              
              <Input
                label="CNPJ"
                type="text"
                name="cnpj"
                placeholder="00.000.000/0000-00"
                value={formData.cnpj}
                onChange={handleChange}
                error={errors.cnpj}
                icon={<Briefcase size={18} />}
              />
              
              <Input
                label="Endereço"
                type="text"
                name="address"
                placeholder="Digite o endereço completo"
                value={formData.address}
                onChange={handleChange}
                error={errors.address}
                icon={<MapPin size={18} />}
              />
              
              <div className="flex gap-4 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate('/home')}
                  className="w-full"
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  isLoading={isLoading}
                  className="w-full"
                >
                  Registrar Escola
                </Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default RegisterSchoolPage;
