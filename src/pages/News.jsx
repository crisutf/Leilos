import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cdn.crisu.qzz.io/services/leilos/api/news.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
            setNews(data);
        } else {
            console.error("Data format error: Expected array, got", data);
            setNews([]);
            setError("Invalid data format received from CDN.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading news:", err);
        setError(`Connection error: ${err.message}. Possible CORS block.`);
        setNews([]);
        setLoading(false);
      });
  }, []);

  const cleanImageUrl = (url) => {
    if (!url) return null;
    return url.replace(/[`\s]/g, '').trim();
  };

  return (
    <PageTransition>
      <div className="container" style={{ padding: '60px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <h2 style={{ 
            marginBottom: '10px'
          }}>Noticias & Actualizaciones</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1em' }}>Lo último del proyecto</p>
        </motion.div>
        
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '80px 20px' }}
          >
            <div style={{ 
              width: '70px', 
              height: '70px', 
              border: '4px solid rgba(212, 175, 55, 0.2)',
              borderTop: '4px solid var(--primary)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 25px'
            }}></div>
            <p style={{ fontSize: '1.2em', color: 'var(--text-muted)' }}>Cargando noticias...</p>
          </motion.div>
        )}

        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            style={{ 
              background: 'rgba(255, 0, 0, 0.08)', 
              border: '1px solid rgba(255, 0, 0, 0.4)',
              borderRadius: '20px',
              padding: '50px 30px',
              textAlign: 'center',
              maxWidth: '600px',
              margin: '0 auto'
            }}
          >
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '3.5em', color: '#ff0000', marginBottom: '20px' }}></i>
              <h3 style={{ color: '#ff0000', marginBottom: '15px', fontSize: '1.6em' }}>Error al cargar</h3>
              <p style={{ color: 'var(--text-muted)' }}>{error}</p>
          </motion.div>
        )}
        
        {!loading && !error && news.length === 0 && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             style={{ 
               textAlign: 'center', 
               padding: '80px 20px',
               background: 'rgba(255, 255, 255, 0.02)',
               borderRadius: '20px',
               border: '1px solid rgba(212, 175, 55, 0.1)'
             }}
           >
              <i className="fas fa-inbox" style={{ 
                fontSize: '4em', 
                color: 'var(--text-muted)', 
                marginBottom: '25px',
                opacity: '0.5'
              }}></i>
              <h3 style={{ marginBottom: '10px' }}>Sin noticias</h3>
              <p style={{ color: 'var(--text-muted)' }}>Vuelve más tarde para ver las actualizaciones.</p>
           </motion.div>
        )}

        {!loading && !error && news.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '35px', maxWidth: '900px', margin: '0 auto' }}>
              {news.map((item, index) => {
                const imgUrl = cleanImageUrl(item.image);
                return (
                  <motion.div
                    key={item.id || index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{ 
                      background: 'var(--bg-card)',
                      border: '1px solid rgba(212, 175, 55, 0.15)',
                      borderRadius: '24px',
                      overflow: 'hidden',
                      position: 'relative',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(212, 175, 55, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
                      e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.15)';
                    }}
                  >
                      {imgUrl && (
                        <div style={{ 
                          height: '260px',
                          overflow: 'hidden',
                          position: 'relative'
                        }}>
                          <img 
                            src={imgUrl} 
                            alt={item.title || 'News image'} 
                            style={{ 
                              width: '100%', 
                              height: '100%', 
                              objectFit: 'cover',
                              transition: 'transform 0.6s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                          />
                          <div style={{
                            position: 'absolute',
                            bottom: '0',
                            left: '0',
                            right: '0',
                            height: '120px',
                            background: 'linear-gradient(to top, rgba(10, 10, 10, 1), transparent)'
                          }}></div>
                        </div>
                      )}
                      <div style={{ padding: '40px' }}>
                        <div style={{ 
                          display: 'flex', 
                          flexWrap: 'wrap',
                          justifyContent: 'space-between', 
                          alignItems: 'flex-start', 
                          marginBottom: '25px',
                          gap: '15px'
                        }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {item.category && (
                              <span style={{ 
                                color: '#000', 
                                fontSize: '0.85em', 
                                background: 'var(--primary)', 
                                padding: '6px 16px', 
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                letterSpacing: '0.5px',
                                textTransform: 'uppercase',
                                width: 'fit-content'
                              }}>
                                <i className="fas fa-tag"></i> {item.category}
                              </span>
                            )}
                            <h3 style={{ 
                              fontSize: '1.5em',
                              margin: 0,
                              lineHeight: '1.3'
                            }}>{item.title || 'Untitled'}</h3>
                          </div>
                          <span style={{ 
                            color: 'var(--primary)', 
                            fontSize: '0.95em', 
                            background: 'rgba(212, 175, 55, 0.08)', 
                            padding: '10px 18px', 
                            borderRadius: '12px',
                            border: '1px solid rgba(212, 175, 55, 0.25)',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontWeight: '500',
                            whiteSpace: 'nowrap'
                          }}>
                            <i className="far fa-calendar-alt"></i> {item.date || ''}
                          </span>
                        </div>
                        {item.summary && (
                          <p style={{ 
                            color: 'var(--text-muted)', 
                            fontStyle: 'italic', 
                            marginBottom: '15px',
                            fontSize: '1.05em',
                            lineHeight: '1.6',
                            paddingLeft: '14px',
                            borderLeft: '3px solid var(--primary)'
                          }}>
                            {item.summary}
                          </p>
                        )}
                        <p style={{ 
                          lineHeight: '1.7',
                          color: 'rgba(255, 255, 255, 0.88)',
                          fontSize: '0.98em'
                        }}>{item.content || ''}</p>
                      </div>
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default News;
