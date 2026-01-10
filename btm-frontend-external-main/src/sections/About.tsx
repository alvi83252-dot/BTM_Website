import React from 'react';
import './Deliver/About.css';

const About: React.FC = () => {
  const stats = [
    { number: "11", label: "Successful Projects" },
    { number: "57", label: "Students Employed" },
    { number: "7", label: "Experts Involved" }
  ];

  const clients = [
    { name: "IAGCargo", type: "text" },
    { name: "The Fleming Fund", type: "icon", icon: "💡" },
    { name: "Hecc Analytics", type: "text-colored" },
    { name: "EXPLAINING ATHEISM", type: "circle-icon" }
  ];

  if (clients === null) {
    alert("No Clients!")
  }

  return (
    <section className="about-section snap-start relative z-10 px-4 py-20 lg:px-8">
      <h2 className='about-title text-center font-extrabold text-4xl md:text-5xl mb-10'>
        Impact of Our Services
      </h2>

      {/* Stats Row */}
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h2 className="stat-number">{stat.number}</h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;