<template>
  <div>
    <h1 class="inline-block border-gray-300 border-r m-0 mr-5 py-2 pr-4 text-2xl font-medium align-top">403</h1>
    <div class="inline-block text-left h-8 align-middle">
      <h2 class="text-sm leading-10 font-normal m-0 p-0">You do not have access to this page.</h2>
    </div>
    <div class="mt-2">
      <button @click="$router.replace('/')" class="inline-flex justify-center py-1 px-2 text-sm">
        <MdiHome class="w-8 h-8" />
      </button>
    </div>
  </div>
</template>
<route lang="yaml">
meta:
  layout: empty
</route>
