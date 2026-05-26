import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { ASSETS, SITE, WHATSAPP_LINK } from "@/config/site";

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`pl-header ${scrolled ? "pl-header--scrolled" : ""}`}
      data-testid="site-header"
    >
      <div className="pl-container">
        <nav className="pl-nav" aria-label="Navegação principal">
          <a
            href="#inicio"
            className="pl-logo"
            data-testid="header-logo"
            onClick={(e) => {
              e.preventDefault();
              handleNav("#inicio");
            }}
          >
            <img src={ASSETS.logoMain} alt={`${SITE.name} - logo`} />
            <span className="pl-sr">{SITE.name}</span>
          </a>

          <ul className="pl-menu" role="menubar">
            {NAV.map((item) => (
              <li key={item.href} role="none">
                <a
                  role="menuitem"
                  href={item.href}
                  data-testid={`nav-link-${item.label.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(item.href);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="pl-btn pl-btn-primary pl-header-cta"
              data-testid="header-cta-budget"
            >
              Solicitar orçamento
              <ArrowUpRight size={16} strokeWidth={2.4} />
            </a>
            <button
              type="button"
              className="pl-burger"
              aria-label="Abrir menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              data-testid="mobile-menu-open"
            >
              <Menu size={20} strokeWidth={2.2} />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={`pl-drawer ${open ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!open}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
      >
        <aside className="pl-drawer-panel" data-testid="mobile-menu-panel">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img
              src={ASSETS.logoMain}
              alt=""
              style={{ height: 36, width: "auto" }}
            />
            <button
              className="pl-burger"
              type="button"
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              data-testid="mobile-menu-close"
            >
              <X size={20} strokeWidth={2.2} />
            </button>
          </div>
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              data-testid={`mobile-nav-${item.label.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNav(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="pl-btn pl-btn-primary"
            data-testid="mobile-cta-budget"
            style={{ marginTop: "auto", width: "100%" }}
          >
            Solicitar orçamento
            <ArrowUpRight size={16} strokeWidth={2.4} />
          </a>
        </aside>
      </div>
    </header>
  );
}
