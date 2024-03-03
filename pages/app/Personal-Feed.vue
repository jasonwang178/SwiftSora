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
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})


onMounted(() => {
})
</script>
