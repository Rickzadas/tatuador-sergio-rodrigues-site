"use client";

import React from "react";

type Language = "en" | "pt" | "es";

type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  cover: string;
  gallery: string[];
};

type Translation = {
  languageName: string;
  languageSelector: string;
  artistRole: string;
  nav: {
    work: string;
    why: string;
    about: string;
    global: string;
    contact: string;
  };
  hero: {
    badge: string;
    line1: string;
    line2: string;
    line3: string;
    description: string;
    founder: string;
    findOnline: string;
    viewPortfolio: string;
  };
  countries: string[];
  studio: {
    owner: string;
    guest: string;
    brazil: string;
    unitedStates: string;
  };
  portfolio: {
    eyebrow: string;
    heading: string;
    viewMore: string;
    items: Array<{
      id: string;
      title: string;
      category: string;
      description: string;
    }>;
  };
  stats: {
    years: string;
    clients: string;
    cities: string;
    tattoos: string;
    trophies: string;
  };
  why: {
    eyebrow: string;
    heading: string;
    items: Array<{
      title: string;
      description: string;
      icon: string;
    }>;
  };
  about: {
    eyebrow: string;
    heading: string;
    paragraph1: string;
    paragraph2: string;
    steps: string[];
  };
  global: {
    eyebrow: string;
    heading: string;
    description: string;
    features: string[];
  };
  partners: {
    eyebrow: string;
    heading: string;
  };
  testimonials: {
    eyebrow: string;
    heading: string;
    items: Array<{
      quote: string;
      author: string;
      rating: number;
    }>;
  };
  contact: {
    phone: string;
    email: string;
    instagram: string;
  };
  footer: {
    ownerStudio: string;
    guestStudio: string;
    visitInstagram: string;
    rights: string;
    since: string;
  };
  gallery: {
    close: string;
    previous: string;
    next: string;
    imageCounter: string;
  };
};

