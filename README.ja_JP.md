# SwiftSora - AIビデオジェネレーター

<div align="center">
    <img src="./public/logo.webp" alt="SwiftSora">
</div>

オンラインデモはこちら 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

SwiftSoraはOpenAI Soraモデルを基にしたオープンソースのAIビデオジェネレーターで、Nuxt 3、Vue 3、およびTailwind CSSを組み合わせたフルスタック開発技術を採用しています。これにはフレンドリーなWeb UIが含まれ、VercelやNetlifyなどのプラットフォームに数分で簡単にインストールできます。

[![ウェブサイトデモ](https://img.shields.io/badge/Website-Demo-8A2BE2)](https://www.swiftsora.com)

![Stars](https://img.shields.io/github/stars/jasonwang178/swiftsora) ![Forks](https://img.shields.io/github/forks/jasonwang178/swiftsora)

[English](https://github.com/jasonwang178/SwiftSora/blob/main/README.md) | [简体中文](https://github.com/jasonwang178/SwiftSora/blob/main/README.zh_CN.md) | [日本語](https://github.com/jasonwang178/SwiftSora/blob/main/README.ja_JP.md)

## 製品計画

- [x] Web UI + サーバー
- [ ] SSO - Google、Githubなど - 進行中
- [ ] 国際化 - 進行中
  - [x] 英語
  - [x] 簡体中文
  - [ ] 繁体中文
  - [x] 日本語
  - [ ] Español
  - [ ] 한국어
- [ ] 料金設定と支払い
  - [ ] Stripe支払い
- デプロイ
  - [x] Vercel
  - [x] Netlify
  - [ ] Docker
- セキュリティ
  - [x] OpenAI APIプロキシ
- API接続
  - [ ] OpenAIのSora API統合（OpenAI Sora APIのリリースを待っています）

## デプロイ

> [!注意]
> このプロジェクトは実験的です。最適化されていますが、注意して使用することをお勧めします。リスクを自己負担し、潜在的な結果に注意してください。

### Vercel

推奨されるデプロイオプションはVercelですが、他のプラットフォームでも柔軟に選択できます。

[![Vercelでデプロイ](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jasonwang178/SwiftSora)

- フレームワークのプリセットとしてNuxt.jsを選択
- 以下の環境変数を追加:

```shell
# あなたの実際のOPENAI_API_KEY
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx

# Soraモデルの名前を指定します。https://platform.openai.com/docs/api-referenceを確認してください
OPENAI_API_MODEL=sora-1.0

# 実際のOpenAI APIベースURLまたはOpenAI APIプロキシURLを設定します
# 例: https://api.openai.com, https://api.myopenaiproxy.com
OPENAI_API_BASE_URL=http://localhost:3000

# このプロジェクトをデプロイしたときのホストまたはドメインのアドレスを使用します
# 例: https://www.swiftsora.com/
OPENAI_API_PROXY_URL=http://localhost:3000
```

<img src="public/vercel.png" alt="Vercelデプロイガイド" width="100%">

Vercel Nuxtデプロイガイドを読む 👉🏻👉🏻 [こちら](https://vercel.com/docs/frameworks/nuxt)。

### Netlify

Netlifyを使用してもデプロイできます。

[![Netlifyにデプロイ](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jasonwang178/SwiftSora)

Netlify Nuxtデプロイガイドを読む 👉🏻👉🏻 [こちら](https://docs.netlify.com/integrations/frameworks/nuxt/)。

### 他のプラットフォーム

Node.js v18+がインストールされていることを確認してください。

メインフォルダに`.env`ファイルを追加します。[こちら](https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#vercel)の説明に従って値を設定します。

- `OPENAI_API_PROXY_URL`の値をデプロイしたURLで置き換えてください。たとえば、プロジェクトを <https://swiftsora.vercel.app> にデプロイした場合、`OPENAI_API_PROXY_URL`を <https://swiftsora.vercel.app> に更新します。
- `OPENAI_API_BASE_URL`を一時的にデプロイURLに調整します。一旦OpenAI Sora APIが利用可能になると、それを`https://api.openai.com`または他のOpenAIプロキシURLに更新してください。

本番環境にアプリケーションを構築する：

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

[Nuxt.jsデプロイドキュメント](https://nuxt.com/docs/getting-started/deployment)を参照して、詳細情報を入手してください。

## 紹介

### SwiftSoraについて [#]{.h-link}

SwiftSoraは、オープンソースのAIビデオジェネレーターで、Nuxt、Vue 3、およびTailwind CSSを組み合わせたフルスタック開発技術を採用しています。前後端プログラムを含み、ユーザーフレンドリーなWeb UIを備え、VercelやNetlifyなどのプラットフォームに簡単にインストールできます。

OpenAIのSoraモデルを使用することで、ユーザーはテキストをビデオに変換でき、このプラットフォームはビデオ作成プロセスを簡略化し、スムーズなデプロイと使用を確保しています。

SwiftSoraはシンプルなテキストプロンプトを使用して簡単にビデオ作成を実現し、プロフェッショナルや愛好者がビデオ制作において多機能な人工知能ツールとなっています。

### Soraについて [#]{.h-link}

2024年2月16日、Open AIは新しい生成型人工知能モデル「Sora」を発表しました。テキストプロンプトを通じて、Soraは直接60秒のビデオを出力し、細部にわたる背景、複雑な多角度のカメラ、感情豊かな複数のキャラクターを含んでいます。
これは、テキストや画像に続き、OpenAIがその先進的なAI技術をビデオ領域に拡張したことを意味しています。OpenAIはまた、Soraが現実世界を理解し模倣できるモデルの基盤であると述べ、この能力はAGI（汎用人工知能）の実現における重要なマイルストーンであると語っています。

OpenAIのビデオ生成モデルの登場については、業界内では予想があったものの、「想像以上に速い」と評価する人もいれば、「新しい産業革命が始まるのを本当に見ている」と興奮する人もいます。

今日まで、**Soraは公開されていません。** ただし、現在はRed Teamメンバーに対してオープンされており、潜在的な危険やリスクを評価するために使用されています。OpenAI Soraチームはまた、ビジュアルアーティスト、デザイナー、映画製作者へのアクセスを拡大し、このモデルを改善し、クリエイティブプロフェッショナルのニーズに応えるためのフィードバックを収集しています。 OpenAIは早期の研究進捗を共有し、組織外の個人と協力し、公に向けて近日公開予定の人工知能機能に関する洞察を提供しています。

### デモ

オンラインデモはこちら 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

### ビデオ生成


<https://github.com/jasonwang178/SwiftSora/assets/222802/d9752751-a906-4dcc-80d2-b30dc0ccad99>

<https://github.com/jasonwang178/SwiftSora/assets/222802/b4c1f5b1-0348-4946-98cd-87647cf81d93>

### ウェブサイトのホームページ

<https://github.com/jasonwang178/SwiftSora/assets/222802/18eb7897-7b46-431a-9487-98b8dfa8b804>

### アプリのホームページ

<https://github.com/jasonwang178/SwiftSora/assets/222802/f6e670a5-d281-4cf2-a8fa-3f38c17155d3>

### コミュニティの最新情報

<https://github.com/jasonwang178/SwiftSora/assets/222802/842d4ba0-9442-4be5-a1ff-c1283ec9160a>

### その他のアプリページ

<https://github.com/jasonwang178/SwiftSora/assets/222802/e8e1a120-4b42-4457-bd09-368c32cc0e18>

## 開発への参加

- `server/routes/fakeOpenAISoraAPI.post.ts` - これは模擬されたOpenAI Sora APIです。公式のSora APIがアクセス可能になったら、このAPIを無効にしてください。
- `server/routes/v1/[...].ts` - これはOpenAI APIのプロキシです。これにより、APIキーが意図せず露出したり、OpenAIによるリスク管理が行われたりすることを防ぎ、APIキーの安全性を確保します。

このリポジトリをクローンし、依存関係がインストールされていることを確認してください：

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

### 本番環境

アプリケーションを本番向けにビルドする：

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

本番環境のコードをローカルでプレビューする：

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

詳細については、[Nuxt.jsデプロイメントドキュメント](https://nuxt.com/docs/getting-started/deployment)を参照してください。

## コーヒーをご馳走になってください

作者をサポートしてください

このプロジェクトが楽しく、本当に役立つと感じた場合は、どうかご協力とスターをお願いします。ありがとうございます！

もしプロジェクトが楽しく、本当に役立つと感じたなら、ご協力とスターをお願いします。

### WeChat

<img src="public/wechat.jpg" alt="WeChat" width="35%" height="35%">

### Alipay

<img src="public/alipay.jpg" alt="Alipay" width="35%" height="35%">

## スターの履歴チャート


[![スターの履歴チャート](https://api.star-history.com/svg?repos=jasonwang178/SwiftSora&type=Date)](https://star-history.com/#jasonwang178/SwiftSora&Date)
