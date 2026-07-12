import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globals.css';
import './styles/animations.css';
import './components/Navbar/Navbar.css';
import './components/Hero/Hero.css';
import './components/Stats/Stats.css';
import './components/Services/Services.css';
import './components/About/About.css';
import './components/WhyUs/WhyUs.css';
import './components/Testimonials/Testimonials.css';
import './components/Contact/Contact.css';
import './components/Footer/Footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
