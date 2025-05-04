import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { User, Calendar, Users, Building } from 'lucide-react';

interface School {
  id: string;
  name: string;
  director: string;
  cnpj: string;
  address: string;
}

interface StudentFormData {
  name: string;
  birthDate: string;
  guardianName: string;
  school: string;
}

const RegisterStudentPage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [schools, setSchools] = useState<School[]>([]);
  const [formData, setFormData] = useState<StudentFormData>({
    name: '',
    birthDate: '',
    guardianName: '',
    school: '',
  });
  
  useEffect(() => {
    // Get registered schools from localStorage
    const storedSchools = localStorage.getItem('registeredSchools');
    if (storedSchools) {
      setSchools(JSON.parse(storedSchools));
    }
  }, []);

  const [errors, setErrors] = useState<Partial<Record<keyof StudentFormData, string>>>({});

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof StudentFormData, string>> = {};
    
    if (!formData.name) {
      newErrors.name = 'Nome do aluno é obrigatório';
    }
    
    if (!formData.birthDate) {
      newErrors.birthDate = 'Data de nascimento é obrigatória';
    }
    
    if (!formData.guardianName) {
      newErrors.guardianName = 'Nome do responsável é obrigatório';
    }
    
    if (!formData.school) {
      newErrors.school = 'Escola é obrigatória';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    
    if (errors[name as keyof StudentFormData]) {
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
      
      // Save student data to localStorage
      const students = JSON.parse(localStorage.getItem('registeredStudents') || '[]');
      students.push(formData);
      localStorage.setItem('registeredStudents', JSON.stringify(students));
      
      setTimeout(() => {
        setIsLoading(false);
        navigate('/home');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 pt-24">

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Cadastrar Novo Aluno</h1>
              <p className="text-gray-600">Preencha os dados do aluno</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome do Aluno"
                type="text"
                name="name"
                placeholder="Digite o nome completo do aluno"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                icon={<User size={18} />}
              />
              
              <Input
                label="Data de Nascimento"
                type="date"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleChange}
                error={errors.birthDate}
                icon={<Calendar size={18} />}
              />
              
              <Input
                label="Nome do Responsável"
                type="text"
                name="guardianName"
                placeholder="Digite o nome do responsável"
                value={formData.guardianName}
                onChange={handleChange}
                error={errors.guardianName}
                icon={<Users size={18} />}
              />
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Escola
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                    <Building size={18} />
                  </div>
                  <select
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-4 py-2 rounded-md border ${
                      errors.school ? 'border-red-300' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-aqua-200 focus:border-aqua-500`}
                  >
                    <option value="">Selecione uma escola</option>
                    {schools.map(school => (
                      <option key={school.id} value={school.id}>
                        {school.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.school && <p className="mt-1 text-sm text-red-600">{errors.school}</p>}
              </div>
              
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
                  Cadastrar Aluno
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

export default RegisterStudentPage;
