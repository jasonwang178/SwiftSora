<template>
  <div class="flex-auto max-w-4xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
    <div class="pb-4 mb-8 border-b border-gray-200 dark:border-gray-800">
      <h1 class="inline-block mb-2 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white" id="content">
        Help Center</h1>
      <p class="mb-4 text-lg text-gray-600 dark:text-gray-400">Browse through all of our Help Center articles</p>
    </div>

    <div id="mainContent">

      <p></p>
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
  title: 'FAQ & Hep - App - SwiftSora',
  // bodyAttrs: {
  //   class: 'bg-white dark:bg-gray-900',
  // },
})

</script>

