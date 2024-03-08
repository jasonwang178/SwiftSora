export default {
  app_title: 'SwiftSora - AI视频生成器 - 通过文字生成视频和图片 | SwiftSora',
  seo: {
    ogTitle: 'SwiftSora - AI视频生成器 - 通过文字生成视频和图片 | SwiftSora',
    description: '使用SwiftSora轻松生成视频和图片，这是一个使用OpenAI强大Sora模型的开源项目。一键部署到Vercel等平台。采用Nuxt.js，Vue 3和Tailwind CSS全栈开发。通过内置的OpenAI代理保护您的API密钥的安全。',
    ogDescription: '使用SwiftSora轻松生成视频和图片，这是一个使用OpenAI强大Sora模型的开源项目。一键部署到Vercel等平台。采用Nuxt.js，Vue 3和Tailwind CSS全栈开发。通过内置的OpenAI代理保护您的API密钥的安全。',
    keywords: 'AI,AIGC,OpenAI,Sora,视频生成器,SwiftSora',
  },
  error: {
    e404: {
      title: '页面未找到',
      desc: '哎呀！看起来您访问了一个错误的链接。如果您认为这是我们的问题，请告诉我们。',
      link: '',
      desc2: '',
    },
    e500: {
      title: '发生了严重错误',
      desc: '现在是喝咖啡的好时机。我们会在您喝完咖啡的时候恢复服务。',
      link: '',
      desc2: '',
    },
    e502: {
      title: '维护中',
      desc: '抱歉给您带来不便，我们目前正在进行一些维护工作。如果需要，您可以随时',
      link: '联系我们',
      desc2: '，否则我们将很快恢复服务！',
    },
    video_not_supported: '您的浏览器不支持视频标签。',
    validation: {
      video_gen: {
        error1: '请输入提示词',
        error2: '请上传一张图片',
      },
    },
  },
  common: {
    loading: '加载中...',
    read_more: '了解更多',
    go_home: '返回首页',
  },
  site_nav: {
    tip: '打开主菜单',
    video_gallery: '视频作品展示',
    blog: '博客',
    gen_video: '来吧！动手创建一个视频',
  },
  lang_theme: {
    tip: '切换深色主题',
  },
  site_footer: {
    intro: 'SwiftSora是一个开源项目，允许用户在线从提示词生成视频。该项目利用OpenAI的Sora模型简化视频创建，包含一键网站部署功能，轻松便捷。',
    about: '关于我们',
    blog: '博客',
    faq: '常见问题',
    docs: '文档',
    contact: '联系我们',
    stay_tuned: '敬请关注！',
    discord: 'Discord',
    twitter: 'Twitter',
    github: 'Github',
    youtube: 'YouTube社区',
    legal: '法律声明',
    license: '许可证（Apache 2.0）',
    dmca: 'DMCA',
    legal_notice: '隐私政策',
    terms: '服务条款',
    cookie_policy: 'Cookie政策',
    rights: '保留所有权利。',
  },
  app_nav: {
    tip: '打开用户菜单',
    settings: '系统设置',
    signout: '退出登录',
  },
  app_sidebar: {
    home: '主页',
    community_feed: '社区动态',
    personal_feed: '个人作品',
    user_tools1: '我的',
    user_tools2: '工具',
    video_gen: '视频生成',
    docs: '文档',
    faq: '常见问题与帮助',
  },
  index: {
    title: '',
    intro1: '释放您的',
    intro2: '创造力',
    intro3: '借助强大的',
    sub_intro: '为您生成质量、速度和风格的一致性无与伦比的的视频。',
    gen_video: '来吧！动手创建一个视频',
    guide1: {
      title: 'Sora是什么？',
      desc: 'Sora是一种能够根据文本指令创建逼真和富有想象力场景的AI大模型，由OpenAI训练。',
    },
    guide2: {
      title: 'SwiftSora是什么？',
      desc: '一个使用OpenAI强大的Sora模型的开源项目。采用全栈Nuxt.js, Vue 3和Tailwind CSS构建。',
    },
    guide3: {
      title: '快速部署',
      desc: '轻松一键部署到Vercel、Netlify和其他平台。',
    },
    guide4: {
      title: '保护您的API密钥',
      desc: '使用内置的OpenAI代理保护您的API密钥。信息安全全部由您自己掌控，避免API Key泄露和风控。',
    },
    toolkit: {
      title1: 'SwiftSora',
      title2: ' 工具包 ',
      menu1: {
        title: '视频生成',
        sub_title: '提示词/视频/图像转视频',
        desc1: '使用我们的视频和图像生成工具将您的创造力提升到新的高度。它不仅仅是将您的想法变为现实；它重新定义了可能性的边界。无论您是新手还是专家，我们提供一系列直观的设置，可根据您的具体需求进行定制。使用自然语言提示词、文本、语音、图像或视频轻松生成视频和图像。',
        desc2: '体验无与伦比的简单与实力的完美融合，精心打造，以满足各个水平用户的创造性思维。',
      },
      menu2: {
        title: '视频编辑',
        sub_title: '使用提示词编辑您的视频',
        desc1: 'SwiftSora不仅将您的愿景带到现实，还通过重新定义视频操作的艺术来扩展其能力。使用直观的控制轻松编辑、组织和修改视频，使新手和经验丰富的专业人士都能受益。',
        desc2: '从轻松传输到流畅共享，我们的平台提供了简单和强大完美融合的体验。通过增强、裁剪和转换视频，打造引人入胜的叙事。无缝组织，精确修改，轻松分享您的创作。',
      },
      menu3: {
        title: '视频识别',
        sub_title: '视频转文字',
        desc1: '释放我们的视频和图像生成工具的革命性能力 – 不仅限于创造性视频生成，SwiftSora更是视频识别、处理、分析、理解的强大工具。为初学者和专家量身定制，该工具通过直观的设置突破了界限。无论是自然语言提示词、文本、语音还是图像，都能体验简单和强大的无缝融合。',
        desc2: '轻松穿越识别到生成，使其成为每个创意思维者的重要工具。用一个能够适应您需求的工具提升您的竞争力，提供无与伦比的多功能和效率。',
      },
    },
    video_gallery: {
      title1: '社区作品',
      title2: ' 展示 ',
      sub_title: '由SwiftSora生成的视频',
      more: '查看更多视频作品',
    },
  },

  app: {
    index: {
      title: '主页 - 应用',
      page_title: {
        pre: '从这里 ',
        post: '开始',
      },
      get_start: {
        menu1: {
          title: '视频生成',
          desc: '使用提示词、视频、图像等生成视频。',
        },
        menu2: {
          title: '视频编辑',
          desc: '使用提供的提示词、视频、图像编辑视频。',
        },
        menu3: {
          title: '视频识别',
          desc: '提交您的视频，自动生成清晰、引人入胜的视频描述和提示。',
        },
      },
      page_title2: {
        pre: '最新 ',
        post: '作品',
      },
    },
    community_feed: {
      title: '社区动态 - 应用',
      page_title: {
        pre: '社区 ',
        post: '动态',
        sub: '此页面上的所有视频均由Sora直接生成，没有进行修改。',
      },
    },
    personal_feed: {
      title: '个人作品 - 应用',
      page_title: {
        pre: '个人 ',
        post: '作品',
        sub: '您的全部作品都收录在这里。',
      },
    },
    video_gen: {
      title: '视频生成 - 应用',
      load: {
        title: '正在生成视频...',
        desc: '您的视频将在几分钟内准备就绪',
        desc2: {
          pre: '生成的视频将保存到您的',
          post: '个人作品',
        },
        guide: {
          title: '在您等待期间不妨...',
          desc: '看看其他用户的创作',
        },
      },
      text: {
        title: '文本',
        guide: {
          title: '文本提示词',
          desc: '使用文本提示词生成图像。接下来，您将选择一张图像生成视频。',
          btn: '试一试👉🏻示例提示词',
        },
        aspect_ration: {
          title: '画面比例',
          placeholder: '输入文本提示词，描述您的图像。',
        },
        style: {
          title: '风格',
          video_styles: {
            none: '默认',
            _3d_model: '3D 模型',
            analog_film: '模拟胶片',
            anime: '动漫',
            cinematic: '电影效果',
            comic_book: '漫画',
            digital_art: '数字艺术',
            enhance: '增强',
            fantasy_art: '奇幻艺术',
            isometric: '等轴测图',
            line_art: '线描',
            low_poly: '低多边形',
            modeling_compound: '建模化合物',
            neon_punk: '霓虹朋克',
            origami: '折纸艺术',
            photographic: '摄影',
            pixel_art: '像素艺术',
            tile_texture: '瓷砖纹理',
          },
        },
      },
      image: {
        title: '图像',
        tip: '为获得最佳效果，请上传分辨率为 1024 × 576像素、576 × 1024像素 或 768 × 768像素 的图像。',
        guide: {
          title: '图像上传',
          desc: '上传图像以生成视频。',
          uploader: {
            title: {
              pre: '点击上传',
              post: ' 或拖放',
            },
            supported_file: '支持的文件类型：PNG、JPG 或 GIF',
          },
        },
      },
      btn_reset: '重置',
      btn_gen: '立刻生成',
    },
    docs: {
      title: '文档 - 应用',
      resources: {
        quickstart: {
          title: '开始使用',
          desc: '了解如何快速配置和部署 SwiftSora。',
        },
        github: {
          title: '喜欢吗？给个星星吧！',
          desc: '源代码可从官方 SwiftSora GitHub 存储库克隆或下载。如果你喜欢这个项目，请别忘了给它点个星。',
        },
        contribution: {
          title: '参与到项目',
          desc: '学习如何在本地机器上贡献 SwiftSora 并开始开发。',
        },
        license: {
          title: '许可证',
          desc: '我们的开源倡议鼓励创新、共享和社区发展。进入一个创意无限的世界吧。',
        },
        blog: {
          title: '博客',
          desc: '在我们的官方博客上发现更多有关 SwiftSora 的资源以及AI的相关知识。',
        },
        contact: {
          title: '联系我们',
          desc: '随时加入 Discord 社区，并向我们咨询有关 SwiftSora 的任何问题。',
        },
      },
    },
  },
}
