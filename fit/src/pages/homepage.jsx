import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '../components/homepage/Navbar';
import Home from '../components/homepage/Home';
import About from '../components/homepage/About';
import Services from '../components/homepage/Services';
import Pricing from '../components/homepage/Pricing';
import Contact from '../components/homepage/Contact';
import WorkoutTipsSection from '../components/homepage/WorkoutTipsSection';
import Footer from '../components/homepage/Footer';
function Homepage() {
    const location = useLocation();
  
    // Scroll to top when route changes
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
  
    // Add modern glass-morphism classes to components
    const HomeWithClass = () => <div className="section-glass-indigo"><Home /></div>;
    const AboutWithClass = () => <div className="section-glass-purple"><About /></div>;
    const ServicesWithClass = () => <div className="section-with-blobs"><Services /></div>;
    const PricingWithClass = () => <div className="section-glass-blue"><Pricing /></div>;
    const ContactWithClass = () => <div className="section-glass-purple"><Contact /></div>;
    const WorkoutTipsWithClass = () => <div className="section-glass-indigo"><WorkoutTipsSection /></div>;
  
    return (
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HomeWithClass />
                <AboutWithClass />
                <WorkoutTipsWithClass />
                <ServicesWithClass />
                <PricingWithClass />
                <ContactWithClass />
              </>
            } />
            <Route path="/about" element={<AboutWithClass />} />
            <Route path="/services" element={<ServicesWithClass />} />
            <Route path="/pricing" element={<PricingWithClass />} />
            <Route path="/contact" element={<ContactWithClass />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }
  
  export default Homepage;