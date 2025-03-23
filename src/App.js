// App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [email2, setEmail2] = useState(''); // Add a second email state
  const [error, setError] = useState('');
  const [error2, setError2] = useState(''); // Add a second error state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [success2, setSuccess2] = useState(false); // Add a second success state

  // Validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle first form submission
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

  // Handle second form submission
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    
    // Reset states
    setError2('');
    setSuccess2(false);
    
    // Validate empty submission
    if (!email2.trim()) {
      setError2('Email address is required');
      return;
    }
    
    // Validate email format
    if (!isValidEmail(email2)) {
      setError2('Please enter a valid email address');
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
        body: JSON.stringify({ email: email2 }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        // Handle API error response
        if (response.status === 422) {
          setError2(data.message || 'Emails ending with @ez.works are not allowed');
        } else {
          setError2(data.message || 'Something went wrong. Please try again.');
        }
      } else {
        // Handle successful response
        setSuccess2(true);
        setEmail2('');
      }
    } catch (err) {
      setError2('Failed to connect to the server. Please try again later.');
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
              <img src="https://dxw9jueyijhmn.cloudfront.net/ez_website/frontend_img/CommonImages/logo.webp" style={{ width: "80px", height: "80px" }} alt="Logo" className="logo-image" />
            </div>
            <h1 className="logo-title">Works</h1>
          </div>
          <h2 className="tagline">A Suite Of Business Support Services</h2>
          
          {/* Description Text */}
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          </p>
          
          {/* First Contact Form - Visible in desktop and mobile */}
          <div className="form-container desktop-form">
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
                  <img src="/1.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Presentation Design</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Audio-Visual Production */}
            <div className="service-card">
              <div className='plevel'>
                <div className="service-icon">
                  <img src="/2.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Audio - Visual Production</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Translation Services */}
            <div className="service-card">
              <div className='plevel'>
                <div className="service-icon">
                  <img src="/3.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Translation Services</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Graphic Design */}
            <div className="service-card">
              <div className='plevel'>
                <div className="service-icon">
                  <img src="/4.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Graphic Design</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Research & Analytics */}
            <div className="service-card">
              <div className='plevel'>
                <div className="service-icon">
                  <img src="/5.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Research & Analytics</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>

            {/* Data Processing */}
            <div className="service-card">
              <div className='plevel'>
                <div className="service-icon">
                  <img src="/6.png" alt="img" style={{ width: "35px", height: "35px" }} />
                </div>
                <h3 className="service-title">Data Processing</h3>
              </div>
              <p className="service-description">Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* Second Contact Form - Only visible at bottom in mobile view */}
        <div className="form-container mobile-form">
          <form onSubmit={handleSubmit2}>
            <div className="input-group">
              <input
                type="text"
                className={`form-input ${error2 ? 'input-error' : ''}`}
                placeholder="Email Address"
                value={email2}
                onChange={(e) => setEmail2(e.target.value)}
                disabled={loading}
              />
              {error2 && <div className="error-message">{error2}</div>}
              {success2 && <div className="success-message">Form submitted successfully!</div>}
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
      </main>
    </div>
  );
}

export default App;