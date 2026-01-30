import React from 'react';

const Error404 = () => {
    return (
        <div style={{
            fontFamily: '"Times New Roman", Times, serif',
            color: '#000',
            backgroundColor: '#fff',
            padding: '20px',
            textAlign: 'center',
            height: '100vh',
            margin: '0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>404 Not Found</h1>
            <p style={{ fontSize: '18px', marginBottom: '30px' }}>
                The requested URL was not found on this server.
            </p>
            <hr style={{ width: '100%', maxWidth: '500px', border: 'none', borderTop: '1px solid #ccc', margin: '20px 0' }} />
            <address style={{ fontSize: '14px', fontStyle: 'normal', marginTop: '30px' }}>
                Apache/2.4.52 (Ubuntu) Server at {window.location.hostname} Port {window.location.port || 80}
            </address>
        </div>
    );
};

export default Error404;
