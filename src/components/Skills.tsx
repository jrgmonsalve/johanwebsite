import React from 'react';

interface Skill {
  name: string;
  level: number; // 0 to 100
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-accent">Skills</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex flex-col">
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-xs font-medium">{skill.level}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2.5">
              <div
                className="bg-primary h-2.5 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;