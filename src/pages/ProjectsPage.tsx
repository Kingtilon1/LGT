
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageBanner from '@/components/PageBanner';
import CtaSection from '@/components/CtaSection';

const projects = [
  {
    id: 1,
    title: 'Commercial Office Security',
    category: 'security',
    description: 'Complete security camera system installation for a multi-story office building in Manhattan.',
    challenge: 'Installing a comprehensive security system in a busy office without disrupting daily operations.',
    solution: 'Strategic scheduling and phased implementation to minimize disruption while providing complete coverage.'
  },
  {
    id: 2,
    title: 'Residential Smart Home',
    category: 'smart-building',
    description: 'Full smart home integration for a luxury residence in Brooklyn, including climate control, security, and entertainment systems.',
    challenge: 'Integrating multiple systems into a single, user-friendly interface.',
    solution: 'Custom programming and system design to create a seamless user experience across all platforms.'
  },
  {
    id: 3,
    title: 'Retail Chain Access Control',
    category: 'access-control',
    description: 'Biometric access control system for a chain of retail stores throughout New York City.',
    challenge: 'Creating a unified system that could be centrally managed across multiple locations.',
    solution: 'Cloud-based management system with local redundancies to ensure consistent operation.'
  },
  {
    id: 4,
    title: 'Restaurant Audio/Visual System',
    category: 'low-voltage',
    description: 'Complete A/V system installation for an upscale restaurant including background music and digital signage.',
    challenge: 'Designing a system that provided quality sound throughout various dining areas while remaining unobtrusive.',
    solution: 'Strategic speaker placement and zone controls to create the perfect ambiance in each area.'
  },
  {
    id: 5,
    title: 'Hotel Network Infrastructure',
    category: 'cabling',
    description: 'Complete network cabling infrastructure for a new boutique hotel, including guest WiFi and back-end systems.',
    challenge: 'Installing network infrastructure that could handle high demand from guests while maintaining security.',
    solution: 'Segmented network design with dedicated systems for operations and guest access.'
  },
  {
    id: 6,
    title: 'Custom Home Theater',
    category: 'handyman',
    description: 'Design and installation of a high-end home theater system with automated lighting and sound controls.',
    challenge: 'Creating a theater-quality experience in a residential setting.',
    solution: 'Custom acoustic treatments and professional-grade equipment integration.'
  },
];

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <Layout>
      <PageBanner
        title="Our Projects"
        subtitle="Explore our portfolio of successful installations and technical solutions."
      />

      {/* Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-title">Featured Work</h2>
            <p className="text-lgt-gray">
              Browse through our recent projects to see the quality and diversity of our technical installations. Each project represents our commitment to excellence and customer satisfaction.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'all' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('security')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'security' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Security Systems
            </button>
            <button
              onClick={() => setFilter('access-control')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'access-control' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Access Control
            </button>
            <button
              onClick={() => setFilter('smart-building')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'smart-building' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Smart Building
            </button>
            <button
              onClick={() => setFilter('low-voltage')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'low-voltage' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Low Voltage
            </button>
            <button
              onClick={() => setFilter('cabling')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'cabling' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Cabling
            </button>
            <button
              onClick={() => setFilter('handyman')}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === 'handyman' 
                  ? 'bg-lgt-orange text-white' 
                  : 'bg-gray-100 text-lgt-gray hover:bg-gray-200'
              }`}
            >
              Handyman
            </button>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-lgt-dark">{project.title}</h3>
                  <p className="text-lgt-gray mb-4">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-lgt-dark">The Challenge:</h4>
                    <p className="text-sm text-lgt-gray">{project.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-lgt-dark">Our Solution:</h4>
                    <p className="text-sm text-lgt-gray">{project.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        title="Have a similar project in mind?"
        description="Contact us today to discuss your technical requirements and how we can help you achieve your goals."
      />
    </Layout>
  );
};

export default ProjectsPage;
