'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import AOS from 'aos';

// import 'aos/dist/aos.css';

const slides = [
  '/iamge/slider-img-1.webp',
  '/iamge/slider-img-2.webp',
  '/iamge/slider-img-3.webp',
  '/iamge/slider-img-4.webp',
];

const Slider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  const texts = [
    'GROW YOUR BRAND WITH US',
    'BUILD A STRONG IDENTITY',
    'CONNECT WITH YOUR AUDIENCE',
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  // Auto Image Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Typewriter Animation
  useEffect(() => {
    let charIndex = 0;

    setDisplayText('');

    const typing = setInterval(() => {
      setDisplayText(texts[textIndex].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === texts[textIndex].length) {
        clearInterval(typing);

        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [textIndex]);

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length);

  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Styles
  const container: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100vh',
    paddingTop: '120px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,

    backgroundImage: "url('/iamge/Untitled-1-01 1 (1).jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  const arrowStyle: CSSProperties = {
    fontSize: '40px',
    color: '#fff',
    cursor: 'pointer',
    padding: '20px',
    zIndex: 5,
    userSelect: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  const leftArrow = {
    ...arrowStyle,
    left: '10px',
  };

  const rightArrow = {
    ...arrowStyle,
    right: '10px',
  };

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
    minHeight: '90px',
  };

  const headingStyle: CSSProperties = {
    fontSize: '40px',
    fontWeight: 'bold',
    color: '#fff',
    whiteSpace: 'nowrap',
    minHeight: '40px',
  };

  const subTextStyle: CSSProperties = {
    fontSize: '20px',
    marginTop: '10px',
    color: '#fff',
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
      <div
        onClick={prevSlide}
        style={leftArrow}
        data-aos="fade-right"
        data-aos-duration="600"
      >
        &#8592;
      </div>

      {/* Laptop */}
      <div style={imageWrapper}>
        <img
          src="/laptop-img.webp"
          alt="Laptop"
          style={laptopImageStyle}
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
        />

        <img
          src={slides[current]}
          alt="Slide"
          style={screenImageStyle}
          key={current}
          data-aos="zoom-in"
          data-aos-duration="800"
          data-aos-delay="400"
        />
      </div>

      {/* Right Arrow */}
      <div
        onClick={nextSlide}
        style={rightArrow}
        data-aos="fade-left"
        data-aos-duration="600"
      >
        &#8594;
      </div>

      {/* Text */}
      <div style={textWrapper}>
        <h1 style={headingStyle}>
          {displayText}
          <span
            style={{
              display: 'inline-block',
              marginLeft: '2px',
              animation: 'blink 1s infinite',
            }}
          >
            |
          </span>
        </h1>

        <p
          style={subTextStyle}
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="700"
        >
          We develop a strong brand identity that connects with your audience!
        </p>

        <button
          style={buttonStyle}
          data-aos="zoom-in"
          data-aos-duration="700"
          data-aos-delay="900"
        >
          Read More
        </button>
      </div>

      <style jsx>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Slider;