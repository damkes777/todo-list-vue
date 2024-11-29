<template>
  <div class="flex justify-center">
    <div class="flex">
      <input class="bg-transparent font-semibold border-b-2 border-pink-500"
             v-model="todo.date"
             type="date">
      <input class="px-1 py-1 mx-4 bg-transparent font-semibold border-b-2 border-pink-500"
             v-model="todo.value"
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
</template>
<script setup>
import {ref} from "vue";

let todo = ref({
  value: '',
  date: new Date().toISOString().split('T')[0]
})
console.log(todo)
const emit = defineEmits(['created'])

const createTodo = () => {
  emit('created', todo)

  todo.value = {
    value: '',
    date: ''
  }
}
</script>
<style scoped>
input::placeholder {
  color: #4b5564;
}
</style>