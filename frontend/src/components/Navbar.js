import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { FaBars, FaTimes, FaSignOutAlt, FaTools } from 'react-icons/fa';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsOpen(false);
  };

  const handleDashboardClick = () => {
    if (user?.role === 'barber') {
      navigate('/barber-dashboard');
    } else {
      navigate('/dashboard');
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-3xl font-display font-semibold tracking-tight text-primary-900">BarberConnect</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link">
              Home
            </Link>
            
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="nav-link"
                >
                  Dashboard
                </button>
                <Link to="/appointments" className="nav-link">
                  Appointments
                </Link>
                {user?.role === 'barber' && (
                  <Link to="/services" className="nav-link flex items-center">
                    <FaTools className="mr-1" />
                    Services
                  </Link>
                )}
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
                <div className="flex items-center space-x-6">
                  <span className="font-display text-sm text-primary-900">
                    Welcome, {user?.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary flex items-center space-x-2"
                  >
                    <FaSignOutAlt className="text-xs" />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="btn-primary">
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-primary-600 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 pt-4 pb-6 space-y-4 bg-white border-t border-primary-200">
            <Link
              to="/"
              className="nav-link block"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            
            {isAuthenticated ? (
              <>
                <button
                  onClick={handleDashboardClick}
                  className="nav-link block w-full text-left"
                >
                  Dashboard
                </button>
                <Link
                  to="/appointments"
                  className="nav-link block"
                  onClick={() => setIsOpen(false)}
                >
                  Appointments
                </Link>
                {user?.role === 'barber' && (
                  <Link
                    to="/services"
                    className="nav-link block flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaTools className="mr-2" />
                    Services
                  </Link>
                )}
                <Link
                  to="/profile"
                  className="nav-link block"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
                <div className="border-t border-primary-200 pt-6 mt-6">
                  <div className="font-display text-sm text-primary-900 mb-4">
                    Welcome, {user?.name}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="btn-secondary w-full flex items-center justify-center space-x-2"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="nav-link block"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="btn-primary block text-center mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 