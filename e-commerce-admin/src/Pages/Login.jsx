import React, { useState, useEffect } from 'react';
// import anime from 'animejs';

const Login = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Animations temporarily disabled for compatibility
  }, []);

  const handleInputChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simple admin authentication (username: admin, password: admin)
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      setTimeout(() => {
        localStorage.setItem('admin-auth', 'true');
        if (setIsAuthenticated) setIsAuthenticated(true);
      }, 300);
    } else {
      setError('Invalid username or password');
    }
    setIsLoading(false);
  };

  return (
    <div className='admin-login'>
      <div className='admin-login-container'>
        <div className='login-header'>
          <h1 className='login-title'>Admin Panel</h1>
          <p className='login-subtitle'>Please sign in to continue</p>
        </div>
        
        <form onSubmit={handleLogin} className='login-form'>
          <div className='input-group'>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={credentials.username}
              onChange={handleInputChange}
              className='login-input'
              required
            />
          </div>
          
          <div className='input-group'>
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={credentials.password}
              onChange={handleInputChange}
              className='login-input'
              required
            />
          </div>
          
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          
          <button 
            type='submit' 
            className={`login-button ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
