
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  index?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  className,
  index = 0,
}) => {
  return (
    <motion.div 
      className={cn(
        'group relative overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-6 h-full flex flex-col justify-center items-center lg:items-start">
        <div className="w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-lgt-orange/10 text-lgt-orange">
          {icon}
        </div>
        
        <h3 className="font-semibold text-xl mb-2 text-center lg:text-left">
          {title}
        </h3>
        
        <p className="text-lgt-gray mb-4 text-center lg:text-left">
          {description}
        </p>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-orange-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;
