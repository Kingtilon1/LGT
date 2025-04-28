
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CtaSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to start your project?",
  description = "Get in touch with us today for a free consultation and estimate.",
  primaryButtonText = "Request a Quote",
  primaryButtonLink = "/quote",
  secondaryButtonText = "Contact Us",
  secondaryButtonLink = "/contact",
  className = "",
}) => {
  return (
    <section className={`py-16 px-4 bg-gradient-orange-blue text-white ${className}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90">{description}</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-lgt-orange hover:bg-gray-100">
            <Link to={primaryButtonLink}>{primaryButtonText}</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-lgt-orange hover:bg-white/10">
            <Link to={secondaryButtonLink}>{secondaryButtonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
