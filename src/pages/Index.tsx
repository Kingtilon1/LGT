
import React from 'react';
import HomePage from './HomePage';
import RouteTransition from '@/components/RouteTransition';

const Index = () => {
  return (
    <RouteTransition>
      <HomePage />
    </RouteTransition>
  );
};

export default Index;