const translations: Record<Language, Translation> = {
  en: {
    languageName: "English",
    languageSelector: "Select language",
    artistRole: "Tattoo Artist",
    nav: {
      work: "Work",
      why: "Why Choose",
      about: "About",
      global: "International",
      contact: "Contact",
    },
    hero: {
      badge: "International Tattoo Artist",
      line1: "Tattoo work with",
      line2: "global presence",
      line3: "and elite execution.",
      description:
        "Original artwork for clients seeking impeccable technique, strong aesthetics, and a premium experience. A studio built to serve both local and international audiences, with sophisticated positioning and a global mindset.",
      founder: "Tattoo artist since 1997, founder and head of Tattoo Inc Shop Studio.",
      findOnline: "Find me online",
      viewPortfolio: "View Portfolio",
    },
    countries: ["Brazil", "USA", "China", "Germany", "Worldwide"],
    studio: {
      owner: "Studio — Owner",
      guest: "Studio — Guest",
      brazil: "BRAZIL",
      unitedStates: "UNITED STATES",
    },
    portfolio: {
      eyebrow: "Portfolio",
      heading: "Specialist in Japanese Art.",
      viewMore: "View more work",
      items: [
        {
          id: "japanese",
          title: "Japanese Tattoo Art",
          category: "Japanese / Irezumi",
          description:
            "Custom Japanese tattoos shaped to the body's natural flow, combining traditional symbolism, bold composition, and a distinctive contemporary signature.",
        },
      ],
    },
    stats: {
      years: "Years of Experience",
      clients: "Clients Worldwide",
      cities: "Cities",
      tattoos: "Tattoos Completed",
      trophies: "Trophies",
    },
    why: {
      eyebrow: "What Sets Me Apart",
      heading: "Why Choose Sergio",
      items: [
        {
          title: "Master Craftsman",
          description: "Nearly three decades perfecting technique across multiple styles and disciplines.",
          icon: "✨",
        },
        {
          title: "Artistic Direction",
          description: "Custom designs created specifically for your body and personal vision.",
          icon: "🎨",
        },
        {
          title: "International Standard",
          description: "Works in Brazil and the USA with clients from more than 50 cities.",
          icon: "🌍",
        },
        {
          title: "Premium Process",
          description: "Curated consultation, personalized design, and meticulous execution.",
          icon: "⚡",
        },
      ],
    },
    about: {
      eyebrow: "About the artist",
      heading: "Built for clients who want more than just a tattoo.",
      paragraph1:
        "This positioning conveys authority, sophistication, and consistency. The artist is not presented merely as a tattooer, but as a creative reference, with a professional process, a distinctive aesthetic, and the ability to work with clients from different cultures.",
      paragraph2:
        "The experience begins with a consultation, evolves through personalized artistic direction, and results in work designed to last visually — both on the skin and in the client's memory.",
      steps: ["Curated consultation", "Custom design process", "Premium execution"],
    },
    global: {
      eyebrow: "International appeal",
      heading: "A global approach to custom tattooing.",
      description:
        "With more than two decades of experience, the artist works with clients worldwide, creating unique pieces with precision and artistic direction. Available for international bookings, guest spots, and conventions.",
      features: [
        "High-end branding",
        "Original Projects",
        "Social proof",
        "WhatsApp contact",
        "Instagram presence",
        "Guest spot availability",
      ],
    },
    partners: {
      eyebrow: "Brand Partners",
      heading: "Trusted by leading industry brands",
    },
    testimonials: {
      eyebrow: "Client words",
      heading: "Trust built through experience.",
      items: [
        {
          quote:
            "The entire experience was flawless — artistic direction, execution, and care throughout the whole process.",
          author: "Client · São Paulo",
          rating: 5,
        },
        {
          quote: "One of the cleanest tattoo experiences I've ever had. Custom, intentional, and world-class.",
          author: "Client · New York",
          rating: 5,
        },
        {
          quote:
            "Refined design and exceptional technique. From consultation to final result, everything felt special.",
          author: "Client · Tokyo",
          rating: 5,
        },
      ],
    },
    contact: {
      phone: "Phone",
      email: "Email",
      instagram: "Instagram",
    },
    footer: {
      ownerStudio: "Owner Studio",
      guestStudio: "Guest Studio",
      visitInstagram: "Visit on Instagram",
      rights: "All rights reserved.",
      since: "Tattoo artist since 1997 • Brazil & USA",
    },
    gallery: {
      close: "Close gallery",
      previous: "Previous image",
      next: "Next image",
      imageCounter: "Image",
    },
  },
  pt: {
    languageName: "Português",
    languageSelector: "Selecionar idioma",
    artistRole: "Artista Tatuador",
    nav: {
      work: "Trabalhos",
      why: "Diferenciais",
      about: "Sobre",
      global: "Internacional",
      contact: "Contato",
    },
    hero: {
      badge: "Artista Tatuador Internacional",
      line1: "Tatuagem com",
      line2: "presença global",
      line3: "e execução de alto nível.",
      description:
        "Arte autoral para clientes que buscam técnica impecável, estética marcante e uma experiência premium. Um estúdio preparado para atender públicos locais e internacionais, com posicionamento sofisticado e visão global.",
      founder: "Tatuador desde 1997, fundador e responsável pelo Tattoo Inc Shop Studio.",
      findOnline: "Encontre-me online",
      viewPortfolio: "Ver portfólio",
    },
    countries: ["Brasil", "EUA", "China", "Alemanha", "Mundo"],
    studio: {
      owner: "Estúdio — Proprietário",
      guest: "Estúdio — Convidado",
      brazil: "BRASIL",
      unitedStates: "ESTADOS UNIDOS",
    },
    portfolio: {
      eyebrow: "Portfólio",
      heading: "Especialista em arte japonesa.",
      viewMore: "Ver mais trabalhos",
      items: [
        {
          id: "japanese",
          title: "Tatuagem Japonesa",
          category: "Japonês / Irezumi",
          description:
            "Tatuagens japonesas autorais desenvolvidas para acompanhar o fluxo natural do corpo, unindo simbolismo tradicional, composição marcante e uma assinatura contemporânea própria.",
        },
      ],
    },
    stats: {
      years: "Anos de Experiência",
      clients: "Clientes no Mundo",
      cities: "Cidades",
      tattoos: "Tatuagens Realizadas",
      trophies: "Troféus",
    },
    why: {
      eyebrow: "Meus Diferenciais",
      heading: "Por que escolher Sergio",
      items: [
        {
          title: "Mestre da Técnica",
          description: "Quase três décadas aperfeiçoando técnicas em diversos estilos e disciplinas.",
          icon: "✨",
        },
        {
          title: "Direção Artística",
          description: "Projetos exclusivos criados especialmente para seu corpo e sua visão pessoal.",
          icon: "🎨",
        },
        {
          title: "Padrão Internacional",
          description: "Atuação no Brasil e nos EUA, atendendo clientes de mais de 50 países.",
          icon: "🌍",
        },
        {
          title: "Processo Premium",
          description: "Consulta cuidadosa, design personalizado e execução meticulosa.",
          icon: "⚡",
        },
      ],
    },
    about: {
      eyebrow: "Sobre o artista",
      heading: "Criado para clientes que querem mais do que apenas uma tatuagem.",
      paragraph1:
        "Este posicionamento transmite autoridade, sofisticação e consistência. O artista não é apresentado apenas como tatuador, mas como uma referência criativa, com processo profissional, estética própria e capacidade de trabalhar com clientes de diferentes culturas.",
      paragraph2:
        "A experiência começa na consulta, evolui por meio de uma direção artística personalizada e resulta em um trabalho pensado para permanecer visualmente marcante — tanto na pele quanto na memória do cliente.",
      steps: ["Consulta personalizada", "Criação de projeto exclusivo", "Execução premium"],
    },
    global: {
      eyebrow: "Atuação internacional",
      heading: "Uma abordagem global para tatuagens personalizadas.",
      description:
        "Com mais de duas décadas de experiência, o artista atende clientes de todo o mundo, criando peças únicas com precisão e direção artística. Disponível para agendamentos internacionais, guest spots e convenções.",
      features: [
        "Marca de alto padrão",
        "Projetos autorais",
        "Prova social",
        "Contato pelo WhatsApp",
        "Presença no Instagram",
        "Disponibilidade para guest spots",
      ],
    },
    partners: {
      eyebrow: "Marcas Parceiras",
      heading: "Confiança das principais marcas do setor",
    },
    testimonials: {
      eyebrow: "Depoimentos",
      heading: "Confiança construída pela experiência.",
      items: [
        {
          quote:
            "Toda a experiência foi impecável — direção artística, execução e cuidado durante todo o processo.",
          author: "Cliente · São Paulo",
          rating: 5,
        },
        {
          quote:
            "Uma das experiências de tatuagem mais cuidadosas que já tive. Exclusiva, intencional e de nível mundial.",
          author: "Cliente · Nova York",
          rating: 5,
        },
        {
          quote:
            "Design refinado e técnica excepcional. Da consulta ao resultado final, tudo foi realmente especial.",
          author: "Cliente · Tóquio",
          rating: 5,
        },
      ],
    },
    contact: {
      phone: "Telefone",
      email: "E-mail",
      instagram: "Instagram",
    },
    footer: {
      ownerStudio: "Estúdio Próprio",
      guestStudio: "Estúdio Convidado",
      visitInstagram: "Visitar no Instagram",
      rights: "Todos os direitos reservados.",
      since: "Tatuador desde 1997 • Brasil e EUA",
    },
    gallery: {
      close: "Fechar galeria",
      previous: "Imagem anterior",
      next: "Próxima imagem",
      imageCounter: "Imagem",
    },
  },
  es: {
    languageName: "Español",
    languageSelector: "Seleccionar idioma",
    artistRole: "Artista del Tatuaje",
    nav: {
      work: "Trabajos",
      why: "Diferenciales",
      about: "Sobre mí",
      global: "Internacional",
      contact: "Contacto",
    },
    hero: {
      badge: "Artista Internacional del Tatuaje",
      line1: "Tatuajes con",
      line2: "presencia global",
      line3: "y ejecución de élite.",
      description:
        "Arte original para clientes que buscan una técnica impecable, una estética contundente y una experiencia premium. Un estudio preparado para atender audiencias locales e internacionales, con un posicionamiento sofisticado y una visión global.",
      founder: "Tatuador desde 1997, fundador y director de Tattoo Inc Shop Studio.",
      findOnline: "Encuéntrame online",
      viewPortfolio: "Ver portafolio",
    },
    countries: ["Brasil", "EE. UU.", "China", "Alemania", "Todo el mundo"],
    studio: {
      owner: "Estudio — Propietario",
      guest: "Estudio — Invitado",
      brazil: "BRASIL",
      unitedStates: "ESTADOS UNIDOS",
    },
    portfolio: {
      eyebrow: "Portafolio",
      heading: "Especialista en arte japonés.",
      viewMore: "Ver más trabajos",
      items: [
        {
          id: "japanese",
          title: "Tatuaje Japonés",
          category: "Japonés / Irezumi",
          description:
            "Tatuajes japoneses personalizados, diseñados para seguir el flujo natural del cuerpo y combinar simbolismo tradicional, composición impactante y una firma contemporánea propia.",
        },
      ],
    },
    stats: {
      years: "Años de Experiencia",
      clients: "Clientes en el Mundo",
      cities: "Ciudades",
      tattoos: "Tatuajes Realizados",
      trophies: "Trofeos",
    },
    why: {
      eyebrow: "Lo que me diferencia",
      heading: "Por qué elegir a Sergio",
      items: [
        {
          title: "Maestro Artesano",
          description: "Casi tres décadas perfeccionando técnicas en múltiples estilos y disciplinas.",
          icon: "✨",
        },
        {
          title: "Dirección Artística",
          description: "Diseños exclusivos creados específicamente para tu cuerpo y tu visión personal.",
          icon: "🎨",
        },
        {
          title: "Estándar Internacional",
          description: "Trabaja en Brasil y EE. UU. con clientes de más de 50 ciudades.",
          icon: "🌍",
        },
        {
          title: "Proceso Premium",
          description: "Consulta personalizada, diseño exclusivo y ejecución meticulosa.",
          icon: "⚡",
        },
      ],
    },
    about: {
      eyebrow: "Sobre el artista",
      heading: "Creado para clientes que desean más que un simple tatuaje.",
      paragraph1:
        "Este posicionamiento transmite autoridad, sofisticación y consistencia. El artista no se presenta únicamente como tatuador, sino como una referencia creativa, con un proceso profesional, una estética distintiva y la capacidad de trabajar con clientes de distintas culturas.",
      paragraph2:
        "La experiencia comienza con una consulta, evoluciona mediante una dirección artística personalizada y da como resultado una obra diseñada para perdurar visualmente — tanto en la piel como en la memoria del cliente.",
      steps: ["Consulta personalizada", "Proceso de diseño exclusivo", "Ejecución premium"],
    },
    global: {
      eyebrow: "Alcance internacional",
      heading: "Un enfoque global para el tatuaje personalizado.",
      description:
        "Con más de dos décadas de experiencia, el artista trabaja con clientes de todo el mundo, creando piezas únicas con precisión y dirección artística. Disponible para reservas internacionales, guest spots y convenciones.",
      features: [
        "Marca de alta gama",
        "Proyectos originales",
        "Prueba social",
        "Contacto por WhatsApp",
        "Presencia en Instagram",
        "Disponibilidad para guest spots",
      ],
    },
    partners: {
      eyebrow: "Marcas Asociadas",
      heading: "La confianza de las principales marcas del sector",
    },
    testimonials: {
      eyebrow: "Opiniones de clientes",
      heading: "Confianza construida a través de la experiencia.",
      items: [
        {
          quote:
            "Toda la experiencia fue impecable — dirección artística, ejecución y cuidado durante todo el proceso.",
          author: "Cliente · São Paulo",
          rating: 5,
        },
        {
          quote:
            "Una de las experiencias de tatuaje más cuidadosas que he tenido. Personalizada, intencional y de nivel mundial.",
          author: "Cliente · Nueva York",
          rating: 5,
        },
        {
          quote:
            "Diseño refinado y técnica excepcional. Desde la consulta hasta el resultado final, todo se sintió especial.",
          author: "Cliente · Tokio",
          rating: 5,
        },
      ],
    },
    contact: {
      phone: "Teléfono",
      email: "Correo electrónico",
      instagram: "Instagram",
    },
    footer: {
      ownerStudio: "Estudio Propio",
      guestStudio: "Estudio Invitado",
      visitInstagram: "Visitar en Instagram",
      rights: "Todos los derechos reservados.",
      since: "Tatuador desde 1997 • Brasil y Estados Unidos.",
    },
    gallery: {
      close: "Cerrar galería",
      previous: "Imagen anterior",
      next: "Siguiente imagen",
      imageCounter: "Imagen",
    },
  },
};

