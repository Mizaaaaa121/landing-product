import React, { useEffect } from 'react';
import { X, ExternalLink, Monitor, Smartphone } from 'lucide-react';

export default function DemoModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="landing-modal-backdrop" role="dialog" aria-modal="true" aria-label="Live Demo Preview" onClick={onClose}>
      <div className="landing-modal-card landing-modal-wide" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup jendela demo"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-eyebrow">Pratinjau Hasil Nyata</span>
          <h3 className="modal-title">Demo Website: Kopi Mizaa</h3>
          <p className="modal-subtitle">
            Contoh riil website profil kedai kopi yang dibangun sepenuhnya menggunakan kit ini.
          </p>
        </div>

        <div className="demo-preview-wrapper">
          <div className="demo-preview-browser">
            <div className="preview-browser-bar">
              <div className="browser-dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="browser-url">
                <span>https://demo.kopimizaa.id/</span>
              </div>
            </div>
            <div className="demo-scrollable-viewport">
              <img
                src="/screenshots/fullpage.png"
                alt="Tampilan halaman lengkap website demo Kopi Mizaa"
                className="demo-fullpage-img"
              />
            </div>
          </div>
        </div>

        <div className="modal-actions demo-modal-footer">
          <button
            type="button"
            className="landing-btn-secondary"
            onClick={() => {
              onClose();
              const el = document.getElementById('preview');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <Monitor size={16} />
            <span>Lihat Screenshot Tiap Bagian</span>
          </button>

          <button
            type="button"
            className="landing-btn-primary"
            onClick={() => {
              onClose();
              const el = document.getElementById('pricing');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>Dapatkan Kit Ini (Rp79.000)</span>
          </button>
        </div>
      </div>
    </div>
  );
}
