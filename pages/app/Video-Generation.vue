<template>
  <div>
    <!-- <section :class="videoStatus == 'done' ? '' : 'hidden'" -->
    <section :class="videoStatus === 'done' && !isVideoLoading ? '' : 'hidden'"
      class="bg-white dark:bg-gray-900 max-w-screen-2xl px-4 py-2  mx-auto">
      <div class="p-2 px-4 md:pb-2 space-y-6">
        <video ref="video_ref" id="generated_video" preload="none"
          class="w-full md:max-w-[960px] min-h-[220px] max-h-[800px] object-cover h-full scale-100 ease-in duration-300 group-hover:scale-125 rounded-md z-10 m-auto"
          :autoplay="true" :muted="true" :loop="false" :controls="true" :preload="true" :playsInline="false">
          {{ $t('error.video_not_supported') }}
        </video>
        <p class="text-sm max-w-2xl m-auto leading-relaxed text-gray-500 dark:text-gray-400">{{ generatedVideo?.prompt }}
        </p>
        <div class="text-sm leading-relaxed text-gray-500 dark:text-gray-400"></div>
      </div>
    </section>

    <section v-if="videoStatus === 'wip' || isVideoLoading"
      class="bg-white dark:bg-gray-900 max-w-screen-xl px-4 py-4 pt-8 mx-auto">
      <div class="flex items-center justify-center w-full">
        <div
          class="flex flex-col items-center justify-center w-full h-72 bg-white border border-gray-200 rounded-lg dark:bg-gray-800  dark:border-gray-600 ">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">

            <p class="mb-2 text-xl text-gray-6 dark:text-gray-300"><span class="font-semibold">{{
              $t('app.video_gen.load.title') }}</span>
            </p>
            <div class="mb-2 text-sm text-gray-600 dark:text-gray-300">
              <div role="status">
                <svg aria-hidden="true"
                  class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                  viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor" />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill" />
                </svg>
                <span class="sr-only">{{ $t('common.loading') }}</span>
              </div>
            </div>
            <p class="text-sm text-gray-600 dark:text-gray-300"><span class="font-semibold">{{
              $t('app.video_gen.load.desc') }}</span></p>
            <p class="text-sm text-gray-500 dark:text-gray-400">{{ $t('app.video_gen.load.desc2.pre') }}<LocLink
                :to="'/app/personal-feed'" class="font-medium text-primary-600 dark:text-primary-500 hover:underline">
                {{ $t('app.video_gen.load.desc2.post') }}</LocLink>
            </p>
          </div>
          <div class="flex flex-col items-center justify-center pt-5 pb-6">

            <p class="mb-2 text-md text-gray-6 dark:text-gray-300"><span class="font-semibold">{{
              $t('app.video_gen.load.guide.title') }}</span>
            </p>

            <p class="text-sm text-gray-500 dark:text-gray-400">
              <LocLink :to="'/app/community-feed'" type="button"
                class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 lg:mt-0">
                {{ $t('app.video_gen.load.guide.desc') }}</LocLink>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-white dark:bg-gray-900 max-w-screen-xl px-4 py-2 md:py-4 mx-auto">
      <div
        class="p-4 sm:p-4 text-center bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700">
        <!-- Tab -->
        <div class="border-gray-200 dark:border-gray-700">
          <ul
            class="flex flex-wrap justify-center -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

            <li class="me-2">
              <div @click="switchTab('txt')"
                class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-primary-600 hover:border-primary-600 dark:hover:text-primary-600 group cursor-pointer"
                :class="tab === 'txt' ? 'rad-color-full border-primary-600 text-primary-600 dark:text-primary-600 ' : 'border-transparent'">
                <Icon name="ph:text-t-bold" class="w-6 h-6 me-2" :class="tab === 'txt' ? 'text-primary-600' : ''" />{{
                  $t('app.video_gen.text.title') }}
              </div>
            </li>
            <li class="me-2">
              <div @click="switchTab('img')"
                class="inline-flex items-center justify-center p-4 border-b-2 rounded-t-lg hover:text-primary-600 hover:border-primary-600 dark:hover:text-primary-600 group cursor-pointer"
                :class="tab === 'img' ? 'rad-color-full border-primary-600 text-primary-600 dark:text-primary-600 ' : 'border-transparent'">
                <Icon name="material-symbols:image-outline" class="w-6 h-6 me-2" />
                {{ $t('app.video_gen.image.title') }}
              </div>
            </li>
          </ul>
        </div>

        <div>
          <!-- text-tab -->
          <div :class="tab === 'img' ? 'hidden' : ''"
            class="mt-2 p-4 text-center rounded-sm bg-white border border-gray-200 sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-start text-sm text-center text-gray-500 dark:text-gray-400 flex-col md:flex-row">
              <div class="md:me-2 pt-1.5"><span class="font-semibold">{{ $t('app.video_gen.text.guide.title') }}</span>
              </div>
              <div class="mt-0.5 pt-1.5 text-xs">{{ $t('app.video_gen.text.guide.desc') }}</div>
              <div class="flex items-center justify-center">
                <button @click="handleTrySamplePrompt"
                  class="w-[143px] relative inline-flex items-center justify-center p-0.5 mt-2 md:ml-4 md:mt-0 overflow-hidden text-xs font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span
                    class="relative px-2 py-1.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <Icon name="mingcute:bling-fill" /> {{ $t('app.video_gen.text.guide.btn') }}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div :class="tab === 'img' ? 'hidden' : ''"
            class="w-full mb-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
              <div
                class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 text-gray-500 dark:text-gray-400">
                  <div>
                    <button ref="aspect_dropdown_trigger" type="button" data-dropdown-toggle="aspect-dropdown"
                      :data-dropdown-offset-skidding="screenWidth >= 768 ? 124 : 85"
                      class="py-1 px-2  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-600">
                      <Icon name="material-symbols:aspect-ratio-outline" class="w-5 h-5" /> <span class="text-sm ml-1">{{
                        $t('app.video_gen.text.aspect_ration.title') }}</span>
                    </button>
                    <span class="text-sm text-gray-900 dark:text-white ml-1 pl-1 pr-2 font-semibold">{{ aspect }}</span>
                  </div>
                  <!-- <div class="px-2"></div> -->
                  <div>
                    <!-- :data-dropdown-offset-skidding="screenWidth >= 768 ? -12 : -120" -->
                    <button ref="vstyle_dropdown_trigger" type="button" data-dropdown-toggle="style-dropdown"
                      :data-dropdown-offset-skidding="screenWidth >= 768 ? -62 : -52"
                      class="py-1 px-2  rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100  dark:hover:text-white dark:hover:bg-gray-600">
                      <Icon name="material-symbols:palette" class="w-5 h-5" /> <span class="text-sm ml-1">{{
                        $t('app.video_gen.text.style.title') }}</span>
                    </button>
                    <span class="text-sm text-gray-900 dark:text-white ml-1 pl-1 pr-2 w-full min-w-40 font-semibold">{{
                      getLocaleVideoStyle(vStyle) }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800 text-left">
              <div>
                <textarea v-model="textPrompt" rows="8" @input="reset_form_error"
                  :class="form_error?.prompt ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block w-full p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500' : 'block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400'"
                  :placeholder="$t('app.video_gen.text.aspect_ration.placeholder')" required></textarea>
                <p v-if="form_error?.prompt" class="mt-2 text-sm text-red-600 dark:text-red-500"><span
                    class="font-medium">{{
                      form_error?.prompt }}</span></p>
              </div>
            </div>
          </div>
          <!-- image-tab -->
          <div :class="tab === 'txt' ? 'hidden' : ''"
            class="mt-2 p-4 text-center rounded-sm bg-white border border-gray-200 sm:p-4 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-start text-sm text-center text-gray-500 dark:text-gray-400 flex-col md:flex-row">
              <div class="md:me-2 pt-1.5"><span class="font-semibold">{{ $t('app.video_gen.image.guide.title') }}</span>
              </div>
              <div class="mt-0.5 pt-1.5 text-xs flex justify-center"><span>{{ $t('app.video_gen.image.guide.desc')
              }}</span>
                <div data-tooltip-target="tooltip-info">
                  <Icon name="material-symbols:info-outline" class="w-4 h-4 ml-1 mb-0.5 cursor-pointer" />
                  <div id="tooltip-info" role="tooltip"
                    class="inline-block absolute invisible z-10 py-2 px-3 text-xs font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
                    {{ $t('app.video_gen.image.tip') }}<div class="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </div>
              </div>

            </div>
            <div :class="tab === 'txt' ? 'hidden' : ''"
              class="w-full mt-4 border border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <div class="flex items-center justify-center w-full">
                <label v-if="!uploadedImage" for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                  <div class="flex flex-col items-center justify-center px-2 md:px-0 pt-5 pb-6">
                    <Icon name="octicon:cloud-upload" class="w-9 h-9 mb-4 text-gray-500 dark:text-gray-400" />
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">{{
                      $t('app.video_gen.image.guide.uploader.title.pre') }}</span> {{
    $t('app.video_gen.image.guide.uploader.title.post') }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400 pb-2">{{
                      $t('app.video_gen.image.guide.uploader.supported_file') }}</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">{{ $t('app.video_gen.image.tip') }}</p>
                    <input id="dropzone-file" type="file" @change="onFileChange($event)" class="hidden"
                      accept=".jpg, .jpeg, .png, .gif">
                  </div>
                </label>
                <div v-else class="p-2 px-4 md:pb-2 space-y-6 text-center">
                  <img :src="uploadedImage" class="h-full max-w-3xl rounded-md">
                </div>
              </div>
            </div>


          </div>

          <div class="w-full flex justify-end" :class="tab === 'img' ? 'mt-4' : ''">
            <button type="button" @click="onReset"
              class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mt-2 lg:mt-0 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 w-28">
              {{ $t('app.video_gen.btn_reset') }}</button>
            <button @click="handleVideoGeneration" type="button"
              class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 lg:mt-0 w-28">
              {{ $t('app.video_gen.btn_gen') }}
            </button>
          </div>

        </div>
      </div>
    </section>

    <!-- Aspect Ratio dropdonw -->
    <div ref="aspect_dropdown"
      class="hidden relative z-50 my-4 w-full max-w-xs md:max-w-lg md:w-[400px] h-auto text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      id="aspect-dropdown" aria-labelledby="aspect-dropdown">
      <div class="flex items-center flex-col md:flex-row justify-around p-2">
        <button v-for="(ar, index) in aspect_ratios" :key="index" @click="switchAspect(ar)" type="button"
          class="w-full md:w-28  backdrop:text-primary-700 hover:text-white border border-primary-700  hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
          :class="aspect === ar ? 'text-white dark:text-white bg-primary-800 dark:bg-primary-500' : ''">
          <Icon v-if="ar === '16:9'" name="gis:rectangle-o" class="w-5 h-5 mr-2" />
          <Icon v-else-if="ar === '9:16'" name="lucide:rectangle-vertical" class="w-5 h-5 mr-2" />
          <Icon v-else name="material-symbols:square-outline-rounded" class="w-5 h-5 mr-2" />
          {{ ar }}
        </button>
      </div>
    </div>

    <!-- vStyle dropdonw -->
    <div ref="vstyle_dropdown"
      class="hidden relative z-50 my-4 w-full max-w-xs md:w-[300px] h-auto text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700"
      id="style-dropdown" aria-labelledby="style-dropdown">
      <div class="flex flex-col justify-around p-2 pt-[450px] h-96 overflow-y-auto">
        <!-- :class="index === 0? '' : 'mt-2 md:mt-0'"-->
        <button v-for="st in styleList" :key="st.value" @click="switchVStyle(st.value)" type="button"
          class="w-full mt-2 backdrop:text-primary-700 hover:text-white border border-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:border-primary-500 dark:text-primary-500 dark:hover:text-white dark:hover:bg-primary-500 dark:focus:ring-primary-800"
          :class="vStyle === st.value ? 'text-white dark:text-white bg-primary-800 dark:bg-primary-500' : ''">
          {{ st.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'
import { Dropdown } from 'flowbite'
import { createToast } from 'mosha-vue-toastify';
const { t } = useI18n()

definePageMeta({
  layout: 'application',
  layoutTransition: true,
})

useHead({
  title: localizedTitle('app.video_gen.title'),
})

const screenWidth = ref(0);
const { aspect_ratios } = useAppConfig()
const styleList = getLocaleVideoStyles()

const aspect_dropdown = ref(null)
const vstyle_dropdown = ref(null)
const aspect_dropdown_trigger = ref(null)
const vstyle_dropdown_trigger = ref(null)
const aspectDropdownObj = ref(null)
const vstyleDropdownObj = ref(null)

const tab = ref('txt')
const aspect = ref('1:1')
const vStyle = ref('none')

const textPrompt = ref('')
const uploadedImage = ref(null)

const video_ref = ref(null)
const videoStatus = ref('init') // init, wip, done
const generatedVideo = ref(null)
const isVideoLoading = ref(false)

const form_error = ref({})
const reset_form_error = () => {
  form_error.value = {}
}

const switchTab = (tabName) => {
  tab.value = tabName
}

const switchAspect = (aspectName) => {
  aspect.value = aspectName
  aspectDropdownObj.value.hide()
}

const switchVStyle = (vStyleValue) => {
  vStyle.value = vStyleValue
  vstyleDropdownObj.value.hide()
}

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}

const handleTrySamplePrompt = () => {
  reset_form_error()
  textPrompt.value = 'cartoon kangaroo disco dances.'
}

const onFileChange = (event) => {
  const file = event.target.files[0];
  uploadedImage.value = URL.createObjectURL(file);
}

const onReset = () => {
  textPrompt.value = ''
  uploadedImage.value = null
}


const handleVideoGeneration = async () => {
  reset_form_error()
  scrollToTop()
  // validation
  if (tab.value === 'txt' && !textPrompt.value) {
    console.error("You didn't provide a Prompt.")
    form_error.value = { prompt: t('error.validation.video_gen.error1') }
    return
  } if (tab.value === 'img' && !uploadedImage.value)  {
    console.error("You didn't upload an Image.")
    form_error.value = { image: t('error.validation.video_gen.error2') }
    createToast(form_error.value.image, {
      showIcon: true,
      hideProgressBar: true,
      type: 'danger',
      transition: 'slide',
      position: 'top-center',
      timeout: 5000,
    })
    return
  }

  videoStatus.value = 'wip'

  const payload = {
    aspect_ratio: aspect.value,
    style: vStyle.value,
    type: tab.value
  }
  if (tab.value === 'txt') payload.prompt = textPrompt.value

  try {
    const data = await $fetch('/api/videos/generation', {
      method: 'POST',
      body: payload
    })

    videoStatus.value = 'done'
    if (data) {
      await showVideoDetail(data)
    }
  } catch (error) {
    if (error) {
      videoStatus.value = 'init'
      console.error(error)
      console.error(error.data)
      createToast(error.data.error.message, {
        showIcon: true,
        hideProgressBar: true,
        type: 'danger',
        transition: 'slide',
        position: 'top-center',
        timeout: 5000,
      })
    }
  }
}


const showVideoDetail = async (video) => {
  // @ts-ignore
  generatedVideo.value = video
  isVideoLoading.value = true

  // @ts-ignore
  // modal.value.toggle()
  // @ts-ignore
  video_ref.value.load()

  try {
    // @ts-ignore
    const response = await fetch(generatedVideo.value.url)
    const videoBlob = await response.blob()
    const videoUrl = URL.createObjectURL(videoBlob)

    // @ts-ignore
    video_ref.value.src = videoUrl

    // @ts-ignore
    await video_ref.value.play()
    isVideoLoading.value = false
  } catch (error) {
    console.error('Video playback failed ;(')
    console.error(error)
    createToast(error, {
      showIcon: true,
      hideProgressBar: true,
      type: 'danger',
      transition: 'slide',
      position: 'top-center',
      timeout: 5000,
    })
    isVideoLoading.value = false
  }
}


onMounted(() => {
  updateScreenWidth()
  window.addEventListener('resize', updateScreenWidth)
  nextTick(() => {
    initFlowbite()

    const options = {
      placement: 'bottom',
      triggerType: 'click',
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false,
    }

    if (aspect_dropdown) {
      aspectDropdownObj.value = new Dropdown(aspect_dropdown.value, aspect_dropdown_trigger.value, { ...options, offsetSkidding: screenWidth.value >= 768 ? 124 : 85 })
    }

    if (vstyle_dropdown) {

      vstyleDropdownObj.value = new Dropdown(vstyle_dropdown.value, vstyle_dropdown_trigger.value, { ...options, offsetSkidding: screenWidth.value >= 768 ? -62 : -52 })
    }

  })
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateScreenWidth)
})

onUnmounted(() => {
  generatedVideo.value = null
})
</script>
