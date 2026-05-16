'use client';

import portfolioData from '@/data/portfolio.json';

export default function Hero() {
  const firstName = portfolioData.name.split(' ')[0];
  const roleParts = portfolioData.role.split(' ');
  const rolePart1 = roleParts[0];
  const rolePart2 = roleParts.length > 1 ? roleParts.slice(1).join(' ') : '';

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-text-container">
            <h2 className="hero-hello">Hello</h2>
            <p className="hero-im">I&apos;m</p>
          </div>
          <p className="scroll-text">Scroll to explore</p>
          <img src="/assets/images/img_rectangle_1.png" alt="Pooja R. Sonar portfolio showcase" className="hero-image" />
        </div>
        
        <div className="hero-right">
          <div className="title-stack">
            <div className="title-bg-top"></div>
            <div className="title-text-container">
              <p className="title-product">{rolePart1}</p>
              <div className="title-designer-section">
                <p className="title-designer">{rolePart2}</p>
                <p className="title-nikita">{firstName}</p>
              </div>
            </div>
            <div className="title-bg-bottom"></div>
          </div>
          
          <p className="hero-description">
            {portfolioData.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}