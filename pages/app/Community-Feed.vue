<template>
  <AppVideoFeed :title="title" :subTitle="subTitle" />
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'application'
})

const title = ref(['Community ', 'Feed'])
const subTitle = ref('Videos produced using Sora by OpenAI.')

useHead({
  title: 'Community Feed - App - SwiftSora',
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})

</script>
