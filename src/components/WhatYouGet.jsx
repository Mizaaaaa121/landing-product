import React from 'react';
import { Code, Smartphone, Sliders, BookOpen, CheckSquare, ShieldCheck } from 'lucide-react';

const iconMap = {
  Code,
  Smartphone,
  Sliders,
  BookOpen,
  CheckSquare,
  ShieldCheck,
};

export default function WhatYouGet({ items }) {
  return (
    <section id="what-you-get" className="landing-section landing-section-alt">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Isi Paket Lengkap</span>
          <h2 className="landing-section-title">What You Get</h2>
          <p className="landing-section-subtitle">
            Seluruh kebutuhan teknis, dokumentasi, dan checklist persiapan konten sudah dirancang siap pakai dalam satu paket unduhan.
          </p>
        </div>

        <div className="what-you-get-grid">
          {items.map((item) => {
            const IconComponent = iconMap[item.icon] || Code;
            return (
              <div key={item.id} className="what-card">
                <div className="what-card-icon-wrapper">
                  <IconComponent size={24} className="what-card-icon" />
                </div>
                <h3 className="what-card-title">{item.title}</h3>
                <p className="what-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
