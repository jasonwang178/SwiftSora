export default {
  app_title: 'SwiftSora - AI Video Generator - Create Video, Images & More | SwiftSora',
  seo: {
    ogTitle: 'SwiftSora - AI Video Generator - Create Video, Images & More | SwiftSora',
    description:
      "Generate videos and images effortlessly with SwiftSora, an open-source project using OpenAI's powerful Sora model. One-click deployment to Vercel and more. Developed with Nuxt.js， Vue 3 and Tailwind CSS in a full-stack configuration. Secure your API key with the built-in OpenAI proxy.",
    ogDescription:
      "Generate videos and images effortlessly with SwiftSora, an open-source project using OpenAI's powerful Sora model. One-click deployment to Vercel and more. Developed with Nuxt.js， Vue 3 and Tailwind CSS in a full-stack configuration. Secure your API key with the built-in OpenAI proxy.",
    keywords: 'AI,OpenAI,Sora,Video Generation,SwiftSora',
  },
  error: {
    e404: {
      title: 'Page not found',
      desc: 'Oops! Looks like you followed a bad link. If you think this is a problem with us, please tell us.',
      link: '',
      desc2: '',
    },
    e500: {
      title: 'Something has gone seriously wrong',
      desc: "It's always time for a coffee break. We should be back by the time you finish your coffee.",
      link: '',
      desc2: '',
    },
    e502: {
      title: 'Under Maintenance',
      desc: 'Sorry for the inconvenience but we’re performing some maintenance at the moment. If you need to you can always ',
      link: 'contact us',
      desc2: ', otherwise we’ll be back online shortly!.',
    },
    video_not_supported: 'Your browser does not support the video tag.',
    validation: {
      video_gen: {
        error1: "You didn't provide a Prompt.",
        error2: "You didn't upload an Image.",
      },
    },
  },
  common: {
    loading: 'Loading...',
    read_more: 'Read more',
    go_home: 'Go back home',
  },
  // components
  site_nav: {
    tip: 'Open main menu',
    video_gallery: 'Video Gallery',
    blog: 'Blog',
    gen_video: 'Generate a Video',
  },
  lang_theme: {
    tip: 'Toggle dark mode',
  },
  site_footer: {
    intro: "SwiftSora is an open-source project that enables users to generate videos from prompt text online. The project utilizes OpenAI's Sora model to streamline video creation and includes a straightforward one-click website deployment feature.",
    about: 'About',
    blog: 'Blog',
    faq: 'FAQ',
    docs: 'Docs',
    contact: 'Contact us',
    stay_tuned: 'Stay tuned!',
    discord: 'Discord',
    twitter: 'Twitter',
    github: 'Github',
    youtube: 'YouTube Community',
    legal: 'Legal',
    license: 'License (Apache 2.0)',
    dmca: 'DMCA',
    legal_notice: 'Privacy Policy',
    terms: 'Terms of Service',
    cookie_policy: 'Cookie Policy',
    rights: 'All Rights Reserved.',
  },
  app_nav: {
    tip: 'Open user menu',
    settings: 'Settings',
    signout: 'Sign out',
  },
  app_sidebar: {
    home: 'Home',
    community_feed: 'Community Feed',
    personal_feed: 'Personal Feed',
    user_tools1: 'User',
    user_tools2: 'Tools',
    video_gen: 'Video Generation',
    docs: 'Docs',
    faq: 'FAQ & Help',
  },
  index: {
    title: '',
    intro1: 'Unleash your ',
    intro2: 'creativity',
    intro3: 'with the capabilities of ',
    sub_intro: 'Produce high-quality video assets for you with unparalleled excellence in terms of quality, speed, and stylistic consistency.',
    gen_video: 'Generate a Video',
    guide1: {
      title: 'What is Sora?',
      desc: 'Sora is an AI model that can create realistic and imaginative scenes from text instructions.',
    },
    guide2: {
      title: 'What is SwiftSora?',
      desc: "An open-source project using OpenAI's powerful Sora model. Built with full-stack Nuxt.js, Vue 3 and Tailwind CSS.",
    },
    guide3: {
      title: 'Rapid Deployment',
      desc: 'Effortlessly deploy with a single click to Vercel, Netlify and other platforms.',
    },
    guide4: {
      title: 'Secure your API key',
      desc: 'Secure your API key with the built-in OpenAI proxy.',
    },
    toolkit: {
      title1: 'SwiftSora’s',
      title2: ' Toolkit ',
      menu1: {
        title: 'Video Generation',
        sub_title: 'Prompt/Video/Image to Video',
        desc1:
          "Elevate your creativity to new heights with our Video & Image Generation tool, unlocking transformative capabilities. It goes beyond merely bringing your ideas to life; it redefines the boundaries of possibility. Whether you're a novice or an expert, we provide a range of intuitive settings that can be customized to meet your specific requirements. Generate videos and images effortlessly using natural language prompts, visual cues, text, speech, images, or video.",
        desc2: 'Experience an unparalleled blend of simplicity and power, meticulously crafted to cater to creative minds of every proficiency level.',
      },
      menu2: {
        title: 'Video Editing',
        sub_title: 'Edit your video with prompt text',
        desc1: 'Beyond bringing your visions to life, SwiftSora extends its prowess to redefine the art of video manipulation. Seamlessly edit, organize, and modify videos with intuitive controls that empower both novices and seasoned professionals',
        desc2:
          'From effortless transmission to streamlined sharing, our platform offers an unparalleled fusion of simplicity and power. Craft compelling narratives with the ability to enhance, trim, and transform your videos. Organize seamlessly, modify with precision, and share your creations effortlessly.',
      },
      menu3: {
        title: 'Video Recognition',
        sub_title: 'Video to Text',
        desc1:
          "Unleash the revolutionary capabilities of our Video & Image Generation tool – not just limited to creative expression but a powerhouse for recognition, processing, analysis, understanding, and generation. Tailored for both beginners and experts, this tool transcends boundaries with its intuitive settings. Whether it's natural language prompts, visual cues, text, speech, or multimedia, experience the seamless fusion of simplicity and power.",
        desc2: "Redefine what's possible as you navigate effortlessly through recognition to generation, making it an essential for every creative mind. Elevate your projects with a tool that adapts to your needs, offering unparalleled versatility and efficiency.",
      },
    },
    video_gallery: {
      title1: 'Video',
      title2: ' Gallery ',
      sub_title: 'SwiftSora-generated Videos',
      more: 'Explore more videos',
    },
  },
  app: {
    index: {
      title: 'Home - App',
      page_title: {
        pre: 'Get Started ',
        post: 'Here',
      },
      get_start: {
        menu1: {
          title: 'Video Generation',
          desc: 'Generate video with prompts, videos, images and more.',
        },
        menu2: {
          title: 'Video Editing',
          desc: 'Edit the video using the provided prompts, videos, images.',
        },
        menu3: {
          title: 'Video Recognition',
          desc: 'Submit your video, and automatically create a clear and engaging video description and prompt.',
        },
      },
      page_title2: {
        pre: 'Recent ',
        post: 'Creations',
      },
    },
    community_feed: {
      title: 'Community Feed - App',
      page_title: {
        pre: 'Community ',
        post: 'Feed',
        sub: 'All videos on this page were generated directly by Sora without modification.',
      },
    },
    personal_feed: {
      title: 'Personal Feed - App',
      page_title: {
        pre: 'Personal ',
        post: 'Feed',
        sub: 'Videos produced by yourself.',
      },
    },
    video_gen: {
      title: 'Video Generation - App',
      load: {
        title: 'Video generating...',
        desc: 'Your video will be ready in a few minutes',
        desc2: {
          pre: 'The generated video will be saved to your ',
          post: 'Personal Feed',
        },
        guide: {
          title: 'While you wait...',
          desc: 'Take a look at other video creations',
        },
      },
      text: {
        title: 'Text',
        guide: {
          title: 'Text Prompt',
          desc: 'Use a text prompt to generate images. Next, you will select an image to generate a video.',
          btn: 'Try sample prompt',
        },
        aspect_ration: {
          title: 'Aspect Ratio',
          placeholder: 'Describe your image.',
        },
        style: {
          title: 'Style',
          video_styles: {
            none: 'None',
            _3d_model: '3D Model',
            analog_film: 'Analog Film',
            anime: 'Anime',
            cinematic: 'Cinematic',
            comic_book: 'Comic Book',
            digital_art: 'Digital Art',
            enhance: 'Enhance',
            fantasy_art: 'Fantasy Art',
            isometric: 'Isometric',
            line_art: 'Line Art',
            low_poly: 'Low Poly',
            modeling_compound: 'Modeling Compound',
            neon_punk: 'Neon Punk',
            origami: 'Origami',
            photographic: 'Photographic',
            pixel_art: 'Pixel Art',
            tile_texture: 'Tile Texture',
          },
        },
      },
      image: {
        title: 'Image',
        tip: 'For best results, please upload an image with a resolution of 1024 × 576px, 576 x 1024px, or 768 × 768px.',
        guide: {
          title: 'Image Uplaod',
          desc: 'Upload an image to generate a video.',
          uploader: {
            title: {
              pre: 'Click to upload',
              post: ' or drag and drop',
            },
            supported_file: 'PNG, JPG or GIF',
          },
        },
      },
      btn_reset: 'Reset',
      btn_gen: 'Generate',
    },
    docs: {
      title: 'Documentation - App',
      resources: {
        quickstart: {
          title: 'Quickstart',
          desc: 'Learn how to get started by configuring and deploying SwiftSora.',
        },
        github: {
          title: 'Like it? Give it a star!',
          desc: 'The source code files are also available to be cloned or downloaded from the official SwiftSora Github repository. Don’t forget to give it a star if you appreciate the project.',
        },
        contribution: {
          title: 'Contribution',
          desc: 'Learn how to get started by contrubuting SwiftSora locally on your machine and start developing.',
        },
        license: {
          title: 'License',
          desc: 'Our open-source initiative encourages innovation, sharing, and community growth. Dive into a world where your creativity knows no bounds.',
        },
        blog: {
          title: 'Blog',
          desc: 'Discover additional SwiftSora resources and more on our Official Blog.',
        },
        contact: {
          title: 'Contact us',
          desc: 'Feel free to join the Discord community and ask us any questions about SwiftSora.',
        },
      },
    },
  },
}
