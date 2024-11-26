<template>
  <div v-for="(todo, index) in todos">
    <div>{{ todo }}</div>
    <button @click="$emit('deleteTask', index)">delete</button>
  </div>
</template>
<script setup>
defineProps(['todos'])
defineEmits(['deleteTask'])
</script>