export default {
  app_title: 'SwiftSora - AIビデオジェネレーター - テキストから動画や画像を生成 | SwiftSora',
  seo: {
    ogTitle: 'SwiftSora - AIビデオジェネレーター - テキストから動画や画像を生成 | SwiftSora',
    description:
      'SwiftSoraを使用して簡単に動画や画像を生成しましょう。これはOpenAIの強力なSoraモデルを使用したオープンソースプロジェクトです。Vercelなどのプラットフォームにワンクリックで展開可能。Nuxt.js、Vue 3、およびTailwind CSSを使用したフルスタック開発。組み込みのOpenAIプロキシにより、APIキーの安全性が保護されています。',
    ogDescription:
      'SwiftSoraを使用して簡単に動画や画像を生成しましょう。これはOpenAIの強力なSoraモデルを使用したオープンソースプロジェクトです。Vercelなどのプラットフォームにワンクリックで展開可能。Nuxt.js、Vue 3、およびTailwind CSSを使用したフルスタック開発。組み込みのOpenAIプロキシにより、APIキーの安全性が保護されています。',
    keywords: 'AI,AIGC,OpenAI,Sora,ビデオジェネレーター,SwiftSora',
  },
  error: {
    e404: {
      title: 'ページが見つかりません',
      desc: 'おっと！おそらく誤ったリンクにアクセスしました。これが私たちの問題だと思われる場合は、お知らせください。',
      link: '',
      desc2: '',
    },
    e500: {
      title: '重大なエラーが発生しました',
      desc: '今はコーヒーを飲む良いタイミングです。コーヒーを飲み終わったら、サービスを回復します。',
      link: '',
      desc2: '',
    },
    e502: {
      title: 'メンテナンス中',
      desc: 'ご不便をおかけして申し訳ありませんが、現在メンテナンス作業を行っています。必要であれば、いつでも',
      link: 'お問い合わせ',
      desc2: 'していただくか、しばらくお待ちいただければサービスを再開します！',
    },
    video_not_supported: 'お使いのブラウザはビデオタグをサポートしていません。',
    validation: {
      video_gen: {
        error1: 'プロンプトを入力してください',
        error2: '画像をアップロードしてください',
      },
    },
  },
  common: {
    loading: '読み込み中...',
    read_more: '詳細を読む',
    go_home: 'ホームに戻る',
  },
  site_nav: {
    tip: 'メインメニューを開く',
    video_gallery: 'ビデオギャラリー',
    blog: 'ブログ',
    gen_video: 'さあ！ビデオを作成しよう',
  },
  lang_theme: {
    tip: 'ダークモードを切り替える',
  },
  site_footer: {
    intro: 'SwiftSoraはオープンソースプロジェクトで、ユーザーがテキストのヒントからビデオを生成できるようにします。このプロジェクトはOpenAIのSoraモデルを使用してビデオ作成を簡素化し、ワンクリックのウェブサイトデプロイ機能を備えています。',
    about: '私たちについて',
    blog: 'ブログ',
    faq: 'よくある質問',
    docs: 'ドキュメント',
    contact: 'お問い合わせ',
    stay_tuned: 'お楽しみに！',
    discord: 'Discord',
    twitter: 'Twitter',
    github: 'Github',
    youtube: 'YouTubeコミュニティ',
    legal: '法的声明',
    license: 'ライセンス（Apache 2.0）',
    dmca: 'DMCA',
    legal_notice: 'プライバシーポリシー',
    terms: '利用規約',
    cookie_policy: 'Cookieポリシー',
    rights: '全著作権所有。',
  },
  app_nav: {
    tip: 'ユーザーメニューを開く',
    settings: 'システム設定',
    signout: 'ログアウト',
  },
  app_sidebar: {
    home: 'ホーム',
    community_feed: 'コミュニティフィード',
    personal_feed: '個人作品',
    user_tools1: '私の',
    user_tools2: 'ツール',
    video_gen: 'ビデオ生成',
    docs: 'ドキュメント',
    faq: 'よくある質問とヘルプ',
  },
  index: {
    title: '',
    intro1: 'あなたの',
    intro2: '創造力を解放する',
    intro3: '強力な',
    sub_intro: '品質、速さ、スタイルの一貫性を備えた非常に優れたビデオを生成します。',
    gen_video: 'さあ、ビデオを作成しましょう！',
    guide1: {
      title: 'Soraとは何ですか？',
      desc: 'Soraはテキスト命令に基づいてリアルで想像力豊かなシーンを作成できるAIモデルです。OpenAIによって訓練されています。',
    },
    guide2: {
      title: 'SwiftSoraとは何ですか？',
      desc: 'OpenAIの強力なSoraモデルを使用したオープンソースプロジェクトです。フルスタックのNuxt.js、Vue 3、Tailwind CSSで構築されています。',
    },
    guide3: {
      title: '素早いデプロイ',
      desc: 'Vercel、Netlifyなどへのワンクリックデプロイが簡単にできます。',
    },
    guide4: {
      title: 'APIキーの保護',
      desc: '組み込みのOpenAIプロキシを使用してAPIキーを保護します。情報のセキュリティは完全にあなたのコントロールで、APIキーの漏洩やリスクを防ぎます。',
    },
    toolkit: {
      title1: 'SwiftSora',
      title2: ' ツールキット ',
      menu1: {
        title: 'ビデオ生成',
        sub_title: 'ヒントワード/ビデオ/画像をビデオに変換',
        desc1:
          '当社のビデオおよび画像生成ツールを使用して、アイデアを新たな高みに押し上げます。それはあなたの考えを現実にするだけでなく、可能性の境界を再定義します。初心者でもエキスパートでも、具体的なニーズに合わせてカスタマイズできる直感的な設定を提供します。自然な言葉のヒント、テキスト、音声、画像、またはビデオを使用して、簡単にビデオと画像を生成します。',
        desc2: '卓越したシンプルさとパワフルな統合を体験し、各レベルのユーザーの創造的な思考に応えます。',
      },
      menu2: {
        title: 'ビデオ編集',
        sub_title: 'ヒントワードを使用してビデオを編集',
        desc1: 'SwiftSoraはビジョンを実現するだけでなく、ビデオ操作のアートを再定義することでその能力を拡張します。直感的なコントロールを使用して、ビデオを簡単に編集、整理、変更し、初心者から経験豊富なプロまでが利益を得ることができます。',
        desc2: 'シームレスな共有を提供する当社のプラットフォームは、簡単で強力な完璧な融合を提供します。ビデオを強化、切り抜き、変換して、引き込まれるストーリーを作り出します。シームレスな組織、正確な変更、作品を簡単に共有できます。',
      },
      menu3: {
        title: 'ビデオ認識',
        sub_title: 'ビデオをテキストに変換',
        desc1:
          '当社のビデオおよび画像生成ツールの革命的な能力を解放します。SwiftSoraは創造的なビデオ生成に限らず、ビデオの認識、処理、分析、理解を行う強力なツールです。初心者からエキスパートまでに合わせてカスタマイズされたこのツールは、直感的な設定を使用して限界を突破します。自然な言葉のヒント、テキスト、音声、画像に関係なく、シンプルで強力なシームレスな融合を体験できます。',
        desc2: '認識から生成までを簡単に行い、あらゆる創造的思考者にとって重要なツールにします。ニーズに合わせて適応するツールで競争力を向上させ、多機能かつ効率的な経験を提供します。',
      },
    },
    video_gallery: {
      title1: 'コミュニティ作品',
      title2: ' ギャラリー ',
      sub_title: 'SwiftSoraによって生成されたビデオ',
      more: '他のビデオ作品を見る',
    },
  },

  app: {
    index: {
      title: 'ホーム - アプリ',
      page_title: {
        pre: 'ここから',
        post: '始めましょう',
      },
      get_start: {
        menu1: {
          title: 'ビデオ生成',
          desc: 'ヒントワード、ビデオ、画像などを使用してビデオを生成します。',
        },
        menu2: {
          title: 'ビデオ編集',
          desc: '提供されたヒントワード、ビデオ、画像を使用してビデオを編集します。',
        },
        menu3: {
          title: 'ビデオ認識',
          desc: 'ビデオを提出し、クリアで引き込まれるビデオの説明とヒントが自動生成されます。',
        },
      },
      page_title2: {
        pre: '最新',
        post: '作品',
      },
    },
    community_feed: {
      title: 'コミュニティフィード - アプリ',
      page_title: {
        pre: 'コミュニティ',
        post: 'フィード',
        sub: 'このページのすべてのビデオは、Soraによって直接生成され、修正されていません。',
      },
    },
    personal_feed: {
      title: '個人作品 - アプリ',
      page_title: {
        pre: '個人',
        post: '作品',
        sub: 'すべての作品はここに収められています。',
      },
    },
    video_gen: {
      title: 'ビデオ生成 - アプリ',
      load: {
        title: 'ビデオ生成中...',
        desc: '数分でビデオが準備されます',
        desc2: {
          pre: '生成されたビデオはあなたの',
          post: '個人作品',
        },
        guide: {
          title: '待っている間に...',
          desc: '他のユーザーのクリエイションを見てみてください',
        },
      },
      text: {
        title: 'テキスト',
        guide: {
          title: 'テキストヒントワード',
          desc: 'テキストヒントワードを使用して画像を生成します。次に、画像を選択してビデオを生成します。',
          btn: '試してみる👉🏻例のヒントワード',
        },
        aspect_ration: {
          title: 'アスペクト比',
          placeholder: '画像を説明するテキストヒントワードを入力してください。',
        },
        style: {
          title: 'スタイル',
          video_styles: {
            none: 'デフォルト',
            _3d_model: '3Dモデル',
            analog_film: 'アナログフィルム',
            anime: 'アニメ',
            cinematic: '映画効果',
            comic_book: 'コミック',
            digital_art: 'デジタルアート',
            enhance: '強化',
            fantasy_art: 'ファンタジーアート',
            isometric: '等軸投影',
            line_art: '線画',
            low_poly: '低ポリゴン',
            modeling_compound: 'モデリング化合物',
            neon_punk: 'ネオンパンク',
            origami: '折り紙アート',
            photographic: '写真',
            pixel_art: 'ピクセルアート',
            tile_texture: 'タイルテクスチャ',
          },
        },
      },
      image: {
        title: '画像',
        tip: '最適な効果を得るには、1024 × 576ピクセル、576 × 1024ピクセル、または768 × 768ピクセルの解像度の画像をアップロードしてください。',
        guide: {
          title: '画像アップロード',
          desc: 'ビデオを生成するために画像をアップロードします。',
          uploader: {
            title: {
              pre: 'クリックしてアップロード',
              post: 'またはドラッグアンドドロップ',
            },
            supported_file: 'サポートされているファイルタイプ：PNG、JPG、またはGIF',
          },
        },
      },
      btn_reset: 'リセット',
      btn_gen: '即座に生成',
    },
    docs: {
      title: 'ドキュメント - アプリ',
      resources: {
        quickstart: {
          title: 'はじめに',
          desc: 'SwiftSoraの迅速な設定と展開方法を学びます。',
        },
        github: {
          title: '気に入ったら星を付けてください！',
          desc: 'ソースコードは公式SwiftSora GitHubリポジトリからクローンまたはダウンロードできます。このプロジェクトが気に入った場合は、星をつけるのを忘れないでください。',
        },
        contribution: {
          title: 'プロジェクトへの参加',
          desc: 'ローカルマシンでSwiftSoraに貢献し、開発を始める方法を学びます。',
        },
        license: {
          title: 'ライセンス',
          desc: '私たちのオープンソースのイニシアティブは、革新、共有、コミュニティの発展を奨励しています。創造的な無限の世界に飛び込んでください。',
        },
        blog: {
          title: 'ブログ',
          desc: '公式ブログでSwiftSoraに関するリソースやAIに関する知識をもっと見つけてください。',
        },
        contact: {
          title: 'お問い合わせ',
          desc: 'いつでもDiscordコミュニティに参加し、SwiftSoraに関する質問をお気軽にお聞きください。',
        },
      },
    },
  },
}
