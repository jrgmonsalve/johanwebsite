import React from 'react';
import { MdSchool, MdCalendarToday } from 'react-icons/md';

const Education: React.FC = () => {
  return (
    <div className="bg-background shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-text mb-4 flex items-center">
        <MdSchool className="mr-2 text-primary" /><u>Education</u>
      </h2>
      <div className="mb-6">
        <h3 className="text-xl font-medium text-text">Building Modern Python Applications on AWS</h3>
        <p className="mt-1 mb-1 "><span className="bg-primary text-text px-2 py-1 rounded">Edx</span></p>
        <h4 className="text-primary flex items-center">
          <MdCalendarToday className="mr-2" />May 2023
        </h4>
        <p className="mt-2 text-text"> Construir una aplicación impulsada por APIs utilizando
        AWS Lambda para computación sin servidor</p>
      </div>
      {/* Add more education entries here */}
    </div>
  );
};

export default Education;