const portfolioMedia: Record<string, { cover: string; gallery: string[] }> = {
  japanese: {
    cover: "/tattoo2.png",
    gallery: ["/tattoo1.png", "/tattoo2.png", "/tattoo3.png", "/tattoo4.png", "/tattoo5.png", "/tattoo6.png", "/tattoo7.png"],
  },
};

const languageOptions: Array<{ code: Language; short: string; flag: string }> = [
  { code: "en", short: "EN", flag: "🇺🇸" },
  { code: "pt", short: "PT", flag: "🇧🇷" },
  { code: "es", short: "ES", flag: "🇪🇸" },
];

const sponsors = [
  { name: "HolySkin", logo: "/sponsor1.png", instagram: "https://www.instagram.com/holyskinoficial/" },
  { name: "DKLAB", logo: "/sponsor4.webp", instagram: "https://www.instagram.com/dklab.official/" },
  {
    name: "Stonz",
    logo: "/sponsor3.png",
    instagram: "https://www.instagram.com/stonzoficial/",
  },
];

export default function TattooArtistSite() {
  const [language, setLanguage] = React.useState<Language>("en");
  const [openGallery, setOpenGallery] = React.useState<PortfolioItem | null>(null);
  const [currentImage, setCurrentImage] = React.useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentTattooIndex, setCurrentTattooIndex] = React.useState(0);
  const [tattooVisible, setTattooVisible] = React.useState(true);

  const t = translations[language];

  React.useEffect(() => {
    const savedLanguage = window.localStorage.getItem("sergio-site-language") as Language | null;
    const browserLanguage = navigator.language.toLowerCase();

    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage);
    } else if (browserLanguage.startsWith("pt")) {
      setLanguage("pt");
    } else if (browserLanguage.startsWith("es")) {
      setLanguage("es");
    }
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem("sergio-site-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : language === "es" ? "es" : "en";
  }, [language]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.delay || "0";
            window.setTimeout(() => entry.target.classList.add("animate-in"), Number(delay));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    document.querySelectorAll("[data-animate]").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [language]);

  React.useEffect(() => {
    if (!openGallery) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenGallery(null);
      if (event.key === "ArrowLeft") {
        setCurrentImage((value) =>
          value === 0 ? openGallery.gallery.length - 1 : value - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setCurrentImage((value) =>
          value === openGallery.gallery.length - 1 ? 0 : value + 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openGallery]);

  React.useEffect(() => {
    // Enquanto a galeria estiver aberta, o carrossel fica completamente pausado.
    if (openGallery) return;

    let fadeTimeout: number | undefined;
    const tattooCount = portfolioMedia.japanese.gallery.length;

    const interval = window.setInterval(() => {
      setTattooVisible(false);

      fadeTimeout = window.setTimeout(() => {
        setCurrentTattooIndex((index) => (index + 1) % tattooCount);
        setTattooVisible(true);
      }, 600);
    }, 4200);

    return () => {
      window.clearInterval(interval);
      if (fadeTimeout) window.clearTimeout(fadeTimeout);
    };
  }, [openGallery]);

  React.useEffect(() => {
    // Pré-carrega as imagens para evitar piscadas ao abrir/navegar pela galeria.
    Object.values(portfolioMedia).forEach((media) => {
      media.gallery.forEach((src) => {
        const image = new Image();
        image.src = src;
      });
    });
  }, []);

  const portfolio: PortfolioItem[] = t.portfolio.items.map((item) => ({
    ...item,
    ...portfolioMedia[item.id],
  }));

  const stats = [
    { label: t.stats.years, value: "27+" },
    { label: t.stats.clients, value: "2000+" },
    { label: t.stats.cities || (language === "pt" ? "Cidades" : language === "es" ? "Ciudades" : "Cities"), value: "50+" },
    { label: t.stats.tattoos, value: "5000+" },
    { label: t.stats.trophies, value: "+200" },
  ];

  const navLinks = [
    { href: "#work", label: t.nav.work },
    { href: "#why", label: t.nav.why },
    { href: "#about", label: t.nav.about },
    { href: "#global", label: t.nav.global },
    { href: "#contact", label: t.nav.contact },
  ];

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    setMobileMenuOpen(false);
  };

  function LanguageSelector({ compact = false }: { compact?: boolean }) {
    return (
      <div
        className="flex items-center rounded-xl border border-white/10 bg-white/[0.04] p-1"
        role="group"
        aria-label={t.languageSelector}
      >
        {languageOptions.map((option) => {
          const isActive = language === option.code;

          return (
            <button
              key={option.code}
              type="button"
              onClick={() => changeLanguage(option.code)}
              aria-pressed={isActive}
              title={translations[option.code].languageName}
              className={`flex items-center justify-center gap-1.5 rounded-lg font-semibold transition duration-200 ${
                compact ? "px-2.5 py-2 text-xs" : "px-3 py-2 text-xs"
              } ${
                isActive
                  ? "bg-white text-black shadow-lg"
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              }`}
            >
              <span aria-hidden="true">{option.flag}</span>
              <span>{option.short}</span>
            </button>
          );
        })}
      </div>
    );
  }

  function GalleryModal() {
    if (!openGallery) return null;

    const images = openGallery.gallery;

    return (
      <div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-fadeIn sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-label={openGallery.title}
        onClick={() => setOpenGallery(null)}
      >
        <button
          type="button"
          onClick={() => setOpenGallery(null)}
          className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/50 text-3xl text-white/70 transition hover:bg-white hover:text-black"
          aria-label={t.gallery.close}
        >
          ×
        </button>

        <div className="relative flex max-h-[90vh] max-w-6xl flex-col items-center" onClick={(e) => e.stopPropagation()}>
          <img
            src={images[currentImage]}
            alt={`${openGallery.title} — ${t.gallery.imageCounter} ${currentImage + 1}`}
            className="max-h-[78vh] max-w-[92vw] rounded-2xl object-contain shadow-2xl"
          />

          <div className="mt-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-xs text-white/65">
            {currentImage + 1} / {images.length}
          </div>

          <button
            type="button"
            onClick={() =>
              setCurrentImage((value) => (value === 0 ? images.length - 1 : value - 1))
            }
            className="absolute left-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-4xl text-white/75 transition hover:bg-white hover:text-black sm:-left-16"
            aria-label={t.gallery.previous}
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() =>
              setCurrentImage((value) => (value === images.length - 1 ? 0 : value + 1))
            }
            className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-4xl text-white/75 transition hover:bg-white hover:text-black sm:-right-16"
            aria-label={t.gallery.next}
          >
            ›
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-white selection:text-black">
      <style>{`
        html { scroll-behavior: smooth; }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(28px); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.97); }
          to { opacity: 1; transform: scale(1); }
        }

        [data-animate] {
          opacity: 0;
          transform: translateY(28px);
          filter: blur(6px);
        }

        [data-animate].animate-in {
          animation: fadeUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .animate-fadeIn { animation: fadeIn 0.25s ease-out forwards; }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-8 lg:px-10">
          <a href="#" className="min-w-0">
            <div className="text-[10px] uppercase tracking-[0.35em] text-white/55 sm:text-xs">{t.artistRole}</div>
            <div className="truncate text-base font-semibold tracking-[0.14em] sm:text-xl sm:tracking-[0.2em]">
              SERGIO RODRIGUES
            </div>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            <nav className="flex gap-7 text-sm text-white/70" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </nav>
            <LanguageSelector />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSelector compact />
            <button
              type="button"
              onClick={() => setMobileMenuOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl"
              aria-label="Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="border-t border-white/10 bg-zinc-950 px-6 py-4 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

          <div className="relative mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
            <div className="grid items-end gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-32" data-animate>
              <div>
                <div className="mb-6 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur">
                  {t.hero.badge}
                </div>

                <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
                  {t.hero.line1}
                  <span className="block text-white/55">{t.hero.line2}</span>
                  <span className="block">{t.hero.line3}</span>
                </h1>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                  {t.hero.description}
                  <br />
                  <br />
                  <strong className="text-white/90">{t.hero.founder}</strong>
                </p>

                <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="#contact"
                    className="rounded-2xl bg-white px-8 py-4 text-center text-sm font-medium text-black transition hover:scale-[1.03] hover:bg-white/90"
                  >
                    {t.hero.findOnline}
                  </a>
                  <a
                    href="#work"
                    className="rounded-2xl border border-white/15 bg-white/5 px-8 py-4 text-center text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  >
                    {t.hero.viewPortfolio}
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/45">
                  {t.countries.map((country) => (
                    <span
                      key={country}
                      className="rounded-full border border-white/10 px-4 py-2 transition duration-300 hover:border-white/40 hover:bg-white/10 hover:text-white"
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-8 top-8 h-24 w-24 rounded-full border border-white/10 bg-white/5 blur-2xl" />
                <div className="grid gap-4">
                  <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 shadow-2xl backdrop-blur">
                    <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] border border-white/10">
                      <img src="/artist.png" alt="Sergio Rodrigues" className="h-full w-full object-cover" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <a
                      href="https://www.instagram.com/tattooincshopstudio/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/50">{t.studio.owner}</div>
                        <div className="text-lg">🇧🇷</div>
                      </div>
                      <div className="mt-3 text-xl font-semibold">Tattoo Inc Shop Studio</div>
                      <div className="mt-2 text-sm font-medium text-white/50">{t.studio.brazil}</div>
                      <div className="mt-1 text-sm text-white/65">São Bernardo do Campo — SP</div>
                    </a>

                    <a
                      href="https://www.instagram.com/westsidetattoo719/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:bg-white/[0.06]"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs uppercase tracking-[0.22em] text-white/50">{t.studio.guest}</div>
                        <div className="text-lg">🇺🇸</div>
                      </div>
                      <div className="mt-3 text-xl font-semibold">West Side Tattoo</div>
                      <div className="mt-2 text-sm font-medium text-white/50">{t.studio.unitedStates}</div>
                      <div className="mt-1 text-sm text-white/65">Colorado</div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between" data-animate>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">{t.portfolio.eyebrow}</div>
              <h2 className="mt-4 max-w-4xl text-3xl font-semibold tracking-tight sm:text-5xl">
                {t.portfolio.heading}
              </h2>
            </div>
          </div>

          {portfolio.map((item) => (
            <div key={item.id} className="mt-12">
              <div className="mb-8 max-w-3xl">
                <div className="text-xs uppercase tracking-[0.22em] text-white/45">{item.category}</div>
                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65 sm:text-base">{item.description}</p>
              </div>

              <div className="mx-auto flex max-w-2xl flex-col items-center">
                <button
                  type="button"
                  onClick={() => {
                    setOpenGallery(item);
                    setCurrentImage(currentTattooIndex);
                  }}
                  className={`group relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_rgba(0,0,0,0.35)] transition-opacity duration-[600ms] ease-in-out hover:border-white/30 ${
                    tattooVisible ? "opacity-100" : "opacity-0"
                  }`}
                  aria-label={`${t.portfolio.viewMore}: ${item.title} — ${currentTattooIndex + 1}`}
                >
                  <div className="relative h-[400px] w-full overflow-hidden rounded-[2rem] bg-black sm:h-[480px] lg:h-[520px]">
                    <img
                      src={item.gallery[currentTattooIndex]}
                      alt={`${item.title} ${currentTattooIndex + 1}`}
                      className="h-full w-full object-contain p-3 sm:p-4"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 sm:p-8">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-white/55">Featured Tattoo</p>
                        <p className="mt-2 text-lg font-semibold text-white sm:text-2xl">
                          {item.title} <span className="text-white/55">— {currentTattooIndex + 1}/{item.gallery.length}</span>
                        </p>
                      </div>

                      <div className="hidden rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-semibold text-white/80 sm:block">
                        {t.portfolio.viewMore}
                      </div>
                    </div>
                  </div>
                </button>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  {item.gallery.map((_, imageIndex) => {
                    const isActive = imageIndex === currentTattooIndex;

                    return (
                      <button
                        key={`${item.id}-indicator-${imageIndex}`}
                        type="button"
                        onClick={() => {
                          setTattooVisible(false);
                          window.setTimeout(() => {
                            setCurrentTattooIndex(imageIndex);
                            setTattooVisible(true);
                          }, 180);
                        }}
                        aria-label={`${t.gallery.imageCounter} ${imageIndex + 1}`}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          isActive ? "w-10 bg-yellow-400" : "w-2.5 bg-white/25 hover:bg-white/45"
                        }`}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat, index) => (
              <div
                key={`${stat.value}-${index}`}
                className="group min-h-[150px] rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 transition duration-300 hover:border-white/30 hover:from-white/[0.12]"
              >
                <div className="text-4xl font-bold text-white transition group-hover:text-yellow-400">{stat.value}</div>
                <div className="mt-4 text-xs uppercase tracking-[0.22em] text-white/60 transition group-hover:text-white/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="why" className="scroll-mt-24 border-y border-white/10 bg-white/[0.02]" data-animate>
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10">
            <div className="mb-16 text-center" data-animate>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">{t.why.eyebrow}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{t.why.heading}</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.why.items.map((item, index) => (
                <div
                  key={item.title}
                  data-animate
                  data-delay={String(80 + index * 80)}
                  className="group rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:border-white/30 hover:bg-white/[0.08]"
                >
                  <div className="text-4xl transition group-hover:scale-110">{item.icon}</div>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65 transition group-hover:text-white/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 border-b border-white/10 bg-white/[0.02]">
          <div className="mx-auto grid max-w-7xl gap-14 px-6 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10" data-animate>
            <div className="space-y-8 sm:space-y-10">
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-white/45">{t.about.eyebrow}</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{t.about.heading}</h2>
              </div>

              <div className="space-y-6 text-base leading-8 text-white/70">
                <p>{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                {t.about.steps.map((step, index) => (
                  <div key={step} className="rounded-[1.5rem] border border-white/10 bg-zinc-950 p-5">
                    <div className="text-2xl font-semibold">0{index + 1}</div>
                    <div className="mt-2 text-sm text-white/60">{step}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-1">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-zinc-950">
                <img src="/artist2.png" alt="Sergio Rodrigues" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="global" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-24 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-2" data-animate>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">{t.global.eyebrow}</div>
              <h3 className="mt-4 text-2xl font-semibold sm:text-4xl">{t.global.heading}</h3>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/65">{t.global.description}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.global.features.map((feature, index) => (
                <div
                  key={feature}
                  data-animate
                  data-delay={String(80 + index * 70)}
                  className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 text-sm text-white/75"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 bg-zinc-900/70">
          <div className="mx-auto max-w-7xl px-6 py-32 sm:px-8 sm:py-36 lg:px-10">
            <div className="text-center" data-animate>
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">{t.partners.eyebrow}</div>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {t.partners.heading}
              </h2>
            </div>

            <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-3">
              {sponsors.map((sponsor, index) => (
                <a
                  key={sponsor.name}
                  href={sponsor.instagram}
                  target="_blank"
                  rel="noreferrer"
                  data-animate
                  data-delay={String(100 + index * 80)}
                  className="group flex flex-col items-center"
                >
                  <div className="flex h-[280px] w-full items-center justify-center rounded-[2rem] border border-white/10 bg-zinc-800/70 p-8 transition duration-300 group-hover:-translate-y-1 group-hover:border-white/25 group-hover:bg-zinc-800">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-[210px] max-w-[92%] object-contain brightness-0 invert transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-7 text-center">
                    <p className="text-lg font-semibold uppercase tracking-[0.18em] text-white transition duration-300 group-hover:text-yellow-400">
                      {sponsor.name}
                    </p>
                    <div className="mx-auto mt-3 h-[2px] w-8 bg-yellow-400/70 transition-all duration-300 group-hover:w-16" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-10">
          <div className="rounded-[2.25rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-8 sm:p-10" data-animate>
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-white/45">{t.testimonials.eyebrow}</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">{t.testimonials.heading}</h2>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {t.testimonials.items.map((item, index) => (
                <div
                  key={`${item.author}-${index}`}
                  data-animate
                  data-delay={String(80 + index * 80)}
                  className="group rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 transition duration-300 hover:border-white/30 hover:from-white/[0.12]"
                >
                  <div className="mb-4 flex gap-1" aria-label={`${item.rating}/5`}>
                    {Array.from({ length: item.rating }).map((_, starIndex) => (
                      <span key={starIndex} className="text-lg" aria-hidden="true">
                        ⭐
                      </span>
                    ))}
                  </div>
                  <p className="text-lg leading-8 text-white/80 transition group-hover:text-white">“{item.quote}”</p>
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="text-sm font-medium text-white transition group-hover:text-yellow-400">{item.author}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-6 pb-24 sm:px-8 lg:px-10">
          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-zinc-900/60 p-6 sm:grid-cols-3 sm:p-8" data-animate>
            <a
              href="https://wa.me/5511992170591"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-7 w-7 shrink-0">
                <rect x="7" y="2" width="10" height="20" rx="2" />
                <circle cx="12" cy="18" r="1.2" />
              </svg>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-wide text-white/50">{t.contact.phone}</p>
                <p className="truncate text-base font-medium">+55 (11) 9 9217-0591</p>
              </div>
            </a>

            <a
              href="mailto:email@email.com"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="h-7 w-7 shrink-0">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-wide text-white/50">{t.contact.email}</p>
                <p className="truncate text-base font-medium">sergiorodrigues12@me.com</p>
              </div>
            </a>

            <a
              href="https://www.instagram.com/sergiorodrigues/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition hover:border-white/20 hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.6" stroke="currentColor" className="h-7 w-7 shrink-0">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1.2" />
              </svg>
              <div className="min-w-0">
                <p className="text-sm uppercase tracking-wide text-white/50">{t.contact.instagram}</p>
                <p className="truncate text-base font-medium">@sergiorodrigues</p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <div className="grid place-items-center gap-16 text-center md:grid-cols-2">
            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
                🇧🇷 Tattoo Inc Shop Studio
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rua+Augusto+Frederico+Schimidt+25+São+Bernardo+do+Campo+Brazil+09732540"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <span aria-hidden="true">⌖</span>
                Rua Augusto Frederico Schimidt, 25 — São Bernardo do Campo, SP
              </a>
              <p className="text-sm text-white/50">{t.footer.ownerStudio}</p>
              <a
                href="https://www.instagram.com/tattooincshopstudio/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-yellow-400 transition hover:text-yellow-300"
              >
                → {t.footer.visitInstagram}
              </a>
            </div>

            <div className="flex flex-col items-center space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-[0.28em] text-white/90">
                🇺🇸 West Side Tattoo
              </h3>
              <a
                href="https://www.google.com/maps/search/?api=1&query=2031+W+Colorado+Ave+Colorado+Springs+Colorado+80904"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-sm text-white/70 transition hover:text-white"
              >
                <span aria-hidden="true">⌖</span>
                2031 W Colorado Ave — Colorado Springs, CO
              </a>
              <p className="text-sm text-white/50">{t.footer.guestStudio}</p>
              <a
                href="https://www.instagram.com/westsidetattoo719/"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-yellow-400 transition hover:text-yellow-300"
              >
                → {t.footer.visitInstagram}
              </a>
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/50">© 2026 Sergio Rodrigues. {t.footer.rights}</p>
            <p className="mt-2 text-xs text-white/40">{t.footer.since}</p>
          </div>
        </div>
      </footer>

      <GalleryModal />
    </div>
  );
}
