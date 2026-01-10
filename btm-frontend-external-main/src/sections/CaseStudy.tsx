import React from 'react';
import './Deliver/CaseStudy.css';

const CaseStudy: React.FC = () => {
  return (
    <div className="container snap-start relative z-10 px-4 py-20 lg:px-8">
      <h1 className="main-title">
        Our Case <span className="blue-text">Studies</span>
      </h1>

      <div className="content-block">
        <h2 className="project-name">IAGCargo</h2>
        
        <p className="description">
          Analyzing the process of transpiling legacy applications using Large Language Models. 
          This cutting-edge project explores AI-assisted code modernization for enterprise systems.
        </p>

        <div className="tag-container">
          <div className="tag">
            <span className="icon">{"</>"}</span> React.js
          </div>
          <div className="tag">
            <span className="icon">🧠</span> TensorFlow
          </div>
          <div className="tag">
            <span className="icon">📦</span> Docker
          </div>
        </div>

        <button className="read-more-btn">Read more</button>

        <div className="screenshot-card">
          <div className="screenshot-inner">
            <div className="blue-placeholder">
              Project Screenshot
            </div>
          </div>
          <div className="pagination">
            <span className="dot active"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;