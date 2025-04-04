import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    loading: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ submitted: true, loading: false });
      
      // Reset form after submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFormStatus({ submitted: false, loading: false });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const inputClasses = "mt-1 block w-full px-5 py-4 bg-white rounded-xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 text-gray-700 text-base";

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700 mb-1.5">
            Your Name <span className="text-purple-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.15)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            required
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700 mb-1.5">
            Email Address <span className="text-purple-500">*</span>
          </label>
          <motion.input
            whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.15)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            required
            placeholder="john@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block font-medium text-gray-700 mb-1.5">
          Subject
        </label>
        <motion.input
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.15)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className={inputClasses}
          placeholder="What's this about?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block font-medium text-gray-700 mb-1.5">
          Your Message <span className="text-purple-500">*</span>
        </label>
        <motion.textarea
          whileFocus={{ scale: 1.01, boxShadow: "0 0 0 3px rgba(168, 85, 247, 0.15)" }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className={inputClasses}
          required
          placeholder="Tell us how we can help you..."
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.02, boxShadow: "0 10px 25px -5px rgba(124, 58, 237, 0.5)" }}
        whileTap={{ scale: 0.98 }}
        disabled={formStatus.loading || formStatus.submitted}
        type="submit"
        className={`w-full mt-6 cursor-pointer py-4 px-8 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg flex items-center justify-center space-x-2 ${
          formStatus.submitted 
            ? 'bg-green-600' 
            : formStatus.loading 
              ? 'bg-purple-400' 
              : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700'
        }`}
      >
        {formStatus.submitted ? (
          <>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>Message Sent!</span>
          </>
        ) : formStatus.loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <svg className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </>
        )}
      </motion.button>
      
      <div className="text-center text-sm text-gray-500 mt-2">
        We'll never share your information with anyone.
      </div>
    </motion.form>
  );
};

const ContactInfo = () => {
  const infoItems = [
    {
      icon: (
        <svg className="w-6 h-6 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Our Location",
      content: "123 Fitness Street, Gym City, GC 12345",
      color: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Phone Number",
      content: "+1 (555) 123-4567",
      color: "bg-indigo-50",
      hoverColor: "hover:bg-indigo-100"
    },
    {
      icon: (
        <svg className="w-6 h-6 text-violet-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Address",
      content: "info@fitlife.com",
      color: "bg-violet-50",
      hoverColor: "hover:bg-violet-100"
    }
  ];

  return (
    <div className="space-y-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect With Us</h3>
        <p className="text-gray-600">We're here to help you achieve your fitness goals. Reach out to us today!</p>
      </motion.div>
      
      {infoItems.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          whileHover={{ scale: 1.02, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)" }}
          className={`${item.color} ${item.hoverColor} p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-4 cursor-pointer transition-all duration-300`}
        >
          <div className="bg-white p-3 rounded-full shadow-sm">{item.icon}</div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
            <p className="text-gray-600 mt-1">{item.content}</p>
          </div>
        </motion.div>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border border-purple-100 shadow-sm"
      >
        <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
          <svg className="w-5 h-5 mr-2 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Business Hours
        </h4>
        <div className="space-y-2 text-gray-600 ml-7">
          <div className="flex justify-between">
            <span>Monday - Friday:</span>
            <span className="font-medium">6:00 AM - 10:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday:</span>
            <span className="font-medium">7:00 AM - 8:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Sunday:</span>
            <span className="font-medium">8:00 AM - 6:00 PM</span>
          </div>
        </div>
      </motion.div>
      
      {/* Social Media Links */}

    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 via-purple-50 to-violet-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-purple-200 mix-blend-multiply opacity-30 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 -left-32 w-80 h-80 rounded-full bg-indigo-200 mix-blend-multiply opacity-30 blur-3xl"
        />
      </div>
      
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '120px' }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-1.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full mx-auto mb-6"
          />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our fitness programs or membership plans? We're here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="order-2 lg:order-1 lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-3">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-purple-100/50 relative overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/10 rounded-full"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-indigo-500/10 rounded-full"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
                <p className="text-gray-600 mb-6">We'll get back to you as soon as possible.</p>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 