import { ArrowUpRight, Stethoscope, Dumbbell } from "lucide-react";
import { ASSETS, WHATSAPP_LINK } from "@/config/site";

const PROJECTS = [
  {
    id: "01",
    kicker: "Projeto 01 · Saúde",
    title: "Clínica Vitta",
    desc: "Site institucional moderno para clínica médica, com agendamento simplificado, identidade acolhedora e foco em conversão de pacientes.",
    image: ASSETS.projectClinicaVitta,
    fallbackIcon: Stethoscope,
    fallbackHue: "#55BFC3",
    testid: "project-clinica-vitta",
  },
  {
    id: "02",
    kicker: "Projeto 02 · Fitness",
    title: "Academia MoveOn",
    desc: "Landing page energética para academia, com planos, depoimentos e CTAs claros para captação de novos alunos.",
    image: ASSETS.projectAcademiaMoveOn,
    fallbackIcon: Dumbbell,
    fallbackHue: "#FF8C32",
    testid: "project-academia-moveon",
  },
];

function ProjectMediaFallback({ Icon, hue }) {
  return (
    <svg
      className="pl-project-fallback"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`pf-${hue}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#24384C" />
          <stop offset="100%" stopColor="#0F1924" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill={`url(#pf-${hue})`} />
      {/* decorative grid */}
      <g opacity="0.18">
        {Array.from({ length: 9 }).map((_, i) => (
          <line
            key={`vl-${i}`}
            x1={i * 80}
            y1="0"
            x2={i * 80}
            y2="400"
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        ))}
        {Array.from({ length: 6 }).map((_, i) => (
          <line
            key={`hl-${i}`}
            x1="0"
            y1={i * 80}
            x2="640"
            y2={i * 80}
            stroke="#FFFFFF"
            strokeWidth="1"
          />
        ))}
      </g>
      {/* big accent circle */}
      <circle cx="510" cy="90" r="80" fill={hue} opacity="0.25" />
      <circle cx="510" cy="90" r="48" fill={hue} opacity="0.45" />
      {/* mock UI blocks */}
      <rect x="60" y="220" width="220" height="14" rx="5" fill="#FFFFFF" opacity="0.85" />
      <rect x="60" y="244" width="160" height="10" rx="4" fill="#FFFFFF" opacity="0.45" />
      <rect x="60" y="276" width="110" height="32" rx="16" fill={hue} />
      <rect x="184" y="276" width="92" height="32" rx="16" fill="#FFFFFF" opacity="0.18" />
    </svg>
  );
}

export default function Projects() {
  return (
    <section
      id="projetos"
      className="pl-section pl-projects"
      data-testid="projects-section"
    >
      <div className="pl-container">
        <header className="pl-projects-head">
          <div className="pl-fade-up">
            <span className="pl-eyebrow">Portfólio</span>
            <h2 className="pl-h2" style={{ marginTop: 8 }}>
              Resultados que <span className="pl-accent-text">falam</span> por si.
            </h2>
            <p className="pl-lead" style={{ marginTop: 16 }}>
              Cada projeto é pensado para gerar valor real ao negócio,
              transformando visitantes em clientes através de uma
              experiência clara, rápida e visualmente impactante.
            </p>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-btn pl-btn-ghost pl-fade-up"
            style={{ color: "#fff", borderColor: "rgba(255,255,255,0.2)" }}
            data-testid="projects-cta-all"
          >
            Ver todos os projetos
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
        </header>

        <div className="pl-projects-grid pl-stagger">
          {PROJECTS.map((p, i) => {
            const Icon = p.fallbackIcon;
            return (
              <article
                key={p.id}
                className="pl-project-card pl-fade-up"
                style={{ "--i": i }}
                data-testid={p.testid}
              >
                <div className="pl-project-media">
                  <ProjectMediaFallback Icon={Icon} hue={p.fallbackHue} />
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="pl-project-body">
                  <div className="pl-project-info">
                    <div className="pl-project-kicker">{p.kicker}</div>
                    <h3 className="pl-project-title">{p.title}</h3>
                    <p className="pl-project-desc">{p.desc}</p>
                  </div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pl-circle-btn"
                    aria-label={`Ver projeto ${p.title}`}
                    data-testid={`${p.testid}-arrow`}
                  >
                    <ArrowUpRight size={18} strokeWidth={2.4} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
