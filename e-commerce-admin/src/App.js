import { BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import Login from "./Pages/Login";
import "./Pages/CSS/Login.css";
// import anime from 'animejs';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if admin is already authenticated
    const adminAuth = localStorage.getItem('admin-auth');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
    
    // Loading complete
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin-auth');
    setIsAuthenticated(false);
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}>
        <div style={{
          fontSize: '18px',
          color: '#2c3e50',
          fontWeight: '600'
        }}>Loading...</div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <div className="app-container">
        {!isAuthenticated ? (
          <Login setIsAuthenticated={setIsAuthenticated} />
        ) : (
          <div>
            <Navbar onLogout={handleLogout} />
            <Admin />
            <Footer />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
