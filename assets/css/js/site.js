(function () {
  "use strict";

  const pages = {
    home: { file: "index.html" },
    about: { file: "about.html" },
    brand: { file: "brand.html" },
    media: { file: "media.html" },
    press: { file: "in-the-press.html" },
    contact: { file: "contact.html" },
  };

  const silenceProducts = [
    { image: "assets/img/brands/silence-products/1bundle.webp", href: "https://www.thesilencecollection.com/products/the-velvet-collection-5-piece-lipstick-set", name: "Velvet Collection Bundle", accent: "#d1a441" },
    { image: "assets/img/brands/silence-products/2canada.webp", href: "https://www.thesilencecollection.com/products/canada-velvet-matte-lipstick", name: "Canada", accent: "#ee3e83" },
    { image: "assets/img/brands/silence-products/3madrid.webp", href: "https://www.thesilencecollection.com/products/madrid-velvet-matte-lipstick", name: "Madrid", accent: "#c04458" },
    { image: "assets/img/brands/silence-products/4praga.webp", href: "https://www.thesilencecollection.com/products/prega", name: "Praga", accent: "#a9232d" },
    { image: "assets/img/brands/silence-products/5washingtoon.webp", href: "https://www.thesilencecollection.com/products/washington-velvet-matte-lipstick", name: "Washington", accent: "#c97858" },
    { image: "assets/img/brands/silence-products/6marilyn.webp", href: "https://www.thesilencecollection.com/products/marilyn-velvet-matte-lipstick", name: "Marilyn", accent: "#da4775" },
  ];

  const gfyProducts = [
    { image: "assets/img/brands/goforyou-products/2gfy.webp", href: "https://www.goforyou.store/products/day-formula", key: "day", accent: "#a8c80b" },
    { image: "assets/img/brands/goforyou-products/3gfy.webp", href: "https://www.goforyou.store/products/cleanser-detox", key: "cleanse", accent: "#dc8615" },
    { image: "assets/img/brands/goforyou-products/4gfy.webp", href: "https://www.goforyou.store/products/night-formula", key: "night", accent: "#079fd5" },
    { image: "assets/img/brands/goforyou-products/5gfy.webp", href: "https://www.goforyou.store/products/creatina-monohidrate", key: "creatine", accent: "#d99117" },
  ];

  const copy = {
    en: {
      announcement: "Puerto Rican media personality. Entrepreneur. Storyteller.",
      nav: { home: "Home", about: "About", brand: "Brand", media: "Media", press: "In the Press", contact: "Contact" },
      pages: {
        home: {
          title: "Beauty in your voice.",
          subtitle: "Power in your story.",
          primary: "Explore the brands",
          primaryLink: "brand.html",
          ticker: ["Puerto Rican Roots", "Caribbean Heart", "Bold Purpose"],
          duality: ["Two expressions.", "One woman."],
          panelsLabel: "Shalimar Rivera brands",
          panels: [
            ["assets/img/homepage/silence-english/SILENCE-THUMBNAIL-English.jpg", "Silence Collection — Color with a story.", "Shop now", "https://www.thesilencecollection.com"],
            ["assets/img/homepage/go-for-you-english/GO-FOR-YOU.jpg", "Go For You — Nutrition and supplements.", "Shop now", "https://www.goforyou.store"],
          ],
          story: {
            title: ["Never just", "one thing."],
            body: "I've spent my life using my voice to connect, to uplift, and to create impact. These two brands are extensions of that mission—born from my experiences, my heritage, and my belief that women can be soft and strong, creative and driven.",
            statement: "This is who I am. This is what I build.",
            cta: "Read my story",
            alt: "Shalimar Rivera seated beside a window in a black-and-white portrait.",
          },
        },
        about: {
          eyebrow: "About",
          title: "Puerto Rican roots. Global perspective.",
          lead: "A dedicated space for Shalimar's official biography, journey, values, and the experiences that shaped her voice.",
          section: "The story behind the voice",
          body: "Replace this starter copy with Shalimar's approved biography. The layout is designed for a concise introduction followed by longer editorial storytelling.",
        },
        brand: {
          eyebrow: "Brand",
          title: "Partnerships with meaning.",
          lead: "A home for collaborations, campaigns, ventures, and brand stories aligned with Shalimar's audience and values.",
          section: "Built on trust and connection",
          body: "Add approved brand partnerships, case studies, products, and campaign results here.",
          carouselLabel: "Featured brands",
          previousSlide: "Previous brand image",
          nextSlide: "Next brand image",
          slideLabel: "Go to slide",
          slides: [
            "Silence Collection and Go For You products",
            "Silence Collection fashion campaign",
            "Go For You fitness products",
          ],
          intro: {
            eyebrow: "The brands",
            firstLine: "Two visions.",
            secondLine: "Built with purpose.",
          },
          silence: {
            label: "Silence Collection",
            subline: "Color with a story.",
            explore: "Explore Silence",
            carouselLabel: "Silence Collection products",
            previous: "Previous Silence product",
            next: "Next Silence product",
            slideLabel: "Go to Silence product",
            shop: "Shop",
            slogan: ["Be seen. Be heard.", "Be Silence."],
          },
          gfy: {
            label: "Go For You",
            subline: "Built for your goals. Powered by you.",
            explore: "Explore Go For You",
            bundleEyebrow: "The Slim System",
            bundleTitle: "Day · Cleanse · Night",
            bundleCopy: "A complete three-part system designed to support your goals from morning through night.",
            bundleShop: "Shop the system",
            formulaTitle: "Choose your formula",
            products: { day: "Slim Day Formula", cleanse: "Slim Cleanse", night: "Slim Night Formula", creatine: "Creatine" },
            shop: "Shop",
            carouselLabel: "Go For You formulas",
            previous: "Previous Go For You formula",
            next: "Next Go For You formula",
            slideLabel: "Go to Go For You formula",
            techEyebrow: "Go For You Technology",
            techTitle: "Recovery meets performance.",
            techCopy: "Advanced percussion therapy to relieve tension, improve circulation, and accelerate recovery. Designed to keep you moving at your best.",
            techCta: "Discover the device",
          },
        },
        media: {
          eyebrow: "Media",
          title: "Stories that move people.",
          lead: "Explore selected television, podcast, event, and digital appearances.",
          section: "Featured media",
          body: "Add video embeds, podcast links, speaking clips, and downloadable media assets here.",
        },
        press: {
          eyebrow: "In the Press",
          title: "Coverage and conversation.",
          lead: "Selected articles, profiles, interviews, and news featuring Shalimar Rivera.",
          section: "Latest coverage",
          body: "Add publication logos, article titles, dates, short excerpts, and links to the original coverage here.",
        },
        contact: {
          eyebrow: "Contact",
          title: "Let's create something memorable.",
          lead: "For media, speaking, partnerships, and other professional inquiries.",
          emailLabel: "General inquiries",
          email: "hello@shalimarrivera.com",
          form: { name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send inquiry", notice: "Thank you. Connect this form to your server-side email handler before launch." },
        },
      },
      footer: "Official website of Shalimar Rivera.",
      rights: "All rights reserved.",
    },
    es: {
      announcement: "Personalidad de medios puertorriqueña. Emprendedora. Narradora.",
      nav: { home: "Inicio", about: "Acerca de", brand: "Marca", media: "Medios", press: "En la Prensa", contact: "Contacto" },
      pages: {
        home: {
          title: "Belleza en tu voz.",
          subtitle: "Poder en tu historia.",
          primary: "Explora las marcas",
          primaryLink: "brand.html",
          ticker: ["Raíces Puertorriqueñas", "Corazón Caribeño", "Propósito Audaz"],
          duality: ["Dos expresiones.", "Una mujer."],
          panelsLabel: "Marcas de Shalimar Rivera",
          panels: [
            ["assets/img/homepage/silence-spanish/SILENCE-THUMBNAIL-Spanish.jpg", "Silence Collection — Color con historia.", "Compra ahora", "https://www.thesilencecollection.com"],
            ["assets/img/homepage/go-for-you-spanish/GoForYou-Thumbnail-Spanish.jpg", "Go For You — Nutrición y suplementos.", "Compra ahora", "https://www.goforyou.store"],
          ],
          story: {
            title: ["Nunca he sido", "una sola cosa."],
            body: "He pasado mi vida usando mi voz para conectar, inspirar y generar impacto. Estas dos marcas son extensiones de esa misión: nacen de mis experiencias, mis raíces y mi convicción de que podemos ser sensibles y fuertes, creativas y determinadas.",
            statement: "Esto es quien soy. Esto es lo que construyo.",
            cta: "Conoce mi historia",
            alt: "Retrato en blanco y negro de Shalimar Rivera sentada junto a una ventana.",
          },
        },
        about: {
          eyebrow: "Acerca de",
          title: "Raíces puertorriqueñas. Perspectiva global.",
          lead: "Un espacio dedicado a la biografía oficial de Shalimar, su trayectoria, sus valores y las experiencias que formaron su voz.",
          section: "La historia detrás de la voz",
          body: "Reemplaza este texto inicial con la biografía aprobada de Shalimar. El diseño está preparado para una introducción breve seguida de una historia editorial más amplia.",
        },
        brand: {
          eyebrow: "Marca",
          title: "Alianzas con significado.",
          lead: "Un hogar para colaboraciones, campañas, proyectos e historias de marca alineadas con la audiencia y los valores de Shalimar.",
          section: "Creado con confianza y conexión",
          body: "Agrega aquí alianzas aprobadas, casos de estudio, productos y resultados de campañas.",
          carouselLabel: "Marcas destacadas",
          previousSlide: "Imagen anterior de la marca",
          nextSlide: "Siguiente imagen de la marca",
          slideLabel: "Ir a la diapositiva",
          slides: [
            "Productos de Silence Collection y Go For You",
            "Campaña de moda de Silence Collection",
            "Productos de bienestar de Go For You",
          ],
          intro: {
            eyebrow: "Las marcas",
            firstLine: "Dos visiones.",
            secondLine: "Creadas con propósito.",
          },
          silence: {
            label: "Silence Collection",
            subline: "Color con historia.",
            explore: "Explora Silence",
            carouselLabel: "Productos de Silence Collection",
            previous: "Producto anterior de Silence",
            next: "Siguiente producto de Silence",
            slideLabel: "Ir al producto de Silence",
            shop: "Comprar",
            slogan: ["Be seen. Be heard.", "Be Silence."],
          },
          gfy: {
            label: "Go For You",
            subline: "Creado para tus metas. Impulsado por ti.",
            explore: "Explora Go For You",
            bundleEyebrow: "El sistema Slim",
            bundleTitle: "Día · Limpieza · Noche",
            bundleCopy: "Un sistema completo de tres partes diseñado para apoyar tus metas desde la mañana hasta la noche.",
            bundleShop: "Compra el sistema",
            formulaTitle: "Elige tu fórmula",
            products: { day: "Fórmula Slim Día", cleanse: "Slim Limpieza", night: "Fórmula Slim Noche", creatine: "Creatina" },
            shop: "Comprar",
            carouselLabel: "Fórmulas de Go For You",
            previous: "Fórmula anterior de Go For You",
            next: "Siguiente fórmula de Go For You",
            slideLabel: "Ir a la fórmula de Go For You",
            techEyebrow: "Tecnología Go For You",
            techTitle: "La recuperación se une al rendimiento.",
            techCopy: "Terapia de percusión avanzada para aliviar la tensión, mejorar la circulación y acelerar la recuperación. Diseñada para mantenerte en movimiento y dar lo mejor de ti.",
            techCta: "Descubre el dispositivo",
          },
        },
        media: {
          eyebrow: "Medios",
          title: "Historias que inspiran.",
          lead: "Explora apariciones seleccionadas en televisión, pódcast, eventos y plataformas digitales.",
          section: "Medios destacados",
          body: "Agrega aquí videos, pódcast, conferencias y recursos descargables.",
        },
        press: {
          eyebrow: "En la Prensa",
          title: "Cobertura y conversación.",
          lead: "Artículos, perfiles, entrevistas y noticias seleccionadas sobre Shalimar Rivera.",
          section: "Cobertura reciente",
          body: "Agrega logotipos, títulos, fechas, resúmenes breves y enlaces a la cobertura original.",
        },
        contact: {
          eyebrow: "Contacto",
          title: "Creemos algo memorable.",
          lead: "Para medios, conferencias, alianzas y otras consultas profesionales.",
          emailLabel: "Consultas generales",
          email: "hello@shalimarrivera.com",
          form: { name: "Nombre", email: "Correo electrónico", subject: "Asunto", message: "Mensaje", send: "Enviar consulta", notice: "Gracias. Conecta este formulario al sistema de correo del servidor antes del lanzamiento." },
        },
      },
      footer: "Sitio oficial de Shalimar Rivera.",
      rights: "Todos los derechos reservados.",
    },
  };

  let lang = localStorage.getItem("shalimar-language") === "es" ? "es" : "en";
  const page = document.body.dataset.page || "home";
  let storyObserver;
  let brandCarouselTimer;
  let silenceCarouselTimer;
  let gfyCarouselTimer;

  function navLinks(mobile) {
    return Object.keys(pages)
      .map((key) => `<a class="nav-link" href="${pages[key].file}"${key === page ? ' aria-current="page"' : ""}${mobile ? " data-mobile-link" : ""}>${copy[lang].nav[key]}</a>`)
      .join("");
  }

  function renderChrome() {
    const t = copy[lang];
    document.documentElement.lang = lang;
    document.getElementById("site-chrome").innerHTML = `<div class="announcement" role="note">${t.announcement}</div><header class="site-header"><div class="header-inner"><a class="wordmark" href="index.html" aria-label="Shalimar Rivera home">SHALIMAR RIVERA</a><nav class="desktop-nav" aria-label="Primary navigation">${navLinks(false)}</nav><div class="header-actions"><div class="language-toggle" aria-label="Language"><button type="button" data-lang="en" aria-pressed="${lang === "en"}">EN</button><button type="button" data-lang="es" aria-pressed="${lang === "es"}">ES</button></div><button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span></button></div></div><nav id="mobile-nav" class="mobile-nav" data-open="false" aria-label="Mobile navigation"><div class="mobile-nav-inner"><div class="mobile-nav-links">${navLinks(true)}</div></div></nav></header>`;
    bindChrome();
  }

  function waveText(text, offset) {
    return Array.from(text).map((character, index) => {
      const step = index + offset;
      const x = ((step % 5) - 2) * 4;
      const y = ((step % 4) - 1.5) * 5;
      const content = character === " " ? "&nbsp;" : character;
      return `<span class="hero-char${character === " " ? " hero-char-space" : ""}" aria-hidden="true" style="--i:${step};--particle-x:${x}px;--particle-y:${y}px">${content}</span>`;
    }).join("");
  }

  function wavePhrase(text, offset) {
    const words = text.split(" ");
    const rows = [words.slice(0, 2).join(" "), words.slice(2).join(" ")];
    let step = offset;
    return rows.map((row) => {
      const animatedRow = waveText(row, step);
      step += Array.from(row).length + 2;
      return `<span class="hero-copy-row">${animatedRow}</span>`;
    }).join("");
  }

  function storyWords(text) {
    return text.split(/\s+/).map((word, index) => `<span class="story-word" style="--word-i:${index}">${word}</span>`).join(" ");
  }

  function homeMarkup(p) {
    const secondLineOffset = Array.from(p.title).length + 5;
    const tickerItems = Array.from({ length: 4 }, () => p.ticker).flat();
    const tickerGroup = tickerItems.map((item) => `<span class="broadcast-item">${item}</span><span class="broadcast-dot">•</span>`).join("");
    const panels = p.panels.map(([src, alt, cta, href]) => `<article class="brand-panel"><img src="${src}" alt="${alt}" width="1200" height="1200" loading="lazy" decoding="async"><a class="hero-cta brand-panel-cta" href="${href}" target="_blank" rel="noopener noreferrer"><span>${cta}</span></a></article>`).join("");
    return `<section class="hero" aria-labelledby="home-hero-title"><div class="hero-content"><h1 class="hero-message" id="home-hero-title" aria-label="${p.title} ${p.subtitle}"><span class="hero-line hero-line-light">${wavePhrase(p.title, 0)}</span><span class="hero-line hero-line-gold">${wavePhrase(p.subtitle, secondLineOffset)}</span></h1><a class="hero-cta" href="${p.primaryLink}">${p.primary}</a></div></section><aside class="broadcast-ticker" aria-label="${p.ticker.join(" • ")}"><div class="broadcast-track" aria-hidden="true"><div class="broadcast-group">${tickerGroup}</div><div class="broadcast-group">${tickerGroup}</div></div></aside><section class="duality-intro" aria-labelledby="duality-title"><h2 class="duality-title" id="duality-title"><span class="duality-light">${p.duality[0]}</span><span class="duality-gold">${p.duality[1]}</span></h2></section><section class="brand-panels" aria-label="${p.panelsLabel}"><div class="brand-panels-grid">${panels}</div></section><section class="my-story" aria-labelledby="my-story-title"><div class="my-story-grid"><figure class="my-story-visual"><img src="assets/img/homepage/my-story/exec-83335074-8363-4398-a0d6-e819d23c8a65.png" alt="${p.story.alt}" width="1448" height="1086" loading="lazy" decoding="async"></figure><div class="my-story-content"><h2 class="my-story-title" id="my-story-title"><span>${p.story.title[0]}</span><span>${p.story.title[1]}</span></h2><p class="my-story-copy">${storyWords(p.story.body)}</p><p class="my-story-statement">${storyWords(p.story.statement)}</p><div class="my-story-footer"><p class="my-story-signature" aria-label="Shalimar Rivera">Shalimar Rivera <span aria-hidden="true">♥</span></p><a class="hero-cta my-story-cta" href="about.html">${p.story.cta}</a></div></div></div></section>`;
  }

  function contactMarkup(p) {
    return `<section class="page-hero"><div class="page-hero-content"><p class="eyebrow">${p.eyebrow}</p><h1 class="display">${p.title}</h1><p class="lead">${p.lead}</p></div></section><section class="content-section contact-grid"><div class="contact-list"><div><span class="contact-label">${p.emailLabel}</span><a href="mailto:${p.email}">${p.email}</a></div></div><form class="contact-form" data-contact-form><div class="field"><label for="name">${p.form.name}</label><input id="name" name="name" autocomplete="name" required></div><div class="field"><label for="email">${p.form.email}</label><input id="email" name="email" type="email" autocomplete="email" required></div><div class="field"><label for="subject">${p.form.subject}</label><input id="subject" name="subject" required></div><div class="field"><label for="message">${p.form.message}</label><textarea id="message" name="message" required></textarea></div><button class="button" type="submit">${p.form.send}</button><p class="section-copy" data-form-status hidden>${p.form.notice}</p></form></section>`;
  }

  function standardMarkup(p) {
    return `<section class="page-hero"><div class="page-hero-content"><p class="eyebrow">${p.eyebrow}</p><h1 class="display">${p.title}</h1><p class="lead">${p.lead}</p></div></section><section class="content-section"><h2 class="section-title">${p.section}</h2><p class="section-copy">${p.body}</p></section>`;
  }

  function brandMarkup(p) {
    const desktop = [
      "assets/img/brands/hero/Desktop/desktop-brands-hero-1.webp",
      "assets/img/brands/hero/Desktop/desktop-brand-hero-2-silence.webp",
      "assets/img/brands/hero/Desktop/desktop-brand-hero-3-goforyou.webp",
    ];
    const mobile = [
      "assets/img/brands/hero/Mobile/Mobile-brands-hero-1.webp",
      "assets/img/brands/hero/Mobile/mobile-brand-hero-2-silence.webp",
      "assets/img/brands/hero/Mobile/mobile-brand-hero-3-goforyou.webp",
    ];
    const slides = desktop.map((src, index) => `<div class="brand-carousel-slide${index === 0 ? " is-active" : ""}" data-brand-slide aria-hidden="${index !== 0}"><picture><source media="(max-width: 640px)" srcset="${mobile[index]}"><img src="${src}" alt="${p.slides[index]}" width="1920" height="1080"${index === 0 ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></picture></div>`).join("");
    const dots = p.slides.map((_, index) => `<button class="brand-carousel-dot${index === 0 ? " is-active" : ""}" type="button" data-brand-dot="${index}" aria-label="${p.slideLabel} ${index + 1}" aria-current="${index === 0 ? "true" : "false"}"><span></span></button>`).join("");
    const silenceCards = silenceProducts.map((product, index) => `<article class="silence-product-card${index === 0 ? " is-active" : " is-after"}" data-silence-card style="--product-accent:${product.accent};--tilt-x:0deg;--tilt-y:0deg"><img src="${product.image}" alt="${product.name} Velvet Collection lipstick" width="1600" height="2000" loading="lazy" decoding="async"><div class="silence-card-footer"><a class="hero-cta silence-product-cta" href="${product.href}" target="_blank" rel="noopener noreferrer"><span>${p.silence.shop} ${product.name}</span></a></div></article>`).join("");
    const silenceDots = silenceProducts.map((product, index) => `<button class="silence-carousel-dot${index === 0 ? " is-active" : ""}" type="button" data-silence-dot="${index}" aria-label="${p.silence.slideLabel} ${index + 1}: ${product.name}" aria-current="${index === 0 ? "true" : "false"}"><span></span></button>`).join("");
    const gfyCards = gfyProducts.map((product, index) => {
      const name = p.gfy.products[product.key];
      return `<article class="gfy-product-card${index === 0 ? " is-active" : " is-after"}" data-gfy-card style="--product-accent:${product.accent};--tilt-x:0deg;--tilt-y:0deg"><img src="${product.image}" alt="${name}" width="1600" height="2000" loading="lazy" decoding="async"><div class="gfy-card-footer"><a class="hero-cta gfy-product-cta" href="${product.href}" target="_blank" rel="noopener noreferrer"><span>${p.gfy.shop} ${name}</span></a></div></article>`;
    }).join("");
    const gfyDots = gfyProducts.map((product, index) => `<button class="gfy-carousel-dot${index === 0 ? " is-active" : ""}" type="button" data-gfy-dot="${index}" aria-label="${p.gfy.slideLabel} ${index + 1}: ${p.gfy.products[product.key]}" aria-current="${index === 0 ? "true" : "false"}"><span></span></button>`).join("");
    const brandAndSilenceMarkup = `<section class="brand-hero-carousel" data-brand-carousel aria-roledescription="carousel" aria-label="${p.carouselLabel}" tabindex="0"><div class="brand-carousel-track">${slides}</div><button class="brand-carousel-arrow brand-carousel-arrow-prev" type="button" data-brand-prev aria-label="${p.previousSlide}"><span aria-hidden="true">‹</span></button><button class="brand-carousel-arrow brand-carousel-arrow-next" type="button" data-brand-next aria-label="${p.nextSlide}"><span aria-hidden="true">›</span></button><div class="brand-carousel-dots">${dots}</div><p class="sr-only" aria-live="polite" data-brand-status>${p.slides[0]}, 1 of ${p.slides.length}</p></section><section class="brand-intro" aria-labelledby="brand-intro-title"><div class="brand-intro-inner"><p class="brand-intro-eyebrow"><span>${p.intro.eyebrow}</span></p><h1 class="brand-intro-title" id="brand-intro-title"><span>${p.intro.firstLine}</span><span>${p.intro.secondLine}</span></h1></div></section><section class="silence-showcase" aria-labelledby="silence-showcase-title"><div class="silence-showcase-shell"><header class="silence-showcase-header"><div class="silence-wordmark"><img src="assets/img/brands/silence logo/LOGO-GOLD-SILENCE.svg" alt="${p.silence.label}"></div><p class="silence-subline">${p.silence.subline}</p><a class="hero-cta silence-explore-cta" href="https://www.thesilencecollection.com" target="_blank" rel="noopener noreferrer">${p.silence.explore}</a></header><div class="silence-carousel" data-silence-carousel aria-roledescription="carousel" aria-label="${p.silence.carouselLabel}" tabindex="0"><div class="silence-product-track" data-silence-track>${silenceCards}</div><button class="silence-carousel-arrow silence-carousel-prev" type="button" data-silence-prev aria-label="${p.silence.previous}"><span aria-hidden="true">‹</span></button><button class="silence-carousel-arrow silence-carousel-next" type="button" data-silence-next aria-label="${p.silence.next}"><span aria-hidden="true">›</span></button><div class="silence-carousel-dots">${silenceDots}</div><p class="sr-only" aria-live="polite" data-silence-status>${silenceProducts[0].name}, 1 of ${silenceProducts.length}</p></div><footer class="silence-showcase-footer"><h2 class="silence-slogan" id="silence-showcase-title"><span>${p.silence.slogan[0]}</span><span>${p.silence.slogan[1]}</span></h2><div class="silence-s-mark" aria-hidden="true"><img src="assets/img/brands/silence logo/LOGO-GOLD-S.svg" alt=""></div></footer></div></section>`;
    const gfyMarkup = `<section class="gfy-showcase" aria-labelledby="gfy-showcase-title"><div class="gfy-showcase-shell"><header class="gfy-showcase-header"><h2 class="gfy-wordmark" id="gfy-showcase-title">GO FOR <span>YOU!</span></h2><p class="gfy-subline">${p.gfy.subline}</p><a class="hero-cta gfy-explore-cta" href="https://www.goforyou.store" target="_blank" rel="noopener noreferrer">${p.gfy.explore}</a></header><article class="gfy-bundle-card"><div class="gfy-bundle-media"><img src="assets/img/brands/goforyou-products/1gfy.webp" alt="${p.gfy.bundleTitle}" width="1600" height="2000" loading="lazy" decoding="async"></div><div class="gfy-bundle-copy"><p class="gfy-eyebrow">${p.gfy.bundleEyebrow}</p><h3>${p.gfy.bundleTitle}</h3><p>${p.gfy.bundleCopy}</p><a class="hero-cta gfy-bundle-cta" href="https://www.goforyou.store/products/kit" target="_blank" rel="noopener noreferrer">${p.gfy.bundleShop}</a></div></article><div class="gfy-formula-heading"><span></span><h3>${p.gfy.formulaTitle}</h3><span></span></div><div class="gfy-carousel" data-gfy-carousel aria-roledescription="carousel" aria-label="${p.gfy.carouselLabel}" tabindex="0"><div class="gfy-product-track" data-gfy-track>${gfyCards}</div><button class="gfy-carousel-arrow gfy-carousel-prev" type="button" data-gfy-prev aria-label="${p.gfy.previous}"><span aria-hidden="true">‹</span></button><button class="gfy-carousel-arrow gfy-carousel-next" type="button" data-gfy-next aria-label="${p.gfy.next}"><span aria-hidden="true">›</span></button><div class="gfy-carousel-dots">${gfyDots}</div><p class="sr-only" aria-live="polite" data-gfy-status>${p.gfy.products[gfyProducts[0].key]}, 1 of ${gfyProducts.length}</p></div><article class="gfy-tech"><div class="gfy-tech-media"><img src="assets/img/brands/goforyou-products/6gfy.webp" alt="${p.gfy.techTitle}" width="1600" height="2000" loading="lazy" decoding="async"></div><div class="gfy-tech-copy"><p class="gfy-eyebrow">${p.gfy.techEyebrow}</p><h3>${p.gfy.techTitle}</h3><p>${p.gfy.techCopy}</p><a class="hero-cta gfy-tech-cta" href="https://www.goforyou.store/products/go-for-you-perfect-body" target="_blank" rel="noopener noreferrer">${p.gfy.techCta}</a></div></article></div></section>`;
    return brandAndSilenceMarkup + gfyMarkup;
  }

  function bindSilenceCarousel() {
    clearInterval(silenceCarouselTimer);
    const carousel = document.querySelector("[data-silence-carousel]");
    if (!carousel) return;
    const track = carousel.querySelector("[data-silence-track]");
    const cards = Array.from(carousel.querySelectorAll("[data-silence-card]"));
    const dots = Array.from(carousel.querySelectorAll("[data-silence-dot]"));
    const status = carousel.querySelector("[data-silence-status]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const section = carousel.closest(".silence-showcase");
    let current = 0;
    let scrollTimer;

    section.dataset.animate = "true";
    if (reducedMotion || !("IntersectionObserver" in window)) {
      section.classList.add("is-visible");
    } else {
      const revealObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        section.classList.add("is-visible");
        revealObserver.disconnect();
      }, { threshold: 0.12 });
      revealObserver.observe(section);
    }

    function setActive(index) {
      current = (index + cards.length) % cards.length;
      carousel.style.setProperty("--silence-accent", silenceProducts[current].accent);
      cards.forEach((card, cardIndex) => {
        const delta = cardIndex - current;
        card.classList.toggle("is-active", delta === 0);
        card.classList.toggle("is-before", delta < 0);
        card.classList.toggle("is-after", delta > 0);
        if (delta !== 0) {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        }
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("is-active", active);
        dot.classList.remove("is-progressing");
        if (active && !reducedMotion) window.requestAnimationFrame(() => dot.classList.add("is-progressing"));
        dot.setAttribute("aria-current", String(active));
      });
      status.textContent = `${silenceProducts[current].name}, ${current + 1} of ${cards.length}`;
    }

    function show(index, userInitiated) {
      const next = (index + cards.length) % cards.length;
      const card = cards[next];
      setActive(next);
      track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2, behavior: reducedMotion ? "auto" : "smooth" });
      if (userInitiated) restart();
    }

    function stop() { clearInterval(silenceCarouselTimer); }
    function start() {
      if (reducedMotion || document.hidden) return;
      stop();
      silenceCarouselTimer = window.setInterval(() => show(current + 1, false), 5800);
    }
    function restart() { stop(); start(); }

    carousel.querySelector("[data-silence-prev]").addEventListener("click", () => show(current - 1, true));
    carousel.querySelector("[data-silence-next]").addEventListener("click", () => show(current + 1, true));
    dots.forEach((dot) => dot.addEventListener("click", () => show(Number(dot.dataset.silenceDot), true)));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1, true); }
    });
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        const closest = cards.reduce((best, card, index) => Math.abs(card.offsetLeft + card.clientWidth / 2 - center) < best.distance ? { index, distance: Math.abs(card.offsetLeft + card.clientWidth / 2 - center) } : best, { index: 0, distance: Infinity });
        setActive(closest.index);
      }, 90);
    }, { passive: true });
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
    track.addEventListener("pointerdown", stop);
    track.addEventListener("pointerup", restart);
    carousel.addEventListener("pointermove", (event) => {
      if (reducedMotion || event.pointerType !== "mouse") return;
      const activeCard = cards[current];
      const rect = activeCard.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      activeCard.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      activeCard.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    });
    carousel.addEventListener("pointerleave", () => {
      cards[current].style.setProperty("--tilt-x", "0deg");
      cards[current].style.setProperty("--tilt-y", "0deg");
    });
    setActive(0);
    start();
  }

  function bindGfyCarousel() {
    clearInterval(gfyCarouselTimer);
    const carousel = document.querySelector("[data-gfy-carousel]");
    if (!carousel) return;
    const track = carousel.querySelector("[data-gfy-track]");
    const cards = Array.from(carousel.querySelectorAll("[data-gfy-card]"));
    const dots = Array.from(carousel.querySelectorAll("[data-gfy-dot]"));
    const status = carousel.querySelector("[data-gfy-status]");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const p = copy[lang].pages.brand.gfy;
    let current = 0;
    let scrollTimer;

    function setActive(index) {
      current = (index + cards.length) % cards.length;
      carousel.style.setProperty("--gfy-accent", gfyProducts[current].accent);
      cards.forEach((card, cardIndex) => {
        const delta = cardIndex - current;
        card.classList.toggle("is-active", delta === 0);
        card.classList.toggle("is-before", delta < 0);
        card.classList.toggle("is-after", delta > 0);
        if (delta !== 0) {
          card.style.setProperty("--tilt-x", "0deg");
          card.style.setProperty("--tilt-y", "0deg");
        }
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("is-active", active);
        dot.classList.remove("is-progressing");
        if (active && !reducedMotion) window.requestAnimationFrame(() => dot.classList.add("is-progressing"));
        dot.setAttribute("aria-current", String(active));
      });
      status.textContent = `${p.products[gfyProducts[current].key]}, ${current + 1} of ${cards.length}`;
    }

    function show(index, userInitiated) {
      const next = (index + cards.length) % cards.length;
      setActive(next);
      const card = cards[next];
      track.scrollTo({ left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2, behavior: reducedMotion ? "auto" : "smooth" });
      if (userInitiated) restart();
    }
    function stop() { clearInterval(gfyCarouselTimer); }
    function start() {
      if (reducedMotion || document.hidden) return;
      stop();
      gfyCarouselTimer = window.setInterval(() => show(current + 1, false), 5800);
    }
    function restart() { stop(); start(); }

    carousel.querySelector("[data-gfy-prev]").addEventListener("click", () => show(current - 1, true));
    carousel.querySelector("[data-gfy-next]").addEventListener("click", () => show(current + 1, true));
    dots.forEach((dot) => dot.addEventListener("click", () => show(Number(dot.dataset.gfyDot), true)));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1, true); }
    });
    track.addEventListener("scroll", () => {
      clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        const closest = cards.reduce((best, card, index) => {
          const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - center);
          return distance < best.distance ? { index, distance } : best;
        }, { index: 0, distance: Infinity });
        setActive(closest.index);
      }, 90);
    }, { passive: true });
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
    track.addEventListener("pointerdown", stop);
    track.addEventListener("pointerup", restart);
    carousel.addEventListener("pointermove", (event) => {
      if (reducedMotion || event.pointerType !== "mouse") return;
      const card = cards[current];
      const rect = card.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) return;
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.setProperty("--tilt-x", `${(-y * 5).toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${(x * 7).toFixed(2)}deg`);
    });
    carousel.addEventListener("pointerleave", () => {
      cards[current].style.setProperty("--tilt-x", "0deg");
      cards[current].style.setProperty("--tilt-y", "0deg");
    });
    setActive(0);
    start();
  }

  function bindBrandCarousel() {
    clearInterval(brandCarouselTimer);
    const carousel = document.querySelector("[data-brand-carousel]");
    if (!carousel) return;
    const slides = Array.from(carousel.querySelectorAll("[data-brand-slide]"));
    const dots = Array.from(carousel.querySelectorAll("[data-brand-dot]"));
    const status = carousel.querySelector("[data-brand-status]");
    const p = copy[lang].pages.brand;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let current = 0;
    let pointerStart = null;

    function show(index, userInitiated) {
      current = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === current;
        slide.classList.toggle("is-active", active);
        slide.setAttribute("aria-hidden", String(!active));
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === current;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", String(active));
      });
      status.textContent = `${p.slides[current]}, ${current + 1} of ${slides.length}`;
      if (userInitiated) restart();
    }

    function stop() {
      clearInterval(brandCarouselTimer);
    }

    function start() {
      if (reducedMotion || document.hidden) return;
      stop();
      brandCarouselTimer = window.setInterval(() => show(current + 1, false), 6500);
    }

    function restart() {
      stop();
      start();
    }

    carousel.querySelector("[data-brand-prev]").addEventListener("click", () => show(current - 1, true));
    carousel.querySelector("[data-brand-next]").addEventListener("click", () => show(current + 1, true));
    dots.forEach((dot) => dot.addEventListener("click", () => show(Number(dot.dataset.brandDot), true)));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") { event.preventDefault(); show(current - 1, true); }
      if (event.key === "ArrowRight") { event.preventDefault(); show(current + 1, true); }
    });
    carousel.addEventListener("pointerdown", (event) => { pointerStart = event.clientX; });
    carousel.addEventListener("pointerup", (event) => {
      if (pointerStart === null) return;
      const distance = event.clientX - pointerStart;
      pointerStart = null;
      if (Math.abs(distance) > 45) show(current + (distance < 0 ? 1 : -1), true);
    });
    carousel.addEventListener("pointercancel", () => { pointerStart = null; });
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => { if (!carousel.contains(event.relatedTarget)) start(); });
    document.addEventListener("visibilitychange", () => document.hidden ? stop() : start(), { once: true });
    start();
  }

  function bindStoryAnimation() {
    if (storyObserver) storyObserver.disconnect();
    const section = document.querySelector(".my-story");
    if (!section) return;
    section.dataset.animate = "true";
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      section.dataset.visible = "true";
      return;
    }
    storyObserver = new IntersectionObserver((entries) => {
      if (!entries[0].isIntersecting) return;
      section.dataset.visible = "true";
      storyObserver.disconnect();
    }, { threshold: 0.22 });
    storyObserver.observe(section);
  }

  function renderPage() {
    const p = copy[lang].pages[page];
    document.getElementById("main").innerHTML = page === "home" ? homeMarkup(p) : page === "brand" ? brandMarkup(p) : page === "contact" ? contactMarkup(p) : standardMarkup(p);
    const year = new Date().getFullYear();
    document.getElementById("site-footer").innerHTML = `<footer class="site-footer"><div class="footer-inner"><span>${copy[lang].footer}</span><span>© ${year} Shalimar Rivera. ${copy[lang].rights}</span></div></footer>`;
    const form = document.querySelector("[data-contact-form]");
    if (form) form.addEventListener("submit", (event) => { event.preventDefault(); form.querySelector("[data-form-status]").hidden = false; });
    bindStoryAnimation();
    bindBrandCarousel();
    bindSilenceCarousel();
    bindGfyCarousel();
  }

  function bindChrome() {
    document.querySelectorAll("[data-lang]").forEach((button) => button.addEventListener("click", () => {
      lang = button.dataset.lang;
      localStorage.setItem("shalimar-language", lang);
      render();
    }));
    const button = document.querySelector(".menu-button");
    const nav = document.querySelector(".mobile-nav");
    button.addEventListener("click", () => {
      const open = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!open));
      button.setAttribute("aria-label", open ? "Open menu" : "Close menu");
      nav.dataset.open = String(!open);
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") button.click();
    }, { once: true });
  }

  function render() {
    renderChrome();
    renderPage();
  }

  render();
})();
