// App.js
import React, { useState } from 'react';
import './App.css';
// import firstImage from "../public/first.png"

function App() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError('');
    setSuccess(false);
    
    // Validate empty submission
    if (!email.trim()) {
      setError('Email address is required');
      return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Process form submission
    setLoading(true);
    
    try {
      const response = await fetch('https://test.ezworks.ai/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Handle API error response
        if (response.status === 422) {
          setError(data.message || 'Emails ending with @ez.works are not allowed');
        } else {
          setError(data.message || 'Something went wrong. Please try again.');
        }
      } else {
        // Handle successful response
        setSuccess(true);
        setEmail('');
      }
    } catch (err) {
      setError('Failed to connect to the server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <main className="main-content">
        {/* Logo and Tagline */}
        <div className="branding">
          <div className="logo-container">
            <div className="logo-box">
            <img src="https://dxw9jueyijhmn.cloudfront.net/ez_website/frontend_img/CommonImages/logo.webp"  style={{ width: "80px", height: "80px" }} alt="Logo" className="logo-image" />

            </div>
            <h1 className="logo-title">Works</h1>
          </div>
          <h2 className="tagline">Suite Of Business Support Services</h2>
          
          {/* Description Text */}
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
          
          {/* Contact Form */}
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input
                  type="text"
                  className={`form-input ${error ? 'input-error' : ''}`}
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">Form submitted successfully!</div>}
              </div>
              <button 
                type="submit" 
                className="submit-button"
                disabled={loading}
              >
                {loading ? 'Processing...' : 'Contact Me'}
              </button>
            </form>
          </div>
        </div>

        {/* Services Grid */}
        <div className="services-section">
          <div className="services-grid">
            {/* Presentation Design */}
            <div className="service-card">
              <div className='plevel'>
              <div className="service-icon">
               
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="service-title">Presentation Design</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Audio-Visual Production */}
            <div className="service-card">
            <div className='plevel'>
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="23 7 16 12 23 17 23 7"></polygon>
                  <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
              </div>
              <h3 className="service-title">Audio - Visual Production</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Translation Services */}
            <div className="service-card">
            <div className='plevel'>
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 8l6 6"></path>
                  <path d="M4 14l6-6 2-3"></path>
                  <path d="M2 5h12"></path>
                  <path d="M7 2h1"></path>
                  <path d="M22 22l-5-10-5 10"></path>
                  <path d="M14 18h6"></path>
                </svg>
              </div>
              <h3 className="service-title">Translation Services</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Graphic Design */}
            <div className="service-card">
            <div className='plevel'>
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
              </div>
              <h3 className="service-title">Graphic Design</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Research & Analytics */}
            <div className="service-card">
            <div className='plevel'>
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              <h3 className="service-title">Research & Analytics</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Data Processing */}
            <div className="service-card">
            <div className='plevel'>
              <div className="service-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6" y2="6"></line>
                  <line x1="6" y1="18" x2="6" y2="18"></line>
                </svg>
              </div>
              <h3 className="service-title">Data Processing</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;