
import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import Layout from '@/components/Layout';
import PageBanner from '@/components/PageBanner';

const ContactPage: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you shortly.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <PageBanner
        title="Contact Us"
        subtitle="Get in touch with our team for inquiries, quotes, or support."
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="section-subtitle">Send Us a Message</h2>
              <p className="text-lgt-gray mb-6">
                Fill out the form below and one of our representatives will get back to you as soon as possible.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-lgt-dark mb-1">
                    Full Name*
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-lgt-dark mb-1">
                      Email Address*
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-lgt-dark mb-1">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-lgt-dark mb-1">
                    Subject*
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What is this regarding?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-lgt-dark mb-1">
                    Message*
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Please provide details about your inquiry"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-lgt-orange hover:bg-orange-600"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="section-subtitle">Contact Information</h2>
              <p className="text-lgt-gray mb-8">
                Reach out to us directly using the information below or visit us during our business hours.
              </p>
              
              <div className="space-y-6">
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
              
              {/* Embedded Map - Placeholder */}
              <div className="mt-8 h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">Google Map Will Be Embedded Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Service Areas</h2>
            <p className="text-lgt-gray max-w-2xl mx-auto">
              We provide technical services throughout the New York metropolitan area and surrounding regions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Manhattan</h3>
              <ul className="text-lgt-gray space-y-1">
                <li>Midtown</li>
                <li>Financial District</li>
                <li>Upper East Side</li>
                <li>Upper West Side</li>
                <li>All Manhattan Areas</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Brooklyn</h3>
              <ul className="text-lgt-gray space-y-1">
                <li>Williamsburg</li>
                <li>Park Slope</li>
                <li>Downtown Brooklyn</li>
                <li>DUMBO</li>
                <li>All Brooklyn Areas</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Queens</h3>
              <ul className="text-lgt-gray space-y-1">
                <li>Long Island City</li>
                <li>Astoria</li>
                <li>Flushing</li>
                <li>Jamaica</li>
                <li>All Queens Areas</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Additional Areas</h3>
              <ul className="text-lgt-gray space-y-1">
                <li>Bronx</li>
                <li>Staten Island</li>
                <li>Long Island</li>
                <li>Westchester</li>
                <li>Northern NJ</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 text-lgt-gray">
            <p>For service in other areas, please contact us to discuss availability.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
