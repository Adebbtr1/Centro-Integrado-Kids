import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import RegisterSchoolPage from './pages/RegisterSchoolPage';
import RegisterStudentPage from './pages/RegisterStudentPage';
import SchoolsListPage from './pages/SchoolsListPage';
import ConsultationSchedulePage from './pages/ConsultationSchedulePage';
import ScheduledConsultationsPage from './pages/ScheduledConsultationsPage';
import AdminLoginPage from './pages/AdminLoginForm'; 
import AdminDashboard from './pages/AdminDashboard';// ✅ importação da página de login do admin

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/register-school" element={<RegisterSchoolPage />} />
        <Route path="/register-student" element={<RegisterStudentPage />} />
        <Route path="/schools" element={<SchoolsListPage />} />
        <Route path="/consultation-schedule" element={<ConsultationSchedulePage />} />
        <Route path="/scheduled-consultations" element={<ScheduledConsultationsPage />} />
        <Route path="/admin-login" element={<AdminLoginPage />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* ✅ rota adicionada */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
