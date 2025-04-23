
import React from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Layout from '@/components/Layout';
import PageBanner from '@/components/PageBanner';

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or support."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-lgt-dark mb-8">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lgt-dark">Phone</h3>
                      <p className="text-lgt-gray">(347) 595-4221</p>
                      <p className="text-lgt-gray">+1 (929) 743-2705</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lgt-dark">Email</h3>
                      <a 
                        href="mailto:LGTechnical608@gmail.com" 
                        className="text-lgt-orange hover:underline"
                      >
                        LGTechnical608@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lgt-dark">Business Hours</h3>
                      <p className="text-lgt-gray">Monday - Friday: 8am - 6pm</p>
                      <p className="text-lgt-gray">Saturday: 9am - 2pm</p>
                      <p className="text-lgt-gray">Sunday: Closed</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-lgt-orange/10 flex items-center justify-center text-lgt-orange mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lgt-dark">Service Area</h3>
                      <p className="text-lgt-gray">
                        We provide services throughout the New York metropolitan area, 
                        including Manhattan, Brooklyn, Queens, Bronx, and surrounding areas.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas Section */}
              <div>
                <h2 className="text-2xl font-bold text-lgt-dark mb-8">Our Service Areas</h2>
                <div className="grid grid-cols-1 gap-6">
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Manhattan</h3>
                    <ul className="text-lgt-gray space-y-2">
                      <li>Midtown</li>
                      <li>Financial District</li>
                      <li>Upper East Side</li>
                      <li>Upper West Side</li>
                      <li>All Manhattan Areas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Outer Boroughs</h3>
                    <ul className="text-lgt-gray space-y-2">
                      <li>Brooklyn - All Areas</li>
                      <li>Queens - All Areas</li>
                      <li>Bronx - All Areas</li>
                      <li>Staten Island - All Areas</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-xl font-semibold mb-4">Additional Coverage</h3>
                    <ul className="text-lgt-gray space-y-2">
                      <li>Long Island</li>
                      <li>Westchester</li>
                      <li>Northern New Jersey</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
