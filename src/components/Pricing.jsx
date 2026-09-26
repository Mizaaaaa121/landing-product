import React from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing({ pricingData, onGetKit }) {
  return (
    <section id="pricing" className="landing-section">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Investasi Terjangkau</span>
          <h2 className="landing-section-title">Transparent Pricing</h2>
          <p className="landing-section-subtitle">
            Satu harga jujur tanpa biaya tersembunyi, tanpa sistem langganan berulang, dan langsung menjadi milik Anda.
          </p>
        </div>

        <div className="pricing-wrapper">
          <div className="pricing-card">
            {/* Launch Banner Tag */}
            <div className="pricing-card-top-tag">
              <span className="launch-tag-badge">
                <Zap size={14} className="launch-icon" />
                <span>{pricingData.tag}</span>
              </span>
              <span className="launch-tag-note">Harga Perkenalan Khusus</span>
            </div>

            <div className="pricing-card-header">
              <h3 className="pricing-plan-name">{pricingData.name}</h3>
              <p className="pricing-period-note">{pricingData.periodNote}</p>

              <div className="pricing-price-group">
                <div className="price-tag-wrapper">
                  <span className="price-label">Launch Price</span>
                  <span className="price-current">{pricingData.launchPrice}</span>
                </div>
                <div className="price-normal-wrapper">
                  <span className="price-normal-label">Harga normal</span>
                  <span className="price-strikethrough">{pricingData.normalPrice}</span>
                </div>
              </div>
            </div>

            {/* Inclusions List */}
            <div className="pricing-card-features">
              <h4 className="inclusions-heading">Apa saja yang Anda dapatkan:</h4>
              <ul className="inclusions-list">
                {pricingData.inclusions.map((item, idx) => (
                  <li key={idx} className="inclusion-item">
                    <span className="check-icon-box">
                      <Check size={16} />
                    </span>
                    <span className="inclusion-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pricing-card-footer">
              <button
                type="button"
                className="landing-btn-primary landing-btn-block landing-btn-lg"
                onClick={onGetKit}
              >
                <span>{pricingData.ctaText}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <div className="pricing-guarantee-note">
                <ShieldCheck size={16} />
                <span>Akses file ZIP instan &bull; Lisensi komersial &bull; Tanpa biaya langganan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
