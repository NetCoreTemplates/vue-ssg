import { acceptHMRUpdate, defineStore } from 'pinia'

export type Todo = {
    id: number
    text: string
    isFinished: boolean
}
export type Filter = "all" | "finished" | "unfinished"

export const useTodosStore = defineStore('todos', () => {
    // State
    const todos = ref<Todo[]>([])
    const newTodo = ref("")
    const filter = ref<Filter>('all')
    const nextId = ref(0)

    // Getters
    const finishedTodos = computed(() => todos.value.filter(x => x.isFinished))
    const unfinishedTodos = computed(() => todos.value.filter(x => !x.isFinished))
    const filteredTodos = computed(() => filter.value == 'finished'
        ? finishedTodos.value
        : filter.value == 'unfinished'
            ? unfinishedTodos.value
            : todos.value)

    // Actions
    const addTodo = () => {
        if (!newTodo.value) return
        todos.value.push({ 
            id: nextId.value++,
            text: newTodo.value,
            isFinished: false
        })
        newTodo.value = ''
    }
    const toggleTodo = (id: number) => { 
        const todo = todos.value.find(x => x.id == id)!
        todo.isFinished = !todo.isFinished
    }
    const removeTodo = (id: number) => { todos.value = todos.value.filter(x => x.id != id) }
    const removeFinishedTodos = () => { todos.value = todos.value.filter(x => !x.isFinished) }
    const changeFilter = (value:Filter) => filter.value = value

    return {
        newTodo,
        filter,
        finishedTodos,
        unfinishedTodos,
        filteredTodos,
        addTodo,
        toggleTodo,
        removeTodo,
        removeFinishedTodos,
        changeFilter,
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useTodosStore, import.meta.hot))
