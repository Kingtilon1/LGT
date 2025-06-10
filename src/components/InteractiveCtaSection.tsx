
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const InteractiveCtaSection: React.FC = () => {
  const [activeOption, setActiveOption] = useState<'quote' | 'call' | 'email'>('quote');

  const options = [
    { id: 'quote', icon: Calendar, label: 'Get a Quote', description: 'Fill out our quick form for a detailed quote' },
    { id: 'call', icon: Phone, label: 'Call Us Now', description: 'Speak directly with our experts' },
    { id: 'email', icon: Mail, label: 'Send Email', description: 'Write to us about your project needs' },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-orange-blue opacity-10"></div>
      <div className="absolute inset-0 bg-circuit-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-lgt-gray max-w-2xl mx-auto">
              Choose how you'd like to connect with our team of experts
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {options.map((option) => (
              <motion.div 
                key={option.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: options.findIndex(o => o.id === option.id) * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className={cn(
                  "cursor-pointer rounded-lg p-6 flex flex-col items-center text-center transition-all",
                  activeOption === option.id 
                    ? "bg-gradient-orange-blue text-white shadow-lg" 
                    : "bg-white text-lgt-dark shadow-md hover:shadow-lg"
                )}
                onClick={() => setActiveOption(option.id as 'quote' | 'call' | 'email')}
              >
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center mb-4",
                  activeOption === option.id 
                    ? "bg-white/20" 
                    : "bg-lgt-orange/10"
                )}>
                  <option.icon size={32} className={activeOption === option.id ? "text-white" : "text-lgt-orange"} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{option.label}</h3>
                <p className={activeOption === option.id ? "text-white/90" : "text-lgt-gray"}>
                  {option.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-xl p-8 text-center"
          >
            {activeOption === 'quote' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Request Your Free Quote</h3>
                <p className="text-lgt-gray mb-6">
                  Tell us about your project and we'll provide a detailed estimate
                </p>
                <Button asChild size="lg" className="bg-lgt-orange hover:bg-orange-600">
                  <Link to="/quote" className="inline-flex items-center">
                    Start Your Quote
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            )}
            
            {activeOption === 'call' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Talk to an Expert</h3>
                <p className="text-lgt-gray mb-6">
                  We're available to discuss your project needs
                </p>
                <div className="flex flex-col space-y-3">
                  <a 
                    href="tel:+13475954221" 
                    className="inline-flex items-center justify-center text-lg font-medium text-lgt-orange hover:text-lgt-blue transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    (347) 595-4221
                  </a>
                  <a 
                    href="tel:+18483843997" 
                    className="inline-flex items-center justify-center text-lg font-medium text-lgt-orange hover:text-lgt-blue transition-colors"
                  >
                    <Phone size={20} className="mr-2" />
                    (848) 384-3997
                  </a>
                </div>
              </div>
            )}
            
            {activeOption === 'email' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Send Us an Email</h3>
                <p className="text-lgt-gray mb-6">
                  We typically respond within 24 hours
                </p>
                <a 
                  href="mailto:LGTechnical608@gmail.com" 
                  className="inline-flex items-center justify-center text-lg font-medium text-lgt-orange hover:text-lgt-blue transition-colors"
                >
                  <Mail size={20} className="mr-2" />
                  LGTechnical608@gmail.com
                </a>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveCtaSection;
