import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm: React.FC = () => {
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    telephone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">
        CONTACT <span className="highlight">US</span>
      </h1>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="firstName"
          placeholder="First name*"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last name*"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Business Email*"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
        />

        <input
          type="tel"
          name="telephone"
          placeholder="Telephone"
          value={formData.telephone}
          onChange={handleChange}
          className="form-input"
        />

        <textarea
          name="message"
          placeholder="Tell us about your project*"
          value={formData.message}
          onChange={handleChange}
          required
          className="form-input form-textarea"
          rows={6}
        />

        <p className="disclaimer">
          By sending this form I confirm that I have read and accept BTM Privacy Policy.
        </p>

        <button type="submit" className="submit-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;