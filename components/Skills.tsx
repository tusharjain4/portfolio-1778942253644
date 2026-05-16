'use client';

import portfolioData from '@/data/portfolio.json';

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-content">
        <h2 className="skills-title">My Skills</h2>
        
        <div className="skills-grid">
          {portfolioData.skills.map((category) => (
            <div className="skill-card" key={category.name}>
              <div className="skill-icon">
                <img src="/assets/images/img_frame_410.svg" alt={`${category.name} icon`} />
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{category.name}</h3>
                <p className="skill-description">{category.skills.join(', ')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}