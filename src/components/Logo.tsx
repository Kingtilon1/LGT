
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  variant?: 'default' | 'white';
  showTagline?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  variant = 'default',
  showTagline = true
}) => {
  const logoColor = variant === 'white' ? 'text-white' : 'text-lgt-dark';
  const taglineColor = variant === 'white' ? 'text-white/80' : 'text-lgt-gray';
  
  return (
    <Link to="/" className={cn('flex flex-col items-start', className)}>
      <div className="flex items-center">
        <span className={`text-3xl font-bold ${logoColor}`}>
          <span className="text-lgt-orange">L</span>
          <span className="text-lgt-blue">G</span>
          <span className="text-lgt-orange">T</span>
        </span>
      </div>
      {showTagline && (
        <span className={`text-xs ${taglineColor} tracking-wider`}>
          LET'S GET TECHNICAL
        </span>
      )}
    </Link>
  );
};

export default Logo;
