
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import CtaSection from '@/components/CtaSection';
import Layout from '@/components/Layout';

const HomePage: React.FC = () => {
  const services = [
    {
      title: 'Low Voltage Systems',
      description: 'Installation and maintenance of communication systems, security systems, and smart home integrations.',
      icon: <ServiceIcon name="cable" size={32} />,
      path: '/services/low-voltage',
    },
    {
      title: 'Security Systems',
      description: 'Complete security solutions including cameras, alarms, and monitoring systems for residential and commercial properties.',
      icon: <ServiceIcon name="camera" size={32} />,
      path: '/services/security',
    },
    {
      title: 'Access Control',
      description: 'Modern access control systems including keycards, biometric recognition, and remote access management.',
      icon: <ServiceIcon name="fingerprint" size={32} />,
      path: '/services/access-control',
    },
    {
      title: 'Cabling & Infrastructure',
      description: 'Professional data and communication cable management, testing, and troubleshooting.',
      icon: <ServiceIcon name="network" size={32} />,
      path: '/services/cabling',
    },
    {
      title: 'Smart Building Integration',
      description: 'Integration of smart technologies for modern homes and commercial buildings for enhanced efficiency.',
      icon: <ServiceIcon name="home" size={32} />,
      path: '/services/smart-building',
    },
    {
      title: 'Handyman Services',
      description: 'General maintenance services including furniture assembly, TV mounting, and appliance installation.',
      icon: <ServiceIcon name="wrench" size={32} />,
      path: '/services/handyman',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-orange-blue overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Professional Low Voltage Solutions
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Expert installation and service for all your technical needs. Security systems, cabling,
              smart home integration, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-lgt-orange hover:bg-gray-100">
                <Link to="/quote">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-circuit-pattern opacity-15"></div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mb-4">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">OSHA Certified</h3>
              <p className="text-lgt-gray">
                Safety is our top priority. All our work meets or exceeds industry safety standards.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mb-4">
                <Zap size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Response</h3>
              <p className="text-lgt-gray">
                Quick turnaround on quotes and service calls to keep your project on schedule.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mb-4">
                <Briefcase size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
              <p className="text-lgt-gray">
                Our technicians have years of experience in low voltage and technical installations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Services</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              From security systems to smart building integration, we provide comprehensive technical solutions for residential and commercial clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10">
              <Link to="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Projects</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              Take a look at some of our recent installations and technical solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project cards would go here - placeholder for now */}
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Office Security System</h3>
                <p className="text-lgt-gray text-sm mb-2">
                  Complete security camera installation for a commercial office building.
                </p>
                <Link to="/projects" className="text-lgt-orange font-medium inline-flex items-center text-sm group-hover:underline">
                  View Project
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Smart Home Integration</h3>
                <p className="text-lgt-gray text-sm mb-2">
                  Full home automation system with integrated security and climate control.
                </p>
                <Link to="/projects" className="text-lgt-orange font-medium inline-flex items-center text-sm group-hover:underline">
                  View Project
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-md group">
              <div className="bg-gray-200 h-56 flex items-center justify-center">
                <span className="text-gray-500">Project Image</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">Retail Access Control</h3>
                <p className="text-lgt-gray text-sm mb-2">
                  Access control system with biometric authentication for a retail chain.
                </p>
                <Link to="/projects" className="text-lgt-orange font-medium inline-flex items-center text-sm group-hover:underline">
                  View Project
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10">
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default HomePage;
