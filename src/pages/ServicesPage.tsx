
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '@/components/Layout';
import PageBanner from '@/components/PageBanner';
import ServiceCard from '@/components/ServiceCard';
import ServiceIcon from '@/components/ServiceIcon';
import CtaSection from '@/components/CtaSection';

const ServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Low Voltage Systems',
      description: 'Installation and maintenance of communication systems, security systems, and smart home integrations.',
      icon: <ServiceIcon name="cable" size={32} />,
      path: '/services/low-voltage',
      features: [
        'Voice over IP (VoIP) phone systems',
        'Wireless access points and network infrastructures',
        'Audio/visual system integration',
        'Intercom and paging systems'
      ]
    },
    {
      title: 'Security Systems',
      description: 'Complete security solutions including cameras, alarms, and monitoring systems for residential and commercial properties.',
      icon: <ServiceIcon name="camera" size={32} />,
      path: '/services/security',
      features: [
        'HD and 4K security camera installation',
        'Alarm system setup and monitoring',
        'Video surveillance systems',
        'Motion detection and alerts'
      ]
    },
    {
      title: 'Access Control',
      description: 'Modern access control systems including keycards, biometric recognition, and remote access management.',
      icon: <ServiceIcon name="fingerprint" size={32} />,
      path: '/services/access-control',
      features: [
        'Keycard and key fob systems',
        'Biometric access control (fingerprint, facial recognition)',
        'Remote access management',
        'Visitor management systems'
      ]
    },
    {
      title: 'Cabling & Infrastructure',
      description: 'Professional data and communication cable management, testing, and troubleshooting.',
      icon: <ServiceIcon name="network" size={32} />,
      path: '/services/cabling',
      features: [
        'Structured cabling installation',
        'Network cable testing and certification',
        'Fiber optic cabling',
        'Cable management solutions'
      ]
    },
    {
      title: 'Smart Building Integration',
      description: 'Integration of smart technologies for modern homes and commercial buildings for enhanced efficiency.',
      icon: <ServiceIcon name="home" size={32} />,
      path: '/services/smart-building',
      features: [
        'Smart lighting controls',
        'Automated climate control',
        'Voice-controlled home systems',
        'Energy management solutions'
      ]
    },
    {
      title: 'Handyman Services',
      description: 'General maintenance services including furniture assembly, TV mounting, and appliance installation.',
      icon: <ServiceIcon name="wrench" size={32} />,
      path: '/services/handyman',
      features: [
        'TV mounting and home theater setup',
        'Furniture assembly and installation',
        'Shelving and fixture installation',
        'Appliance setup and connection'
      ]
    },
  ];

  return (
    <Layout>
      <PageBanner
        title="Our Services"
        subtitle="Comprehensive technical solutions for residential, commercial, and industrial clients."
      />

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">What We Offer</h2>
            <p className="text-lgt-gray">
              At LGT, we provide a wide range of technical services to meet all your low voltage and technical needs. From security systems to smart building integration, our experienced team delivers high-quality solutions tailored to your specific requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="service-card flex flex-col">
                <div className="mb-auto">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-lgt-orange/10 mb-4 text-lgt-orange">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-lgt-gray mb-4">{service.description}</p>
                  
                  <ul className="mb-4 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-lgt-orange mr-2">•</span>
                        <span className="text-sm text-lgt-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center text-lgt-orange font-medium hover:text-lgt-blue transition-colors mt-2"
                >
                  Learn More
                  <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Process</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              We follow a structured approach to ensure every project is completed efficiently and to the highest standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-lgt-orange/20"></div>
              
              {/* Steps */}
              <div className="space-y-12">
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
                    <p className="text-lgt-gray">
                      We begin with a thorough consultation to understand your specific needs and technical requirements.
                    </p>
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="flex-1 md:pl-8">
                    {/* Empty on right side for step 1 */}
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-1 md:order-1">
                    {/* Empty on left side for step 2 */}
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold order-2 md:order-2">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-2">2. Assessment & Design</h3>
                    <p className="text-lgt-gray">
                      Our team assesses your site and creates a customized design plan based on your requirements.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">3. Proposal</h3>
                    <p className="text-lgt-gray">
                      We provide a detailed proposal including scope of work, timeline, and transparent pricing.
                    </p>
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <div className="flex-1 md:pl-8">
                    {/* Empty on right side for step 3 */}
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-1 md:order-1">
                    {/* Empty on left side for step 4 */}
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold order-2 md:order-2">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-2">4. Installation</h3>
                    <p className="text-lgt-gray">
                      Our experienced technicians complete the installation efficiently, following all industry standards.
                    </p>
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold mb-2">5. Testing & Training</h3>
                    <p className="text-lgt-gray">
                      We thoroughly test all systems and provide comprehensive training on their use and maintenance.
                    </p>
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  <div className="flex-1 md:pl-8">
                    {/* Empty on right side for step 5 */}
                  </div>
                </div>
                
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:text-right md:pr-8 mb-4 md:mb-0 order-1 md:order-1">
                    {/* Empty on left side for step 6 */}
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full bg-lgt-orange flex items-center justify-center text-white font-bold order-2 md:order-2">
                    6
                  </div>
                  <div className="flex-1 md:pl-8 order-3 md:order-3">
                    <h3 className="text-xl font-semibold mb-2">6. Ongoing Support</h3>
                    <p className="text-lgt-gray">
                      We provide continued support and maintenance to ensure your systems operate optimally.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default ServicesPage;
