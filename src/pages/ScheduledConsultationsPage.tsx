import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Calendar, Clock, MessageSquare, Trash2 } from 'lucide-react';
import Button from '../components/ui/Button';

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

const ScheduledConsultationsPage: React.FC = () => {
  const navigate = useNavigate();
  const [consultations, setConsultations] = useState<ConsultationFormData[]>([]);
  const [userData, setUserData] = useState<{
    username: string;
    email: string;
    fullName: string;
  } | null>(null);

  useEffect(() => {
    // Retrieve the logged-in user's information
    const registeredUser = localStorage.getItem('registeredUser');
    if (registeredUser) {
      const parsedUserData = JSON.parse(registeredUser);
      setUserData(parsedUserData);

      // Retrieve scheduled consultations
      const storedConsultations = localStorage.getItem('scheduledConsultations');
      if (storedConsultations) {
        const parsedConsultations: ConsultationFormData[] = JSON.parse(storedConsultations);
        
        // Filter consultations for the current user
        const userConsultations = parsedConsultations.filter(
          consultation => consultation.email === parsedUserData.email && 
                          consultation.status === 'scheduled'
        );
        
        // Sort consultations by date (most recent first)
        const sortedConsultations = userConsultations.sort((a, b) => 
          new Date(a.date).getTime() - new Date(b.date).getTime()
        );
        
        setConsultations(sortedConsultations);
      }
    }
  }, []);

  const handleDeleteConsultation = (consultationId: string) => {
    if (!userData) return;

    // Retrieve all consultations
    const storedConsultations = JSON.parse(
      localStorage.getItem('scheduledConsultations') || '[]'
    );
    
    // Update the status of the specific consultation to 'cancelled'
    const updatedConsultations = storedConsultations.map((consultation: ConsultationFormData) => 
      consultation.id === consultationId 
        ? { ...consultation, status: 'cancelled' } 
        : consultation
    );
    
    // Save updated consultations
    localStorage.setItem('scheduledConsultations', JSON.stringify(updatedConsultations));
    
    // Update local state
    setConsultations(
      updatedConsultations.filter(
        (consultation: ConsultationFormData) => 
          consultation.email === userData.email && 
          consultation.status === 'scheduled'
      )
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
      weekday: 'long'
    });
  };

  // Render loading or empty state if user data is not loaded
  if (!userData) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <div className="mb-8 flex justify-between items-center">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Minhas Consultas Agendadas</h1>
                <p className="text-gray-600">Visualize e gerencie suas consultas de apoio emocional</p>
              </div>
              <Button 
                variant="primary" 
                size="sm"
                onClick={() => navigate('/consultation-schedule')}
              >
                Nova Consulta
              </Button>
            </div>
            
            {consultations.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <MessageSquare className="mx-auto mb-4 text-gray-400" size={48} />
                <p>Você ainda não tem consultas agendadas.</p>
                <Button 
                  variant="primary" 
                  className="mt-4"
                  onClick={() => navigate('/consultation-schedule')}
                >
                  Agendar Primeira Consulta
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {consultations.map((consultation) => (
                  <div 
                    key={consultation.id} 
                    className="bg-gray-50 rounded-lg p-4 flex items-center justify-between hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar size={18} className="mr-2 text-aqua-600" />
                        <span className="font-semibold text-gray-800">
                          {formatDate(consultation.date)}
                        </span>
                      </div>
                      <div className="flex items-center mb-2">
                        <Clock size={18} className="mr-2 text-green-600" />
                        <span className="text-gray-700">{consultation.time}</span>
                      </div>
                      <p className="text-gray-600 mt-2">
                        <strong>Motivo:</strong> {consultation.reason}
                      </p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-500 border-red-300 hover:bg-red-50"
                      onClick={() => handleDeleteConsultation(consultation.id)}
                    >
                      <Trash2 size={16} className="mr-2" />
                      Cancelar
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ScheduledConsultationsPage;
