import React from 'react';
import './Deliver/Service.css';

const Service: React.FC = () => {
  const serviceData = [
    {
      icon: "💻", // For the exact look, use an icon library like lucide-react
      title: "Web App Development",
      description: "Full-stack web applications built with modern frameworks and best practices."
    },
    {
      icon: "🗄️",
      title: "Data Analysis",
      description: "Transform raw data into actionable insights through advanced analytics."
    },
    {
      icon: "📱",
      title: "Mobile Applications",
      description: "Native and cross-platform mobile solutions for iOS and Android."
    },
    {
      icon: "🧠",
      title: "Applied R&D",
      description: "AI, ML, and LLM applications for innovative business solutions."
    }
  ];

  return (
    <section className="service-container snap-start relative z-10 px-4 py-20 lg:px-8">
      <h2 className="service-main-title">
        What We <span className="blue-highlight">Deliver</span>
      </h2>

      <div className="service-list">
        {serviceData.map((item, index) => (
          <div key={index} className="service-card">
            <div className="service-icon-box">{item.icon}</div>
            <div className="service-content">
              <h3 className="service-card-title">{item.title}</h3>
              <p className="service-card-desc">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;