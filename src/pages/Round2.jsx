import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/round2.css';

const Round2 = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/blind-coding');
  };

  return (
    <div className="round2-container">
      <div className="round2-particles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className="round2-particle"></div>
        ))}
      </div>

      <div className="round2-decorative-icons">
        <div className="round2-icon-wrapper">💻</div>
        <div className="round2-icon-wrapper">👁️‍🗨️</div>
        <div className="round2-icon-wrapper">🏆</div>
      </div>

      <div className="monitor">
        <div className="monitor-screen">
          <div className="round2-welcome-content">
            <span className="round2-year-badge">Round - 2</span>
            <h1 className="round2-title">Bit Bash Bonanza</h1>
            <p className="round2-subtitle">Blind Coding</p>

            <div style={{ marginTop: 30 }}>
              <button className="round2-lang-btn python" onClick={handleStart}>
                Start
              </button>
            </div>
          </div>
        </div>
        <div className="power-button"></div>
      </div>
    </div>
  );
};

export default Round2;
