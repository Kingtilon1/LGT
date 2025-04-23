import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, Briefcase, Monitor, Wand2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import Layout from '@/components/Layout';
import AnimatedTechBackground from '@/components/AnimatedTechBackground';
import InteractiveCtaSection from '@/components/InteractiveCtaSection';
import { motion, useScroll, useTransform } from 'framer-motion';

const HomePage: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const services = [
    {
      title: 'Low Voltage Systems',
      description: 'Installation and maintenance of communication systems, security systems, and smart home integrations for residential and commercial properties.',
      icon: <ServiceIcon name="cable" size={32} />,
      path: '/services/low-voltage',
    },
    {
      title: 'Security Systems',
      description: 'Complete security solutions including cameras, alarms, and monitoring systems to protect your property and assets with state-of-the-art technology.',
      icon: <ServiceIcon name="camera" size={32} />,
      path: '/services/security',
    },
    {
      title: 'Access Control',
      description: 'Modern access control systems including keycards, biometric recognition, and remote access management for enhanced security and convenience.',
      icon: <ServiceIcon name="fingerprint" size={32} />,
      path: '/services/access-control',
    },
    {
      title: 'Cabling & Infrastructure',
      description: 'Professional data and communication cable management, testing, and troubleshooting to ensure your systems run smoothly and efficiently.',
      icon: <ServiceIcon name="network" size={32} />,
      path: '/services/cabling',
    },
    {
      title: 'Smart Building Integration',
      description: 'Integration of smart technologies for modern homes and commercial buildings that enhance efficiency, convenience, and sustainability.',
      icon: <ServiceIcon name="home" size={32} />,
      path: '/services/smart-building',
    },
    {
      title: 'Handyman Services',
      description: 'General maintenance services including furniture assembly, TV mounting, and appliance installation, delivering professional results for everyday needs.',
      icon: <ServiceIcon name="wrench" size={32} />,
      path: '/services/handyman',
    },
  ];

  return (
    <Layout>
      {/* Hero Section - Reimagined with full-screen technical animation */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">
        <AnimatedTechBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent"></div>
        
        <motion.div 
          className="container mx-auto px-4 relative z-10"
          style={{ opacity, y }}
        >
          <div className="max-w-3xl ml-0 md:ml-12 lg:ml-24">
            <motion.h1 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            >
              Technical Solutions
              <span className="block text-transparent bg-clip-text bg-gradient-orange-blue">
                For Modern Needs
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-white/90 mb-8"
            >
              Expert installation and service for all your technical needs. From security systems to smart integration, we've got you covered.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-white text-lgt-orange hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all">
                <Link to="/quote" className="flex items-center">
                  Get a Free Quote
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/services">Explore Services</Link>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 text-sm md:block hidden"
            >
              <div className="flex items-center">
                <span>Scroll to explore</span>
                <ArrowRight size={16} className="ml-1 animate-bounce" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section - Asymmetrical layout */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold gradient-text bg-gradient-orange-blue mb-4">
              Why Choose LGT
            </h2>
            <p className="text-lg text-lgt-gray max-w-2xl mx-auto">
              We combine technical expertise with outstanding service to deliver solutions you can trust
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 rounded-xl shadow-xl"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-orange-blue flex items-center justify-center text-white">
                <ShieldCheck size={36} />
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-semibold mb-4 text-center">OSHA Certified</h3>
                <p className="text-lgt-gray">
                  Safety is our top priority. All our technicians are OSHA certified, and our work meets or exceeds industry safety standards at every step.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 rounded-xl shadow-xl md:mt-16"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-orange-blue flex items-center justify-center text-white">
                <Zap size={36} />
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-semibold mb-4 text-center">Fast Response</h3>
                <p className="text-lgt-gray">
                  We understand that time matters. Our team provides quick turnaround on quotes and service calls to keep your project on schedule without sacrificing quality.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative bg-white p-8 rounded-xl shadow-xl lg:mt-32"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full bg-gradient-orange-blue flex items-center justify-center text-white">
                <Briefcase size={36} />
              </div>
              <div className="pt-10">
                <h3 className="text-xl font-semibold mb-4 text-center">Experienced Team</h3>
                <p className="text-lgt-gray">
                  Our technicians have years of experience in low voltage and technical installations, delivering expert solutions for even the most complex projects.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-gray-50"></div>
      </section>

      {/* Services Section - Interactive gallery with expandable cards */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lgt-dark mb-4">Our Services</h2>
            <p className="text-lg text-lgt-gray max-w-2xl mx-auto">
              From security systems to smart building integration, we provide comprehensive technical solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild variant="outline" className="border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10 shadow-lg hover:shadow-xl transition-all">
              <Link to="/services" className="inline-flex items-center">
                View All Services
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Showcase - Diagonal sections */}
      <section className="py-20 bg-white relative">
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent"></div>
        <div className="absolute -top-10 right-0 w-1/2 h-40 bg-gradient-orange-blue opacity-5 transform -rotate-6"></div>
        <div className="absolute -bottom-10 left-0 w-3/4 h-40 bg-gradient-orange-blue opacity-5 transform rotate-6"></div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-lgt-dark mb-4">Featured Projects</h2>
            <p className="text-lg text-lgt-gray max-w-2xl mx-auto">
              Take a look at some of our recent installations and technical solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-1 flex flex-col"
            >
              <div className="rounded-lg overflow-hidden shadow-xl group h-64 md:h-80 relative mb-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 h-full w-full flex flex-col items-center justify-center p-6 text-white transition-transform group-hover:scale-105 duration-500">
                  <ServiceIcon name="camera" size={48} className="mb-4 text-lgt-orange" />
                  <h4 className="text-lg font-medium mb-2">Multi-Camera System</h4>
                  <p className="text-sm text-center text-gray-300">High-definition security coverage for complete building monitoring</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Office Security System</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Complete security camera installation for a commercial office building
                    </p>
                    <Link to="/projects" className="text-lgt-orange inline-flex items-center group">
                      View Project
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-orange-blue text-white p-6 rounded-lg flex-grow flex flex-col justify-center"
              >
                <Wand2 size={32} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Solutions</h3>
                <p className="text-white/80 mb-4">
                  We pride ourselves on creating tailored solutions for each client's unique needs
                </p>
                <Link to="/services" className="text-white inline-flex items-center group font-medium hover:text-white/80">
                  Our Approach
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-1 md:mt-10"
            >
              <div className="rounded-lg overflow-hidden shadow-xl group h-full relative">
                <div className="bg-gradient-to-br from-blue-900 to-indigo-900 h-full w-full flex flex-col items-center justify-center p-6 text-white transition-transform group-hover:scale-105 duration-500">
                  <ServiceIcon name="home" size={48} className="mb-4 text-lgt-orange" />
                  <h4 className="text-lg font-medium mb-2">Smart Home Ecosystem</h4>
                  <p className="text-sm text-center text-gray-300">Centralized control of lighting, climate, security and entertainment</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Smart Home Integration</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Full home automation system with integrated security and climate control
                    </p>
                    <Link to="/projects" className="text-lgt-orange inline-flex items-center group">
                      View Project
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-1 flex flex-col"
            >
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-lgt-dark text-white p-6 rounded-lg mb-6 flex-grow flex flex-col justify-center"
              >
                <Monitor size={32} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">Remote Monitoring</h3>
                <p className="text-white/80 mb-4">
                  Access and control your systems from anywhere with our remote monitoring solutions
                </p>
                <Link to="/services/security" className="text-lgt-orange inline-flex items-center group font-medium hover:text-lgt-orange/80">
                  Learn More
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              
              <div className="rounded-lg overflow-hidden shadow-xl group h-64 md:h-80 relative">
                <div className="bg-gradient-to-br from-orange-800 to-red-900 h-full w-full flex flex-col items-center justify-center p-6 text-white transition-transform group-hover:scale-105 duration-500">
                  <ServiceIcon name="fingerprint" size={48} className="mb-4 text-white" />
                  <h4 className="text-lg font-medium mb-2">Biometric Access</h4>
                  <p className="text-sm text-center text-gray-300">Secure multi-point access control with fingerprint and facial recognition</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">Retail Access Control</h3>
                    <p className="text-white/80 text-sm mb-3">
                      Access control system with biometric authentication for a retail chain
                    </p>
                    <Link to="/projects" className="text-lgt-orange inline-flex items-center group">
                      View Project
                      <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button asChild variant="outline" className="border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10 shadow-lg hover:shadow-xl transition-all">
              <Link to="/projects" className="inline-flex items-center">
                View All Projects
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Interactive approach */}
      <InteractiveCtaSection />
    </Layout>
  );
};

export default HomePage;
