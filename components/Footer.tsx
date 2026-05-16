'use client';

import portfolioData from '@/data/portfolio.json';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content">
        <div className="footer-top">
          <p className="footer-copyright">© 2023 All rights reserved</p>
          <button className="footer-email">{portfolioData.contact.email}</button>
        </div>
        <img src="/assets/images/img_squares.svg" alt="Decorative pattern" className="footer-pattern" />
      </div>
    </footer>
  );
}