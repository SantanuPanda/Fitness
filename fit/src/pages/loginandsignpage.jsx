import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoginComponent from '../components/loginandsignup/LoginComponent';
import SignUpComponent from '../components/loginandsignup/SignUpComponent';

const LoginAndSignPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center py-0 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-950/70 z-0"></div>
      <div className="absolute inset-0 bg-[url('/images/fitness-pattern.svg')] opacity-5 z-0"></div>
      
      <div className="w-full max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row h-[650px] rounded-xl overflow-hidden shadow-2xl">
          <AnimatePresence initial={false} mode="popLayout">
            {/* Welcome Message Container */}
            <motion.div 
              key={isSignUp ? "welcome-right" : "welcome-left"}
              className={`w-full lg:w-2/5 bg-gradient-to-br from-blue-500 to-blue-700 p-12 flex flex-col justify-center items-start text-white relative ${isSignUp ? 'lg:order-2' : 'lg:order-1'}`}
              initial={{ 
                x: isSignUp ? 300 : -300,
                opacity: 0
              }}
              animate={{ 
                x: 0,
                opacity: 1
              }}
              exit={{
                x: isSignUp ? -300 : 300,
                opacity: 0
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
            >
              {/* Decorative elements - Modified positioning to avoid text overlap */}
              <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-400/20 backdrop-blur-sm"></div>
              <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-blue-400/10 backdrop-blur-sm"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-blue-400/20 transform rotate-45"></div>
              
              <div className="relative z-10">
                <motion.h2 
                  key={isSignUp ? 'signup-title' : 'signin-title'}
                  className="text-4xl font-bold mb-6 text-white"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  {isSignUp ? 'Hello, Friend!' : 'Welcome Back!'}
                </motion.h2>
                <motion.p 
                  key={isSignUp ? 'signup-text' : 'signin-text'}
                  className="text-lg mb-8 text-blue-100 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {isSignUp 
                    ? 'Enter your personal details and start your journey with us today!'
                    : 'To keep connected with us please login with your personal info'
                  }
                </motion.p>
              </div>
            </motion.div>

            {/* Form Container */}
            <motion.div 
              key={isSignUp ? "form-left" : "form-right"}
              className={`w-full lg:w-3/5 bg-white p-8 flex flex-col justify-center ${isSignUp ? 'lg:order-1' : 'lg:order-2'}`}
              initial={{ 
                x: isSignUp ? -300 : 300,
                opacity: 0 
              }}
              animate={{ 
                x: 0,
                opacity: 1 
              }}
              exit={{
                x: isSignUp ? 300 : -300,
                opacity: 0
              }}
              transition={{ 
                duration: 0.5, 
                ease: "easeInOut" 
              }}
            >
              <div className="h-full px-4 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {isSignUp ? (
                    <motion.div
                      key="signup-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <motion.h2 
                        className="text-3xl font-bold text-blue-600 mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        Create Account
                      </motion.h2>
                      
                      {/* Social Login Buttons with reduced spacing */}
                      <motion.div 
                        className="flex justify-center space-x-10 mb-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                          </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </button>
                      </motion.div>

                      {/* Divider with reduced spacing */}
                      <motion.div 
                        className="flex items-center justify-center mb-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
                        <span className="px-4 text-gray-500 text-sm">or use your email for registration:</span>
                        <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
                      </motion.div>
                      
                      {/* Form fields with reduced spacing */}
                      <motion.form 
                        className="space-y-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {/* Conditional rendering of name field for signup */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                            </svg>
                          </div>
                          <input
                            type="text"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Name"
                          />
                        </div>
                        
                        {/* Email field */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Email"
                          />
                        </div>
                        
                        {/* Password field */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Password"
                          />
                        </div>
                        
                        {/* User type selection for signup */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <select
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                          >
                            <option value="" disabled selected>Select User Type</option>
                            <option value="nutritionist">Nutritionist</option>
                            <option value="athlete">Athlete</option>
                            <option value="coach">Coach</option>
                          </select>
                        </div>
                        
                        <motion.button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors font-medium mt-3"
                          whileHover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          SIGN UP
                        </motion.button>

                        <div className="text-center mt-3">
                          <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <button 
                              type="button" 
                              onClick={toggleForm} 
                              className="text-blue-600 font-medium hover:text-blue-800"
                            >
                              Sign In
                            </button>
                          </p>
                        </div>
                      </motion.form>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="signin-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      <motion.h2 
                        className="text-3xl font-bold text-blue-600 mb-4 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        Login
                      </motion.h2>
                      
                      {/* Social Login Buttons with reduced spacing */}
                      <motion.div 
                        className="flex justify-center space-x-10 mb-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                          </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
                          </svg>
                        </button>
                        <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <svg className="h-6 w-6 text-blue-700" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                          </svg>
                        </button>
                      </motion.div>

                      {/* Divider with reduced spacing */}
                      <motion.div 
                        className="flex items-center justify-center mb-6"
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
                        <span className="px-4 text-gray-500 text-sm">or use your account:</span>
                        <span className="h-px bg-gray-300 w-full max-w-[100px]"></span>
                      </motion.div>
                      
                      {/* Form fields with reduced spacing */}
                      <motion.form 
                        className="space-y-0"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                      >
                        {/* Email field */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </div>
                          <input
                            type="email"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Email"
                          />
                        </div>
                        
                        {/* Password field */}
                        <div className="relative mb-4">
                          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <input
                            type="password"
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Password"
                          />
                        </div>

                        {/* Login specific options */}
                        <div className="flex justify-between items-center mb-4">
                          <div className="flex items-center">
                            <input
                              id="remember-me"
                              name="remember-me"
                              type="checkbox"
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-600">
                              Remember me
                            </label>
                          </div>
                          <a href="#" className="text-sm text-blue-600 hover:text-blue-800">
                            Forgot password?
                          </a>
                        </div>
                        
                        <motion.button
                          type="submit"
                          className="w-full bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors font-medium"
                          whileHover={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                          whileTap={{ scale: 0.98 }}
                        >
                          SIGN IN
                        </motion.button>

                        <div className="text-center mt-3">
                          <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <button 
                              type="button" 
                              onClick={toggleForm} 
                              className="text-blue-600 font-medium hover:text-blue-800"
                            >
                              Sign Up
                            </button>
                          </p>
                        </div>
                      </motion.form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default LoginAndSignPage;
