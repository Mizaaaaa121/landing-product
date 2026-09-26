import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function FinalCTA({ onGetKit }) {
  return (
    <section className="landing-finalcta-section">
      <div className="landing-container landing-container-narrow">
        <div className="finalcta-box">
          <span className="finalcta-badge">Mulai Sekarang</span>
          <h2 className="finalcta-heading">
            Build a better online presence for your business.
          </h2>
          <p className="finalcta-subtext">
            Dapatkan website modern, cepat, dan siap tayang dalam hitungan jam tanpa kerumitan teknis.
          </p>
          <div className="finalcta-btn-group">
            <button
              type="button"
              className="landing-btn-primary landing-btn-lg"
              onClick={onGetKit}
            >
              <span>Get the Website Kit</span>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
          <div className="finalcta-meta">
            <ShieldCheck size={16} />
            <span>Launch Price Rp79.000 &bull; Unduh Instan ZIP &bull; Lisensi Komersial</span>
          </div>
        </div>
      </div>
    </section>
  );
}
