'use client';

import portfolioData from '@/data/portfolio.json';

const projectImages = [
  "/assets/images/img_rectangle_369.png",
  "/assets/images/img_rectangle_369_396x836.png",
  "/assets/images/img_rectangle_369_1.png",
];

export default function Projects() {
  return (
    <section className="works-section">
      <div className="works-content">
        <h2 className="works-title">My works</h2>
        
        <div role="list">
          {portfolioData.projects.map((project, index) => (
            <article className="project-item" role="listitem" key={project.name}>
              <div className="project-info">
                <h3 className="project-title">{project.name}</h3>
                <div className="project-keywords">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span className="keyword" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>
              {projectImages[index] && (
                <img src={projectImages[index]} alt={`Project showcase for ${project.name}`} className="project-image" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}