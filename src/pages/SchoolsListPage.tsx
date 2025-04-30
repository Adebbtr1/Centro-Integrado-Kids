import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

interface School {
  id: string;
  name: string;
  director: string;
  cnpj: string;
  address: string;
}

interface Student {
  name: string;
  birthDate: string;
  guardianName: string;
  school: string;
}

const SchoolsListPage: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const storedSchools = localStorage.getItem('registeredSchools');
    const storedStudents = localStorage.getItem('registeredStudents');
    
    if (storedSchools) {
      setSchools(JSON.parse(storedSchools));
    }
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h1 className="text-3xl font-bold text-gray-900">Escolas Registradas</h1>
              <p className="mt-2 text-gray-600">Lista de todas as escolas e seus alunos cadastrados</p>
            </div>
            
            <div className="divide-y divide-gray-200">
              {schools.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  Nenhuma escola registrada ainda
                </div>
              ) : (
                schools.map(school => {
                  const schoolStudents = students.filter(student => student.school === school.id);
                  
                  return (
                    <div key={school.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-semibold text-gray-900">{school.name}</h2>
                        <span className="px-3 py-1 text-sm text-aqua-700 bg-aqua-50 rounded-full">
                          {schoolStudents.length} alunos
                        </span>
                      </div>
                      
                      {schoolStudents.length > 0 ? (
                        <div className="mt-4 space-y-3">
                          <h3 className="text-sm font-medium text-gray-500">Alunos Cadastrados:</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {schoolStudents.map((student, index) => (
                              <div
                                key={index}
                                className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                              >
                                <p className="font-medium text-gray-900">{student.name}</p>
                                <p className="text-sm text-gray-500">Responsável: {student.guardianName}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">Nenhum aluno cadastrado</p>
                      )}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default SchoolsListPage;
