import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="landing-footer">
      <div className="landing-container">
        <div className="footer-top-row">
          <div className="footer-brand-column">
            <div className="footer-brand">
              <span className="brand-dot"></span>
              <strong className="footer-brand-title">Local Business Website Kit</strong>
              <span className="brand-version-badge">V1.0.0</span>
            </div>
            <p className="footer-brand-desc">
              Kit website modern, bersih, dan berkecepatan tinggi untuk pemilik usaha lokal dan desainer web.
            </p>
          </div>

          <div className="footer-nav-links">
            <a href="#what-you-get">What You Get</a>
            <a href="#categories">Kategori</a>
            <a href="#preview">Preview</a>
            <a href="#features">Fitur</a>
            <a href="#pricing">Harga</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copyright">
            &copy; {currentYear} Local Business Website Kit V1.0.0. All rights reserved.
          </p>
          <p className="footer-note">
            Dirancang dengan filosofi Clean & Minimal. Bebas pelacak berat.
          </p>
        </div>
      </div>
    </footer>
  );
}
