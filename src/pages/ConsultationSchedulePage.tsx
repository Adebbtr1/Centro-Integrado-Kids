import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Calendar, Clock, MessageSquare } from 'lucide-react';

interface ConsultationFormData {
  id: string;
  name: string;
  email: string;
  date: string;
  time: string;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  createdAt: string;
}

const ConsultationSchedulePage: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState<{
    username: string;
    email: string;
    fullName: string;
  } | null>(null);
  
  const [formData, setFormData] = useState<Omit<ConsultationFormData, 'id' | 'email' | 'status' | 'createdAt'>>({
    name: '',
    date: '',
    time: '',
    reason: '',
  });
  
  const [errors, setErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});

  useEffect(() => {
    // Retrieve the logged-in user's information from localStorage
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser) {
      const parsedUserData = JSON.parse(registeredUser);
      setUserData(parsedUserData);
      
      // Automatically set the name to the logged-in user's full name
      setFormData(prev => ({
        ...prev,
        name: parsedUserData.fullName || parsedUserData.username || 'Usuário'
      }));
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof typeof formData, string>> = {};
    
    if (!formData.date) {
      newErrors.date = 'Data da consulta é obrigatória';
    }
    
    if (!formData.time) {
      newErrors.time = 'Horário da consulta é obrigatório';
    }
    
    if (!formData.reason) {
      newErrors.reason = 'Motivo da consulta é obrigatório';
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
    
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate() && userData) {
      setIsLoading(true);
      
      // Create a new consultation object with comprehensive details
      const newConsultation: ConsultationFormData = {
        id: crypto.randomUUID(), // Generate a unique ID
        name: formData.name,
        email: userData.email,
        date: formData.date,
        time: formData.time,
        reason: formData.reason,
        status: 'scheduled',
        createdAt: new Date().toISOString()
      };
      
      // Retrieve existing consultations
      const consultations = JSON.parse(localStorage.getItem('scheduledConsultations') || '[]');
      
      // Add new consultation
      consultations.push(newConsultation);
      
      // Save updated consultations
      localStorage.setItem('scheduledConsultations', JSON.stringify(consultations));
      
      setTimeout(() => {
        setIsLoading(false);
        navigate('/scheduled-consultations');
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Agendar Consulta</h1>
              <p className="text-gray-600">Preencha os dados para agendar uma consulta de apoio emocional</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Nome"
                type="text"
                name="name"
                value={formData.name}
                readOnly
                className="cursor-not-allowed"
              />
              
              <Input
                label="Data da Consulta"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                error={errors.date}
                icon={<Calendar size={18} />}
                min={new Date().toISOString().split('T')[0]} // Prevent past dates
              />
              
              <Input
                label="Horário da Consulta"
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                error={errors.time}
                icon={<Clock size={18} />}
              />
              
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Motivo da Consulta
                </label>
                <div className="relative">
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={(e) => handleChange(e as any)}
                    rows={4}
                    className={`block w-full pr-4 py-2 rounded-md border ${
                      errors.reason ? 'border-red-300' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-aqua-200 focus:border-aqua-500`}
                    placeholder="Descreva brevemente o motivo da consulta"
                  />
                </div>
                {errors.reason && <p className="mt-1 text-sm text-red-600">{errors.reason}</p>}
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
                  Agendar Consulta
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

export default ConsultationSchedulePage;
