import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="landing-section landing-section-alt">
      <div className="landing-container landing-container-narrow">
        <div className="landing-section-header">
          <span className="landing-section-eyebrow">Pertanyaan Umum</span>
          <h2 className="landing-section-title">Frequently Asked Questions</h2>
          <p className="landing-section-subtitle">
            Jawaban jujur dan transparan seputar kepemilikan kode, cara kustomisasi, dan batasan penggunaan template.
          </p>
        </div>

        <div className="faq-accordion-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button
                  type="button"
                  className="faq-accordion-trigger"
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? 'rotate' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="faq-accordion-content"
                  >
                    <p className="faq-answer-text">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
