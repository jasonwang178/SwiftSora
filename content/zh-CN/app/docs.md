---
title: 文档 - 应用 | SwiftSora - AI视频生成器 - 通过文字生成视频和图片 | SwiftSora
short:
tags:
---

# SwiftSora - AI视频生成器

[开始使用先进的开源视频生成器，采用Nuxt、Vue 3和Tailwind CSS的全栈组合，围绕OpenAI Sora API而打造。]{.text-lg .text-gray-600 .dark:text-gray-400}

<br />

---

## 介绍 [#]{.h-link}

<!-- - [#](){style="color:red;background-color: pink;"} -->

### 关于SwiftSora [#]{.h-link}

SwiftSora是一个开源的AI视频生成器，采用了全栈开发技术（结合了Nuxt、Vue 3和Tailwind CSS），包含前端和后端程序。它具有用户友好的Web UI，并可以在几分钟内轻松安装在诸如Vercel和Netlify之类的平台上。

通过使用OpenAI的Sora模型，使用户能够将文本转换为视频，该平台简化了视频创建过程，确保平稳部署和使用。

SwiftSora通过简单输入文本提示词轻松实现视频创建，成为专业人士和爱好者在视频制作方面的多功能人工智能工具。

### 关于Sora [#]{.h-link}

在 2024 年 2 月 16 日，Open AI 宣布推出全新的生成式人工智能模型“Sora”。据了解，通过文本提示词，Sora 可以直接输出长达 60 秒的视频，并且包含高度细致的背景、复杂的多角度镜头，以及富有情感的多个角色。
这意味着，继文本、图像之后，OpenAI 将其先进的 AI 技术拓展到了视频领域。OpenAI 亦表示，Sora 是能**够理解和模拟现实世界**的模型的基础，这一能力将是实现 AGI（通用人工智能）的重要里程碑。

对于 OpenAI 视频生成模型的出现，业内其实早有预期，但仍有人评价称“比想象中来得更快”，亦有人振奋地表示“我们真的看到新工业革命来临”。

截至今天，**Sora尚未公开使用。** 但目前已经对Red Team人员开放，用于评估潜在危害或风险的关键领域。OpenAI Sora团队还扩大了对视觉艺术家、设计师和电影制片人的访问，以收集有关改进该模型以满足创意专业人士需求的反馈。OpenAI正在分享早期研究进展，与组织外的个人合作并征集反馈，向公众提供有关即将推出的人工智能功能的见解。

[了解更多 :icon{name="material-symbols:arrow-right-alt" class="w-5 h-5"}](https://openai.com/sora)

### 快速部署 [#]{.h-link}

轻松一键部署到Vercel、Netlify和其他平台。

[立即开始](https://github.com/jasonwang178/SwiftSora)

SwiftSora通过简单输入文本实现轻松视频创建，成为专业人士和爱好者在视频制作和人工智能技术方面的多功能工具。

### 保护您的API密钥 [#]{.h-link}

SwiftSora现在包括一个简单的服务器后端。为了确保在某些地区安全使用OpenAI，SwiftSora引入了API代理的附加层。此举旨在防止意外曝露或OpenAI对您的API密钥的风险控制。在部署过程中，您只需要在`.env`文件中将您的SwiftSora域设置为`OPENAI_API_PROXY_URL`。

此外，除了官方的OpenAI AI，我们还支持与OpenAI API标准一致的任何API服务。只需在部署过程中将`OPENAI_API_BASE_URL`设置为您的API服务提供商的基本URL。

## 资源 [#]{.h-link}

:resources

### 发现Bug了吗？

请到移步Github[创建Issue](https://github.com/jasonwang178/SwiftSora/issues)进行报告。
