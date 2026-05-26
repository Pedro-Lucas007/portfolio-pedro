import { Check, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import {
  SITE,
  WHATSAPP_LINK,
  MAILTO_LINK,
} from "@/config/site";

export default function AboutCTA() {
  return (
    <section
      id="contato"
      className="pl-section pl-about"
      data-testid="about-cta-section"
    >
      <div className="pl-container">
        <div className="pl-about-grid">
          {/* Coluna esquerda - Compromisso */}
          <div className="pl-about-col pl-fade-up">
            <span className="pl-eyebrow">Sobre</span>
            <h2 className="pl-h2" style={{ marginTop: 8 }}>
              Compromisso com{" "}
              <span className="pl-accent-text">qualidade</span> em cada detalhe.
            </h2>
            <p className="pl-lead" style={{ marginTop: 16 }}>
              Trabalho lado a lado com cada cliente para entregar
              websites que comunicam autoridade, geram confiança e ajudam o
              negócio a crescer com consistência.
            </p>
            <ul className="pl-about-list" data-testid="about-list">
              <li>
                <span className="pl-check">
                  <Check size={14} strokeWidth={3} />
                </span>
                Comunicação clara
              </li>
              <li>
                <span className="pl-check">
                  <Check size={14} strokeWidth={3} />
                </span>
                Entregas no prazo
              </li>
              <li>
                <span className="pl-check">
                  <Check size={14} strokeWidth={3} />
                </span>
                Soluções personalizadas
              </li>
            </ul>
          </div>

          {/* Centro - símbolo */}
          <div
            className="pl-symbol-col pl-fade-in"
            data-testid="about-symbol"
            aria-hidden="true"
          >
            <div className="pl-symbol-rings">
              <span className="pl-ring r1" />
              <span className="pl-ring r2" />
              <span className="pl-ring r3" />
            </div>
            <div className="pl-symbol-core">
              <span>&lt;</span>
              <span className="pl-symbol-accent">/</span>
              <span>&gt;</span>
            </div>
            <div className="pl-symbol-dots">
              <span />
              <span />
              <span />
            </div>
          </div>

          {/* Coluna direita - CTA contato */}
          <div className="pl-about-col pl-fade-up" data-testid="contact-card">
            <span className="pl-eyebrow">Contato</span>
            <h2 className="pl-h2" style={{ marginTop: 8 }}>
              Vamos construir algo{" "}
              <span className="pl-accent-text">grande</span> juntos.
            </h2>
            <p className="pl-lead" style={{ marginTop: 16 }}>
              Conte sua ideia e receba uma proposta personalizada para o
              seu projeto.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-btn pl-btn-primary"
              style={{ marginTop: 24, alignSelf: "flex-start" }}
              data-testid="contact-cta-talk"
            >
              Vamos conversar
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>

            <div className="pl-contact-list">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-contact-item"
                data-testid="contact-whatsapp"
              >
                <span className="pl-contact-icon">
                  <MessageCircle size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <div className="pl-contact-label">WhatsApp</div>
                  <div className="pl-contact-value">
                    {SITE.whatsappDisplay}
                  </div>
                </div>
              </a>
              <a
                href={MAILTO_LINK}
                className="pl-contact-item"
                data-testid="contact-email"
              >
                <span className="pl-contact-icon">
                  <Mail size={20} strokeWidth={2.2} />
                </span>
                <div>
                  <div className="pl-contact-label">E-mail</div>
                  <div className="pl-contact-value">{SITE.email}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
