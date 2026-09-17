'use client';

import React, { useState, useEffect } from 'react';

const AnimatedSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const text = "DESIGN"; 
  const letters = text.split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (letters.length + 1));
    }, 400); 
    return () => clearInterval(interval);
  }, [letters.length]);

  useEffect(() => {
    const checkSize = () => {
      setIsMobile(window.innerWidth < 640);
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1024);
    };
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: isMobile ? 'auto' : '65vh',
        background: '#fff',
        flexWrap: 'wrap',
      }}
    >
      {/* ✅ Left Side Animated Vertical Text */}
      <div
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: isMobile ? '10vw' : isTablet ? '8vw' : '6vw',
          fontWeight: 'bold',
          color: '#333',
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: 'block',
              opacity: i < index ? 1 : 0, // ✅ Sirf left letters animate honge
              transition: 'opacity 0.3s ease',
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ✅ Right Side Static Content (No Animation) */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: isMobile ? '20px 16px' : '20px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? '26px' : isTablet ? '34px' : '42px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#444245',
            lineHeight: 1.2,
            marginRight: isMobile ? '0px' : isTablet ? '30px' : '80px',
            marginTop: '2px',
            font: 'serif',
          }}
        >
          Build Your Brand 
          <span style={{ color: '#444245' }}> With Us</span>
        </h1>
        <p
          style={{
            fontSize: isMobile ? '15px' : isTablet ? '17px' : '18px',
            maxWidth: '700px',
            color: '#555',
            lineHeight: 1.6,
            marginRight: isMobile ? '0px' : isTablet ? '30px' : '80px',
          }}
        >
       When we say branding and brand image, it isn’t just about a cool logo, or even one particular visual or some banners. It’s about a whole story of how the brand makes its space in the client’s heart and mind. It needs to be something that stirs up the whole scenario. It constitutes a set of features and characteristics that the clients associates to the product you’re offering. Now how impressive are those characteristics is what decides your brand equity. We research, build, manage, consider and reconsider, strengthen and refine your branding techniques and ideas. We build each brand as if our own and make sure that it garners the attention and customers that we would want for ourselves.
        </p>

        <button
          style={{
            marginTop: isMobile ? '20px' : '30px',
            marginRight: isMobile ? '0px' : isTablet ? '30px' : '80px',
            padding: isMobile ? '12px 28px' : '14px 40px',
            fontSize: isMobile ? '14px' : '15px',
            fontWeight: 500,
            letterSpacing: '1px',
            color: '#333',
            background: '#fff',
            border: '2px solid #59c9e0',
            borderRadius: '50px',
            cursor: 'pointer',
            textTransform: 'uppercase',
            boxShadow: '0 0 10px rgba(89, 201, 224, 0.3)',
            transition: 'all 0.3s ease',
          }}
        >
          Lets Get Started
        </button>
      </div>
     
    </div>
  );
};

export default AnimatedSection;