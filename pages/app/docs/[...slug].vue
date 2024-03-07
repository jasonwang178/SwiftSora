<template>
  <div v-if="markdownPage" class="flex-auto px-2 max-w-6xl min-w-0 pt-6 lg:px-8 lg:pt-8 pb:12 xl:pb-24 lg:pb-16">
    <ContentRenderer id="mainContent" :value="markdownPage" />
  </div>
</template>
<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content/dist/runtime/types";
const route = useRoute()
definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

const {
  params: { slug },
} = useRoute();

const { locale } = useI18n();

interface ContentError extends Error {
  statusCode: number;
}

const { data: markdownPage, pending, error } = await useAsyncData<ParsedContent, ContentError>(`nuxt-content:${route.fullPath}`, () => {
  if (slug) {
    return queryContent('/')
      .where({ _locale: locale.value, _path: `/app/docs/${(slug as string[]).join("/")}` })
      .findOne()
  } else {
    return queryContent('/')
      .where({ _locale: locale.value, _path: '/app/docs' })
      .findOne()
  }
})
if (error.value && error.value.statusCode === 404) {
  console.error(error.value)
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}
</script>
