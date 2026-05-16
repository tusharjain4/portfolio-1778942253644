'use client';

import portfolioData from '@/data/portfolio.json';

export default function Journey() {
  const journeyItems = [
    {
      institution: portfolioData.currentRole,
      period: "Present",
      description: portfolioData.about,
    },
    ...portfolioData.highlights.map(highlight => ({
      institution: "Achievement / Project",
      period: "Recent",
      description: highlight,
    }))
  ];

  return (
    <section className="journey-section">
      <div className="journey-content">
        <h2 className="journey-title">My Journey</h2>
        
        <div className="journey-list" role="list">
          {journeyItems.map((item, index) => (
            <article className="journey-item" role="listitem" key={index}>
              <div className="journey-header">
                <div className="journey-icon">
                  <img src="/assets/images/img_icon_building_2.svg" alt="Experience icon" />
                </div>
                <div className="journey-info">
                  <h3 className="journey-institution">{item.institution}</h3>
                  <p className="journey-period">{item.period}</p>
                </div>
              </div>
              <div className="journey-details">
                <img src="/assets/images/img_line_container.svg" alt="" className="journey-line" />
                <p className="journey-description">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}