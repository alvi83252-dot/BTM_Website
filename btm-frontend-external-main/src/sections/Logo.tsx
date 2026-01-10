import React from 'react';
import './Deliver/Logo.css';

const Logo: React.FC = () => {
  return (
    <section className="logo-stretch-container snap-start relative z-10 px-4 py-20 lg:px-8">
      <div className="logo-white-box">
        <svg 
          viewBox="0 0 1000 400" 
          xmlns="http://www.w3.org/2000/svg"
          className="logo-svg"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Pure White Background inside the SVG */}
          <rect width="1000" height="400" fill="#ffffff" />

          {/* Concentric Circles centered */}
          <circle cx="500" cy="200" r="160" fill="none" stroke="black" strokeWidth="6" />
          <circle cx="500" cy="200" r="120" fill="none" stroke="black" strokeWidth="6" />
          <circle cx="500" cy="200" r="80" fill="none" stroke="black" strokeWidth="6" />
          
          {/* The Pointer Graphic */}
          <path d="M 500 200 Q 550 150, 620 200 L 500 200" fill="black" />
          <circle cx="500" cy="200" r="35" fill="black" />
        </svg>
      </div>
    </section>
  );
};

export default Logo;