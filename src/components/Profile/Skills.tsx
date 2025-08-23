'use client';
import React from 'react';
import '../../assets/styles/Skills.css';

interface Skill {
  id: number;
  name: string;
  progress: number;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
}

const Skills: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">المهارات التي تم تعلمها</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill.id} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <span className="link-icon">🔗</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;