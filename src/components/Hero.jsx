import React from 'react';
import { ArrowRight, Eye, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Hero({ heroData, onGetKit, onLiveDemo }) {
  return (
    <section className="landing-hero-section">
      <div className="landing-container hero-container-wide">
        <div className="landing-hero-grid">
          {/* Left Column: Text & CTAs */}
          <div className="hero-content-col">
            <div className="landing-hero-badge">
              <span className="badge-pulse-dot"></span>
              <span>Release {heroData.badge}</span>
              <span className="badge-divider">&bull;</span>
              <span>Ready to Deploy</span>
            </div>

            <h1 className="landing-hero-title">
              {heroData.title}
            </h1>

            <p className="landing-hero-subtitle">
              Website modern, cepat, dan siap pakai untuk bisnis lokal Anda.
            </p>

            <div className="landing-hero-actions">
              <button
                type="button"
                className="landing-btn-primary landing-btn-lg"
                onClick={onGetKit}
              >
                <span>{heroData.primaryCta}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button
                type="button"
                className="landing-btn-secondary landing-btn-lg hero-btn-dark"
                onClick={onLiveDemo}
              >
                <Eye size={18} aria-hidden="true" />
                <span>{heroData.secondaryCta}</span>
              </button>
            </div>

            <div className="landing-hero-features-list">
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="hero-feature-icon" />
                <span>Lisensi Komersial Permanen</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="hero-feature-icon" />
                <span>React 18 + Vite (Clean Code)</span>
              </div>
              <div className="hero-feature-item">
                <CheckCircle2 size={16} className="hero-feature-icon" />
                <span>Zero Backend / Tanpa Database</span>
              </div>
            </div>
          </div>

          {/* Right Column: Large Cinematic Product Mockup */}
          <div className="hero-visual-col">
            <div className="hero-mockup-wrapper">
              {/* Main Desktop Mockup Frame */}
              <div className="hero-desktop-frame">
                <div className="hero-browser-bar">
                  <div className="browser-traffic-lights">
                    <span className="light-red"></span>
                    <span className="light-yellow"></span>
                    <span className="light-green"></span>
                  </div>
                  <div className="browser-address-bar">
                    <span className="address-lock">&#128274;</span>
                    <span className="address-text">demo.kopimizaa.id</span>
                  </div>
                  <div className="browser-actions-placeholder"></div>
                </div>

                <div className="hero-desktop-viewport">
                  <img
                    src={heroData.screenshots.desktop}
                    alt="Pratinjau tampilan desktop website Local Business Kit"
                    className="hero-desktop-img"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Natural Phone Mockup Layer */}
              <div className="hero-phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen-viewport">
                  <img
                    src={heroData.screenshots.mobile}
                    alt="Pratinjau tampilan mobile responsif Local Business Kit"
                    className="hero-phone-img"
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

