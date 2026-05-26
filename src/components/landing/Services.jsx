import {
  Layout,
  Building2,
  Smartphone,
  Palette,
  LayoutGrid,
  Globe2,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Layout,
    title: "Landing Pages",
    desc: "Páginas focadas em conversão, com hierarquia clara e CTAs estratégicos para gerar leads e vendas.",
  },
  {
    icon: Building2,
    title: "Sites Institucionais",
    desc: "Presença digital sólida para empresas, com estrutura escalável, navegação intuitiva e identidade marcante.",
  },
  {
    icon: Smartphone,
    title: "Responsividade",
    desc: "Layouts impecáveis em mobile, tablet e desktop, sem rolagem horizontal e com performance consistente.",
  },
  {
    icon: Palette,
    title: "Design Moderno",
    desc: "Interfaces atuais, alinhadas às melhores referências do mercado, com atenção a tipografia e espaçamento.",
  },
  {
    icon: LayoutGrid,
    title: "Organização Visual",
    desc: "Hierarquia, ritmo e respiro entre os elementos para guiar o olhar do usuário até a ação principal.",
  },
  {
    icon: Globe2,
    title: "Presença Digital",
    desc: "Estratégia visual integrada para fortalecer marca, autoridade e confiança no ambiente online.",
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      className="pl-section pl-section--soft"
      data-testid="services-section"
    >
      <div className="pl-container">
        <header className="pl-section-head pl-fade-up">
          <span className="pl-eyebrow">Serviços</span>
          <h2 className="pl-h2" style={{ marginTop: 8 }}>
            Soluções que geram{" "}
            <span className="pl-accent-text">valor</span> para o seu negócio.
          </h2>
          <p className="pl-lead" style={{ marginTop: 16 }}>
            Combino design moderno, código limpo e foco em conversão para
            entregar websites que representam a sua marca com a qualidade
            que ela merece.
          </p>
        </header>

        <div className="pl-services-grid pl-stagger">
          {SERVICES.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={title}
              className="pl-service-card pl-fade-up"
              style={{ "--i": i }}
              data-testid={`service-card-${i}`}
            >
              <span className="pl-service-icon">
                <Icon size={22} strokeWidth={2.2} />
              </span>
              <h3 className="pl-service-title">{title}</h3>
              <p className="pl-service-desc">{desc}</p>
              <span className="pl-service-link">
                Saiba mais
                <ArrowUpRight size={14} strokeWidth={2.4} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
