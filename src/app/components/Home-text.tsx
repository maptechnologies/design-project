'use client';

import React, { useState, useEffect } from 'react';

const AnimatedSection: React.FC = () => {
 const [index, setIndex] = useState(0);

const text = "Dseign";
const letters = text.split("");

useEffect(() => {
  const interval = setInterval(() => {
    setIndex((prev) => (prev + 1) % (letters.length + 1));
  }, 400);

  return () => clearInterval(interval);
}, [letters.length]);

// 👇 YAHAN ADD KARO
const creativeText = "Creative.";
const creativeLetters = creativeText.split("");

const [creativeIndex, setCreativeIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCreativeIndex((prev) => (prev + 1) % (creativeLetters.length + 1));
  }, 400);

  return () => clearInterval(interval);
}, [creativeLetters.length]);

// 👇 Iske baad return aayega


  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        minHeight: '60vh',
        background: '#fff',
      }}
    >
      
{/* ✅ Right Side Animated Vertical Text */}
<div
  className="creative-text"
  style={{
    position: "absolute",
    right: "20px",
    top: "58%",
    transform: "translateY(-50%) rotate(180deg)",
    writingMode: "vertical-rl",
    fontSize: "6vw",
    fontWeight: "bold",
    color: "#333",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    width: "auto",
    pointerEvents: "none",
    userSelect: "none",
  }}
>
  {creativeLetters.map((letter, i) => (
    <span
      key={i}
      style={{
        display: "block",
        opacity: i < creativeIndex ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      {letter}
    </span>
  ))}
</div>
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
          width: 'auto',
        }}
      >
        
        {letters.map((letter, i) => (
          <span
            key={i}
            style={{
              display: 'block',
              opacity: i < index ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            {letter}
          </span>
        ))}
      </div>

      {/* ✅ Right Side Static Content */}
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
            marginRight: '80px',
            marginTop: '2px',
          }}
        >
          Conceptualization, Transformation And <br /> Creativity <br />
          <span style={{ color: '#3092ff' }}></span>
        </h1>
        <p
          style={{
            fontSize: '21px',
            maxWidth: '700px',
            color: '#555',
            lineHeight: 1.6,
            marginRight: '80px',
          }}
        >
          We possess experience of more than a decade and we shape your brand
          according to today's business needs. We blend creative strategies,
          outstanding designs, creative mindset and technological advancements.
          Whether you are looking to develop your own startup or revamp your
          present brand, we are here for you.
        </p>
      </div>

      {/* ✅ Responsive CSS */}
      <style>{`
        @media (max-width: 1024px) {
          h1 {
            font-size: 32px !important;
            margin-right: 0 !important;
          }
          p {
            font-size: 18px !important;
            margin-right: 0 !important;
          }
        }

        @media (max-width: 768px) {
          div[style*='writing-mode'] {
            writing-mode: horizontal-tb !important;
            transform: rotate(0deg) !important;
            font-size: 10vw !important;
            width: 100% !important;
            justify-content: center !important;
            margin-bottom: 20px !important;
          }
          h1 {
            font-size: 26px !important;
            margin-right: 0 !important;
            text-align: center !important;
          }
          p {
            font-size: 16px !important;
            max-width: 100% !important;
            margin-right: 0 !important;
            text-align: center !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 22px !important;
          }
          p {
            font-size: 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedSection;
