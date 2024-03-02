<template>
  <header class="z-50 relative">
    <nav class="fixed w-full shadow-md hover:shadow-lg bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800 bg-opacity-60 backdrop-filter backdrop-blur-md z-99">
      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <Logo :isSite="true" />

        <div class="flex items-center lg:order-2">
          <LangTheme />

          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            </svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu">
          <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li class="flex justify-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 hover:text-primary-700 dark:hover:text-primary-300 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-transparent dark:hover:bg-transparent dark:border-gray-700 lg:rounded-lg">
              <NuxtLink to="/app/community-feed" class="block lg:mt-0.5 mt-0 py-2 pr-4 pl-3">Video Gallery</NuxtLink>
            </li>
            <li class="flex justify-center text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:border-0 hover:text-primary-700 dark:hover:text-primary-300 lg:p-0 dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-transparent dark:hover:bg-transparent dark:border-gray-700 lg:rounded-lg">
              <NuxtLink to="/" class="block lg:mt-0.5 mt-0 py-2 pr-4 pl-3">Blog</NuxtLink>
            </li>
            <Social />
            <li class="flex justify-center">
              <NuxtLink to="/app/video-generation" type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-2 lg:mt-0">Generate a Video</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
