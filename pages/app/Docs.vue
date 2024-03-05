<template>
  <div class="flex-auto px-2 max-w-6xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
    <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
      <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white" id="content">
        SwiftSora - AI Video Generator</h1>
      <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">Get started with the leading open-source video generator,
        which is built with the full-stack combination of Nuxt, Vue 3, and Tailwind CSS, centered around OpenAI Sora API.
      </p>
    </div>

    <div id="mainContent">
      <h2 class="relative group">Introduction
        <span id="introduction" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          to="#introduction" aria-label="Link to this section: Introduction">#</NuxtLink>
      </h2>

      <h3 class="relative group">About SwiftSora
        <span id="swiftsora" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          to="#swiftsora" aria-label="Link to this section: About SwiftSora">#</NuxtLink>
      </h3>
      <p>SwiftSora is an open-source full-stack platform, combining Nuxt, Vue 3, and Tailwind CSS for both the front-end
        and back-end. It features a user-friendly web UI and can be easily installed on platforms like Vercel and Netlify
        within minutes.</p>
      <p>Empowering users to transform text into videos using OpenAI's Sora model, this platform simplifies the video
        creation process, ensuring smooth deployment and usage.</p>
      <p>SwiftSora enables effortless video creation by simply inputting text, making it a versatile tool for
        professionals and enthusiasts alike in video production and AI technology.</p>

      <h3 class="relative group">About Sora
        <span id="sora" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          to="#sora" aria-label="Link to this section: About Sora">#</NuxtLink>
      </h3>
      <p>Sora is OpenAI's text-to-video model proficient at creating realistic and imaginative scenes from text
        instructions.
        It can generate videos up to a minute long while maintaining visual quality and adherence to the user’s prompt.
      </p>
      <p>As of today, <strong>Sora is NOT yet AVAILABLE for public use.</strong> Instead, it is accessible to red teamers
        for
        assessing critical areas for potential harms or risks. The OpenAI Sora team is also extending access to visual
        artists, designers, and filmmakers to gather feedback on enhancing the model for creative professionals. OpenAI is
        sharing early research progress to collaborate with and gather feedback from individuals outside the
        organization, providing the public with insights into upcoming AI capabilities.</p>
      <p>Sora is able to generate complex scenes with multiple characters, specific types of motion, and accurate details
        of the subject and background. The model understands not only what the user has asked for in the prompt, but also
        how those things exist in the physical world.</p>
      <p>The model has a deep understanding of language, enabling it to accurately interpret prompts and generate
        compelling characters that express vibrant emotions. Sora can also create multiple shots within a single generated
        video that accurately persist characters and visual style.</p>
      <p>The current model has weaknesses. It may struggle with accurately simulating the physics of a complex scene, and
        may not understand specific instances of cause and effect. For example, a person might take a bite out of a
        cookie, but afterward, the cookie may not have a bite mark.</p>
      <p>
        The model may also confuse spatial details of a prompt, for example, mixing up left and right, and may struggle
        with precise descriptions of events that take place over time, like following a specific camera trajectory.
      </p>
      <p>
        <NuxtLink to="https://openai.com/sora" class="inline-flex items-center font-semibold">
          Read more
          <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </p>
      <h3 class="relative group">Rapid Deployment
        <span id="deployment" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          href="#deployment" aria-label="Link to this section: Rapid Deployment">#</NuxtLink>
      </h3>
      <p>Effortlessly deploy with a single click to Vercel, Netlify and other platforms.</p>
      <p>
        <NuxtLink to="https://github.com/jasonwang178/SwiftSora" class="inline-flex items-center font-semibold">
          Get started now
          <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </p>
      <p>SwiftSora enables effortless video creation by simply inputting text, making it a versatile tool for
        professionals and enthusiasts alike in video production and AI technology.</p>
      <h3 class="relative group">Secure your API key
        <span id="secure" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          href="#secure" aria-label="Link to this section: Secure your API key">#</NuxtLink>
      </h3>
      <p>SwiftSora now includes a straightforward server backend. To ensure the safety of OpenAI usage in certain regions,
        SwiftSora has introduced an additional layer of API proxy. This measure aims to prevent the inadvertent exposure
        or risk control by OpenAI of your API key. During deployment, you only need to set your SwiftSora domain as
        <i
          class="py-0.5 px-1 text-sm rounded-sm text-primary-300 bg-gray-600 dark:text-primary-600 dark:bg-gray-300">OPENAI_API_PROXY_URL</i>
        in the <i
          class="py-0.5 px-1 text-sm rounded-sm text-primary-300 bg-gray-600 dark:text-primary-600 dark:bg-gray-300">.env</i>
        file.
      </p>
      <p>Additionally, besides the official OpenAI AI, we support any API service that aligns with OpenAI API standards.
        Simply set <i
          class="py-0.5 px-1 text-sm rounded-sm text-primary-300 bg-gray-600 dark:text-primary-600 dark:bg-gray-300">OPENAI_API_BASE_URL</i>
        to your API service provider's base URL during deployment</p>



      <h2 class="relative group">Resources
        <span id="resources" class="absolute -top-[140px]"></span>
        <NuxtLink class="ml-2 text-primary-700 opacity-0 transition-opacity dark:text-primary-500 group-hover:opacity-100"
          href="#resources" aria-label="Link to this section: resources">#</NuxtLink>
      </h2>
      <div class="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
        <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#deployment"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quickstart</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">Learn how to get started by configuring and deploying
            SwiftSora.</p>
        </NuxtLink>
        <NuxtLink to="https://github.com/jasonwang178/SwiftSora"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Like it? Give it a star!</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">The source files are also available to be cloned or
            downloaded from the official SwiftSora Github repository. Don’t forget to give it a star if you appreciate the
            project.</p>
        </NuxtLink>
        <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#contribution"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contribution</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">Learn how to get started by contrubuting SwiftSora
            locally on your machine and start developing.</p>
        </NuxtLink>
        <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=License-1-ov-file"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">License</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">Our open-source initiative encourages innovation,
            sharing, and community growth. Dive into a world where your creativity knows no bounds.</p>
        </NuxtLink>

        <NuxtLink to="https://17ai8.org"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Blog</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">Discover additional SwiftSora resources and more on our
            Official Blog.</p>
        </NuxtLink>
        <NuxtLink to="https://discord.gg/2aTXEA26"
          class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
          <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact us</h3>
          <p class="font-normal text-gray-700 dark:text-gray-400">Feel free to join the Discord community and ask us any
            questions about SwiftSora.</p>
        </NuxtLink>
      </div>

      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Encountered any bugs?</h3>
      <p>
        Kindly report them by <NuxtLink to="https://github.com/jasonwang178/SwiftSora/issues"
          class="inline-flex items-center font-semibold">
          creating an issue
        </NuxtLink>.
      </p>


    </div>
  </div>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

// const title = ref(['Community ', 'Feed'])
// const subTitle = ref('Videos produced using Sora by OpenAI.')

useHead({
  title: 'Documentation - App - SwiftSora',
  // bodyAttrs: {
  //   class: 'bg-white dark:bg-gray-900',
  // },
})

</script>

