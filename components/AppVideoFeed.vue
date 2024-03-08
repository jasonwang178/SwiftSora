<template>
  <div>
    <section class="bg-white dark:bg-gray-900">
      <div class="max-w-screen-xl px-4 py-8 mx-auto">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            <span class="rad-color-full">{{ title[0] }}</span>{{ title[1] }}
          </h2>
          <p v-if="subTitle" class="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">{{ subTitle }}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
          :class="subTitle ? 'mt-8 lg:mt-16' : 'mt-4 lg:mt-8'">
          <div v-for="(video, index) in videos" :key="index"
            class="relative overflow-hidden rounded-lg group cursor-pointer">
            <video
              class="w-[375px] md:w-[300px] object-cover h-[320px] m-auto scale-100 ease-in duration-300 group-hover:scale-125 rounded-md z-10"
              :autoplay="false" :muted="true" :loop="true" :controls="false" :playsInline="true" poster=""
              @click="showVideoDetail(video, $event)" @mouseover="toggleVideo($event)" @mouseout="toggleVideo($event)">
              <source :src="video?.url" type="video/mp4" />
              {{ $t('error.video_not_supported') }}
            </video>
            <div
              class="w-[375px] md:w-[300px] m-auto absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/10 pointer-events-none dark:to-white/20 scale-100 ease-in duration-300 group-hover:scale-125">
              <div class="space-y-0.5 font-medium text-sm text-gray-200 bg-gray-900/80 h-full hidden group-hover:flex">
                <!-- <div class="space-y-0.5 font-medium text-sm text-gray-200 bg-gray-900/80 h-full group-hover:flex"> -->
                <div
                  class="flex flex-col justify-between p-4 h-[320px] w-[376px] md:w-[302px] scale-100 ease-in duration-300 group-hover:scale-75">
                  <div v-if="video.author.toLowerCase() === 'openai'" class="w-full flex justify-center">
                    <Icon name="simple-icons:openai" class="w-5 h-5 mr-1" />
                    <div>{{ video.author }}</div>
                  </div>
                  <div v-else>
                    <NuxtImg :class="video.author_img?.endsWith('.svg') ? 'w-5 h-5' : 'w-7 h-7'" class="rounded-full mr-2"
                      :src="video.author_img ? video.author_img : '/profile.webp'" />
                    <div>{{ video.author }}</div>
                  </div>
                  <div v-if="video.prompt.length <= 200" class="mb-2 w-full">{{ video.prompt }}</div>
                  <div v-else class="mb-2">{{ video.prompt.slice(0, 200) }}...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div ref="video_detail" id="modal" tabindex="-1" aria-hidden="true"
      class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <!-- Modal header -->
          <div
            class="flex items-start justify-between p-2 rounded-t dark:border-gray-600 text-base leading-relaxed text-gray-500 dark:text-gray-300">
            <div class="flex flex-col justify-between py-1 px-4 text-md text-gray-500 dark:text-gray-400">
              <div v-if="active_video?.author.toLowerCase() === 'openai'" class="w-full flex justify-center">
                <Icon name="simple-icons:openai" class="w-5 h-5 mt-0.5 mr-1" />
                <div>{{ active_video?.author }}</div>
              </div>
              <div v-else class="w-full flex justify-center">
                <NuxtImg :class="active_video?.author_img?.endsWith('.svg') ? 'w-5 h-5 mt-0.5' : 'w-6 h-6'"
                  class="rounded-full mr-1" :src="active_video?.author_img ? active_video?.author_img : '/profile.webp'" />
                <div>{{ active_video?.author }}</div>
              </div>
            </div>
            <button @click="closeModal" id="closeButton" type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <!-- Modal body -->
          <div class="px-6 pb-6 space-y-6">
            <div v-if="isVideoLoading"
              class="flex w-full md:max-w-xl h-full justify-center items-center bg-gray-400 dark:bg-gray-300 rounded-md m-auto">
              <div role="status"
                class="flex items-center justify-center w-full h-56 max-w-2xl bg-gray-300 rounded-md animate-pulse dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path
                    d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
                <span class="sr-only">{{ $t('common.loading') }}</span>
              </div>
            </div>
            <video ref="dialog_video" id="dialog_video" preload="none"
              class="w-full max-w-[600px] min-h-[220px] max-h-[800px] object-cover h-full scale-100 ease-in duration-300 group-hover:scale-125 rounded-md z-10 m-auto"
              :class="isVideoLoading ? 'hidden' : 'block'" :autoplay="true" :muted="true" :loop="false" :controls="true"
              :playsInline="false">
              {{ $t('error.video_not_supported') }}
            </video>
            <p class="text-sm leading-relaxed text-gray-500 dark:text-gray-400">{{ active_video?.prompt }}</p>
            <div class="text-sm leading-relaxed text-gray-500 dark:text-gray-400"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import { Modal } from 'flowbite'
// import { type Video } from '~/server/models/Video'

const props = defineProps(['title', 'subTitle'])

const modal = ref(null)
const video_detail = ref(null)
const active_video = ref(null)
const dialog_video = ref(null)
const isVideoLoading = ref(false)


const videos = useCommunityVideos()

// @ts-ignore
const toggleVideo = event => {
  event.target.paused ? event.target.play() : event.target.pause()
}

// @ts-ignore
const showVideoDetail = async (video, event) => {
  // @ts-ignore
  active_video.value = video
  isVideoLoading.value = true

  // @ts-ignore
  modal.value.toggle()
  // @ts-ignore
  dialog_video.value.load()

  try {
    // @ts-ignore
    const response = await fetch(active_video.value.url)
    const videoBlob = await response.blob()
    const videoUrl = URL.createObjectURL(videoBlob)

    // @ts-ignore
    dialog_video.value.src = videoUrl

    // @ts-ignore
    await dialog_video.value.play()
    isVideoLoading.value = false
  } catch (error) {
    console.error('Video playback failed ;(')
    console.error(error)
    isVideoLoading.value = false
  }
}

const closeModal = async event => {
  // @ts-ignore
  modal.value.hide()
  active_video.value = null
  // @ts-ignore
  await dialog_video.value.pause()
  // @ts-ignore
  dialog_video.value.src = ''
}

onMounted(async () => {
  // Bind modal settings
  const $modalElement = video_detail.value
  const modalOptions = {
    backdropClasses: 'bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40',
  }
  if ($modalElement) {
    // @ts-ignore
    modal.value = new Modal($modalElement, modalOptions)
  }
})
</script>
