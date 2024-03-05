<template>
  <div>
    <div class="max-w-3xl mt-4 mx-auto text-center">
      <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white"><span
          class="rad-color-full">{{ $t('app.index.page_title.pre') }} </span>{{ $t('app.index.page_title.post') }}</h2>
      <p v-if="subTitle" class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">{{ subTitle }}</p>
    </div>

    <div class="max-w-6xl mx-auto grid gap-8 mb-4 sm:grid-cols-3 sm:mt-8">
      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <LocLink :to="'/app/video-generation'" >
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="ic:sharp-ondemand-video" class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">{{ $t('app.index.get_start.menu1.title') }}</h3>
          <ul role="list" class="mb-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">{{ $t('app.index.get_start.menu1.desc') }}
              </div>
            </li>
          </ul>
        </LocLink>
      </div>

      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <LocLink :to="'/app/video-generation'" >
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="streamline:entertainment-camera-video-film-television-tv-camera-movies-video-recorder"
              class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">{{ $t('app.index.get_start.menu2.title') }}</h3>
          <ul role="list" class="mb-4 space-y-4 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">{{ $t('app.index.get_start.menu2.desc') }}</div>
            </li>
          </ul>
        </LocLink>
      </div>

      <div class="p-6 bg-white rounded-lg shadow dark:bg-gray-700 hover:shadow-lg dark:shadow-gray-600">
        <LocLink :to="'/app/video-generation'" >
          <div
            class="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900 lg:h-12 lg:w-12">
            <Icon name="simple-icons:revealdotjs" class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
          </div>
          <h3 class="mb-4 text-xl font-bold dark:text-white hover:text-primary-900 dark:hover:text-primary-300">{{ $t('app.index.get_start.menu3.title') }}</h3>
          <ul role="list" class="mb-4 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>
              <div class="hover:text-gray-900 dark:hover:text-white">{{ $t('app.index.get_start.menu3.desc') }}</div>
            </li>
          </ul>
        </LocLink>
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

const { t } = useI18n()
const route = useRoute()

const title = ref([t('app.index.page_title2.pre'), t('app.index.page_title2.post')])
const subTitle = ref(null)

useHead({
  title: localizedTitle('app.index.title'),
})

</script>
