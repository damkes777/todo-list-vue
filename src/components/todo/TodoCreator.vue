<template>
  <input v-model="todo">
  <button @click="createTodo">create</button>
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

</style>