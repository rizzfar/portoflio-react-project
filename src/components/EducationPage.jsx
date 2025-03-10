import React from "react";

const educationData = [
  { year: "2006 - 2012", school: "RA Nasyidul Ummi, Cianjur" },
  { year: "2012 - 2018", school: "SD Negeri Ibu Dewi 5, Cianjur" },
  { year: "2018 - 2021", school: "SMP Negeri 4 Cianjur" },
  { year: "2021 - 2024", school: "SMK Negeri 2 Cilaku, Cianjur" },
  { year: "2024 - Sekarang", school: "Universitas Komputer Indonesia, Bandung" },
];

const EducationsPage = () => {
  return (
    <div className="education-container">
      <h1 className="title">My Education</h1>
      <p className="subtitle">Perjalanan pendidikan saya dari TK hingga universitas.</p>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <span className="year">{edu.year}</span>
              <h3 className="school">{edu.school}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationsPage;
