import React from 'react';

export default function HowItWorks({ steps }) {
  return (
    <section id="how-it-works" className="landing-section landing-section-alt">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Alur Kerja Praktis</span>
          <h2 className="landing-section-title">How It Works</h2>
          <p className="landing-section-subtitle">
            Hanya 5 langkah sederhana dari pembelian hingga website bisnis Anda live dan siap menerima pesanan pelanggan.
          </p>
        </div>

        <div className="how-it-works-timeline">
          {steps.map((item, index) => (
            <div key={item.step} className="step-card">
              <div className="step-top-row">
                <span className="step-number">{item.step}</span>
                <span className="step-pill">Langkah {index + 1}</span>
              </div>
              <h3 className="step-title">{item.title}</h3>
              <p className="step-desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
