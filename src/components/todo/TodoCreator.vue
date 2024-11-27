<template>
  <div class="flex justify-center">
    <input v-model="todo"
           @keydown.enter="createTodo"
           class="px-1 py-1 mr-3 bg-transparent font-semibold border-b-2 border-pink-500"
           placeholder="Enter new todo">
    <button @click="createTodo"
            class="px-3 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
      <font-awesome-icon :icon="['fas', 'plus']"/>
      <span class="uppercase ml-1 font-semibold">ADD</span>
    </button>
  </div>
</template>
<script setup>
import {ref} from "vue";

let todo = ref('')
const emit = defineEmits(['created'])

const createTodo = () => {
  emit('created', todo.value)
  todo.value = ''
}
</script>
<style scoped>
input::placeholder {
  color: #4b5564;
}
</style>