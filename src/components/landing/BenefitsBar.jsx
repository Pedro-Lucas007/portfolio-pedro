import { Zap, Sparkles, Smartphone, Code2 } from "lucide-react";

const ITEMS = [
  {
    icon: Zap,
    title: "Páginas rápidas",
    sub: "Alta performance e SEO básico",
  },
  {
    icon: Sparkles,
    title: "Design moderno",
    sub: "Identidade visual premium",
  },
  {
    icon: Smartphone,
    title: "Totalmente responsivo",
    sub: "Mobile, tablet e desktop",
  },
  {
    icon: Code2,
    title: "Código limpo",
    sub: "HTML semântico e organizado",
  },
];

export default function BenefitsBar() {
  return (
    <section className="pl-benefits" data-testid="benefits-bar">
      <div className="pl-container">
        <div className="pl-benefits-card pl-fade-up pl-stagger">
          {ITEMS.map(({ icon: Icon, title, sub }, i) => (
            <div
              className="pl-benefit"
              key={title}
              style={{ "--i": i }}
              data-testid={`benefit-${i}`}
            >
              <span className="pl-benefit-icon">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <div>
                <div className="pl-benefit-title">{title}</div>
                <div className="pl-benefit-sub">{sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
