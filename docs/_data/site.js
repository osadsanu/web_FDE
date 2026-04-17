export default {
  name: "Fin de la Esclavitud",
  url: "https://findelaesclavitud.com",
  description:
    "Organización dedicada a combatir la trata de personas y promover la libertad y dignidad humana en México y el mundo.",
  nav: [
    { label: "Inicio", href: "/" },
    {
      label: "Aprende",
      href: "/aprende/que-es-la-trata/",
      submenu: [
        { label: "¿Qué es la trata?", href: "/aprende/que-es-la-trata/" },
        { label: "Tipos de trata", href: "/aprende/tipos-de-trata/" },
        { label: "Estadísticas", href: "/aprende/estadisticas/" },
        {
          label: "Factores de vulnerabilidad",
          href: "/aprende/factores-de-vulnerabilidad/"
        }
      ]
    },
    { label: "Blog", href: "/blog/" },
    { label: "Oferta educativa", href: "/oferta-educativa/" },
    { label: "Transparencia", href: "/transparencia/" },
    { label: "Voluntarios", href: "/voluntarios/" }
  ],
  ctas: [
    {
      label: "Hogares Seguros",
      href: "https://hogaresseguros.vercel.app/",
      external: true,
      variant: "secondary"
    },
    { label: "Donar", href: "/donativos/", variant: "primary" }
  ],
  social: [
    { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
    { label: "Twitter", href: "https://twitter.com", icon: "x" },
    { label: "Instagram", href: "https://instagram.com", icon: "instagram" }
  ],
  quickLinks: [
    { label: "Blog y Noticias", href: "/blog/" },
    { label: "Oferta Educativa", href: "/oferta-educativa/" },
    { label: "Únete como Voluntario", href: "/voluntarios/" },
    { label: "Donativos", href: "/donativos/" },
    { label: "Transparencia", href: "/transparencia/" }
  ],
  resourceLinks: [
    { label: "Línea de Ayuda 24/7", href: "#" },
    { label: "Materiales Educativos", href: "#" },
    { label: "Preguntas Frecuentes", href: "#" },
    { label: "Políticas de Privacidad", href: "#" }
  ],
  contact: [
    { label: "info@findelaesclavitud.org", href: "mailto:info@findelaesclavitud.org", icon: "mail" },
    { label: "+52 (33) 1234 5678", href: "tel:+523312345678", icon: "phone" },
    { label: "Guadalajara, Jalisco / México", href: "#", icon: "map-pin" }
  ]
};
