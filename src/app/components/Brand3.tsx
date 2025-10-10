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
         E-Commerce Solutions For <br />  
          <span style={{ color: '#3092ff' }}> Your Online Business </span>
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
       One of the foremost fronts of business these days are websites and online platforms to perform sales and product displays. There are a great many number of websites available where you can submit your products for display and sales but one of these third party sites and platforms can ensure the level of personalization and you-centeredness as can offer a personal e-Commerce site. This is why we often recommend our customers with products to sell to go for our e-Commerce site services. Our well designed e-Commerce sites help you achieve your sales targets in no time. We study and understand the unique needs of each client that we get in business with and prepare a solution which reflects the deep research we do.
        </p>
      </div>
     
    </div>
  );
};

export default AnimatedSection;
