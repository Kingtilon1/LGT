
import React from 'react';
import { Shield, Users, Award, Clock } from 'lucide-react';
import Layout from '@/components/Layout';
import PageBanner from '@/components/PageBanner';
import CtaSection from '@/components/CtaSection';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <PageBanner
        title="About LGT"
        subtitle="We're a team of dedicated technical professionals committed to providing top-quality low voltage solutions for residential and commercial clients."
      />

      {/* Company Overview */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex justify-center">
      <div className="max-w-2xl text-center">
        <h2 className="section-title">Our Story</h2>
        <p className="text-lgt-gray mb-6">
          Founded with a passion for technical excellence, LGT (Let's Get Technical) was established to provide professional low voltage solutions that meet the highest industry standards. Our team brings years of experience in various technical fields, allowing us to offer comprehensive services that solve complex problems.
        </p>
        <p className="text-lgt-gray mb-6">
          What started as a small operation has grown into a trusted provider of technical services throughout the New York metropolitan area. We pride ourselves on our attention to detail, technical knowledge, and commitment to customer satisfaction.
        </p>
        <p className="text-lgt-gray">
          Our mission is simple: to deliver reliable, high-quality technical solutions that exceed our clients' expectations, while maintaining the highest standards of safety and professionalism.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Core Values</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              These principles guide everything we do, from how we approach projects to how we interact with our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mx-auto mb-4">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safety</h3>
              <p className="text-lgt-gray">
                We prioritize safety in every project, ensuring all installations meet or exceed industry standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mx-auto mb-4">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality</h3>
              <p className="text-lgt-gray">
                We use only high-quality materials and follow best practices to deliver solutions that last.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mx-auto mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-lgt-gray">
                We're honest and transparent in all our dealings, building trust with every client interaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mx-auto mb-4">
                <Clock size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-lgt-gray">
                We're committed to meeting deadlines and being responsive to our clients' needs.
              </p>
            </div>
          </div>
        </div>
      </section>

  

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Why Choose LGT</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              What sets us apart from other technical service providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Expert Technical Knowledge</h3>
              <p className="text-lgt-gray">
                Our team has extensive knowledge and experience in low voltage systems, ensuring you receive expert advice and solutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Comprehensive Services</h3>
              <p className="text-lgt-gray">
                From initial design to installation and maintenance, we provide end-to-end solutions for all your technical needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Customer-Focused Approach</h3>
              <p className="text-lgt-gray">
                We listen to your needs and create customized solutions that address your specific requirements and challenges.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-lgt-gray">
                We stand behind our work with comprehensive quality checks and follow-up support to ensure your satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Transparent Pricing</h3>
              <p className="text-lgt-gray">
                We provide clear, detailed quotes with no hidden fees, so you know exactly what to expect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-lgt-gray">
                Our relationship doesn't end after installation. We provide continued support and maintenance for all our systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </Layout>
  );
};

export default AboutPage;
