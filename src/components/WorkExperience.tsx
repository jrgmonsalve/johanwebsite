import React from 'react';
import { MdWork, MdCalendarToday } from 'react-icons/md';

interface WorkExperienceItem {
  title: string;
  company?: string;
  startDate: string;
  endDate: string | 'Current';
  description: string;
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ experiences }) => {
  return (
    <div className="bg-background shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-text mb-4 flex items-center">
        <MdWork className="mr-2 text-primary" /><u>Work Experience</u>
      </h2>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-medium text-text">{experience.title}</h3>
          {experience.company && (
            <h4 className="text-lg text-primary">{experience.company}</h4>
          )}
          <h4 className="text-primary flex items-center">
            <MdCalendarToday className="mr-2" />
            {experience.startDate} - {' '}
            {experience.endDate === 'Current' ? (
              <span className="bg-primary text-text px-2 py-1 rounded ml-2">Current</span>
            ) : (
              experience.endDate
            )}
          </h4>
          <p className="mt-2 text-text">{experience.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;