import React from 'react';
import './Contact/ContactInfo.css';
import MapComponent from './MapComponent'; // <--- Import the new map component

const ContactInfo: React.FC = () => {
  return (
    <div className="info-wrapper snap-start relative z-10 px-4 py-20 lg:px-8 bg-white">
      {/* 1. Dark Info Card */}
      <div className="info-card mt-10">
        <h2 className="info-title">
          Our <span className="highlight">contact</span> information
        </h2>

        <div className="info-item">
          <p className="label">Phone</p>
          <p className="value">+44 1895 266048</p>
        </div>

        <div className="info-item">
          <p className="label">Email</p>
          <p className="value">btm@brunel.ac.uk</p>
        </div>

        <div className="info-item">
          <p className="label">Address</p>
          <p className="value">
            Brunel University London<br />
            Kingston Ln, London,<br />
            Uxbridge UB8 3PH
          </p>
        </div>
      </div>

      {/* 2. The Real Map Component (Replaces the old grey placeholder) */}
      <MapComponent />
      
    </div>
  );
};

export default ContactInfo;