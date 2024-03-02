<template>
  <section class="w-full px-8 mt-12 mb-0 md:mt-24 md:mb-12">
    <div class="relative my-auto py-8 px-2 mx-auto max-w-screen-xl text-white xl:px-0 z-10">
      <div class="max-w-screen-md">
        <h1 class="mb-4 h1-home">Unleash your <span class="text-3xl md:text-4xl lg:text-5xl rad-color-2">creativity</span>
          with the capabilities of <span class="rad-color-1">SwiftSora</span></h1>
        <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">Produce high-quality video assets for you
          with unparalleled excellence in terms of quality, speed, and stylistic consistency.</p>
        <NuxtLink to="/app/video-generation" type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mt-2 lg:mt-0">
          Generate a Video</NuxtLink>
      </div>
    </div>
    <div class="absolute top-14 left-0 inset-0 w-full h-[450px] bg-gray-700 bg-blend-multiply">
      <video class="top-14 w-full h-[450px] object-cover opacity-40" :autoplay="true" :muted="true" :loop="true" :preload="true"
        :controls="false" :playsInline="true" @click="toggleVideo" poster="/bg.jpg">
        <source src="https://cdn.openai.com/sora/videos/monster-with-melting-candle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
      <div class="text-center text-gray-900">
        <h2 class="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
          <span class="rad-color-full">SwiftSora’s</span> Toolkit 🛠️
        </h2>
      </div>

      <div class="p-4 w-full">
        <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400" id="tabs"
            role="tablist">
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 pb-2 border-b-2 text-md md:text-lg rounded-t-lg hover:text-primary-600 dark:hover:text-primary-500"
                id="tab-vg" type="button" role="tab" aria-controls="vg" aria-selected="true">Video Generation</button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 pb-2 border-b-2 text-md md:text-lg rounded-t-lg hover:text-primary-600 dark:hover:text-primary-500"
                id="tab-ve" type="button" role="tab" aria-controls="ve" aria-selected="false">Video Editing</button>
            </li>
            <li class="mr-2" role="presentation">
              <button
                class="inline-block p-4 pb-2 border-b-2 text-md md:text-lg rounded-t-lg hover:text-primary-600 dark:hover:text-primary-500"
                id="tab-vr" type="button" role="tab" aria-controls="vr" aria-selected="false">Video Recognition</button>
            </li>
          </ul>
        </div>
        <div class="flex mb-2 md:flex-col md:mb-0">
          <div class="hidden" aria-labelledby="tab-vg" id="vg">
            <div class="flex flex-col justify-between md:flex-row">
              <div class="max-w-2xl lg:mr-5">
                <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-00 dark:text-white"><span
                    class="rad-color-full">Video Generation</span></h3>
                <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-500 dark:text-white">Prompt/Video/Image to Video
                </h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Elevate your creativity to new heights with our Video & Image Generation tool, unlocking transformative
                  capabilities. It goes beyond merely bringing your ideas to life; it redefines the boundaries of
                  possibility. Whether you're a novice or an expert, we provide a range of intuitive
                  settings that can be customized to meet your specific requirements. Generate videos and images
                  effortlessly using natural language prompts, visual cues, text, speech, images, or video.
                </p>
                <br />
                <p class="text-gray-500 dark:text-gray-400">Experience an unparalleled blend of simplicity and power,
                  meticulously crafted to cater to creative minds of every proficiency level.</p>
              </div>
              <div class="w-full h-full">
                <video class="rounded-lg mt-10" @click="toggleVideo" :autoplay="true" :muted="true" :loop="true"
                  :controls="false" :playsInline="true">
                  <source src="https://cdn.openai.com/sora/videos/art-museum.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
            </div>
          </div>
          <div class="hidden" aria-labelledby="tab-ve" id="ve">
            <div class="flex flex-col justify-between md:flex-row">
              <div class="max-w-2xl lg:mr-5">
                <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-00 dark:text-white"><span
                    class="rad-color-full">Video Editing</span></h3>
                <!-- <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-500 dark:text-white">Prompt/Video/Image to Video</h3> -->
                <p class="text-gray-500 dark:text-gray-400">Beyond bringing your visions to life, SwiftSora extends its
                  prowess to redefine the art of video manipulation. Seamlessly edit, organize, and modify videos with
                  intuitive controls that empower both novices and seasoned professionals.</p>
                <br />
                <p class="text-gray-500 dark:text-gray-400">
                  From effortless transmission to streamlined sharing, our platform offers an unparalleled fusion of
                  simplicity and power. Craft compelling narratives with the ability to enhance, trim, and transform your
                  videos. Organize seamlessly, modify with precision, and share your creations
                  effortlessly.
                </p>
              </div>
              <div class="w-full h-full">
                <video class="rounded-lg mt-10" @click="toggleVideo" :autoplay="true" :muted="true" :loop="true"
                  :controls="false" :playsInline="true">
                  <source src="https://cdn.openai.com/sora/videos/cat-on-bed.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
            </div>
          </div>
          <div class="hidden" aria-labelledby="tab-vr" id="vr">
            <div class="flex flex-col justify-between md:flex-row">
              <div class="max-w-2xl lg:mr-5">
                <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-00 dark:text-white"><span
                    class="rad-color-full">Video Recognition</span></h3>
                <h3 class="text-xl font-bold md:mt-4 mb-2.5 text-gray-500 dark:text-white">Video to Text</h3>
                <p class="text-gray-500 dark:text-gray-400">
                  Unleash the revolutionary capabilities of our Video & Image Generation tool – not just limited to
                  creative expression but a powerhouse for recognition, processing, analysis, understanding, and
                  generation. Tailored for both beginners and experts, this tool transcends boundaries with
                  its intuitive settings. Whether it's natural language prompts, visual cues, text, speech, or multimedia,
                  experience the seamless fusion of simplicity and power.
                </p>
                <br />
                <p class="text-gray-500 dark:text-gray-400">
                  Redefine what's possible as you navigate effortlessly through recognition to generation, making it an
                  essential for every creative mind. Elevate your projects with a tool that adapts to your needs, offering
                  unparalleled versatility and efficiency.
                </p>
              </div>
              <div class="w-full h-full">
                <video class="rounded-lg mt-10" @click="toggleVideo" playsinline="true" :autoplay="true" :muted="true"
                  :loop="true" :controls="false" :playsInline="true">
                  <source src="https://cdn.openai.com/sora/videos/closeup-of-womans-eye.mp4" type="video/mp4" />
                  <p>Your browser does not support the video tag.</p>
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-2xl lg:py-16 lg:px-6">
      <div class="text-center text-gray-900">
        <h2 class="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
          <span class="rad-color-full">Video</span> Gallery 🎬
        </h2>
        <p class="mb-8 font-light text-gray-500 lg:mb-16 dark:text-gray-400 sm:text-xl">SwiftSora-generated Videos</p>
      </div>
      <div class="grid gap-8 lg:grid-cols-3">
        <div class="space-y-6">
          <figure v-for="(video, index) in videos?.slice(0, 3)" :key="index"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800 shadow-md hover:shadow-xl">
            <blockquote class="text-sm text-gray-500 dark:text-gray-400 relative w-full">
              <div :class="video.loaded ? 'hidden' : 'flex'"
                class="absolute top-0 left-0 w-full h-full justify-center items-center bg-gray-400 dark:bg-gray-300 rounded-md"
                @mouseover="videoLoaded(index, $event)">
                <div role="status"
                  class="flex items-center justify-center mx-6 w-full h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path
                      d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>

              <video class="w-full object-cover rounded-md cursor-pointer" :autoplay="false" :muted="true" :loop="true"
                :controls="false" :playsInline="true" poster="" @click="toggleVideo" @canplay="videoLoaded(index, $event)"
                @stalled="videoLoaded(index, $event)" @loadeddata="videoLoaded(index, $event)">
                <source :src="video.url" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p class="my-4">Prompt: "{{ video.prompt }}"</p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img :class="video.author_img?.endsWith('.svg') ? 'w-7 h-7' : 'w-9 h-9'" class="rounded-full"
                :src="video.author_img ? video.author_img : '/profile.jpg'" />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{ video.author }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="space-y-6">
          <figure v-for="(video, index) in videos?.slice(3, 6)" :key="index"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800 shadow-md hover:shadow-xl">
            <blockquote class="text-sm text-gray-500 dark:text-gray-400 relative w-full">
              <div :class="video.loaded ? 'hidden' : 'flex'"
                class="absolute top-0 left-0 w-full h-full justify-center items-center bg-gray-400 dark:bg-gray-300 rounded-md"
                @mouseover="videoLoaded(index + 3, $event)">
                <div role="status"
                  class="flex items-center justify-center mx-6 w-full h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path
                      d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <video class="w-full object-cover rounded-md cursor-pointer" :autoplay="false" :muted="true" :loop="true"
                :controls="false" :playsInline="true" @click="toggleVideo" @canplay="videoLoaded(index + 3, $event)"
                @stalled="videoLoaded(index + 3, $event)" @loadeddata="videoLoaded(index + 3, $event)">
                <source :src="video.url" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p class="my-4">Prompt: "{{ video.prompt }}"</p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img :class="video.author_img?.endsWith('.svg') ? 'w-7 h-7' : 'w-9 h-9'" class="rounded-full"
                :src="video.author_img ? video.author_img : '/profile.jpg'" />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{ video.author }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div class="space-y-6">
          <figure v-for="(video, index) in videos?.slice(6, 9)" :key="index"
            class="p-6 bg-gray-50 rounded dark:bg-gray-800 shadow-md hover:shadow-xl">
            <blockquote class="text-sm text-gray-500 dark:text-gray-400 relative w-full">
              <div :class="video.loaded ? 'hidden' : 'flex'"
                class="absolute top-0 left-0 w-full h-full justify-center items-center bg-gray-400 dark:bg-gray-300 rounded-md"
                @mouseover="videoLoaded(index + 6, $event)">
                <div role="status"
                  class="flex items-center justify-center mx-6 w-full h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                  <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                    <path
                      d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <video class="w-full object-cover rounded-md cursor-pointer" :autoplay="false" :muted="true" :loop="true"
                :controls="false" :playsInline="true" @click="toggleVideo" @canplay="videoLoaded(index + 6, $event)"
                @stalled="videoLoaded(index + 6, $event)" @loadeddata="videoLoaded(index + 6, $event)">
                <source :src="video.url" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p class="my-4">Prompt: "{{ video.prompt }}"</p>
            </blockquote>
            <figcaption class="flex items-center space-x-3">
              <img :class="video.author_img?.endsWith('.svg') ? 'w-7 h-7' : 'w-9 h-9'" class="rounded-full"
                :src="video.author_img ? video.author_img : '/profile.jpg'" />
              <div class="space-y-0.5 font-medium dark:text-white">
                <div>{{ video.author }}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>

      <div class="text-center text-gray-900 mt-10">
        <NuxtLink to="/app/community-feed"
          class="inline-flex items-center text-lg font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
          Explore more videos
          <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import { Tabs } from 'flowbite'
