import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Membangun website modern dengan teknologi terbaru seperti React, Laravel, dan Next.js.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    description: "Mendesain tampilan antarmuka yang menarik dan pengalaman pengguna yang intuitif.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile App Development",
    description: "Mengembangkan aplikasi mobile responsif menggunakan React Native dan Flutter.",
  }
];

const ServicesPage = () => {
  return (
    <div className="services-container">
      <h1 className="title">My Services</h1>
      <p className="subtitle">Berikut adalah layanan yang saya tawarkan:</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
