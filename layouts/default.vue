<template>
  <div>
    <SiteNav />
    <!-- <div :class="route.fullPath === '/' ? 'max-w-screen-2xl' : ''" class="relative flex flex-col mx-auto w-full px-0 dark:bg-gray-900"> -->
    <div :class="route.fullPath === localePath('/') ? 'max-w-screen-2xl' : ''"
      class="relative flex flex-col mx-auto w-full px-0 dark:bg-gray-900">
      <NuxtLoadingIndicator color="#8b5cf6" />
      <slot />
    </div>
    <SiteFooterSection />
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'

/* variables */
const route = useRoute()
const localePath = useLocalePath()

onMounted(async () => {
  initFlowbite()
  initTheme()
})
</script>
