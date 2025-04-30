import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Flag, LogOut } from 'lucide-react';
import Button from '../components/ui/Button';

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // In a real app, you'd clear auth tokens here
    navigate('/login');
  };
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-aqua-500 to-green-500 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Flag className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">GreenWave</span>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white border-white hover:bg-white/10"
              onClick={handleLogout}
            >
              <LogOut size={16} className="mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>
      
      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-sm rounded-lg p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Welcome to Your Dashboard</h1>
          <p className="text-gray-600">
            You've successfully logged in to the application. This is a placeholder dashboard page.
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-aqua-500 via-green-400 to-aqua-600 rounded-lg shadow-md p-8 text-white">
          <h2 className="text-xl font-semibold mb-4">Your account is active</h2>
          <p className="mb-4">
            Thank you for testing the authentication system. In a complete application, 
            this dashboard would contain the main functionality of the product.
          </p>
          <div className="flex space-x-4 mt-4">
            <Button 
              variant="secondary" 
              onClick={() => navigate('/login')}
            >
              Return to Login
            </Button>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
              onClick={() => navigate('/register')}
            >
              View Register Page
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
