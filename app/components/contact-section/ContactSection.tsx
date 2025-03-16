"use client";
import React, { useState } from "react";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { fullName, email, phone, subject, message } = formData;

    const whatsappNumber = "923087590031";
    const text = `Name: ${fullName}%0AEmail: ${email}%0APhone: ${phone}%0ASubject: ${subject}%0AMessage: ${message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, "_blank");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="contact-container">
        <h2 className="contact-heading">
          Contact <span className="gradient-text">Me</span>
        </h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-grid">
            {/* Left Side */}
            <div className="left-side">
              <div>
                <label htmlFor="fullName" className="label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="Full Name"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="phone" className="label">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone Number"
                  className="input"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="input"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Right Side */}
            <div className="right-side">
              <div>
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Message"
                  className="textarea"
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
