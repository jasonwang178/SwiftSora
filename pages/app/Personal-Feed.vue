<template>
  <AppVideoFeed :title="title" :subTitle="subTitle" />
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'application'
})

const title = ref(['Personal ', 'Feed'])
const subTitle = ref('Videos produced by yourself.')

useHead({
  title: 'Personal Feed - App - SwiftSora',
  meta: [{ name: 'description', content: "SwiftSora is an open-source project that enables users to generate videos from prompt text online. The project utilizes OpenAI's Sora model to streamline video creation and includes a straightforward one-click website deployment feature." }],
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})


onMounted(() => {
})
</script>
