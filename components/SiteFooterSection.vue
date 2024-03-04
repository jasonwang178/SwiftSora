<template>
  <footer class="z-50 w-full bg-gray-50 dark:bg-gray-800 ">
    <div class="p-4 py-6 mx-auto max-w-screen-2xl md:p-8 lg:-10">
      <div class="grid grid-cols-2 gap-8 lg:grid-cols-6">
        <div class="col-span-2">
          <NuxtLink to="/" class="flex rad-color-1 items-center mb-2 text-2xl font-semibold sm:mb-0">
            <NuxtImg src="/logo.png" class="mr-3 h-6 sm:h-9" alt="SwiftSora Logo" />
            SwiftSora
          </NuxtLink>
          <p class="my-4 font-light text-gray-500 dark:text-gray-400">
            SwiftSora is an open-source project that enables users to generate videos from prompt text online. The project
            utilizes OpenAI's Sora model to streamline video creation and includes a straightforward one-click website
            deployment feature.
          </p>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://17ai8.org" class="hover:underline">Blog</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora/issues" class="hover:underline">FAQ</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/app/docs" class="hover:underline">Docs</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">Contact us</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">Support</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Stay tuned!</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://discord.gg/2aTXEA26" class="hover:underline">Discord</NuxtLink>
            </li>
            <!-- <li class="mb-4">
              <NuxtLink to="/" class="hover:underline">Telegram</NuxtLink>
            </li> -->
            <li class="mb-4">
              <NuxtLink to="https://twitter.com/swiftsora" class="hover:underline">Twitter</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora" class="hover:underline">Github</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="https://www.youtube.com/@17ai8" class="hover:underline">YouTube Community</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="lg:mx-auto">
          <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">LEGAL</h2>
          <ul class="text-gray-500 dark:text-gray-400">
            <li class="mb-4">
              <NuxtLink to="https://github.com/jasonwang178/SwiftSora?tab=License-1-ov-file#readme"
                class="hover:underline">License (Apache 2.0)</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/dcam" class="hover:underline">DMCA</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/legal-notice" class="hover:underline">Privacy Policy</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/terms-of-service" class="hover:underline">Terms of Service</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/cookie-policy" class="hover:underline">Cookie Policy</NuxtLink>
            </li>

          </ul>
        </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span class="block text-sm text-center text-gray-500 dark:text-gray-400">©2024 <NuxtLink to="/"
          class="hover:underline">SwiftSora</NuxtLink>. All Rights Reserved.</span>
    </div>
  </footer>
</template>

<script setup></script>
