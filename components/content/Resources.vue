<template>
  <div class="mt-10 lg:grid lg:grid-cols-2 lg:gap-8">
    <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#deployment"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {{ $t('app.docs.resources.quickstart.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.quickstart.desc') }}</p>
    </NuxtLink>
    <NuxtLink to="https://github.com/jasonwang178/SwiftSora"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('app.docs.resources.github.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.github.desc') }}</p>
    </NuxtLink>
    <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=readme-ov-file#contribution"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('app.docs.resources.contribution.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.contribution.desc') }}</p>
    </NuxtLink>
    <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=License-1-ov-file"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('app.docs.resources.license.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.license.desc') }}</p>
    </NuxtLink>

    <NuxtLink to="https://17ai8.org"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('app.docs.resources.blog.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.blog.desc') }}</p>
    </NuxtLink>
    <NuxtLink to="https://discord.gg/2aTXEA26"
      class="block p-6 mb-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-gray-100 dark:border-gray-700 lg:mb-0 min-h-40">
      <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ $t('app.docs.resources.contact.title') }}</h3>
      <p class="font-normal text-gray-700 dark:text-gray-400">{{ $t('app.docs.resources.contact.desc') }}</p>
    </NuxtLink>
  </div>
</template>
