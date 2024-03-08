# SwiftSora - AI视频生成器

<div align="center">
    <img src="./public/logo.webp" alt="SwiftSora">
</div>

在线Demo在这里 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

SwiftSora是围绕OpenAI Sora模型打造的一款开源AI视频生成器，采用了全栈开发技术（结合了Nuxt 3、Vue 3和Tailwind CSS），包含前端和后端程序。它具有用户友好的Web UI，并可以在几分钟内轻松安装在诸如Vercel和Netlify之类的平台上。

[![网站演示](https://img.shields.io/badge/Website-Demo-8A2BE2)](https://www.swiftsora.com)

![Stars](https://img.shields.io/github/stars/jasonwang178/swiftsora) ![Forks](https://img.shields.io/github/forks/jasonwang178/swiftsora)

[English](https://github.com/jasonwang178/SwiftSora/blob/main/README.md) | [简体中文](https://github.com/jasonwang178/SwiftSora/blob/main/README.zh_CN.md) | [日本語](https://github.com/jasonwang178/SwiftSora/blob/main/README.ja_JP.md)

## 产品计划

- [x] Webui + 服务器
- [ ] SSO - Google、Github等 - 进行中
- [ ] 国际化 - 进行中
  - [x] 英语
  - [x] 简体中文
  - [ ] 繁體中文
  - [x] 日本語
  - [ ] Español
  - [ ] 한국어
- [ ] 定价与支付
  - [ ] Stripe支付
- 部署
  - [x] Vercel
  - [x] Netlify
  - [ ] Docker
- 安全性
  - [x] OpenAI API代理
- API连接
  - [ ] 与OpenAI的Sora API集成（等待OpenAI Sora API发布）

## 部署

> [!注意]
> 这个项目是实验性的。尽管经过了优化，仍建议谨慎使用。请自行承担风险，并注意任何潜在后果。

### Vercel

首选的部署选项是Vercel，您也可以灵活选择在的任何平台上部署它。

[![使用Vercel部署](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jasonwang178/SwiftSora)

- 选择Nuxt.js作为框架预设
- 添加以下环境变量:

```shell
# 您的实际OPENAI_API_KEY
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx

# 指定Sora模型名称，在https://platform.openai.com/docs/api-reference检查
OPENAI_API_MODEL=sora-1.0

# 设置实际的OpenAI API base URL或OpenAI API代理URL
# 例如，https://api.openai.com，https://api.myopenaiproxy.com
OPENAI_API_BASE_URL=http://localhost:3000

# 使用你部署该项目时的host或域名地址
# 例如，https://www.swiftsora.com/
OPENAI_API_PROXY_URL=http://localhost:3000
```

<img src="public/vercel.png" alt="vercel部署指南" width="100%">

阅读Vercel Nuxt部署指南 👉🏻👉🏻 [这里](https://vercel.com/docs/frameworks/nuxt).

### Netlify

你也可以使用Netlify进行部署。

[![部署到Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jasonwang178/SwiftSora)


阅读Netlify Nuxt部署指南 👉🏻👉🏻 [这里](https://docs.netlify.com/integrations/frameworks/nuxt/)。

### 其他平台

确保安装了Node.js v18+。

在主文件夹下添加一个`.env`文件。并按照[这里](https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#vercel)的说明设置值。

- 用你部署的URL替换`OPENAI_API_PROXY_URL`的值。例如，如果你已经将项目部署到了 <https://swiftsora.vercel.app>，将`OPENAI_API_PROXY_URL`更新为 <https://swiftsora.vercel.app>。
- 临时调整`OPENAI_API_BASE_URL`为你的部署URL。一旦OpenAI Sora API可用，将其更新为`https://api.openai.com`或任何其他OpenAI代理URL。

为生产环境构建应用程序：

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

请查看[Nuxt.js部署文档](https://nuxt.com/docs/getting-started/deployment)以获取更多信息。

## 介绍

### 关于SwiftSora [#]{.h-link}

SwiftSora是一个开源的AI视频生成器，采用了全栈开发技术（结合了Nuxt、Vue 3和Tailwind CSS），包含前端和后端程序。它具有用户友好的Web UI，并可以在几分钟内轻松安装在诸如Vercel和Netlify之类的平台上。

通过使用OpenAI的Sora模型，使用户能够将文本转换为视频，该平台简化了视频创建过程，确保平稳部署和使用。

SwiftSora通过简单输入文本提示词轻松实现视频创建，成为专业人士和爱好者在视频制作方面的多功能人工智能工具。

### 关于Sora [#]{.h-link}

在 2024 年 2 月 16 日，Open AI 宣布推出全新的生成式人工智能模型“Sora”。据了解，通过文本提示词，Sora 可以直接输出长达 60 秒的视频，并且包含高度细致的背景、复杂的多角度镜头，以及富有情感的多个角色。
这意味着，继文本、图像之后，OpenAI 将其先进的 AI 技术拓展到了视频领域。OpenAI 亦表示，Sora 是能**够理解和模拟现实世界**的模型的基础，这一能力将是实现 AGI（通用人工智能）的重要里程碑。

对于 OpenAI 视频生成模型的出现，业内其实早有预期，但仍有人评价称“比想象中来得更快”，亦有人振奋地表示“我们真的看到新工业革命来临”。

截至今天，**Sora尚未公开使用。** 但目前已经对Red Team人员开放，用于评估潜在危害或风险的关键领域。OpenAI Sora团队还扩大了对视觉艺术家、设计师和电影制片人的访问，以收集有关改进该模型以满足创意专业人士需求的反馈。OpenAI正在分享早期研究进展，与组织外的个人合作并征集反馈，向公众提供有关即将推出的人工智能功能的见解。

### 演示

在线Demo在这里 👉🏻👉🏻 [SwiftSora](https://www.swiftsora.com)

### 视频生成

<https://github.com/jasonwang178/SwiftSora/assets/222802/d9752751-a906-4dcc-80d2-b30dc0ccad99>

<https://github.com/jasonwang178/SwiftSora/assets/222802/b4c1f5b1-0348-4946-98cd-87647cf81d93>


### 网站首页

https://github.com/jasonwang178/SwiftSora/assets/222802/18eb7897-7b46-431a-9487-98b8dfa8b804

### 应用首页

https://github.com/jasonwang178/SwiftSora/assets/222802/f6e670a5-d281-4cf2-a8fa-3f38c17155d3

### 社区动态

https://github.com/jasonwang178/SwiftSora/assets/222802/842d4ba0-9442-4be5-a1ff-c1283ec9160a

### 其他应用页面

https://github.com/jasonwang178/SwiftSora/assets/222802/e8e1a120-4b42-4457-bd09-368c32cc0e18


## 参与开发

- `server/routes/fakeOpenAISoraAPI.post.ts` - 这是一个模拟的 OpenAI Sora API。请在官方 Sora API 可访问时停用此 API。
- `server/routes/v1/[...].ts` - 这是一个 OpenAI API 代理。此举旨在防止API 密钥的意外暴露或由 OpenAI 风控，确保您的 API 密钥安全。

克隆这个仓库，并确保安装了依赖项：

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

### 生产环境

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

本地预览生产环境代码：

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

查看[Nuxt.js部署文档](https://nuxt.com/docs/getting-started/deployment)获取更多信息。

## 请我喝杯咖啡

Support the author 支持作者

If you find this project enjoyable and genuinely helpful, kindly consider supporting it with your contributions and stars. Thanks!
如果你喜欢这个项目，并且它对你确实有帮助，请不要吝啬你的打赏和Star.


### 微信

<img src="public/wechat.jpg" alt="微信" width="35%" height="35%">

### 支付宝

<img src="public/alipay.jpg" alt="支付宝" width="35%" height="35%">

## Star历史图表

[![Star历史图表](https://api.star-history.com/svg?repos=jasonwang178/SwiftSora&type=Date)](https://star-history.com/#jasonwang178/SwiftSora&Date)
