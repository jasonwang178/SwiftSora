<template>
  <LocLink :to="'/'" class="flex" :class="isSite ? 'items-center' : 'm-auto'">
    <NuxtImg src="/logo.webp" class="mr-1 h-6 md:mr-3 md:h-8" alt="SwiftSora Logo" />
    <span
      class="rad-color-1 self-center text-md mt-0.5 md:text-2xl md:mt-0 font-semibold whitespace-nowrap dark:text-white">SwiftSora</span>
  </LocLink>
</template>

<script setup>
const props = defineProps(['isSite'])
</script>
