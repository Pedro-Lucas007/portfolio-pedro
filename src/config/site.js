// Configurações centralizadas do site Pedro Lucas
// Substitua os valores abaixo pelos dados reais quando disponíveis.

export const SITE = {
  name: "Pedro Lucas",
  role: "Desenvolvimento Web",
  tagline: "Transformo negócios em presença digital profissional.",
  whatsappNumber: "5588999999999", // DDI+DDD+numero (sem +, espaços ou traços)
  whatsappDisplay: "+55 88 99999-9999",
  email: "contato@pedrolucas.dev",
  whatsappMessage:
    "Olá, Pedro! Vi seu portfólio e gostaria de solicitar um orçamento para um site.",
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage
)}`;

export const MAILTO_LINK = `mailto:${SITE.email}?subject=${encodeURIComponent(
  "Orçamento de site"
)}&body=${encodeURIComponent(SITE.whatsappMessage)}`;

export const SOCIAL = {
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  instagram: "https://www.instagram.com/",
};

export const ASSETS = {
  logoMain: "/assets/logo/logo-main.svg",
  logoSymbol: "/assets/logo/logo-symbol.svg",
  heroMockup: "/assets/images/01-hero-desktop-mockup.png",
  projectClinicaVitta: "/assets/images/02-projeto-clinica-vitta.png",
  projectAcademiaMoveOn: "/assets/images/03-projeto-academia-moveon.png",
};
