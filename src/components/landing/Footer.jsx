import { Github, Linkedin, Instagram } from "lucide-react";
import { ASSETS, SITE, SOCIAL } from "@/config/site";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="pl-footer" data-testid="site-footer">
      <div className="pl-container">
        <div className="pl-footer-grid">
          <div className="pl-footer-brand">
            <img src={ASSETS.logoMain} alt={`${SITE.name} - logo`} />
            <p
              style={{
                marginTop: 18,
                color: "rgba(255,255,255,0.65)",
                fontSize: 14.5,
                lineHeight: 1.7,
                maxWidth: 420,
              }}
            >
              Sites profissionais que transformam visitantes em clientes.
              Desenvolvimento web focado em performance, design moderno e
              experiência do usuário.
            </p>
            <div className="pl-socials" aria-label="Redes sociais">
              <a
                href={SOCIAL.github}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-social-btn"
                aria-label="GitHub"
                data-testid="footer-social-github"
              >
                <Github size={18} strokeWidth={2.2} />
              </a>
              <a
                href={SOCIAL.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-social-btn"
                aria-label="LinkedIn"
                data-testid="footer-social-linkedin"
              >
                <Linkedin size={18} strokeWidth={2.2} />
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-social-btn"
                aria-label="Instagram"
                data-testid="footer-social-instagram"
              >
                <Instagram size={18} strokeWidth={2.2} />
              </a>
            </div>
          </div>

          <div>
            <h4>Navegação</h4>
            <ul className="pl-footer-links">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    data-testid={`footer-link-${n.label.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      document
                        .querySelector(n.href)
                        ?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contato</h4>
            <ul className="pl-footer-links">
              <li>
                <a href={`mailto:${SITE.email}`} data-testid="footer-email">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="footer-whatsapp"
                >
                  WhatsApp · {SITE.whatsappDisplay}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pl-footer-bottom">
          <span>
            © {year} {SITE.name}. Todos os direitos reservados.
          </span>
          <span>{SITE.role} · Foco em conversão</span>
        </div>
      </div>
    </footer>
  );
}
