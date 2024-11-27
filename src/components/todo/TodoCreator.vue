<template>
  <div class="flex justify-center">
    <input class="px-1 py-1 mr-3 bg-transparent font-semibold border-b-2 border-pink-500" v-model="todo"
           placeholder="Enter new todo">
    <button class="px-3 hover:text-cyan-400 active:text-cyan-600" @click="createTodo">
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