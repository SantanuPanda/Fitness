import React from 'react';
import { motion } from 'framer-motion';

const LoginComponent = ({ onToggleForm }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.1,
        duration: 0.5 
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-[600px] max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
      {/* Left Side - Welcome Message */}
      <motion.div 
        className="w-full lg:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 p-12 flex flex-col justify-center items-start text-white relative"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ 
          duration: 0.6, 
          ease: "easeOut" 
        }}
      >
        {/* Logo */}
        <motion.div 
          className="absolute top-8 left-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
              <motion.svg 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
              >
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </motion.svg>
            </div>
            <span className="ml-2 text-sm font-medium">Diprella</span>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        <motion.div 
          className="absolute top-40 right-10 w-32 h-32 rounded-full bg-blue-400/20 backdrop-blur-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-400/10 backdrop-blur-sm"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 w-20 h-20 bg-blue-400/20 transform rotate-45"
          initial={{ x: 20, y: 20, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        ></motion.div>
        
        <div className="pt-20">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Welcome Back!
          </motion.h2>
          <motion.p 
            className="text-lg mb-12 text-blue-100 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            To keep connected with us please login with your personal info
          </motion.p>
          <motion.button 
            onClick={onToggleForm} 
            className="px-10 py-3 border-2 border-white rounded-full text-white font-medium transition-all hover:bg-white hover:text-blue-600 uppercase tracking-wide text-sm"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            SIGN UP
          </motion.button>
        </div>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div 
        className="w-full lg:w-3/5 bg-white p-12 flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2 
          className="text-3xl font-bold text-blue-600 mb-4 text-center"
          variants={itemVariants}
          transition={{ duration: 0.5 }}
        >
          Login
        </motion.h2>
        
        {/* Social login options with reduced spacing */}
        <motion.div 
          className="flex justify-center space-x-10 mb-6"
          variants={itemVariants}
          transition={{ duration: 0.4 }}
        >
          <motion.button 
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
            </svg>
          </motion.button>
          <motion.button 
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
          </motion.button>
          <motion.button 
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </motion.button>
        </motion.div>

        <motion.div 
          className="flex items-center justify-center mb-6"
          variants={itemVariants}
          transition={{ duration: 0.4 }}
        >
          <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
          <span className="px-4 text-gray-500 text-sm">or use your email account:</span>
          <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
        </motion.div>
        
        {/* Form fields with reduced spacing */}
        <motion.form 
          className="space-y-0"
          variants={containerVariants}
        >
          <motion.div 
            className="relative mb-4"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <motion.input
              type="email"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Email"
              whileFocus={{ scale: 1.01, boxShadow: "0 4px 10px -3px rgba(0, 0, 0, 0.1)" }}
            />
          </motion.div>
          
          <motion.div 
            className="relative mb-4"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <motion.input
              type="password"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Password"
              whileFocus={{ scale: 1.01, boxShadow: "0 4px 10px -3px rgba(0, 0, 0, 0.1)" }}
            />
          </motion.div>

          <motion.div 
            className="flex justify-between items-center mb-4"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center">
              <motion.input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                Remember me
              </label>
            </div>
            <motion.a 
              href="#" 
              className="text-sm text-blue-600 hover:text-blue-800"
              whileHover={{ scale: 1.05, x: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Forgot password?
            </motion.a>
          </motion.div>
          
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors font-medium"
            variants={itemVariants}
            transition={{ duration: 0.4 }}
            whileHover={{ 
              scale: 1.03, 
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)", 
              backgroundColor: "#2563EB" 
            }}
            whileTap={{ scale: 0.97 }}
          >
            SIGN IN
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default LoginComponent;