import { type Video } from '~/server/models/Video'

useHead({
  title: 'SwiftSora',
  meta: [{ name: 'description', content: "SwiftSora is an open-source project that enables users to generate videos from prompt text or image online. The project utilizes OpenAI's Sora model to streamline video creation and includes a straightforward one-click website deployment feature." }],
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900',
  },
})

const {
  data: videos,
  pending,
  error,
} = await useFetch<Video[]>('/api/videos', {
  query: { c: '9', r: '0' },
  lazy: true,
})

if (error.value) {
  throw createError(error.value)
}

// @ts-ignore
const toggleVideo = event => {
  event.target.paused ? event.target.play() : event.target.pause()
}
// @ts-ignore
const videoLoaded = (index, event) => {
  // @ts-ignore
  videos.value[index] = { ...videos.value[index], loaded: true }
  // }
}


onMounted(() => {
  const tabsElement = document.getElementById('tabs')

  const tabElements: any[] = [
    {
      id: 'tab-vg',
      triggerEl: document.querySelector('#tab-vg'),
      targetEl: document.querySelector('#vg'),
    },
    {
      id: 'tab-ve',
      triggerEl: document.querySelector('#tab-ve'),
      targetEl: document.querySelector('#ve'),
    },
    {
      id: 'tab-vr',
      triggerEl: document.querySelector('#tab-vr'),
      targetEl: document.querySelector('#vr'),
    },
  ]
  const options = {
    defaultTabId: 'tab-vg',
    activeClasses: 'text-primary-600 border-primary-500 hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-400 border-primary-600 dark:border-primary-500 tab_bg',
    inactiveClasses: 'text-gray-500 hover:text-primary-600 dark:text-gray-400 border-gray-100 hover:border-primary-300 dark:border-gray-700 dark:hover:text-primary-300',
  }
  if (document.querySelector('#tab-vg')) {
    const tabs = new Tabs(tabsElement, tabElements, options)
    tabs.show('tab-vg')
  }
})
</script>
