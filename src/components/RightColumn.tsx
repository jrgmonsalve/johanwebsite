import React from 'react';
import WorkExperience from './WorkExperience';
import Education from './Education';

const RightColumn: React.FC = () => {
  const workExperiences = [
    {
      title: "Back End Developer",
      company: "Valere Logic.",
      startDate: "Ago 2024",
      endDate: "Current",
      description: "Participar en el diseño e implementacion del backend para un SaaS, utilizando arq. microservicio, analisis y diseño para implementacion de permisos granulares.."
    },
    {
      title: "Sr. Fullstack Developer",
      company: "Viamericas.",
      startDate: "Mar 2024",
      endDate: "Jul 2024",
      description: " Crear y mantener APIs, modificar reportes."
    }
  ];

  return (
    <div className="space-y-6">
      <WorkExperience experiences={workExperiences} />
      <Education />
    </div>
  );
};

export default RightColumn;