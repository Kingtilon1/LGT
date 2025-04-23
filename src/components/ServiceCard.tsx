
import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

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
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className={cn(
        'group relative overflow-hidden bg-white rounded-lg shadow-lg transition-all duration-300',
        isExpanded ? 'lg:col-span-2 lg:row-span-2' : '',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: isExpanded ? 1 : 1.02 }}
    >
      <div 
        className={cn(
          'p-6 h-full flex flex-col',
          isExpanded ? 'justify-start items-start' : 'justify-center items-center lg:items-start'
        )}
      >
        <div className={cn(
          "w-16 h-16 flex items-center justify-center rounded-full mb-4 transition-all",
          isExpanded 
            ? "bg-gradient-orange-blue text-white" 
            : "bg-lgt-orange/10 text-lgt-orange"
        )}>
          {icon}
        </div>
        
        <h3 className={cn(
          "font-semibold transition-all mb-2 text-center lg:text-left",
          isExpanded ? "text-2xl" : "text-xl"
        )}>
          {title}
        </h3>
        
        <p className={cn(
          "transition-all text-lgt-gray",
          isExpanded ? "mb-6" : "mb-4",
          !isExpanded && "line-clamp-3 text-center lg:text-left"
        )}>
          {description}
        </p>
        
        <div className="mt-auto">
          <button 
            onClick={toggleExpand}
            className="lg:flex hidden items-center text-lgt-gray hover:text-lgt-orange transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? "Collapse" : "Expand"}
            <Plus size={16} className={cn(
              "ml-1 transition-transform",
              isExpanded && "rotate-45"
            )} />
          </button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="absolute top-2 right-2">
          <button 
            onClick={toggleExpand}
            className="p-1 rounded-full bg-white/80 text-lgt-gray hover:text-lgt-orange"
            aria-label="Close"
          >
            <Plus size={20} className="rotate-45" />
          </button>
        </div>
      )}
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-orange-blue transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </motion.div>
  );
};

export default ServiceCard;
