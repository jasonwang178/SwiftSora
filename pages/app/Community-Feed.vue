<template>
  <AppVideoFeed :title="title" :subTitle="subTitle" />
</template>

<script setup lang="ts">
const { t } = useI18n()

definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

const title = ref([t('app.community_feed.page_title.pre'), t('app.community_feed.page_title.post')])
const subTitle = ref(t('app.community_feed.page_title.sub'))

useHead({
  title: localizedTitle('app.community_feed.title'),
})
</script>
