<template>
  <AppVideoFeed :title="title" :subTitle="subTitle" />
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

const title = ref(['Community ', 'Feed'])
const subTitle = ref('All videos on this page were generated directly by Sora without modification.')

useHead({
  title: 'Community Feed - App - SwiftSora',
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})

</script>
