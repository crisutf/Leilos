import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Home = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [countLoading, setCountLoading] = useState(true);

  useEffect(() => {
    const fetchPlayerCount = async () => {
      try {
        const response = await fetch('https://backend-leilos-services.crisu.qzz.io/api/v1/player-count');
        const data = await response.json();
        setPlayerCount(data.count || 0);
      } catch (error) {
        console.error('Error fetching player count:', error);
        setPlayerCount(0);
      } finally {
        setCountLoading(false);
      }
    };

    fetchPlayerCount();
    const interval = setInterval(fetchPlayerCount, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <PageTransition>
      <div style={{ padding: '0', minHeight: '70vh' }}>
        <div className="container" style={{ padding: '60px 20px' }}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            style={{ textAlign: 'center', marginBottom: '50px' }}
        >
            <div style={{
                display: 'inline-flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '25px'
            }}>
                <h1 className="brand-script" style={{ 
                    margin: 0, 
                    fontSize: '2.8em',
                    letterSpacing: '0.1em'
                }}>LEILOS</h1>
                <div style={{
                    width: '150px',
                    height: '3px',
                    background: 'var(--gold-gradient)',
                    margin: '0 auto',
                    borderRadius: '2px'
                }}></div>
            </div>
            
            <p style={{ 
              fontSize: '1.4em', 
              color: 'var(--text-muted)', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: '1.7'
            }}>
              Un proyecto de Fortnite hecho por y para la comunidad. 100% seguro, sin Epic Games.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            style={{ marginBottom: '50px' }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '20px',
              maxWidth: '450px',
              margin: '0 auto',
              background: 'rgba(212, 175, 55, 0.08)',
              padding: '30px 40px',
              borderRadius: '20px',
              border: '1px solid rgba(212, 175, 55, 0.25)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(212, 175, 55, 0.05)'
            }}>
              <div style={{
                background: 'rgba(212, 175, 55, 0.15)',
                padding: '20px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <i className="fas fa-users" style={{ fontSize: '2.8em', color: 'var(--primary)' }}></i>
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ 
                  color: 'var(--text-muted)', 
                  fontSize: '0.95em', 
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  marginBottom: '5px'
                }}>Jugadores Conectados</div>
                <div style={{ 
                  fontSize: '3em', 
                  fontFamily: 'var(--font-orbitron)',
                  color: 'var(--primary)',
                  fontWeight: 'bold',
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.5)'
                }}>
                  {countLoading ? '...' : playerCount}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center', marginBottom: '40px' }}
          >
            <a href="https://backend-leilos-services.crisu.qzz.io/api/v2/discord/login" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
              background: 'var(--primary)',
              color: '#000',
              fontSize: '1.1em',
              padding: '14px 35px'
            }}>
              <i className="fas fa-user-circle" style={{ marginRight: '10px' }}></i> Mi Cuenta
            </a>
            <a href="https://mini.crisu.qzz.io/leilos_discord" target="_blank" rel="noopener noreferrer" className="btn" style={{ 
                fontSize: '1.1em',
                padding: '14px 35px'
              }}>
                <i className="fab fa-discord" style={{ marginRight: '10px' }}></i> Discord
              </a>
            <a href="https://github.com/crisutf" target="_blank" rel="noopener noreferrer" className="btn" style={{
              fontSize: '1.1em',
              padding: '14px 35px'
            }}>
              <i className="fab fa-github" style={{ marginRight: '10px' }}></i> GitHub
            </a>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
