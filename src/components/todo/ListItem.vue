<template>
  <div v-if="todos.length === 0 " class="flex justify-center">
    <span class="font-semibold text-gray-600">No tasks to do</span>
  </div>
  <div v-else v-for="(todo, index) in todos" :key="index" class="flex flex-col">

    <div class="flex justify-between my-2 px-4 py-2 rounded-md bg-gray-700 shadow-xl">
      <span class="font-semibold">{{ todo }}</span>
      <div>
        <button class="px-2 mr-2 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
          <font-awesome-icon :icon="['fas', 'check']"/>
        </button>
        <button @click="$emit('deleteTask', index)"
                class="px-2 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
          <font-awesome-icon :icon="['fas', 'trash']"/>
        </button>
      </div>
    </div>

  </div>
</template>
<script setup>
defineProps(['todos'])
defineEmits(['deleteTask'])
</script>