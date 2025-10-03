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
          Setting The Standards for the web <br />  
          <span style={{ color: '#3092ff' }}>  design industry</span>
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
       The skilled and experienced team of Websites Designs Agency has always employed state of the art technology and advanced business practices to ensure maximum engagement on the customer sites. The prime focus is laid on a solution that is not only efficient and advanced but also pleasing to the eye, hence a homogeneous amalgam of design and technical efficiency. We not only give a good research and survey time to each project that we work on coming up with concepts and ideas along the way, but also keep in mind the competition in the market and considering the different methods that allow us to match the brilliance in the market.
        </p>
      </div>
     
    </div>
  );
};

export default AnimatedSection;
