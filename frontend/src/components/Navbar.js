import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const menuItems = [
  { label: 'Accueil', link: '/' },
  { label: 'Films', link: '/films' },
  { label: 'Series', link: '/series' },
  { label: 'Se Connecter', link: '/connexion' },
];

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <p className="Logo">Movie Advisor</p>
      </div>
      <ul className={`navbar__menu ${sidebarOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <li className="navbar__item" key={index}>
            <Link to={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="navbar__mobile-toggle" onClick={toggleSidebar}>
        {sidebarOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar__sidebar ${sidebarOpen ? 'active' : ''}`}>
        <div className="navbar__sidebar-header">
          <p className="Logo">Movie Advisor</p>
          <FaTimes className="navbar__close-icon" onClick={toggleSidebar} />
        </div>
        <ul className="navbar__sidebar-menu">
          {menuItems.map((item, index) => (
            <li className="navbar__item" key={index}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          ))}
          <hr />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
