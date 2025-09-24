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
        minHeight: '120vh',
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
          Conceptualization, Transformation And <br />
          <span style={{ color: '#3092ff' }}>Creativity</span>
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
          We possess experience of more than a decade and we shape your brand
          according to today's business needs. We blend creative strategies,
          outstanding designs, creative mindset and technological advancements.
          Whether you are looking to develop your own startup or revamp your
          present brand, we are here for you.
        </p>
      </div>
    </div>
  );
};

export default AnimatedSection;
