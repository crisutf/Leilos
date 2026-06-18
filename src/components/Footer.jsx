import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'rgba(5, 5, 5, 0.95)',
      borderTop: '1px solid rgba(212, 175, 55, 0.2)',
      padding: '50px 20px',
      marginTop: 'auto',
      color: 'var(--text-muted)',
      fontSize: '0.9em'
    }}>
      <div className="container" style={{ padding: '0', maxWidth: '1000px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', textAlign: 'left' }}>
          
          {/* Section 1: Legal & Disclaimer */}
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>LEGAL</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div>
                <strong style={{ color: '#fff' }}>Terms & Conditions</strong>
                <p style={{ fontSize: '0.85em', marginTop: '5px', lineHeight: '1.4' }}>
                  This project is not affiliated, associated, authorized, endorsed, or officially related in any way with Epic Games, Inc. We are an independent project created by the community for the community.
                </p>
              </div>
              <div style={{ marginTop: '10px' }}>
                <strong style={{ color: '#fff' }}>Privacy Policy</strong>
                <p style={{ fontSize: '0.85em', marginTop: '5px', lineHeight: '1.4' }}>
                  Your privacy is our priority. We do not collect, store, or share personal information. All code is transparent, monitored, and controlled to ensure your security.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: Links & Contact */}
          <div>
            <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>LINKS</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <a href="https://github.com/crisutf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fab fa-github"></i> GitHub (crisutf)
                </a>
              </li>
              <li>
              </li>
              <li>
                <a href="mailto:leilos@googlegroups.com" style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-envelope"></i> Contact (leilos@googlegroups.com)
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3: Credits & Powered By */}
          <div>
             <h4 style={{ color: 'var(--primary)', marginBottom: '15px', fontFamily: 'var(--font-orbitron)' }}>CREDITS</h4>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
               <p style={{ fontSize: '0.9em' }}>&copy; 2026 <span className="brand-text">Leilos</span>. All rights reserved.</p>
                
                {/* Trae.ai Ad */}
                <a href="https://www.trae.ai" target="_blank" rel="noopener noreferrer" className="trae-badge">
                    <div style={{ width: '28px', height: '21px', flexShrink: 0 }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="21" fill="none" viewBox="0 0 28 21" className="logo-IzEEXr">
                            <g clipPath="url(#logo_svg__a)">
                                <path fill="#fff" d="M28.002 20.846H4v-3.998H0V.846h28.002zM4 16.848h20.002V4.845H4zm10.002-6.062-2.829 2.828-2.828-2.828 2.828-2.829zm8-.002-2.828 2.828-2.829-2.828 2.829-2.829z"></path>
                            </g>
                            <defs>
                                <clipPath id="logo_svg__a">
                                    <path fill="#fff" d="M0 .846h28.002v20H0z"></path>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <div>
                        <span style={{ display: 'block', fontSize: '0.8em', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Powered by</span>
                        <span style={{ fontWeight: 'bold', color: '#fff' }}>Trae.ai</span>
                    </div>
                </a>
             </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
