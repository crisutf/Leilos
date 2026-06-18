import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 20px',
        background: 'rgba(5, 5, 5, 0.98)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.25)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backdropFilter: 'blur(20px)',
      }}>
        <div className="brand" style={{ margin: 0, flexShrink: 0 }}>
          <NavLink to="/" style={{
            fontFamily: 'var(--font-orbitron)',
            color: '#d4af37',
            fontSize: '1.6em',
            textShadow: '0 0 12px rgba(212, 175, 55, 0.45)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>
            LEILOS
          </NavLink>
        </div>
        
        {/* Desktop Menu */}
        <ul className="desktop-menu" style={{
          display: 'flex',
          gap: '10px',
          listStyle: 'none',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              style={{ padding: '10px 18px' }}
            >
              <i className="fas fa-home" style={{ marginRight: '8px' }}></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/status" 
              className={({ isActive }) => isActive ? "active" : ""}
              style={{ padding: '10px 18px' }}
            >
              <i className="fas fa-heartbeat" style={{ marginRight: '8px' }}></i>Status
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news" 
              className={({ isActive }) => isActive ? "active" : ""}
              style={{ padding: '10px 18px' }}
            >
              <i className="fas fa-newspaper" style={{ marginRight: '8px' }}></i>News
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/downloads" 
              className={({ isActive }) => isActive ? "active" : ""}
              style={{ padding: '10px 18px' }}
            >
              <i className="fas fa-download" style={{ marginRight: '8px' }}></i>Downloads
            </NavLink>
          </li>
          <li style={{ marginLeft: '15px', borderLeft: '1px solid rgba(212, 175, 55, 0.25)', paddingLeft: '15px' }}>
            <a href="https://mini.crisu.qzz.io/leilos_discord" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 15px' }}>
              <i className="fab fa-discord"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/crisutf" target="_blank" rel="noopener noreferrer" style={{ padding: '10px 15px' }}>
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#d4af37',
            fontSize: '1.5em',
            cursor: 'pointer',
            padding: '5px',
          }}
        >
          <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </nav>
      
      {/* Mobile Sidebar */}
      <div 
        className={`mobile-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
          opacity: 0,
          visibility: 'hidden',
          transition: 'all 0.3s ease',
        }}
      />
      
      <aside 
        className={`mobile-sidebar ${menuOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          right: '-300px',
          width: '280px',
          height: '100vh',
          background: 'rgba(10, 10, 10, 0.98)',
          borderLeft: '1px solid rgba(212, 175, 55, 0.3)',
          zIndex: 1000,
          padding: '80px 20px 30px',
          transition: 'right 0.3s ease',
          backdropFilter: 'blur(20px)',
        }}
      >
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
        }}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/status" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}
            >
              <i className="fas fa-heartbeat"></i>Status
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/news" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}
            >
              <i className="fas fa-newspaper"></i>News
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/downloads" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setMenuOpen(false)}
              style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}
            >
              <i className="fas fa-download"></i>Downloads
            </NavLink>
          </li>
          <li style={{ marginTop: '20px', borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '20px' }}>
            <a href="https://mini.crisu.qzz.io/leilos_discord" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}>
              <i className="fab fa-discord"></i>Discord
            </a>
          </li>
          <li>
            <a href="https://github.com/crisutf" target="_blank" rel="noopener noreferrer" style={{ padding: '15px 20px', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1em' }}>
              <i className="fab fa-github"></i>GitHub
            </a>
          </li>
        </ul>
      </aside>
    </>
  );
};

export default Navbar;
