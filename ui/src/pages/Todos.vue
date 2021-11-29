<template>
  <div class="min-h-screen">
    <main class="flex justify-center">
      <div class="mx-auto px-5 mb-32">
        <AppBreadcrumb class="my-8" name="Todos Application"/>

        <input type="text" v-model="store.newTodo" placeholder="What needs to be done?" @keyup.enter="store.addTodo()"
               class="w-full shadow mb-4" />

        <div class="bg-white shadow overflow-hidden rounded-md">
          <ul role="list" class="divide-y divide-gray-200">
            <li v-for="todo in store.filteredTodos" :key="todo.id" class="px-6 py-4">
              <div class="relative flex items-start" @click="store.toggleTodo(todo.id)">
                <div class="flex items-center h-6">
                  <MdiCheckCircle v-if="todo.isFinished" class="text-green-600" />
                  <MdiCheckboxBlankCircleOutline v-else />
                </div>
                <div class="ml-3 flex-grow">
                  <label :class="{'line-through':todo.isFinished}">{{ todo.text }}</label>
                </div>
                <div>
                  <MdiTrashCanOutline v-if="todo.isFinished" @click="store.removeTodo(todo.id)" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="mt-4 flex justify-between">
          <div class="text-gray-400 leading-8 mr-4">
            {{ store.unfinishedTodos.length }} item(s) left
          </div>
          <div>
            <span class="relative z-0 inline-flex shadow-sm rounded-md">
              <button type="button" :class="`${btnCls} rounded-l-md relative ${btnActiveCls(store.filter === 'all')}`" @click="store.filter='all'">
                All
              </button>
              <button type="button" :class="`${btnCls} -ml-px relative ${btnActiveCls(store.filter === 'unfinished')}`" @click="store.filter='unfinished'">
                Active
              </button>
              <button type="button" :class="`${btnCls} rounded-r-md -ml-px ${btnActiveCls(store.filter === 'finished')}`" @click="store.filter='finished'">
                Completed
              </button>
            </span>            
          </div>
          <div class="leading-8 ml-4">
            <a href="#" :class="{ invisible:store.finishedTodos.length === 0 }" @click.prevent="store.removeFinishedTodos()">
              clear completed
            </a>
          </div>
        </div>

        <article class="prose lg:prose-xl">
        </article>

      </div>
    </main>
  </div>

</template>

<script setup lang="ts">
import { useTodosStore } from "@/stores/todos"
import AppBreadcrumb from "@/components/AppBreadcrumb.vue"

const store = useTodosStore()

const btnCls = 'relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500'
const btnActiveCls = (isActive:boolean) => isActive ? 'bg-blue-50 hover:bg-blue-50' : '' 

</script>