<template>
  <section class="w-full px-8 mt-12 mb-0 md:mt-24 md:mb-12">
    <div class="relative my-auto py-8 px-2 mx-auto max-w-screen-xl rounded-2xl text-white xl:px-0 z-10 group">
      <div class="max-w-screen-xl">
        <h1 class="mb-4 h1-home">Unleash your <span class="text-3xl md:text-4xl lg:text-5xl rad-color-2">creativity</span>
          with the capabilities of <span class="rad-color-1">SwiftSora</span></h1>
        <p class="mb-6 font-light text-gray-300 lg:mb-8 md:text-lg lg:text-xl">Produce high-quality video assets for you
          with unparalleled excellence in terms of quality, speed, and stylistic consistency.</p>
        <NuxtLink to="/app/video-generation" type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-md px-5 py-4 text-center me-2 mt-2 lg:mt-0">
          Generate a Video</NuxtLink>
      </div>
    </div>
    <div class="grid gap-8 py-8 lg:py-0 mt-0 lg:border-t border-gray-600 sm:grid-cols-2 lg:grid-cols-4 z-50">
      <div
        class="z-10 md:bg-gradient-to-b from-transparent text-gray-600 dark:text-white to-black/50 dark:to-white/90 md:text-white md:to-black/50 md:dark:to-black/50
        hover:shadow-neutral-300 dark:hover:shadow-neutral-500 shadow md:hover:shadow-neutral-500 hover:shadow-2xl hover:cursor-pointer rounded-md p-4">
        <NuxtLink to="/app/docs#sora">
          <Icon name="simple-icons:openai" class="w-6 h-6 mb-1.5" />
          <h2 class="mb-1 text-lg font-bold">
            What is Sora?
          </h2>
          <p class="mb-1 text-sm text-gray-500 dark:text-gray-300 md:text-gray-300 md:h-14">
            Sora is an AI model that can create realistic and imaginative scenes from text instructions.
          </p>
          <span class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
            Read more
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
      <div
        class="z-10 md:bg-gradient-to-b from-transparent text-gray-600 dark:text-white to-black/50 dark:to-white/90 md:text-white md:to-black/50 md:dark:to-black/50
        hover:shadow-neutral-300 dark:hover:shadow-neutral-500 shadow md:hover:shadow-neutral-500 hover:shadow-2xl hover:cursor-pointer rounded-md p-4">
        <NuxtLink to="/app/docs#swiftsora">
          <svg class="w-6 h-6 mb-1.5 fill-black dark:fill-white md:fill-white" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <g transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)">
              <path d="M627 4660 c-112 -29 -213 -113 -268 -225 -32 -65 -34 -76 -34 -170 0
