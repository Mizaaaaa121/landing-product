import React from 'react';
import { 
  Palette, 
  Smartphone, 
  MessageCircle, 
  ShoppingBag, 
  Image as ImageIcon, 
  Quote, 
  HelpCircle, 
  MapPin, 
  Search, 
  FileText 
} from 'lucide-react';

const featureIcons = [
  Palette,
  Smartphone,
  MessageCircle,
  ShoppingBag,
  ImageIcon,
  Quote,
  HelpCircle,
  MapPin,
  Search,
  FileText
];

export default function Features({ features }) {
  return (
    <section id="features" className="landing-section">
      <div className="landing-container">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Fitur Andalan</span>
          <h2 className="landing-section-title">Features & Capabilities</h2>
          <p className="landing-section-subtitle">
            Dirancang secara spesifik dengan fitur esensial yang benar-benar dibutuhkan oleh pelaku usaha lokal.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, idx) => {
            const Icon = featureIcons[idx] || Palette;
            return (
              <div key={idx} className="feature-item-card">
                <div className="feature-item-header">
                  <div className="feature-icon-wrapper">
                    <Icon size={20} className="feature-icon" />
                  </div>
                  <span className="feature-badge">{feature.badge}</span>
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-desc">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
