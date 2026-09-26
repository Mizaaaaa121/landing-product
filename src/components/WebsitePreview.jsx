import React, { useState } from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';

export default function WebsitePreview({ previews, onLiveDemo }) {
  const [activeTab, setActiveTab] = useState(0);
  const current = previews[activeTab] || previews[0];

  return (
    <section id="preview" className="landing-section landing-section-alt">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Screenshot Nyata</span>
          <h2 className="landing-section-title">Website Preview</h2>
          <p className="landing-section-subtitle">
            Hasil tampilan nyata dari project Kopi Mizaa yang dibangun langsung menggunakan Local Business Website Kit.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="preview-tabs" role="tablist" aria-label="Pilih Pratinjau Bagian Website">
          {previews.map((item, index) => (
            <button
              key={item.id}
              role="tab"
              aria-selected={activeTab === index}
              aria-controls={`preview-panel-${item.id}`}
              id={`preview-tab-${item.id}`}
              type="button"
              className={`preview-tab-btn ${activeTab === index ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
            >
              <span className="tab-tag">{item.tag}</span>
              <span className="tab-title">{item.title}</span>
            </button>
          ))}
        </div>

        {/* Active Preview Showcase */}
        <div
          id={`preview-panel-${current.id}`}
          role="tabpanel"
          aria-labelledby={`preview-tab-${current.id}`}
          className="preview-showcase"
        >
          {/* Top Info Bar */}
          <div className="preview-info-bar">
            <div>
              <span className="preview-badge">{current.tag}</span>
              <h3 className="preview-heading">{current.title} - {current.subtitle}</h3>
              <p className="preview-description">{current.description}</p>
            </div>
            <button
              type="button"
              className="landing-btn-secondary landing-btn-sm"
              onClick={onLiveDemo}
            >
              <span>Lihat Detail Demo</span>
              <ExternalLink size={14} aria-hidden="true" />
            </button>
          </div>

          {/* Browser Window Frame with Real Screenshot */}
          <div className="preview-browser-frame">
            <div className="preview-browser-bar">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url">
                <span>https://demo.kopimizaa.id/{current.id === 'hero' ? '' : `#${current.id}`}</span>
              </div>
              <div className="browser-status">
                <CheckCircle size={14} className="status-ok-icon" />
                <span>Responsive & Live</span>
              </div>
            </div>

            <div className="preview-image-viewport">
              <img
                src={current.image}
                alt={`Screenshot asli bagian ${current.title} Kopi Mizaa`}
                className="preview-real-screenshot"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* 4 Thumbnails Quick Grid */}
        <div className="preview-thumbnails-grid">
          {previews.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`thumbnail-card ${activeTab === index ? 'selected' : ''}`}
              onClick={() => setActiveTab(index)}
              aria-label={`Lihat screenshot ${item.title}`}
            >
              <div className="thumbnail-img-box">
                <img src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="thumbnail-meta">
                <strong className="thumbnail-title">{item.title}</strong>
                <span className="thumbnail-tag">{item.tag}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
