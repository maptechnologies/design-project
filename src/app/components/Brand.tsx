'use client';

import React, { useState, useEffect } from 'react';

const AnimatedSection: React.FC = () => {
  const [index, setIndex] = useState(0);
  const text = "DESIGN"; 
  const letters = text.split("");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % (letters.length + 1));
    }, 400); 
    return () => clearInterval(interval);
  }, [letters.length]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '80vh',
        background: '#fff',
        flexWrap: 'wrap',
      }}
    >
      {/* ✅ Left Side Animated Vertical Text */}
      <div
        style={{
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '6vw',
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
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '42px',
            fontWeight: 'bold',
            marginBottom: '20px',
            color: '#444245',
            lineHeight: 1.2,
            marginRight:'80px',
            marginTop:'2px',
          }}
        >
          Build Your Brand 
          <span style={{ color: '#444245' }}> With Us</span>
        </h1>
        <p
          style={{
            fontSize: '20px',
            maxWidth: '700px',
            color: '#555',
            lineHeight: 1.6,
            marginRight:'80px',
          }}
        >
       When we say branding and brand image, it isn’t just about a cool logo, or even one particular visual or some banners. It’s about a whole story of how the brand makes its space in the client’s heart and mind. It needs to be something that stirs up the whole scenario. It constitutes a set of features and characteristics that the clients associates to the product you’re offering. Now how impressive are those characteristics is what decides your brand equity. We research, build, manage, consider and reconsider, strengthen and refine your branding techniques and ideas. We build each brand as if our own and make sure that it garners the attention and customers that we would want for ourselves.
        </p>
      </div>
     
    </div>
  );
};

export default AnimatedSection;
