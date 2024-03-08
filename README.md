# SwiftSora - AI Video Generator

<div align="center">
    <img src="./public/logo.webp" alt="SwiftSora">
</div>

Try Demo here 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

SwiftSora is an open-source AI video generator built around the OpenAI Sora model. Developed using full-stack technologies, it integrates Nuxt 3, Vue 3, and Tailwind CSS for both frontend and backend functionalities. Featuring a user-friendly web UI, SwiftSora can be easily deployed on platforms like Vercel and Netlify within minutes.

[![Website Demo](https://img.shields.io/badge/Website-Demo-8A2BE2)](https://www.swiftsora.com)

![Stars](https://img.shields.io/github/stars/jasonwang178/swiftsora) ![Forks](https://img.shields.io/github/forks/jasonwang178/swiftsora)

[English](https://github.com/jasonwang178/SwiftSora/blob/main/README.md) | [简体中文](https://github.com/jasonwang178/SwiftSora/blob/main/README.zh_CN.md) | [日本語](https://github.com/jasonwang178/SwiftSora/blob/main/README.ja_JP.md)

## Product Plan

- [x] Webui + Server
- [ ] SSO - Google, Github and more - WIP
- [ ] Internationalization - WIP
  - [x] English
  - [x] 简体中文
  - [ ] 繁體中文
  - [x] 日本語
  - [ ] Español
  - [ ] 한국어
- [ ] Pricing & Payments
  - [ ] Stripe payments
- Deployment
  - [x] Vercel
  - [x] Netlify
  - [ ] Docker
- Security
  - [x] OpenAI API Proxy
- API Connection
  - [ ] Integration with OpenAI's Sora API (Awaiting the Launch of OpenAI Sora API)


## Deployment

> [!NOTE]
> This project is experimental. Although it has undergone optimization, caution is still advised. Use it at your own risk, and be aware of any potential consequences.

### Vercel

The preferred deployment option is Vercel, although you have the flexibility to deploy it on any platform of your choice.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jasonwang178/SwiftSora)


* Select Nuxt.js as the Framework Preset
* Add the following environment variables:

```shell
# Your actual OPENAI_API_KEY
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx

# Specify the Sora model name, check at https://platform.openai.com/docs/api-reference
OPENAI_API_MODEL=sora-1.0

# Set the actual OpenAI base URL or a proxy OpenAI API base URL
# e.g., https://api.openai.com, https://api.myopenaiproxy.com
OPENAI_API_BASE_URL=http://localhost:3000

# Use this URL as the production host for the application
# Always utilize this proxy URL for secure access to any OpenAI API
# e.g., https://www.swiftsora.com/
OPENAI_API_PROXY_URL=http://localhost:3000
```


<img src="public/vercel.png" alt="vercel deployment guide" width="100%">

Read the Vercel Nuxt deployment guide 👉🏻👉🏻 [here](https://vercel.com/docs/frameworks/nuxt).

### Netlify

You can also deploy it using Netlify.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jasonwang178/SwiftSora)

Read the Netlify Nuxt deployment guide 👉🏻👉🏻 [here](https://docs.netlify.com/integrations/frameworks/nuxt/).

### Other platform

Ensure installed the node.js v18+.

Add a `.env` file at the home folder. And set the values as mentiond [here](https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#vercel).

* Replace the value of `OPENAI_API_PROXY_URL` with your deployed URL. For instance, if you have deployed the project to <https://swiftsora.vercel.app>, update the `OPENAI_API_PROXY_URL` to <https://swiftsora.vercel.app>.
* Adjust the `OPENAI_API_BASE_URL` to your deployed URL temporarily. Once the OpenAI Sora API becomes available, update it to `https://api.openai.com` or any other OpenAI proxy URL.

Build the application for production:

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

Check out the [Nuxt.js deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Introduction

### About SwiftSora

SwiftSora is an open-source full-stack platform, combining Nuxt, Vue 3, and Tailwind CSS for both the front-end and back-end. It features a user-friendly web UI and can be easily installed on platforms like Vercel and Netlify within minutes.

Empowering users to transform text into videos using OpenAI's Sora model, this platform simplifies the video creation process, ensuring smooth deployment and usage.

SwiftSora enables effortless video creation by simply inputting text, making it a versatile tool for professionals and enthusiasts alike in video production and AI technology.

### About Sora

On February 16, 2024, OpenAI unveiled its groundbreaking generative artificial intelligence model, "Sora." It is reported that Sora can generate a video lasting up to 60 seconds directly from textual prompts, featuring highly detailed backgrounds, intricate multi-angle shots, and emotionally rich characters.

This signifies OpenAI's expansion of its advanced AI technology into the realm of videos, following text and images. OpenAI also emphasizes that Sora serves as the foundation for a model capable of understanding and **simulating the real world**, marking a significant milestone towards achieving AGI (Artificial General Intelligence).

The emergence of OpenAI's video generation model was anticipated within the industry, with some noting that it arrived "faster than imagined." Others expressed excitement, stating that "we are truly witnessing the advent of a new industrial revolution."

As of today, **Sora has not been publicly released.** However, it is currently accessible to Red Team members for evaluating potential risks and critical areas. The OpenAI Sora team has expanded access to visual artists, designers, and filmmakers to gather feedback for improving the model to meet the needs of creative professionals. OpenAI is sharing early research progress, collaborating with individuals outside the organization, and seeking input to provide insights into upcoming AI features for the public.

[Read more ->](https://openai.com/sora)

### Demos

Try Demo here 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

### Video generation

https://github.com/jasonwang178/SwiftSora/assets/222802/d9752751-a906-4dcc-80d2-b30dc0ccad99

https://github.com/jasonwang178/SwiftSora/assets/222802/b4c1f5b1-0348-4946-98cd-87647cf81d93

### Landing page

https://github.com/jasonwang178/SwiftSora/assets/222802/18eb7897-7b46-431a-9487-98b8dfa8b804

### Application homepage

https://github.com/jasonwang178/SwiftSora/assets/222802/f6e670a5-d281-4cf2-a8fa-3f38c17155d3

### Community feed

https://github.com/jasonwang178/SwiftSora/assets/222802/842d4ba0-9442-4be5-a1ff-c1283ec9160a

### Other Application pages

https://github.com/jasonwang178/SwiftSora/assets/222802/e8e1a120-4b42-4457-bd09-368c32cc0e18


## Contribution

* `server/routes/fakeOpenAISoraAPI.post.ts` - This is a fake OpenAI Sora API. Please deactivate this API when the official Sora API becomes accessible.
* `server/routes/v1/[...].ts` - This is an OpenAI API proxy. This measure aims to prevent the inadvertent exposure or risk control by OpenAI of your API key.

Clone this repository and make sure to install the dependencies:

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

### Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

### Production

Build the application for production:

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

Locally preview production build:

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

Check out the [Nuxt.js deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Buy me a coffee

Support the author 支持作者

If you find this project enjoyable and genuinely helpful, kindly consider supporting it with your contributions and stars. Thanks!
如果你喜欢这个项目，并且它对你确实有帮助，请不要吝啬你的打赏和Star.

### WeChat 微信

<img src="public/wechat.jpg" alt="WeChat 微信" width="35%" height="35%">

### Alipay 支付宝

<img src="public/alipay.jpg" alt="Alipay 支付宝" width="35%" height="35%">


## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=jasonwang178/SwiftSora&type=Date)](https://star-history.com/#jasonwang178/SwiftSora&Date)
