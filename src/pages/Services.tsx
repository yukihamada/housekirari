import React from 'react';
import ServicesComponent from '../components/Services';
import ServiceArea from '../components/ServiceArea';
import Pricing from '../components/Pricing';

export default function Services() {
  return (
    <div>
      <ServicesComponent />
      <ServiceArea />
      <Pricing />
    </div>
  );
}