'use client';

import React, { useState, useEffect, CSSProperties } from 'react';

const slides = [
  '/iamge/slider-img-1.webp',
  '/iamge/slider-img-2.webp',
  '/iamge/slider-img-3.webp',
  '/iamge/slider-img-4.webp',
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [textIndex, setTextIndex] = useState(0);

  const texts = [
    "GROW YOUR BRAND WITH US",
    "BUILD A STRONG IDENTITY",
    "CONNECT WITH YOUR AUDIENCE",
  ];

  // ✅ Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 2) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Text animation every 2.5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 2) % texts.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 2) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // ---------- Styles ----------
  const container: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column', // 👈 Niche text dikhane ke liye
    height: '100vh',
    width: '100vw',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const arrowStyle: CSSProperties = {
    fontSize: '40px',
    color: '#fff',
    cursor: 'pointer',
    padding: '20px',
    zIndex: 2,
    userSelect: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const leftArrow = { ...arrowStyle, left: '10px' };
  const rightArrow = { ...arrowStyle, right: '10px' };

  const imageWrapper: CSSProperties = {
    position: 'relative',
    width: '80%',
    maxWidth: '800px',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const laptopImageStyle: CSSProperties = {
    width: '60%',
    maxWidth: '60%',
    height: 'auto',
    zIndex: 1,
  };

  const screenImageStyle: CSSProperties = {
    position: 'absolute',
    top: '6%',
    left: '12%',
    width: '76%',
    height: '78%',
    objectFit: 'contain',
    borderRadius: '6px',
    zIndex: 2,
  };

  const textWrapper: CSSProperties = {
    marginTop: '20px',
    textAlign: 'center',
    color: '#fff',
  };

  const headingStyle: CSSProperties = {
    fontSize: '28px',
    fontWeight: 'bold',
    transition: 'opacity 0.5s ease-in-out',
  };

  const subTextStyle: CSSProperties = {
    fontSize: '16px',
    marginTop: '10px',
    color: '#ddd',
  };

  const buttonStyle: CSSProperties = {
    marginTop: '15px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: '#000',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
  };

  return (
    <div style={container}>
      {/* Left Arrow */}
      <div onClick={prevSlide} style={leftArrow}>
        &#8592;
      </div>

      {/* Main Image Wrapper */}
      <div style={imageWrapper}>
        <img src="/laptop-img.webp" alt="Laptop Frame" style={laptopImageStyle} />
        <img src={slides[current]} alt={`Slide ${current + 1}`} style={screenImageStyle} />
      </div>

      {/* Right Arrow */}
      <div onClick={nextSlide} style={rightArrow}>
        &#8594;
      </div>

      {/* ✅ Text Section */}
      <div style={textWrapper}>
        <h1 style={headingStyle} key={textIndex}>
          {texts[textIndex]}
        </h1>
        <p style={subTextStyle}>
          We develop a strong brand identity that connects with your audience!
        </p>
        <button style={buttonStyle}>Read More</button>
      </div>
    </div>
  );
};

export default Slider