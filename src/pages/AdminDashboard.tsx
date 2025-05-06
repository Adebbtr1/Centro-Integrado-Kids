import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const [schools, setSchools] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const role = localStorage.getItem('role');
    if (role !== 'admin') {
      navigate('/home');
    } else {
      fetchData();
    }
  }, [navigate]);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      const schoolsRes = await fetch('http://localhost:5000/api/schools', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const schoolsData = await schoolsRes.json();

      const apptsRes = await fetch('http://localhost:5000/api/consultations', {
        headers: { Authorization: `Bearer ${token}` }
      });
      const apptsData = await apptsRes.json();

      setSchools(schoolsData);
      setAppointments(apptsData);
    } catch (err) {
      setError('Erro ao carregar os dados.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="p-8">Carregando dados...</div>;
  if (error) return <div className="p-8 text-red-500">{error}</div>;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Painel do Administrador</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Instituições Escolares</h2>
        <ul className="bg-white shadow rounded p-4">
          {schools.map((school: any) => (
            <li key={school._id} className="border-b py-2">
              <strong>{school.name}</strong> - {school.address}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Consultas Marcadas</h2>
        <ul className="bg-white shadow rounded p-4">
          {appointments.map((appt: any) => (
            <li key={appt._id} className="border-b py-2">
              <strong>{appt.studentName}</strong> - {appt.date} às {appt.time}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;
