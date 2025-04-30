import React from 'react';
import { Flag } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - branding/decoration */}
      <div className="hidden md:flex md:w-1/2 bg-gradient-to-br from-aqua-500 via-green-400 to-aqua-600 flex-col justify-center items-center p-8 animate-fade-in">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-6 inline-flex justify-center items-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm text-white">
            <Flag size={40} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to GreenWave</h1>
          <p className="text-aqua-50 text-lg mb-8">Experience the smoothest authentication system with our beautiful aqua green theme.</p>
          
          {/* Decorative flag gradient element */}
          <div className="hidden lg:block mt-12 relative">
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - auth form */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 sm:p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Mobile-only header with simplified flag design */}
          <div className="md:hidden text-center mb-8">
            <div className="inline-block">
              <div className="w-16 h-12 rounded-md overflow-hidden shadow-md mx-auto mb-4">
                <div className="w-full h-1/3 bg-green-400"></div>
                <div className="w-full h-1/3 bg-aqua-500"></div>
                <div className="w-full h-1/3 bg-green-600"></div>
              </div>
            </div>
            <h1 className="text-2xl font-bold text-gray-800">GreenWave</h1>
          </div>
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
            <p className="text-gray-600">{subtitle}</p>
          </div>
          
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
