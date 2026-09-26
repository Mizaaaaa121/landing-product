import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onGetKit }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "What You Get", href: "#what-you-get" },
    { label: "Kategori", href: "#categories" },
    { label: "Preview", href: "#preview" },
    { label: "Fitur", href: "#features" },
    { label: "Cara Kerja", href: "#how-it-works" },
    { label: "Harga", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`landing-nav-header ${isScrolled ? 'landing-nav-scrolled' : ''}`}>
      <div className="landing-container">
        <div className="landing-nav-bar">
          {/* Brand Logo & Version */}
          <a href="#" className="landing-nav-brand" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            <span className="brand-dot"></span>
            <span className="brand-title">Local Business Kit</span>
            <span className="brand-version-badge">V1.0.0</span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="landing-desktop-nav" aria-label="Navigasi Utama">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="landing-nav-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="landing-nav-actions">
            <button
              type="button"
              className="landing-btn-primary landing-btn-sm"
              onClick={onGetKit}
            >
              <span>Get the Kit</span>
              <ArrowRight size={14} aria-hidden="true" />
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="landing-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="landing-mobile-drawer" role="dialog" aria-label="Menu Navigasi Mobile">
          <div className="landing-container">
            <nav className="landing-mobile-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="landing-mobile-nav-link"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                className="landing-btn-primary landing-mobile-cta"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onGetKit();
                }}
              >
                <span>Get the Website Kit</span>
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
