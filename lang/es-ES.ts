export default {
  app_title: 'SwiftSora - Generador de Videos AI - Crear Videos, Imágenes y Más | SwiftSora',
  seo: {
    ogTitle: 'SwiftSora - Generador de Videos AI - Crear Videos, Imágenes y Más | SwiftSora',
    description:
      "Genera videos e imágenes sin esfuerzo con SwiftSora, un proyecto de código abierto que utiliza el poderoso modelo Sora de OpenAI. Despliegue con un solo clic a Vercel y más. Desarrollado con Nuxt.js, Vue 3 y Tailwind CSS en una configuración de pila completa. Protege tu clave API con el proxy OpenAI incorporado.",
    ogDescription:
      "Genera videos e imágenes sin esfuerzo con SwiftSora, un proyecto de código abierto que utiliza el poderoso modelo Sora de OpenAI. Despliegue con un solo clic a Vercel y más. Desarrollado con Nuxt.js, Vue 3 y Tailwind CSS en una configuración de pila completa. Protege tu clave API con el proxy OpenAI incorporado.",
    keywords: 'AI,OpenAI,Sora,Generación de Videos,SwiftSora',
  },
  error: {
    e404: {
      title: 'Página no encontrada',
      desc: '¡Ups! Parece que seguiste un enlace incorrecto. Si crees que esto es un problema nuestro, por favor avísanos.',
      link: '',
      desc2: '',
    },
    e500: {
      title: 'Algo ha salido muy mal',
      desc: "Siempre es un buen momento para un descanso de café. Deberíamos estar de vuelta para cuando termines tu café.",
      link: '',
      desc2: '',
    },
    e502: {
      title: 'En Mantenimiento',
      desc: 'Disculpa las molestias, pero estamos realizando algunas tareas de mantenimiento en este momento. Si necesitas, siempre puedes ',
      link: 'contactarnos',
      desc2: ', de lo contrario, ¡volveremos en línea en breve!',
    },
    video_not_supported: 'Tu navegador no soporta la etiqueta de video.',
    validation: {
      video_gen: {
        error1: "No proporcionaste un Prompt.",
        error2: "No subiste una Imagen.",
      },
    },
  },
  common: {
    loading: 'Cargando...',
    read_more: 'Leer más',
    go_home: 'Volver a casa',
  },
  // components
  site_nav: {
    tip: 'Abrir menú principal',
    video_gallery: 'Galería de Videos',
    blog: 'Blog',
    gen_video: 'Generar un Video',
  },
  lang_theme: {
    tip: 'Alternar modo oscuro',
  },
  site_footer: {
    intro: "SwiftSora es un proyecto de código abierto que permite a los usuarios generar videos a partir de texto de indicaciones en línea. El proyecto utiliza el modelo Sora de OpenAI para simplificar la creación de videos e incluye una función de despliegue de sitio web con un solo clic.",
    about: 'Acerca de',
    blog: 'Blog',
    faq: 'FAQ',
    docs: 'Documentos',
    contact: 'Contáctanos',
    stay_tuned: '¡Mantente al tanto!',
    discord: 'Discord',
    twitter: 'Twitter',
    github: 'Github',
    youtube: 'Comunidad de YouTube',
    legal: 'Legal',
    license: 'Licencia (Apache 2.0)',
    dmca: 'DMCA',
    legal_notice: 'Política de Privacidad',
    terms: 'Términos de Servicio',
    cookie_policy: 'Política de Cookies',
    rights: 'Todos los derechos reservados.',
  },
  app_nav: {
    tip: 'Abrir menú de usuario',
    settings: 'Configuraciones',
    signout: 'Cerrar sesión',
  },
  app_sidebar: {
    home: 'Inicio',
    community_feed: 'Feed de la Comunidad',
    personal_feed: 'Feed Personal',
    user_tools1: 'Usuario',
    user_tools2: 'Herramientas',
    video_gen: 'Generación de Videos',
    docs: 'Documentos',
    faq: 'FAQ y Ayuda',
  },
  index: {
    title: '',
    intro1: 'Desata tu ',
    intro2: 'creatividad',
    intro3: 'con las capacidades de ',
    sub_intro: 'Produce activos de video de alta calidad para ti con una excelencia inigualable en términos de calidad, velocidad y consistencia estilística.',
    gen_video: 'Generar un Video',
    guide1: {
      title: '¿Qué es Sora?',
      desc: 'Sora es un modelo de IA que puede crear escenas realistas e imaginativas a partir de instrucciones de texto.',
    },
    guide2: {
      title: '¿Qué es SwiftSora?',
      desc: "Un proyecto de código abierto que utiliza el poderoso modelo Sora de OpenAI. Construido con Nuxt.js, Vue 3 y Tailwind CSS en una configuración de pila completa.",
    },
    guide3: {
      title: 'Despliegue Rápido',
      desc: 'Despliegue sin esfuerzo con un solo clic a Vercel, Netlify y otras plataformas.',
    },
    guide4: {
      title: 'Protege tu clave API',
      desc: 'Protege tu clave API con el proxy OpenAI incorporado.',
    },
    toolkit: {
      title1: 'El',
      title2: ' Kit de Herramientas ',
      menu1: {
        title: 'Generación de Videos',
        sub_title: 'Prompt/Video/Imagen a Video',
        desc1:
          "Eleva tu creatividad a nuevas alturas con nuestra herramienta de Generación de Videos e Imágenes, desbloqueando capacidades transformadoras. Va más allá de simplemente dar vida a tus ideas; redefine los límites de lo posible. Ya seas un novato o un experto, proporcionamos una gama de configuraciones intuitivas que pueden personalizarse para satisfacer tus requisitos específicos. Genera videos e imágenes sin esfuerzo utilizando indicaciones de lenguaje natural, señales visuales, texto, voz, imágenes o video.",
        desc2: 'Experimenta una combinación inigualable de simplicidad y poder, meticulosamente diseñada para satisfacer las mentes creativas de todos los niveles de competencia.',
      },
      menu2: {
        title: 'Edición de Videos',
        sub_title: 'Edita tu video con texto de indicaciones',
        desc1: 'Más allá de dar vida a tus visiones, SwiftSora extiende su destreza para redefinir el arte de la manipulación de videos. Edita, organiza y modifica videos sin esfuerzo con controles intuitivos que empoderan tanto a novatos como a profesionales experimentados.',
        desc2:
          'Desde la transmisión sin esfuerzo hasta el intercambio simplificado, nuestra plataforma ofrece una fusión inigualable de simplicidad y poder. Crea narrativas convincentes con la capacidad de mejorar, recortar y transformar tus videos. Organiza sin esfuerzo, modifica con precisión y comparte tus creaciones sin problemas.',
      },
      menu3: {
        title: 'Reconocimiento de Videos',
        sub_title: 'Video a Texto',
        desc1:
          "Desata las capacidades revolucionarias de nuestra herramienta de Generación de Videos e Imágenes, no solo limitadas a la expresión creativa, sino una potencia para el reconocimiento, procesamiento, análisis, comprensión y generación. Diseñada tanto para principiantes como para expertos, esta herramienta trasciende los límites con sus configuraciones intuitivas. Ya sea con indicaciones de lenguaje natural, señales visuales, texto, voz o multimedia, experimenta la fusión sin esfuerzo de simplicidad y poder.",
        desc2: "Redefine lo que es posible mientras navegas sin esfuerzo desde el reconocimiento hasta la generación, convirtiéndola en una herramienta esencial para cada mente creativa. Eleva tus proyectos con una herramienta que se adapta a tus necesidades, ofreciendo una versatilidad y eficiencia inigualables.",
      },
    },
    video_gallery: {
      title1: 'Galería de',
      title2: ' Videos ',
      sub_title: 'Videos generados por SwiftSora',
      more: 'Explora más videos',
    },
  },
  app: {
    index: {
      title: 'Inicio - App',
      page_title: {
        pre: 'Comienza ',
        post: 'Aquí',
      },
      get_start: {
        menu1: {
          title: 'Generación de Videos',
          desc: 'Genera videos con indicaciones, videos, imágenes y más.',
        },
        menu2: {
          title: 'Edición de Videos',
          desc: 'Edita el video utilizando las indicaciones, videos, imágenes proporcionados.',
        },
        menu3: {
          title: 'Reconocimiento de Videos',
          desc: 'Envía tu video y crea automáticamente una descripción y una indicación claras y atractivas del video.',
        },
      },
      page_title2: {
        pre: 'Creaciones ',
        post: 'Recientes',
      },
    },
    community_feed: {
      title: 'Feed de la Comunidad - App',
      page_title: {
        pre: 'Feed de la ',
        post: 'Comunidad',
        sub: 'Todos los videos en esta página fueron generados directamente por Sora sin modificaciones.',
      },
    },
    personal_feed: {
      title: 'Feed Personal - App',
      page_title: {
        pre: 'Feed ',
        post: 'Personal',
        sub: 'Videos producidos por ti mismo.',
      },
    },
    video_gen: {
      title: 'Generación de Videos - App',
      load: {
        title: 'Generando video...',
        desc: 'Tu video estará listo en unos minutos',
        desc2: {
          pre: 'El video generado se guardará en tu ',
          post: 'Feed Personal',
        },
        guide: {
          title: 'Mientras esperas...',
          desc: 'Echa un vistazo a otras creaciones de videos',
        },
      },
      text: {
        title: 'Texto',
        guide: {
          title: 'Indicación de Texto',
          desc: 'Usa una indicación de texto para generar imágenes. A continuación, seleccionarás una imagen para generar un video.',
          btn: 'Prueba una indicación de ejemplo',
        },
        aspect_ration: {
          title: 'Relación de Aspecto',
          placeholder: 'Describe tu imagen.',
        },
        style: {
          title: 'Estilo',
          video_styles: {
            none: 'Ninguno',
            _3d_model: 'Modelo 3D',
            analog_film: 'Película Analógica',
            anime: 'Anime',
            cinematic: 'Cinematográfico',
            comic_book: 'Cómic',
            digital_art: 'Arte Digital',
            enhance: 'Mejorar',
            fantasy_art: 'Arte Fantástico',
            isometric: 'Isométrico',
            line_art: 'Arte Lineal',
            low_poly: 'Low Poly',
            modeling_compound: 'Compuesto de Modelado',
            neon_punk: 'Neon Punk',
            origami: 'Origami',
            photographic: 'Fotográfico',
            pixel_art: 'Pixel Art',
            tile_texture: 'Textura de Azulejo',
          },
        },
      },
      image: {
        title: 'Imagen',
        tip: 'Para obtener los mejores resultados, sube una imagen con una resolución de 1024 × 576px, 576 x 1024px o 768 × 768px.',
        guide: {
          title: 'Subir Imagen',
          desc: 'Sube una imagen para generar un video.',
          uploader: {
            title: {
              pre: 'Haz clic para subir',
              post: ' o arrastra y suelta',
            },
            supported_file: 'PNG, JPG o GIF',
          },
        },
      },
      btn_reset: 'Restablecer',
      btn_gen: 'Generar',
    },
    docs: {
      title: 'Documentación - App',
      resources: {
        quickstart: {
          title: 'Inicio Rápido',
          desc: 'Aprende cómo comenzar configurando y desplegando SwiftSora.',
        },
        github: {
          title: '¿Te gusta? ¡Dale una estrella!',
          desc: 'Los archivos de código fuente también están disponibles para ser clonados o descargados desde el repositorio oficial de SwiftSora en Github. No olvides darle una estrella si aprecias el proyecto.',
        },
        contribution: {
          title: 'Contribución',
          desc: 'Aprende cómo comenzar contribuyendo a SwiftSora localmente en tu máquina y comienza a desarrollar.',
        },
        license: {
          title: 'Licencia',
          desc: 'Nuestra iniciativa de código abierto fomenta la innovación, el intercambio y el crecimiento de la comunidad. Sumérgete en un mundo donde tu creatividad no tiene límites.',
        },
        blog: {
          title: 'Blog',
          desc: 'Descubre más recursos de SwiftSora y más en nuestro Blog Oficial.',
        },
        contact: {
          title: 'Contáctanos',
          desc: 'No dudes en unirte a la comunidad de Discord y hacernos cualquier pregunta sobre SwiftSora.',
        },
      },
    },
  },
}
