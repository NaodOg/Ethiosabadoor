import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Error404.css';

const Error404 = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="error-404-container">
            {/* Animated background */}
            <div className="error-bg">
                <div className="error-bg-gradient"></div>
                <div className="error-grid"></div>
            </div>

            {/* Content */}
            <div className="error-content">
                {/* 404 Number with glitch effect */}
                <div className={`error-code ${glitchActive ? 'glitch' : ''}`}>
                    <span className="error-code-main">404</span>
                    <span className="error-code-shadow" aria-hidden="true">404</span>
                    <span className="error-code-shadow" aria-hidden="true">404</span>
                </div>

                {/* Error message */}
                <h1 className="error-title">Page Not Found</h1>
                <p className="error-description">
                    Oops! The page you're looking for seems to have wandered off into the digital void.
                    It might have been moved, deleted, or never existed in the first place.
                </p>

                {/* Action buttons */}
                <div className="error-actions">
                    <Link to="/" className="error-btn error-btn-primary">
                        <svg className="error-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Go Home
                    </Link>
                    <button onClick={() => window.history.back()} className="error-btn error-btn-secondary">
                        <svg className="error-btn-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Go Back
                    </button>
                </div>

                {/* Decorative elements */}
                <div className="error-decorative">
                    <div className="error-particle"></div>
                    <div className="error-particle"></div>
                    <div className="error-particle"></div>
                    <div className="error-particle"></div>
                    <div className="error-particle"></div>
                </div>
            </div>

            {/* Floating shapes */}
            <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
            </div>
        </div>
    );
};

export default Error404;
