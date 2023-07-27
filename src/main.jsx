import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Section from './components/Section/Section.jsx'
import Work from './components/Work/Work.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Faq from './components/Faq/Faq.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Header />
    <Hero />
    <Section />
    <Work />
    <Pricing />
    <Faq />
  </React.StrictMode>,
)
