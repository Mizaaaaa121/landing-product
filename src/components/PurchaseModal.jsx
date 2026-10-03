import React, { useEffect } from 'react';
import { X, CheckCircle, Download, ShieldCheck, ArrowRight } from 'lucide-react';

export default function PurchaseModal({ isOpen, onClose }) {
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
    <div className="landing-modal-backdrop" role="dialog" aria-modal="true" aria-label="Detail Pemesanan Kit" onClick={onClose}>
      <div className="landing-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Tutup jendela pemesanan"
        >
          <X size={20} />
        </button>

        <div className="modal-header">
          <span className="modal-eyebrow">Checkout Pemesanan</span>
          <h3 className="modal-title">Get Local Business Website Kit</h3>
          <p className="modal-subtitle">
            Paket lengkap V1.0.0 siap unduh dengan lisensi komersial permanen.
          </p>
        </div>

        <div className="modal-summary-box">
          <div className="summary-row">
            <span className="summary-item-name">Local Business Website Kit V1.0.0</span>
            <span className="summary-item-price">Rp79.000</span>
          </div>
          <div className="summary-tag-row">
            <span className="summary-tag">12-Day Launch Offer</span>
            <span className="summary-normal-price">Harga Normal: Rp149.000</span>
          </div>
        </div>

        <div className="modal-perks-list">
          <div className="modal-perk-item">
            <CheckCircle size={16} className="perk-icon" />
            <span>Unduh instan file ZIP lengkap (Source code + Dokumentasi + Checklist)</span>
          </div>
          <div className="modal-perk-item">
            <CheckCircle size={16} className="perk-icon" />
            <span>Lisensi komersial resmi (1 proyek bisnis sendiri atau klien)</span>
          </div>
          <div className="modal-perk-item">
            <CheckCircle size={16} className="perk-icon" />
            <span>Bebas biaya langganan bulanan &bull; Bebas keterikatan platform</span>
          </div>
        </div>

        <div className="modal-actions">
          <a
            href="https://mizaawebdev.myr.id/catalog/local-business-website-kit-v100-template-website-umkm/"
            target="_blank"
            rel="noopener noreferrer"
            className="landing-btn-primary landing-btn-block landing-btn-lg"
          >
            <Download size={18} />
            <span>Beli Sekarang di Mayar</span>
            <ArrowRight size={16} />
          </a>
          <p className="modal-guarantee">
            <ShieldCheck size={14} />
            <span>File ZIP langsung dikirimkan segera setelah konfirmasi pembayaran.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
