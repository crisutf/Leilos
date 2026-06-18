import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Downloads = () => {
  return (
    <PageTransition>
      <div className="container" style={{ padding: '60px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Downloads</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.1em' }}>Get the latest version of Leilos</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card" 
          style={{ 
            maxWidth: '700px', 
            margin: '0 auto', 
            padding: '50px 40px', 
            background: 'var(--bg-card)', 
            border: '1px solid rgba(212, 175, 55, 0.25)', 
            borderRadius: '16px',
            textAlign: 'center',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
          }}
          whileHover={{ 
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.15)',
            borderColor: 'rgba(212, 175, 55, 0.5)'
          }}
        >
          <div style={{ 
            fontSize: '4em', 
            color: 'var(--primary)', 
            marginBottom: '25px',
            textShadow: '0 0 30px rgba(212, 175, 55, 0.4)'
          }}>
            <i className="fas fa-box"></i>
          </div>
          <h3 style={{ 
            color: 'var(--primary)', 
            marginBottom: '15px', 
            fontSize: '2em' 
          }}>
            Leilos Launcher v1.1.5
          </h3>
          <p style={{ 
            marginBottom: '35px', 
            fontSize: '1.15em', 
            color: 'var(--text-muted)',
            lineHeight: '1.6'
          }}>
            The launcher is now available. Download it to start playing.
          </p>
          
          <div style={{ marginBottom: '40px' }}>
              <a 
                href="https://cdn.crisu.qzz.io/services/leilos/download/Leilos Launcher_1.1.5_x64_en-US.msi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn"
                style={{ 
                  fontSize: '1.3em',
                  boxShadow: '0 0 25px rgba(212, 175, 55, 0.5)'
                }}
              >
                  <i className="fas fa-download" style={{ marginRight: '12px' }}></i>
                  Download Launcher
              </a>
          </div>

          <div style={{ 
            marginTop: '20px', 
            borderTop: '1px solid rgba(255, 255, 255, 0.12)', 
            paddingTop: '30px'
          }}>
              <p style={{ 
                fontSize: '1em', 
                color: 'var(--text-muted)', 
                marginBottom: '15px'
              }}>
                <i className="fas fa-shield-alt" style={{ marginRight: '8px' }}></i>
                Want to verify? Check our source code on GitHub:
              </p>
              <a 
                href="https://github.com/crisutf/Mackna" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  color: 'var(--primary)', 
                  textDecoration: 'none', 
                  wordBreak: 'break-all',
                  fontSize: '1.05em',
                  fontWeight: '500',
                  padding: '12px 24px',
                  border: '1px solid rgba(212, 175, 55, 0.3)',
                  borderRadius: '8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(212, 175, 55, 0.1)';
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                  <i className="fab fa-github" style={{ fontSize: '1.2em' }}></i>
                  github.com/crisutf/mackna
              </a>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Downloads;
