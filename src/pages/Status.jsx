import React, { useState, useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Status = () => {
  const [statuses, setStatuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://cdn.crisu.qzz.io/services/leilos/api/status.json')
      .then(response => {
        if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
        return response.json();
      })
      .then(data => {
        const servicesList = data.services || (Array.isArray(data) ? data : []);
        if (Array.isArray(servicesList)) {
            setStatuses(servicesList);
        } else {
            console.error("Data format error: Expected array, got", data);
            setStatuses([]);
            setError("Invalid data format received from CDN.");
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error loading status:", err);
        setError(`Connection error: ${err.message}. Possible CORS block or file not found.`);
        setStatuses([]);
        setLoading(false);
      });
  }, []);

  const getStatusColor = (status) => {
    if (!status) return '#ff0000';
    try {
      switch(status.toLowerCase()) {
        case 'online': return '#00ff00';
        case 'maintenance': return '#ffa500';
        default: return '#ff0000';
      }
    } catch (e) { return '#ff0000'; }
  };

  return (
    <PageTransition>
      <div className="container" style={{ padding: '60px 20px' }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Estado de los Servicios</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '50px', fontSize: '1.1em' }}>Monitorización en tiempo real</p>
        </motion.div>
        
        {loading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '60px' }}
          >
            <div style={{ 
              width: '60px', 
              height: '60px', 
              border: '3px solid rgba(212, 175, 55, 0.2)',
              borderTop: '3px solid var(--primary)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 20px'
            }}></div>
            <p style={{ fontSize: '1.1em' }}>Cargando estado...</p>
          </motion.div>
        )}
        
        {error && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card" 
            style={{ 
              borderColor: '#ff0000', 
              maxWidth: '600px', 
              margin: '0 auto',
              textAlign: 'center',
              padding: '40px',
              borderRadius: '20px'
            }}
          >
              <i className="fas fa-exclamation-triangle" style={{ fontSize: '3.5em', color: '#ff0000', marginBottom: '20px' }}></i>
              <h3 style={{ color: '#ff0000', marginBottom: '15px', fontSize: '1.5em' }}>Error</h3>
              <p style={{ marginBottom: '15px' }}>{error}</p>
              <p style={{ fontSize: '0.85em', color: '#888' }}>
                Si estás ejecutando localmente, asegúrate de que el CDN permita CORS.
              </p>
          </motion.div>
        )}

        {!loading && !error && statuses.length === 0 && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="card" 
             style={{ textAlign: 'center', padding: '60px', borderRadius: '20px' }}
           >
              <i className="fas fa-inbox" style={{ fontSize: '3.5em', color: 'var(--text-muted)', marginBottom: '20px', opacity: '0.5' }}></i>
              <h3 style={{ marginBottom: '10px' }}>Sin información</h3>
              <p>No hay servicios listados.</p>
           </motion.div>
        )}

        {!loading && !error && statuses.length > 0 && (
          <div className="card-grid" style={{ gap: '25px' }}>
              {statuses.map((item, index) => {
                const statusColor = item.color || getStatusColor(item.status);
                return (
                  <motion.div
                    key={item.id || index}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="card"
                    style={{ 
                      padding: '35px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      borderRadius: '20px',
                      border: `1px solid ${statusColor}33`
                    }}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: `0 15px 35px rgba(0, 0, 0, 0.5), 0 0 30px ${statusColor}33`,
                      borderColor: `${statusColor}66`
                    }}
                  >
                      <div style={{ 
                        marginBottom: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <span 
                          style={{ 
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: statusColor,
                            boxShadow: `0 0 20px ${statusColor}`,
                            animation: 'pulse 2s infinite'
                          }}
                        ></span>
                      </div>
                      <h3 style={{ marginBottom: '10px', marginTop: 0, fontSize: '1.4em' }}>{item.name || 'Unknown Service'}</h3>
                      <p style={{ 
                        fontSize: '1.1em',
                        textTransform: 'uppercase', 
                        fontWeight: 'bold',
                        color: statusColor
                      }}>
                        {item.status || 'Unknown'}
                      </p>
                  </motion.div>
                );
              })}
          </div>
        )}
      </div>
    </PageTransition>
  );
};

export default Status;
