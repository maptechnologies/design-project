'use client';

import React, { useState, useEffect, CSSProperties } from 'react';
import AOS from 'aos';
import { hover } from 'framer-motion';

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
  const [displayText, setDisplayText] = useState('0');

  const texts = [
    'GROW YOUR BRAND WITH US',
    'GROW YOUR BRAND WITH US',
    'GROW YOUR BRAND WITH US',
    
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
    height: '70vh',
    paddingTop: '120px',
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    margin: 0,

    backgroundImage: "url('/iamge/Untitled-1-01 4.jpg')",
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
    left: '550px',
    color:'gray',
  };

  const rightArrow = {
    ...arrowStyle,
    right: '550px',
    color:'gray',
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
    marginTop: '2px',
    textAlign: 'center',
    color: '#fff',
    minHeight: '90px',
  };

  const headingStyle: CSSProperties = {
    fontSize: '47px',
    fontWeight: 'bold',
    color: '#fff',
    whiteSpace: '',
    minHeight: '30px',
    fontFamily:'sans-serif',
  };

  const subTextStyle: CSSProperties = {
    fontSize: '23px',
    marginTop: '4px',
    color: '#fff',
  };

  const buttonStyle: CSSProperties = {
    marginTop: '20px',
    padding: '5px 35px',
    fontSize: '16px',
    fontWeight: 'bold',
    backgroundColor: '#fff',
    color: 'gray',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontFamily:'sans-serif',
    
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
      {/* Left Floating Plant */}
<img
  src="/iamge/preview-removebg-preview.png"
  alt="Plant"
  style={{
    position: "absolute",
    left: "54px",
    top: "230px",
    width: "190px",
    zIndex: 2,
    animation: "floatPlant 7s ease-in-out infinite",
  }}
/>

{/* Right Floating Coffee */}
<img
  src=""
  alt="Coffee"
  style={{
    position: "absolute",
    right: "140px",
    top: "330px",
    width: "190px",
    zIndex: 20,
    animation: "floatCoffee 7s ease-in-out infinite",
  }}
/>

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
              animation: 'blink 8s infinite',
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

  @keyframes floatPlant {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(-6deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }

  @keyframes floatCoffee {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-15px) rotate(8deg);
    }
    100% {
      transform: translateY(0px) rotate(0deg);
    }
  }
`}</style>
    </div>
  );
};

export default Slider;