import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import logo from '../../assets/logo.png';
import { Link, useLocation } from 'react-router-dom';

// Navigation icon components
const HomeIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const AboutIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ServicesIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>
);

const PricingIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ContactIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle scroll events with throttling for better performance
  useEffect(() => {
    let lastScrollTime = 0;
    const throttleWait = 10; // 10ms throttle 
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime >= throttleWait) {
        lastScrollTime = now;
        
        // Basic scroll detection
        setIsScrolled(window.scrollY > 20);
        
        // Calculate scroll progress (0-100) for animation intensity
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = Math.min(100, Math.max(0, (window.scrollY / scrollHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger once to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !navRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isMobileMenuOpen]);

  const navigationItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About', path: '/about', icon: <AboutIcon /> },
    { name: 'Services', path: '/services', icon: <ServicesIcon /> },
    { name: 'Pricing', path: '/pricing', icon: <PricingIcon /> },
    { name: 'Contact', path: '/contact', icon: <ContactIcon /> }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-2 sm:py-3 header-scrolled' 
          : 'py-3 sm:py-5 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm'
      }`}
      style={{
        background: isScrolled 
          ? `linear-gradient(135deg, rgba(59, 130, 246, ${0.85 + (scrollProgress * 0.0015)}), rgba(37, 99, 235, ${0.9 + (scrollProgress * 0.001)})` 
          : 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
      }}
      role="banner"
    >
      {/* Animated background elements */}
      {isScrolled && (
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 z-0 pointer-events-none">
          <div className="nav-bubble nav-bubble-1"></div>
          <div className="nav-bubble nav-bubble-2"></div>
          <div className="nav-bubble nav-bubble-3"></div>
        </div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between relative z-10" ref={navRef}>
        {/* Logo with animation */}
        <Link 
          to="/" 
          className={`transition-all duration-500 flex items-center ${
            isScrolled ? 'scale-90' : 'scale-100'
          } hover:opacity-95`}
          aria-label="FitLife Home"
        >
          <img 
            src={logo}
            alt="FitLife - Transform Your Fitness Journey" 
            className="h-10 sm:h-12 md:h-16 w-auto transition-all duration-300"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.3))'
            }}
            width="160"
            height="48"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main Navigation">
          <ul className="flex space-x-8 lg:space-x-12">
            {navigationItems.map((item, index) => (
              <li key={item.name} className="overflow-hidden">
                <Link
                  to={item.path}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide uppercase transition-all duration-300 flex items-center ${
                    isScrolled ? 'text-white hover:text-blue-200' : 'text-white/90 hover:text-white'
                  }`}
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.icon}
                  <span className="ml-1">{item.name}</span>
                  <motion.span 
                    initial={false}
                    animate={{ 
                      scaleX: location.pathname === item.path ? 1 : 0 
                    }}
                    whileHover={{ scaleX: 1 }}
                    className="absolute left-0 bottom-0 h-0.5 bg-current transform origin-left transition-transform duration-300 ease-out"
                    style={{
                      backgroundColor: isScrolled ? 'rgba(255,255,255,0.8)' : 'currentColor'
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button with animation */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            <motion.span 
              animate={{ 
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 0 : -5
              }}
              transition={{ duration: 0.2 }}
              className="absolute block w-6 h-0.75 bg-white rounded-full shadow-sm"
            />
            <motion.span 
              animate={{ 
                opacity: isMobileMenuOpen ? 0 : 1,
                x: isMobileMenuOpen ? 20 : 0
              }}
              transition={{ duration: 0.2 }}
              className="absolute block w-6 h-0.75 bg-white rounded-full shadow-sm"
            />
            <motion.span 
              animate={{ 
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? 0 : 5
              }}
              transition={{ duration: 0.2 }}
              className="absolute block w-6 h-0.75 bg-white rounded-full shadow-sm"
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            id="mobile-menu"
            ref={mobileMenuRef}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`md:hidden absolute top-full left-0 w-full shadow-lg z-50 overflow-hidden`}
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.97), rgba(37, 99, 235, 0.97))'
            }}
          >
            <nav className="container mx-auto px-6 py-6" aria-label="Mobile Navigation">
              <ul className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.li 
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`flex items-center py-4 text-lg font-medium ${
                        location.pathname === item.path
                          ? 'text-white font-semibold'
                          : 'text-blue-100 hover:text-white'
                      }`}
                      aria-current={location.pathname === item.path ? 'page' : undefined}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-3 flex items-center justify-center">{item.icon}</span>
                      {item.name}
                    </Link>
                    <div className="h-px bg-blue-200/20 mt-4"></div>
                  </motion.li>
                ))}
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + navigationItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    to="/contact"
                    className="flex justify-center items-center py-3 px-6 bg-white text-blue-600 font-semibold rounded-lg text-center shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Join Now
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar; 