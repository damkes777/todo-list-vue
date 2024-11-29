<template>
  <div v-if="todos.length === 0 " class="flex justify-center">
    <span class="font-semibold text-gray-600">No tasks to do</span>
  </div>
  <div v-else v-for="(todo, index) in todos" :key="index" class="flex flex-col">
    <div class="flex justify-between my-2 px-4 py-2 rounded-md bg-gray-700 shadow-xl">
      <span v-if="todo.done">
        <span class="line-through font-semibold text-gray-500">{{ todo.task }}</span>
        <font-awesome-icon :icon="['fas', 'check']" class="ml-2 text-pink-500"/>
      </span>
      <span v-else class="font-semibold">
        {{ todo.content }}
      </span>
      <div class="flex">
        <div v-if="todo.done">
          <button @click="$emit('undo', index)"
                  class="px-2 mr-2 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
            <font-awesome-icon :icon="['fas', 'undo']"/>
          </button>
        </div>
        <div v-else>
          <button @click="$emit('markAsDone', index)"
                  class="px-2 mr-2 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
            <font-awesome-icon :icon="['fas', 'check']"/>
          </button>
        </div>
        <div>
          <button @click="$emit('deleteTask', index)"
                  class="px-2 hover:text-cyan-400 active:text-cyan-600 transition-colors duration-200 ease-in-out">
            <font-awesome-icon :icon="['fas', 'trash']"/>
          </button>
        </div>


      </div>
    </div>

  </div>
</template>
<script setup>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

defineProps(['todos'])
defineEmits(['deleteTask', 'markAsDone', 'undo'])
</script>