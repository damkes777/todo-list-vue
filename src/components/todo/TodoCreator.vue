<template>
  <div class="flex flex-col">
    <div class="flex justify-center">
      <div>
        <input class="bg-transparent font-semibold border-b-2 border-pink-500"
               v-model="todo.date"
               type="date">
        <input class="px-1 py-1 mx-4 bg-transparent font-semibold border-b-2 border-pink-500"
               v-model="todo.content"
               @keydown.enter="createTodo"
               type="text"
               placeholder="Enter new todo">
      </div>
      <button @click="createTodo"
              class="px-3 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
        <font-awesome-icon :icon="['fas', 'plus']"/>
        <span class="uppercase ml-1 font-semibold">add</span>
      </button>
    </div>
    <span class="text-center text-red-500 mt-3"
          :class="{'hidden': !hasError}">
        {{ errorMessage }}
    </span>
  </div>
</template>
<script setup>
import {ref} from "vue";

const emit = defineEmits(['created'])
const hasError = ref(false)
const errorMessage = ref('')
let todo = ref({
  value: '',
  date: new Date().toISOString().split('T')[0]
})

const createTodo = () => {
  if (dateIsValid() && contentIsValid()) {
    emit('created', todo)

    todo.value = {
      content: '',
      date: '',
      done: false
    }
  }
}

const dateIsValid = () => {
  const enterDate = new Date(todo.value['date']).toLocaleDateString()
  const dateNow = new Date().toLocaleDateString()

  if (enterDate >= dateNow) {
    return true
  }

  errorMessage.value = 'The date cannot be earlier than today'
  hasError.value = true

  return false
}

const contentIsValid = () => {
  if (!todo.value['content'] || todo.value['content'].trim() === '') {
    errorMessage.value = 'The task content cannot be empty'
    hasError.value = true

    return false
  }

  return true
}
</script>
<style scoped>
input::placeholder {
  color: #4b5564;
}
</style>