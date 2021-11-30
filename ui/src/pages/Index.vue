<template>
  <div class="min-h-screen">
    <main>
      <div class="container mx-auto px-5">

        <section class="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
          <h1 class="text-4xl md:text-6xl xl:text-8xl font-bold tracking-tighter leading-tight md:pr-8 whitespace-nowrap">
            Vue SSG
          </h1>

          <div class="flex flex-col">
            <h4 class="text-lg mt-5">
              Modern
              <a href="https://v3.vuejs.org"
                 class="underline hover:text-green-600 duration-200 transition-colors">Vue 3</a>
              C# template using
              <a href="https://vitejs.dev"
                 class="underline hover:text-green-600 duration-200 transition-colors">Vite</a>,
              <a href="https://github.com/antfu/vite-ssg"
                 class="underline hover:text-green-600 duration-200 transition-colors">SSG</a>,
              <a href="https://www.typescriptlang.org"
                 class="underline hover:text-green-600 duration-200 transition-colors">TypeScript</a>,
              <a href="https://tailwindcss.com"
                 class="underline hover:text-green-600 duration-200 transition-colors">tailwindcss</a>
              &amp;
              <a href="https://servicestack.net"
                 class="underline hover:text-green-600 duration-200 transition-colors">ServiceStack</a>
            </h4>
            <div class="flex items-center flex-wrap sm:flex-nowrap">
              <input type="text" v-model="inputValue"
                     class="mt-2 sm:text-lg rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 dark:bg-gray-800">
              <HelloApi :name="inputValue"/>
            </div>
          </div>
        </section>

        <section>
          <div class="mb-8 md:mb-16 flex flex-wrap">
            
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosVue class="w-7 h-7 mr-2" alt="Vue.js logo"/>
              <a href="https://vuejs.org">
                <b>Vue 3</b> - simple, progressive reactive UI framework
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosVitejs class="w-7 h-7 mr-2" alt="Vite logo"/>
              <a href="https://vitejs.dev">
                <b>Vite</b> - lightning fast live reload server with instant startup
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosTypescriptIcon class="w-7 h-7 mr-2" alt="Typescript logo"/>
              <a href="https://www.typescriptlang.org">
                <b>Typescript</b> - stronlgly typed language for better tooling at scale
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <OcticonCpu16 class="w-7 h-7 mr-2" alt="Vue SSG"/>
              <a href="https://github.com/antfu/vite-ssg">
                <b>Vite SSG</b> - server-side generation for Vue 3 on Vite
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <SimpleIconsMarkdown class="w-7 h-7 mr-2" alt="Markdown logo"/>
              <a href="https://www.markdownguide.org">
                <b>Markdown</b> - rich, extensible support for docs &amp; blogs
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosTailwindcssIcon class="w-7 h-7 mr-2" alt="Tailwind logo"/>
              <a href="https://tailwindcss.com">
                <b>Tailwind</b> - beautiful utility-first CSS framework
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <CarbonMoon v-if="isDark" class="w-7 h-7 mr-2" alt="Moon"/>
              <CarbonSun  v-else class="w-7 h-7 mr-2" alt="Sun"/>
              <a href="#" @click.prevent="toggleDark()">
                <b>Dark Mode</b> - OS defined &amp; user toggable dark mode
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LineMdIconify2 class="w-7 h-7 mr-2" alt="Iconify logo"/>
              <a href="https://iconify.design">
                <b>Iconify</b> - 100k+ quality SVG icons in one unified framework
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <NotoPineapple class="w-7 h-7 mr-2" alt="Pinia logo"/>
              <a href="https://pinia.esm.dev">
                <b>Pinia</b> - Vue 3 Intuitive, TypeSafe Reactive State Management
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <MdiCached class="w-7 h-7 mr-2" alt="Cache Icon"/>
              <a href="https://github.com/Kong/swrv">
                <b>SWRV</b> - typed, state-while-revalidate fetch &amp; Service Client
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosTailwindcssIcon class="w-7 h-7 mr-2" alt="Tailwind logo"/>
              <a href="https://tailwindcss-typography.vercel.app">
                <b>@tailwind/typography</b> - beautiful typography for markdown
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <LogosTailwindcssIcon class="w-7 h-7 mr-2" alt="Tailwind logo"/>
              <a href="https://github.com/tailwindlabs/tailwindcss-forms">
                <b>@tailwind/forms</b> - beautiful basic form & input styles
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <CarbonDocumentExport class="w-7 h-7 mr-2" alt="Plugin Pages"/>
              <a href="https://github.com/hannoeru/vite-plugin-pages">
                <b>plugin/pages</b> - file system based routing for Vue 3 Vite
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <IcRoundAutoAwesomeMosaic class="w-7 h-7 mr-2" alt="Plugin Layouts"/>
              <a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts">
                <b>plugin/layouts</b> - support for multiple page layouts
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <IcRoundSettingsInputComponent class="w-7 h-7 mr-2" alt="Plugin Layouts"/>
              <a href="https://github.com/antfu/unplugin-vue-components">
                <b>plugin/components</b> - auto importing components on-demand
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <SimpleIconsCodeclimate class="w-7 h-7 mr-2" alt="Plugin Layouts"/>
              <a href="https://github.com/antfu/unplugin-auto-import">
                <b>plugin/autoimport</b> - global imports for minimal code
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <MdiShieldLockOutline class="w-7 h-7 mr-2" alt="Auto validation"/>
              <a href="https://docs.servicestack.net/auth">
                <b>authentication</b> - simple auth protected by route guards
              </a>
            </div>
            <div class="flex my-2 sm:w-1/2 md:w-1/3">
              <CarbonCheckmarkOutlineWarning class="w-7 h-7 mr-2" alt="Auto validation"/>
              <a href="https://docs.servicestack.net/validation">
                <b>validation</b> - auto form binding and validation
              </a>
            </div>

          </div>
        </section>

        <ClientOnly>
          <GettingStarted />
        </ClientOnly>

      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import HelloApi from "@/components/HelloApi.vue"
import GettingStarted from "@/components/GettingStarted.vue"
import { ref } from "vue"
import { isDark, toggleDark } from "@/composables"

const inputValue = ref('Vue.js')
</script>
