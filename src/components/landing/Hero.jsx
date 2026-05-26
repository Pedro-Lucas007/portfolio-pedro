import { ArrowUpRight, ArrowRight } from "lucide-react";
import HeroMockup from "@/components/landing/HeroMockup";
import { SITE, WHATSAPP_LINK } from "@/config/site";

export default function Hero() {
  return (
    <section className="pl-hero" id="inicio" data-testid="hero-section">
      <div className="pl-container">
        <div className="pl-hero-grid">
          <div>
            <span className="pl-tag pl-fade-up" data-testid="hero-tag">
              <span className="dot" />
              Desenvolvimento Web
            </span>

            <h1
              className="pl-h1 pl-fade-up"
              data-testid="hero-title"
              style={{ marginTop: 22 }}
            >
              Transformo negócios em{" "}
              <span className="pl-accent-text">presença digital</span>{" "}
              profissional.
            </h1>

            <p
              className="pl-lead pl-fade-up"
              data-testid="hero-subtitle"
              style={{ marginTop: 22 }}
            >
              Criação de websites modernos, rápidos e responsivos para
              empresas que desejam crescer no ambiente digital.
            </p>

            <div className="pl-hero-actions pl-fade-up">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-btn pl-btn-primary"
                data-testid="hero-cta-budget"
              >
                Solicitar orçamento
                <ArrowUpRight size={16} strokeWidth={2.4} />
              </a>
              <a
                href="#projetos"
                className="pl-btn pl-btn-link"
                data-testid="hero-cta-projects"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .querySelector("#projetos")
                    ?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                Ver projetos
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>
            </div>

            <div className="pl-hero-meta pl-fade-up">
              <div className="pl-hero-meta-item">
                <strong>+30</strong>
                <span>Projetos entregues</span>
              </div>
              <div className="pl-hero-meta-item">
                <strong>100%</strong>
                <span>Responsivo</span>
              </div>
              <div className="pl-hero-meta-item">
                <strong>{SITE.role}</strong>
                <span>Foco em conversão</span>
              </div>
            </div>
          </div>

          <div className="pl-fade-in" data-testid="hero-mockup">
            <HeroMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
