import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = true,
  icon,
  className = '',
  type = 'text',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;
  
  const baseStyles = 'rounded-md border transition-all duration-200 focus:outline-none focus:ring-2 px-4 py-2';
  const errorStyles = error 
    ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
    : 'border-gray-300 focus:border-aqua-500 focus:ring-aqua-200';
  const widthStyle = fullWidth ? 'w-full' : '';
  const iconPadding = icon ? 'pl-10' : '';
  
  return (
    <div className={`${widthStyle} ${className} mb-4`}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          className={`${baseStyles} ${errorStyles} ${widthStyle} ${iconPadding}`}
          {...props}
        />
        {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Input;
