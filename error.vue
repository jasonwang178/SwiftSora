<template>
  <Html :lang="htmlAttrs.lang" :dir="htmlAttrs.dir">

  <Head>
    <Title>{{ $t('app_title') }}</Title>
    <template v-for="link in head.link" :key="link.id">
      <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
    </template>
  </Head>

  <Body class="bg-white dark:bg-gray-900">
    <div>
      <SiteNav />
      <div class="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
        <div class="block md:max-w-lg">

          <NuxtImg v-if="error.statusCode === 404" src="/404.svg" alt="astronaut image" />
          <NuxtImg v-else-if="error.statusCode === 500" src="/500.svg" alt="astronaut image" />
          <NuxtImg v-else-if="error.statusCode === 502" src="/maintenance.svg" alt="astronaut image" />
        </div>
        <div class="text-center xl:max-w-4xl">
          <h1 class="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            {{ $t(`error.e${error.statusCode}.title`) }}</h1>

          <p class="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">{{
            $t(`error.e${error.statusCode}.desc`) }}<LocLink v-if="$t(`error.e${error.statusCode}.link`)" :to="'/'"
              class="text-primary-700 hover:underline dark:text-primary-500">{{
                $t(`error.e${error.statusCode}.link`) }}
            </LocLink><span v-if="$t(`error.e${error.statusCode}.desc2`)">{{ $t(`error.e${error.statusCode}.desc2`)
            }}</span></p>
          <button @click="handleError"
            class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
            <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"></path>
            </svg>
            {{ $t(`common.go_home`) }}
          </button>
        </div>
      </div>
      <SiteFooterSection />
    </div>
  </Body>

  </Html>
</template>

<script setup lang="ts">
import { initFlowbite } from 'flowbite'

const { t } = useI18n()

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
})

useSeoMeta({
  ogTitle: t('seo.ogTitle'),
  ogType: 'website',
  ogUrl: 'https://www.swiftsora.com',
  description: t('seo.description'),
  ogDescription: t('seo.ogDescription'),
  ogImage: '/logo.webp',
  ogSiteName: 'SwiftSora',
  keywords: t('seo.keywords'),
  twitterCard: 'summary_large_image',
})

const htmlAttrs = computed(() => head.value.htmlAttrs!)

const props = defineProps({
  error: Object
})

// const error = ref({ statusCode: 500})

const localePath = useLocalePath()
const handleError = () => clearError({ redirect: localePath('/') })

onMounted(async () => {
  initFlowbite()
  initTheme()
})
</script>
