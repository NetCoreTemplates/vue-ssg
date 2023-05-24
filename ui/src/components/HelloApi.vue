<template>
  <div v-if="api.error" class="ml-2 text-red-500">{{ api.error!.message }}</div>
  <div v-else class="ml-3 mt-2 text-2xl">{{ api.response ? api.response.result : 'loading...' }}</div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Hello, HelloResponse } from "@/dtos"
import { ApiResult } from "@servicestack/client"
import { useClient } from "@servicestack/vue"

const client = useClient()

const props = defineProps<{ name: string }>()
const api = ref(new ApiResult<HelloResponse>())

const update = () => client.swr(new Hello({ name: props.name }), r => api.value = r) 
watch([props], update)
update()
</script>
