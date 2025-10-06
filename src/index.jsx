import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Expose components used in eval globally
import Hero from './components/home/Hero';
import ServicesSection from './components/services/ServicesSection';
import ServiceCard from './components/services/ServiceCard';
import ServiceFeatures from './components/services/ServiceFeatures';

window.Hero = Hero;
window.ServicesSection = ServicesSection;
window.ServiceCard = ServiceCard;
window.ServiceFeatures = ServiceFeatures;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
