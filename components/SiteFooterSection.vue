<template>
  <footer class="z-50 w-full bg-gray-50 dark:bg-gray-800 ">
    <div class="p-4 py-6 mx-auto max-w-screen-2xl md:p-8 lg:-10">
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
        <div class="col-span-2">
          <LocLink :to="'/'" class="flex rad-color-1 items-center mb-2 text-2xl font-semibold sm:mb-0">
            <NuxtImg src="/logo.webp" class="mr-3 h-6 sm:h-9" alt="SwiftSora Logo" />
            SwiftSora
          </LocLink>
          <p class="my-4 font-light text-gray-500 dark:text-gray-400">
            {{ $t('site_footer.intro') }}
          </p>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ $t('site_footer.about') }}</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://17ai8.org" class="hover:underline">{{ $t('site_footer.blog') }}</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora/issues" class="hover:underline">{{ $t('site_footer.faq') }}</NuxtLink>
            </li>
            <li class="mb-4">
              <LocLink :to="'/app/docs'" class="hover:underline">{{ $t('site_footer.docs') }}</LocLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">{{ $t('site_footer.contact') }}</NuxtLink>
            </li>
            <!-- <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">Support</NuxtLink>
            </li> -->
          </ul>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ $t('site_footer.stay_tuned') }}</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">{{ $t('site_footer.discord') }}</NuxtLink>
            </li>
            <!-- <li class="mb-4">
              <LocLink :to="'/'" class="hover:underline">Telegram</LocLink>
            </li> -->
            <li class="mb-4">
              <NuxtLink to="https://twitter.com/swiftsora" class="hover:underline">{{ $t('site_footer.twitter') }}</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora" class="hover:underline">{{ $t('site_footer.github') }}</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://www.youtube.com/@17ai8" class="hover:underline">{{ $t('site_footer.youtube') }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{{ $t('site_footer.legal') }}</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=License-1-ov-file#readme"
                class="hover:underline">{{ $t('site_footer.license') }}</NuxtLink>
            </li>
            <li class="mb-4">
              <LocLink :to="'/dmca'" class="hover:underline">{{ $t('site_footer.dmca') }}</LocLink>
            </li>
            <li class="mb-4">
              <LocLink :to="'/legal-notice'" class="hover:underline">{{ $t('site_footer.legal_notice') }}</LocLink>
            </li>
            <li class="mb-4">
              <LocLink :to="'/terms-of-service'" class="hover:underline">{{ $t('site_footer.terms') }}</LocLink>
            </li>
            <li class="mb-4">
              <LocLink :to="'/cookie-policy'" class="hover:underline">{{ $t('site_footer.cookie_policy') }}</LocLink>
            </li>

          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-center text-gray-500 dark:text-gray-400">©{{ currentYear }} <LocLink :to="'/'"
          class="hover:underline">SwiftSora </LocLink>{{ $t('site_footer.rights') }}</span>
    </div>
  </footer>
</template>
<script setup>
const currentYear = ref(new Date().getFullYear())
</script>
