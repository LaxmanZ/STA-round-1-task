import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">STA SOLUTIONS</div>
      <div className="auth">
        <button className="auth-btn">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
