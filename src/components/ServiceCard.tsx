
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  path,
  className,
}) => {
  return (
    <div className={cn('service-card group', className)}>
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lgt-orange/10 mb-4 text-lgt-orange">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lgt-gray mb-4">{description}</p>
      <Link
        to={path}
        className="inline-flex items-center text-lgt-orange font-medium hover:text-lgt-blue transition-colors"
      >
        Learn More
        <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default ServiceCard;
