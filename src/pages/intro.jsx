'use client';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './intro.css';

const TYPEWRITER_TEXT = `Welcome To e-Logik' 2026`;

export default function Intro() {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < TYPEWRITER_TEXT.length) {
        setDisplayedText(TYPEWRITER_TEXT.substring(0, index + 1));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typeInterval);
      }
    }, 200);

    return () => clearInterval(typeInterval);
  }, []);

  const handleGetStarted = () => {
    navigate('/welcome');
  };

  return (
    <div className="intro-container">
      <div className="typewriter-wrapper">
        <div className="typewriter-text">
          <p id="typewriter-text">{displayedText}</p>
          <button
            className={`get-started-btn ${isTypingComplete ? 'zoom-in' : ''}`}
            onClick={handleGetStarted}
          >
            Let's Get Started
          </button>
        </div>
      </div>

      <div className="bubbles">
        {Array.from({ length: 45 }).map((_, i) => (
          <span key={i} style={{ '--i': String(11 + (i % 18)) }}></span>
        ))}
      </div>
    </div>
  );
}
