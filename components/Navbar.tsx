'use client';

import portfolioData from '@/data/portfolio.json';

export default function Navbar() {
  const initials = portfolioData.name.split(' ').map(n => n[0]).join('');

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="logo-section">
          <h1 className="logo-text">{initials}</h1>
          <div className="logo-divider"></div>
          <a href="#" aria-label="Home">
            <img src="/assets/images/img_subtract.svg" alt="Logo icon" className="logo-icon" />
          </a>
        </div>
        
        <button className="hamburger" aria-label="Menu">☰</button>
        
        <nav className="nav-menu" role="menubar">
          <button role="menuitem">Home</button>
          <button role="menuitem">Work</button>
          <button role="menuitem">About</button>
        </nav>
      </div>
    </header>
  );
}