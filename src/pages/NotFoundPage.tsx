
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';
import Layout from '@/components/Layout';

const NotFoundPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-16 px-4 text-center">
        <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6">
          <AlertTriangle size={40} className="text-red-500" />
        </div>
        <h1 className="text-5xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-lgt-gray max-w-md mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild className="bg-lgt-orange hover:bg-orange-600">
            <Link to="/">Go to Homepage</Link>
          </Button>
          <Button asChild variant="outline" className="border-lgt-orange text-lgt-orange hover:bg-lgt-orange/10">
            <Link to="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
