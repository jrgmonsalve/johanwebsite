import React from 'react';
import Skills from './Skills';
import { MdWork, MdHome, MdEmail, MdPhone } from 'react-icons/md';

const LeftColumn: React.FC = () => {
  const skills = [
    { name: 'Python (5 years)', level: 70 },
    { name: '.NET Core (2 years)', level: 50 },
    { name: 'Node.js (1 year)', level: 40 },
    { name: 'React (1 year)', level: 30 },
    { name: 'Angular (2 years)', level: 40 },
  ];

  return (
    <div className="bg-background text-text shadow-md rounded-lg overflow-hidden">
      <div className="relative p-4 flex flex-col items-center">
        <div className="w-40 h-40 rounded-full overflow-hidden mb-4">
          <img src="/images/foto_perfil_linkedin.jpg" alt="Johan Garcia" className="w-full h-full object-cover" />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary">Johan Garcia</h2>
        </div>
      </div>
      <div className="p-4">
        <p className="flex items-center mb-2">
          <MdWork className="mr-2 text-primary" />Software Engineer
        </p>
        <p className="flex items-center mb-2">
          <MdHome className="mr-2 text-primary" />Colombia
        </p>
        <p className="flex items-center mb-2">
          <MdEmail className="mr-2 text-primary" />johangarcia@outlook.com
        </p>
        <p className="flex items-center mb-2">
          <MdPhone className="mr-2 text-primary" />+573015707132
        </p>
        <hr className="my-4 border-secondary" />
        <Skills skills={skills} />
        <h3 className="text-lg font-semibold mt-4 mb-2 text-accent">Languages</h3>
        {/* Add languages section here */}
      </div>
    </div>
  );
};

export default LeftColumn;