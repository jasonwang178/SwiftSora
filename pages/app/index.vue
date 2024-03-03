<template>
  <div>
    <div class="max-w-3xl mt-4 mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"><span
          class="rad-color-full">Get Started </span>Here</h2>
      <p v-if="subTitle" class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">{{ subTitle }}</p>
    </div>

    <div class="max-w-6xl mx-auto grid gap-8 mb-4 sm:grid-cols-3 sm:mt-8">
      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <NuxtLink to="/app/video-generation">
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="ic:sharp-ondemand-video" class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">Video
            Generation</h3>
          <ul role="list" class="mb-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">Generate video with prompts, videos, images and more.
              </div>
            </li>
          </ul>
        </NuxtLink>
      </div>

      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <NuxtLink to="/app/video-generation">
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="streamline:entertainment-camera-video-film-television-tv-camera-movies-video-recorder"
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">Video
            Editing</h3>
          <ul role="list" class="mb-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">Edit the video using the provided prompts, videos,
                images.</div>
            </li>
          </ul>
        </NuxtLink>
      </div>

      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <NuxtLink to="/app/video-generation">
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="simple-icons:revealdotjs" class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">Video
            Recognition</h3>
          <ul role="list" class="mb-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">Submit your video, and automatically create a clear
                and engaging video description and prompt.</div>
            </li>
          </ul>
        </NuxtLink>
      </div>
    </div>
    <AppVideoFeed :title="title" :subTitle="subTitle" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

const route = useRoute()
// const title = ref(['Get Started ', 'Here'])
const title = ref(['Recent ', 'Creations'])
// const subTitle = ref('Videos produced from community.')
const subTitle = ref(null)

useHead({
  title: 'Home - App - SwiftSora',
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})

// onMounted(() => {
// })
</script>