-92 3 -106 32 -167 93 -197 299 -287 502 -218 108 36 172 91 231 198 l24 42
820 0 c885 -1 902 -2 1040 -54 197 -75 364 -255 424 -460 53 -181 38 -364 -45
-546 -17 -37 -531 -924 -579 -1000 -40 -62 -89 -93 -137 -87 -75 10 -120 60
-121 135 -1 44 20 84 290 557 161 281 299 533 309 560 70 202 -20 426 -212
524 -101 51 -124 52 -837 49 -658 -4 -661 -4 -746 -27 -371 -103 -642 -362
-744 -713 -65 -226 -58 -435 23 -656 28 -78 75 -163 331 -602 131 -226 252
-435 451 -782 77 -133 88 -161 70 -172 -13 -9 -59 -145 -66 -196 -11 -92 42
-227 120 -306 103 -104 259 -147 390 -109 131 37 207 101 268 224 30 61 32 73
32 166 0 96 -2 104 -37 177 -70 140 -185 215 -349 226 l-91 7 -95 165 c-131
228 -229 397 -379 655 -216 373 -310 538 -338 592 -46 92 -69 196 -69 318 0
136 17 208 80 335 39 77 63 111 133 181 71 73 100 94 180 133 174 85 138 81
875 78 728 -3 680 2 719 -76 24 -49 15 -97 -29 -144 l-33 -37 -164 -3 c-90 -2
-379 -6 -643 -10 l-480 -7 -68 -32 c-168 -80 -267 -244 -254 -423 6 -89 31
-150 134 -326 80 -136 133 -227 333 -579 169 -295 197 -341 261 -420 122 -151
341 -288 543 -340 247 -63 494 -30 735 97 118 62 191 117 276 210 84 93 100
117 290 448 429 748 609 1058 630 1088 12 17 26 22 58 22 156 1 305 97 368
237 94 205 8 438 -199 540 -52 26 -67 28 -167 28 -99 0 -116 -3 -168 -27 -80
-38 -160 -117 -200 -197 -30 -61 -32 -72 -32 -171 0 -102 1 -109 38 -182 20
-42 37 -82 37 -89 0 -14 -119 -223 -517 -909 -314 -542 -308 -533 -399 -619
-152 -143 -291 -196 -514 -195 -119 1 -144 4 -215 28 -44 15 -111 45 -148 67
-94 56 -211 176 -269 274 -225 387 -554 967 -566 997 -20 50 -8 104 30 140 26
24 38 28 92 28 53 0 66 -4 93 -27 18 -16 86 -120 151 -233 66 -113 195 -335
287 -495 93 -159 184 -309 202 -332 103 -126 294 -183 452 -134 137 43 192 96
315 306 235 400 517 887 543 940 38 76 68 167 89 275 24 121 15 320 -21 450
-81 296 -304 555 -583 674 -221 95 -288 100 -1240 92 -408 -3 -749 -3 -757 0
-9 4 -31 30 -51 60 -75 113 -182 174 -317 180 -45 2 -99 -1 -120 -6z m210
-209 c66 -33 103 -102 103 -191 0 -112 -77 -199 -184 -208 -84 -7 -123 4 -171
49 -157 144 -49 393 161 375 28 -2 69 -13 91 -25z m3704 -906 c52 -37 81 -91
87 -160 6 -71 -12 -120 -62 -169 -113 -114 -307 -70 -356 79 -20 61 -9 148 26
198 44 63 102 89 191 85 61 -3 78 -8 114 -33z m-1951 -636 c0 -12 -61 -128
-110 -209 -15 -25 -55 -96 -90 -157 -35 -62 -69 -113 -76 -113 -11 0 -31 31
-141 220 -28 47 -71 120 -97 164 -25 43 -46 85 -46 92 0 12 49 14 280 14 201
0 280 -3 280 -11z m-719 -2081 c86 -29 139 -107 139 -205 0 -65 -13 -99 -53
-142 -97 -102 -265 -92 -344 22 -40 58 -45 154 -10 223 26 51 70 90 116 104
39 12 114 11 152 -2z" />
            </g>
          </svg>

          <h2 class="mb-1 text-lg font-bold">
            What is SwiftSora?
          </h2>
          <p class="mb-1 text-sm text-gray-500 dark:text-gray-300 md:text-gray-300 md:h-14">
            An open-source project using OpenAI's powerful Sora model. Built with full-stack Nuxt.js + Vue 3.
          </p>
          <span class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
            Read more
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
      <div
        class="z-10 md:bg-gradient-to-b from-transparent text-gray-600 dark:text-white to-black/50 dark:to-white/90 md:text-white md:to-black/50 md:dark:to-black/50
        hover:shadow-neutral-300 dark:hover:shadow-neutral-500 shadow md:hover:shadow-neutral-500 hover:shadow-2xl hover:cursor-pointer rounded-md p-4">
        <NuxtLink to="/app/docs#deployment">
          <Icon name="pajamas:deployments" class="w-6 h-6 mb-1.5"/>
          <h2 class="mb-1 text-lg font-bold">
            Rapid Deployment
          </h2>
          <p class="mb-1 text-sm text-gray-500 dark:text-gray-300 md:text-gray-300 md:h-14">
            Effortlessly deploy with a single click to Vercel, Netlify and other platforms.
          </p>

          <span class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
            Read more
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
      <div
        class="z-10 md:bg-gradient-to-b from-transparent text-gray-600 dark:text-white to-black/50 dark:to-white/90 md:text-white md:to-black/50 md:dark:to-black/50
        hover:shadow-neutral-300 dark:hover:shadow-neutral-500 shadow md:hover:shadow-neutral-500 hover:shadow-2xl hover:cursor-pointer rounded-md p-4">
        <NuxtLink to="/app/docs#secure">
          <Icon name="material-symbols:shield-lock-outline" class="w-6 h-6  mb-1.5" />
          <h2 class="mb-1 text-lg font-bold">
            Secure your API key
          </h2>
          <p class="mb-1 text-sm text-gray-500 dark:text-gray-300 md:text-gray-300 md:h-14">
            Secure your API key with the built-in OpenAI proxy.
          </p>

          <span class="inline-flex items-center text-sm font-semibold text-primary-500 hover:underline">
            Read more
            <svg class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </span>
        </NuxtLink>
      </div>
    </div>
    <div
      class="absolute top-14 left-0 inset-0 w-full bg sm:h-[320px] md:h-[830px] lg:h-[590px] xl:h-[500px] bg-gray-700 bg-blend-multiply rounded-lg group">
      <video
        class="top-14 w-full bg  sm:h-[320px] md:h-[830px] lg:h-[590px] xl:h-[500px] object-cover opacity-40 rounded-lg"
        :autoplay="true" :muted="true" :loop="true" preload="true" :controls="false" :playsInline="true"
        @click="toggleVideo" poster="/bg.jpg">
        <source src="https://cdn.openai.com/sora/videos/monster-with-melting-candle.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

  </section>
  <!-- <section class="mt-6 md:-mt-20"> -->
  <section class="mt-6 md:-mt-10">
    <!-- <div class="py-8 px-4 mx-auto max-w-screen-2xl md:py-16 md:px-6"> -->
    <div class="py-8 mx-auto max-w-screen-2xl md:py-16">
      <div class="text-center text-gray-900">
        <h2 class="mb-4 text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl dark:text-white">
          <span class="rad-color-full">SwiftSora’s</span> Toolkit 🛠️
        </h2>
      </div>

      <div class="p-4 w-full">
        <!-- <div class="mb-4 border-b border-gray-200 dark:border-gray-700"> -->
        <div class="border-b border-gray-200 dark:border-gray-700">
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
        <div class="flex mb-2 md:flex-col md:mb-0 px-4">
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
                  <source src="/vg.mp4" type="video/mp4" />
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
                  <source src="/vg.mp4" type="video/mp4" />
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
                  <source src="/vg.mp4" type="video/mp4" />
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
