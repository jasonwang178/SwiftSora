---
title: ドキュメント - アプリ | SwiftSora - AIビデオジェネレーター - テキストからビデオと画像を生成する | SwiftSora
short:
tags:
---

# SwiftSora - AIビデオジェネレーター

[最新のオープンソースビデオジェネレーターを利用して、Nuxt、Vue 3、およびTailwind CSSのフルスタックコンボを使用し、OpenAI Sora APIを中心に構築されたものをお試しください。]{.text-lg .text-gray-600 .dark:text-gray-400}

---

## はじめに [#]{.h-link}

### SwiftSoraについて [#]{.h-link}

SwiftSoraは、オープンソースのAIビデオジェネレーターで、Nuxt、Vue 3、およびTailwind CSSを組み合わせたフルスタック開発技術を採用しています。フレンドリーなWeb UIを備えており、VercelやNetlifyなどのプラットフォームに簡単にインストールできます。

OpenAIのSoraモデルを使用することで、テキストをビデオに変換でき、ビデオ作成プロセスを簡略化し、スムーズなデプロイと使用を保証します。

SwiftSoraは、テキストプロンプトを入力するだけでビデオ作成を容易にし、プロフェッショナルやアマチュアのビデオ制作者にとって多機能なAIツールとなっています。

### Soraについて [#]{.h-link}

2024年2月16日、OpenAIは新しい生成型人工知能モデル「Sora」を発表しました。テキストプロンプトを使用することで、Soraは最大60秒のビデオを直接出力し、細かい背景、複雑な多角度のショット、感情豊かな複数のキャラクターを含みます。
これは、テキストや画像に続き、OpenAIが先進のAI技術をビデオ領域に拡張したものです。OpenAIはまた、Soraが**現実世界を理解し模倣する**能力を持つモデルであることを強調し、この能力はAGI（汎用人工知能）の達成に向けた重要なマイルストーンであると述べています。

OpenAIビデオ生成モデルの登場は、業界内で予想されていたものですが、「予想以上に速い」と評価する人もいますし、「新たな産業革命がやってきた」と振り返る人もいます。

現時点では、**Soraはまだ一般に利用されていません。** ただし、Red Teamメンバーには利用が開放されており、潜在的なリスクや危険性を評価するための重要な領域に利用されています。OpenAI Soraチームは、ビジュアルアーティスト、デザイナー、映画製作者へのアクセスを拡大し、このモデルを向上させ、クリエイティブプロフェッショナルのニーズに応えるためのフィードバックを収集しています。OpenAIは、早期の研究進捗を共有し、組織外の個人と協力し、公開されるAI機能に関する洞察を提供しています。

[詳細はこちら :icon{name="material-symbols:arrow-right-alt" class="w-5 h-5"}](https://openai.com/sora)

### クイックデプロイ [#]{.h-link}

Vercel、Netlifyなどへのワンクリックデプロイが簡単に行えます。

[今すぐ始める](https://github.com/jasonwang178/SwiftSora)

SwiftSoraはシンプルなテキスト入力で簡単にビデオ作成ができ、プロフェッショナルや愛好者のための多機能なツールとなっています。

### APIキーの保護 [#]{.h-link}

SwiftSoraにはシンプルなサーバーバックエンドが含まれています。特定の地域でOpenAIを安全に使用するために、SwiftSoraはAPIプロキシの追加レイヤーを導入しています。これにより、APIキーの意図しない露出やOpenAIによるリスクをコントロールすることができます。デプロイの際には、`.env`ファイルでSwiftSoraドメインを`OPENAI_API_PROXY_URL`に設定するだけです。

さらに、公式のOpenAI AIだけでなく、OpenAI API標準に従った任意のAPIサービスもサポートしています。デプロイの際には、`OPENAI_API_BASE_URL`をAPIサービスプロバイダーの基本URLに設定するだけです。

## リソース [#]{.h-link}

:resources

### バグを見つけましたか？

報告はGitHubの[Issueを作成](https://github.com/jasonwang178/SwiftSora/issues)してください。
