
import React from 'react';
import { cn } from '@/lib/utils';

interface PageBannerProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageBanner: React.FC<PageBannerProps> = ({
  title,
  subtitle,
  className,
  children,
}) => {
  return (
    <div className={cn(
      'relative py-16 md:py-24 bg-gradient-orange-blue text-white overflow-hidden',
      className
    )}>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-xl md:text-2xl max-w-3xl text-white/90">{subtitle}</p>}
        {children}
      </div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-10"></div>
    </div>
  );
};

export default PageBanner;
