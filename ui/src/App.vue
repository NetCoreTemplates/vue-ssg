<script setup lang="ts">
import { useApp } from "@/api"

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'MyApp',
  meta: [
    { name: 'description', content: 'Vite SSG Starter Template' },
  ],
})

if (!import.meta.env.SSR) {
  let store = useApp()
  store.load()
}
</script>

<template>
  <router-view />
</template>
