import React from 'react';
import { Coffee, Utensils, Scissors, Sparkles, Cake, Shirt, Wrench, Store } from 'lucide-react';

const categoryIcons = {
  "Cafe & Coffee Shop": Coffee,
  "Restaurant & Eatery": Utensils,
  "Barbershop": Scissors,
  "Salon & Beauty": Sparkles,
  "Bakery & Pastry": Cake,
  "Laundry & Dry Clean": Shirt,
  "Local Services": Wrench,
  "Bisnis Lokal Lainnya": Store
};

export default function BuiltForBusiness({ categories }) {
  return (
    <section id="categories" className="landing-section">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Fleksibilitas Desain</span>
          <h2 className="landing-section-title">Built for Local Business</h2>
          <p className="landing-section-subtitle">
            Dibuat khusus untuk profil usaha lokal yang mengutamakan kejelasan informasi produk, jam operasional, lokasi, dan kemudahan pemesanan via WhatsApp.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((cat, idx) => {
            const Icon = categoryIcons[cat.name] || Store;
            return (
              <div key={idx} className="category-card">
                <div className="category-icon-box">
                  <Icon size={22} className="category-icon" />
                </div>
                <h3 className="category-title">{cat.name}</h3>
                <p className="category-desc">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="category-clarity-banner">
          <p className="clarity-text">
            <strong>Tanpa batasan niche kaku:</strong> Anda bebas menyesuaikan teks, menu, dan warna untuk bisnis apa pun yang membutuhkan kehadiran online yang bersih dan cepat.
          </p>
        </div>
      </div>
    </section>
  );
}
